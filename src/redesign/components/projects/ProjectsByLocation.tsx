import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { cities } from '../../data/projects';
import type { ProjectLocation } from '../../data/projects';

const DEFAULT_CITY: ProjectLocation = 'castrop';

// Same accent colours as the legend of the Standorte globe on the home page.
const cityAccent: Record<ProjectLocation, { dot: string; ring: string }> = {
  berlin: { dot: 'bg-amber-700', ring: 'ring-amber-700/30' },
  castrop: { dot: 'bg-brand-700', ring: 'ring-brand-700/30' },
  dortmund: { dot: 'bg-sky-700', ring: 'ring-sky-700/30' },
};

export default function ProjectsByLocation() {
  const { t } = useTranslation('projects');
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('stadt');
  const selected =
    cities.find((city) => city.id === requested) ??
    cities.find((city) => city.id === DEFAULT_CITY)!;

  function selectCity(id: ProjectLocation) {
    const next = new URLSearchParams(searchParams);
    next.set('stadt', id);
    setSearchParams(next, { replace: true });
  }

  return (
    <section
      id="standorte"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-28"
      data-purpose="locations-and-fields-of-action"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold text-brand-700 uppercase tracking-[0.2em] block mb-3">
          {t('locations.eyebrow')}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t('locations.heading')}
        </h2>
        <p className="text-slate-600 text-base mt-3">{t('locations.intro')}</p>
      </div>

      {/* Step 1 — pick a city */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto"
        role="group"
        aria-label={t('locations.groupLabel')}
      >
        {cities.map((city) => {
          const isActive = city.id === selected.id;
          const accent = cityAccent[city.id];
          const name = t(`locations.cities.${city.id}.name`);
          return (
            <button
              key={city.id}
              type="button"
              onClick={() => selectCity(city.id)}
              aria-pressed={isActive}
              data-city={city.id}
              className={`rounded-3xl border p-6 text-center transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                isActive
                  ? `bg-white border-brand-600 shadow-lg ring-2 ${accent.ring}`
                  : 'bg-white/70 border-stone-200 hover:border-brand-400 hover:shadow-md'
              }`}
            >
              <span
                className={`w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white ${accent.dot}`}
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <span className="block text-lg font-bold text-slate-900">
                {name}
              </span>
              <span className="block text-xs text-slate-500 mt-1 leading-relaxed">
                {t(`locations.cities.${city.id}.tagline`)}
              </span>
              <span
                className={`mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? 'bg-brand-700 text-white'
                    : 'bg-stone-100 text-brand-900'
                }`}
              >
                {isActive ? t('locations.selected') : name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step 2 — the fields of action of the selected city */}
      <div className="mt-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] block mb-2">
            {t('locations.fieldsIn')}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-700 tracking-tight">
            {t(`locations.cities.${selected.id}.name`)}
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            {t(`locations.cities.${selected.id}.address`)}
          </p>
        </div>

        <div
          key={selected.id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {selected.domains.map((domain) => (
            <ProjectCard key={domain.fieldPath} project={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
