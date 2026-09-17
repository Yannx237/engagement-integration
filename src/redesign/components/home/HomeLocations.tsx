import { Trans, useTranslation } from 'react-i18next';
import { LocalizedLink } from '../../../i18n/LocalizedLink';
import StandorteMap from '../../StandorteMap';

export default function HomeLocations() {
  const { t } = useTranslation('home');
  return (
    <section
      className="pt-28 pb-20 bg-sand-50 relative overflow-hidden scroll-mt-28"
      data-purpose="locations-and-presence"
      id="standorte"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">
            {t('locations.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('locations.heading')}
          </h2>
          <p className="text-slate-600 text-base mt-2">
            {t('locations.intro')}
          </p>
        </div>

        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-subtle overflow-hidden">
          {/* Interactive 3D Rotating Mapbox Globe */}
          <div className="mb-8">
            <StandorteMap />
          </div>

          {/* Concrete Location Cards with Flyer Details (3 Columns: Castrop-Rauxel, Dortmund, Berlin) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            {/* Castrop-Rauxel Card */}
            <div className="p-6 rounded-2xl bg-sand-50 border border-brand-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {t('locations.castrop.name')}
                </h3>
                <p className="text-xs text-brand-900 font-medium mb-3 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-brand-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>
                    {t('locations.castrop.address')}
                  </span>
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.castrop.tandem" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.castrop.digital" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.castrop.advice" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.castrop.cafe" ns="home" />
                    </span>
                  </div>
                </div>
              </div>
              <LocalizedLink
                routeId="projects" query="?stadt=castrop" hash="#standorte"
                className="mb-4 flex items-center justify-between gap-2 rounded-xl border bg-white px-3.5 py-2.5 text-xs font-bold transition-colors text-brand-800 hover:bg-brand-50 border-brand-200"
              >
                <span>{t('locations.castrop.flyers')}</span>
                <span aria-hidden="true">&rarr;</span>
              </LocalizedLink>
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <a
                  href="https://wa.me/491773218743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950"
                >
                  <span>{t('locations.castrop.whatsapp')}</span> →
                </a>
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-stone-500 hover:text-slate-800"
                >
                  {t('locations.castrop.directions')}
                </a>
              </div>
            </div>

            {/* Dortmund Card */}
            <div className="p-6 rounded-2xl bg-sand-50 border border-sky-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {t('locations.dortmund.name')}
                </h3>
                <p className="text-xs text-sky-950 font-medium mb-3 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-sky-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>{t('locations.dortmund.subtitle')}</span>
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.dortmund.tandem" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.dortmund.mentoring" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.dortmund.schools" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.dortmund.workshops" ns="home" />
                    </span>
                  </div>
                </div>
              </div>
              <LocalizedLink
                routeId="projects" query="?stadt=dortmund" hash="#standorte"
                className="mb-4 flex items-center justify-between gap-2 rounded-xl border bg-white px-3.5 py-2.5 text-xs font-bold transition-colors text-sky-800 hover:bg-sky-50 border-sky-200"
              >
                <span>{t('locations.dortmund.flyers')}</span>
                <span aria-hidden="true">&rarr;</span>
              </LocalizedLink>
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <a
                  href="mailto:info@engagement-integration.de"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>info@engagement-integration.de</span> →
                </a>
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-stone-500 hover:text-slate-800"
                >
                  {t('locations.dortmund.network')}
                </a>
              </div>
            </div>

            {/* Berlin Card */}
            <div className="p-6 rounded-2xl bg-sand-50 border border-amber-300/80 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {t('locations.berlin.name')}
                </h3>
                <p className="text-xs text-amber-950 font-medium mb-3 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-amber-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>{t('locations.berlin.subtitle')}</span>
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.berlin.embassy" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.berlin.conferences" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.berlin.programmes" ns="home" />
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>
                      <Trans i18nKey="locations.berlin.umbrella" ns="home" />
                    </span>
                  </div>
                </div>
              </div>
              <LocalizedLink
                routeId="projects" query="?stadt=berlin" hash="#standorte"
                className="mb-4 flex items-center justify-between gap-2 rounded-xl border bg-white px-3.5 py-2.5 text-xs font-bold transition-colors text-amber-900 hover:bg-amber-50 border-amber-200"
              >
                <span>{t('locations.berlin.flyers')}</span>
                <span aria-hidden="true">&rarr;</span>
              </LocalizedLink>
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <LocalizedLink
                  routeId="news"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950"
                >
                  <span>{t('locations.berlin.newsLink')}</span> →
                </LocalizedLink>
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-stone-500 hover:text-slate-800"
                >
                  {t('locations.berlin.dialog')}
                </a>
              </div>
            </div>
          </div>

          {/* Key Facts Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-6 border-t border-stone-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {t('locations.facts.locationsTitle')}
                </h4>
                <p className="text-xs text-slate-500">
                  {t('locations.facts.locationsValue')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">
                240+
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {t('locations.facts.consultationsTitle')}
                </h4>
                <p className="text-xs text-slate-500">
                  {t('locations.facts.consultationsValue')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">
                18+
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {t('locations.facts.partnersTitle')}
                </h4>
                <p className="text-xs text-slate-500">
                  {t('locations.facts.partnersValue')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
