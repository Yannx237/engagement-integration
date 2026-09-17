import { useTranslation } from 'react-i18next';
import FeaturedProjectCard from './FeaturedProjectCard';
import { featuredProjects } from '../../data/featuredProjects';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
export default function HomeProjects() {
  const { t } = useTranslation('home');
  const { containerRef: projectsContainerRef, scroll: scrollProjects } =
    useHorizontalScroll(350);
  return (
    <section
      className="py-24 bg-brand-deep text-white relative overflow-hidden scroll-mt-28"
      data-purpose="featured-projects"
      id="projekte"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/80 border border-limeAccent-500/30 text-limeAccent-400 text-xs font-bold uppercase tracking-wider mb-3">
              {t('projects.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t('projects.heading')}
            </h2>
            <p className="text-stone-300 mt-2 max-w-xl text-base">
              {t('projects.intro')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollProjects('left')}
              aria-label={t('projects.prev')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => scrollProjects('right')}
              aria-label={t('projects.next')}
              className="w-12 h-12 rounded-full bg-limeAccent-500 hover:bg-limeAccent-400 active:scale-95 text-brand-950 flex items-center justify-center transition-all shadow-md cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={projectsContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 scrollbar-none pb-4 scroll-smooth"
        >
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-brand-deep bg-white hover:bg-limeAccent-400 transition-colors shadow-lg"
            href="#kontakt"
          >
            <span>{t('projects.cta')}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
