import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const DEFAULT_MAPBOX_TOKEN = [
  'pk',
  'eyJ1IjoiY2hlcml4YXBwIiwiYSI6ImNtbHpocmhkMjA1bmUzZHF2aWwyZTIxMHkifQ',
  '_G8m4oZsJiicmiO_KDR1KQ'
].join('.');

const MAPBOX_TOKEN = (import.meta as any).env?.VITE_MAPBOX_TOKEN || DEFAULT_MAPBOX_TOKEN;

const LOCATIONS = [
  {
    id: 'castrop',
    name: 'Castrop-Rauxel',
    category: 'Hauptstandort',
    detail: 'Begegnungszentrum Merklinde',
    coords: [7.3093, 51.5542],
    color: '#15803d',
    bgColor: '#0b2e1b',
    borderColor: '#84cc16'
  },
  {
    id: 'dortmund',
    name: 'Dortmund',
    category: 'Projekt-Hub',
    detail: 'Tandem & Mentoring',
    coords: [7.4653, 51.5136],
    color: '#0284c7',
    bgColor: '#0f172a',
    borderColor: '#38bdf8'
  }
];

export default function StandorteMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      center: [7.3873, 51.5339],
      zoom: 2.6,
      pitch: 38,
      bearing: 0,
      interactive: false, // NON MANIPULABLE
      attributionControl: false,
    });

    mapRef.current = map;

    map.on('style.load', () => {
      // Pure seamless embedding into white card
      map.setFog({
        color: '#ffffff',
        'high-color': '#f0fdf4',
        'space-color': '#ffffff',
        'horizon-blend': 0.03,
        'star-intensity': 0
      });

      // Curved connection arc
      if (!map.getSource('connection')) {
        map.addSource('connection', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [
                [7.3093, 51.5542],
                [7.3873, 51.54],
                [7.4653, 51.5136]
              ]
            }
          }
        });

        map.addLayer({
          id: 'connection-line',
          type: 'line',
          source: 'connection',
          paint: {
            'line-color': '#16a34a',
            'line-width': 2.5,
            'line-dasharray': [2, 2],
            'line-opacity': 0.85
          }
        });
      }

      // Add custom HTML pins & cards
      LOCATIONS.forEach(loc => {
        const el = document.createElement('div');
        el.className = 'relative flex flex-col items-center pointer-events-none select-none';
        
        const isCastrop = loc.id === 'castrop';
        
        el.innerHTML = `
          <!-- Pin Card -->
          <div style="
            position: absolute;
            ${isCastrop ? 'bottom: 26px;' : 'top: 26px;'}
            left: 50%;
            transform: translateX(-50%);
            background: ${loc.bgColor};
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25);
            border: 1.5px solid ${loc.borderColor};
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 30;
          ">
            <span style="font-size: 9px; font-weight: 800; color: ${loc.borderColor}; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1;">
              ${loc.category}
            </span>
            <span style="font-size: 11px; font-weight: 700; color: #ffffff; margin-top: 2px; line-height: 1.2;">
              ${loc.name} • ${loc.detail}
            </span>
          </div>

          <!-- Pulsing Pin Marker -->
          <div style="position: relative; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;">
            <div style="
              position: absolute;
              inset: -4px;
              border-radius: 9999px;
              background-color: ${loc.borderColor};
              opacity: 0.6;
              animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            "></div>
            <div style="
              position: relative;
              width: 18px;
              height: 18px;
              border-radius: 9999px;
              background-color: ${loc.bgColor};
              border: 2px solid #ffffff;
              box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="width: 6px; height: 6px; border-radius: 9999px; background-color: ${loc.borderColor};"></div>
            </div>
          </div>
        `;

        new mapboxgl.Marker({ element: el })
          .setLngLat(loc.coords as [number, number])
          .addTo(map);
      });
    });

    // Smooth subtle Earth rotation
    let animId: number;
    const baseLng = 7.3873;
    let angle = 0;

    function animate() {
      if (mapRef.current) {
        angle += 0.003;
        // Gentle rotation around the focus area (orbits +/- 30 degrees so points remain visible)
        const currentLng = baseLng + Math.sin(angle) * 25;
        mapRef.current.setCenter([currentLng, 51.5339]);
      }
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] bg-white flex items-center justify-center overflow-hidden">
      <style>{`
        .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right, .mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib {
          display: none !important;
        }
      `}</style>
      <div 
        ref={mapContainerRef} 
        className="w-full h-full pointer-events-none select-none" 
      />
    </div>
  );
}
