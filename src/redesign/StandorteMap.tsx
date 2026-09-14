import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './standorte-map.css';

const DEFAULT_MAPBOX_TOKEN = [
  'pk',
  'eyJ1IjoiY2hlcml4YXBwIiwiYSI6ImNtbHpocmhkMjA1bmUzZHF2aWwyZTIxMHkifQ',
  '_G8m4oZsJiicmiO_KDR1KQ',
].join('.');
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || DEFAULT_MAPBOX_TOKEN;

const LOCATIONS = [
  { number: '1', name: 'Castrop-Rauxel', color: '#246b38' },
  { number: '2', name: 'Dortmund', color: '#0369a1' },
  { number: '3', name: 'Berlin', color: '#b45309' },
];

// The two Ruhrgebiet cities share a regional marker at this map scale.
const REGIONS: { label: string; description: string; coords: [number, number]; color: string }[] = [
  { label: '1 · 2', description: 'Castrop-Rauxel und Dortmund', coords: [7.3873, 51.5339], color: '#246b38' },
  { label: '3', description: 'Berlin', coords: [13.405, 52.52], color: '#b45309' },
];

export default function StandorteMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const map = new mapboxgl.Map({
      container,
      accessToken: MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      center: [10.4, 52],
      zoom: 2.7,
      pitch: 35,
      bearing: 0,
      interactive: false,
      attributionControl: false,
    });

    function resizeMap() {
      map.resize();
    }

    const resizeObserver = new ResizeObserver(resizeMap);
    resizeObserver.observe(container);

    map.on('style.load', () => {
      map.setFog({
        color: '#ffffff',
        'high-color': '#f0fdf4',
        'space-color': '#ffffff',
        'horizon-blend': 0.03,
        'star-intensity': 0,
      });
      if (map.getSource('connection')) return;
      map.addSource('connection', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [REGIONS[0].coords, [10.4, 52.2], REGIONS[1].coords],
          },
        },
      });
      map.addLayer({
        id: 'connection-line',
        type: 'line',
        source: 'connection',
        paint: {
          'line-color': '#246b38',
          'line-width': 2,
          'line-dasharray': [2, 3],
          'line-opacity': 0.55,
        },
      });
    });

    const markers = REGIONS.map(region => {
      const element = document.createElement('div');
      element.className = 'efi-map-marker';
      element.style.borderColor = region.color;
      element.style.color = region.color;
      element.textContent = region.label;
      element.setAttribute('role', 'img');
      element.setAttribute('aria-label', region.description);
      return new mapboxgl.Marker({
        element,
        anchor: region.label === '3' ? 'top' : 'bottom',
        offset: region.label === '3' ? [12, 16] : [-12, -16],
      })
        .setLngLat(region.coords)
        .addTo(map);
    });

    let animationId = 0;
    let startedAt: number | undefined;
    function rotateGlobe(timestamp: number) {
      startedAt ??= timestamp;
      const angle = (timestamp - startedAt) * 0.00018;
      map.setCenter([10.4 + Math.sin(angle) * 12, 52]);
      animationId = requestAnimationFrame(rotateGlobe);
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animationId = requestAnimationFrame(rotateGlobe);
    }

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      markers.forEach(marker => marker.remove());
      map.remove();
    };
  }, []);

  return (
    <div className="efi-locations-map">
      <div ref={mapContainerRef} className="efi-locations-map__canvas" />
      <ul className="efi-locations-map__legend" aria-label="Unsere Standorte">
        {LOCATIONS.map(location => (
          <li key={location.number}>
            <span className="efi-locations-map__number" style={{ backgroundColor: location.color }} aria-hidden="true">
              {location.number}
            </span>
            <span>{location.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
