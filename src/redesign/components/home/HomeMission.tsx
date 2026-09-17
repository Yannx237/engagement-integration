import { Trans, useTranslation } from 'react-i18next';

export default function HomeMission() {
  const { t } = useTranslation('home');
  return (
    <section
      className="py-24 bg-white relative scroll-mt-28"
      data-purpose="mission-statement"
      id="mission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
                  <img
                    alt={t('mission.images.friends')}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    src="/assets/images/about-5.png"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
                  <img
                    alt={t('mission.images.team')}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    src="/assets/images/about-6.png"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
                  <img
                    alt={t('mission.images.puzzle')}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    src="/assets/images/about-7.png"
                  />
                </div>
                <div className="bg-brand-50 p-6 rounded-2xl border border-brand-200 flex flex-col justify-center">
                  <span className="text-3xl font-extrabold text-brand-800">
                    10+
                  </span>
                  <span className="text-sm font-medium text-brand-900 mt-1">
                    {t('mission.yearsLabel')}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 right-6 bg-brand-deep text-white p-4 rounded-xl shadow-xl border border-limeAccent-500/40 hidden sm:block">
                <p className="text-xs sm:text-sm font-medium italic text-stone-200">
                  {t('mission.quote')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              {t('mission.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t('mission.heading')}
            </h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <Trans
                  i18nKey="mission.intro"
                  ns="home"
                  components={{
                    name: <strong className="font-bold text-slate-900" />,
                  }}
                />
              </p>
              <p>
                {t('mission.reach')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {t('mission.bullets.participation')}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {t('mission.bullets.tutoring')}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {t('mission.bullets.cafes')}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {t('mission.bullets.tandem')}
                </span>
              </div>
            </div>
            <div className="pt-4">
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900 group"
                href="#kontakt"
              >
                <span>
                  {t('mission.cta')}
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
