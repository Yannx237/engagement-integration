import type { ActivityPhoto } from '../../data/projects';

const locationLabels = {
  castrop: 'Castrop-Rauxel',
  dortmund: 'Dortmund',
  berlin: 'Berlin',
} as const;

export default function GalleryPhotoCard({ photo }: { photo: ActivityPhoto }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* The image fills the card: shown whole, never cropped to a fixed height. */}
      <img
        src={photo.src}
        alt={`${photo.title} – ${photo.desc}`}
        className="block w-full h-auto group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute top-3 left-3">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
          {locationLabels[photo.location]}
        </span>
      </div>
    </div>
  );
}
