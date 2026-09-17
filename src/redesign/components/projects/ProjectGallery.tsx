import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GalleryPhotoCard from './GalleryPhotoCard';
import { activityPhotos, galleryFilters } from '../../data/projects';
import type { GalleryFilter } from '../../data/projects';

export default function ProjectGallery() {
  const { t } = useTranslation('projects');
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all');
  const filteredPhotos = activityPhotos.filter(
    (photo) => galleryFilter === 'all' || photo.location === galleryFilter
  );
  return (
    <section className="bg-white py-16 sm:py-24 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              {t('gallery.badge')}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('gallery.heading')}
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              {t('gallery.intro')}
            </p>
          </div>

          {/* Gallery Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setGalleryFilter(filter)}
                data-gallery-filter={filter}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  galleryFilter === filter
                    ? 'bg-brand-700 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t(`gallery.filters.${filter}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {filteredPhotos.map((photo) => (
            <GalleryPhotoCard key={photo.src} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
