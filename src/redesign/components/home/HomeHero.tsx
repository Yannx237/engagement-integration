import { useTranslation } from 'react-i18next';

export default function HomeHero() {
  const { t } = useTranslation('home');
  return (
    <section
      className="relative overflow-hidden bg-brand-deep text-white min-h-[85vh] flex items-center scroll-mt-28"
      data-purpose="hero-section"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt={t('hero.bannerAlt')}
          className="w-full h-full object-cover object-center opacity-65 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
          src="/assets/images/banner-2.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/75 to-brand-deep/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-limeAccent-500/15 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/80 border border-limeAccent-500/30 text-limeAccent-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-limeAccent-400 animate-ping"></span>
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {t('hero.titleStart')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeAccent-400 to-emerald-300 underline decoration-limeAccent-500/50 decoration-wavy decoration-2">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleEnd')}
            </h1>

            <p className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl">
              {t('hero.lead')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-glow transition-all transform hover:-translate-y-0.5"
                href="#handlungsfelder"
              >
                <span>{t('hero.ctaFields')}</span>
                <svg
                  className="w-5 h-5 text-brand-950"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all"
                href="#projekte"
              >
                {t('hero.ctaProjects')}
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-limeAccent-400">
                  1.200+
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  {t('hero.stats.peopleLabel')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  {t('hero.stats.freeLabel')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-limeAccent-400">
                  3
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  {t('hero.stats.locationsLabel')}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-limeAccent-500/30 to-brand-500/20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden bg-brand-900 border border-white/20 shadow-2xl p-3">
                <img
                  alt={t('hero.sideAlt')}
                  className="w-full h-72 object-cover rounded-xl"
                  src="/assets/images/about-6.png"
                />
                <div className="p-4 bg-brand-950/90 rounded-xl mt-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-limeAccent-500 flex items-center justify-center text-brand-950 font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                        {t('hero.card.eyebrow')}
                      </p>
                      <h4 className="text-sm font-bold text-white">
                        {t('hero.card.title')}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 mt-2">
                    {t('hero.card.text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
