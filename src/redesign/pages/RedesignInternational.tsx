import { useTranslation } from 'react-i18next';
import PageMeta from '../../i18n/PageMeta';
import { LocalizedLink } from '../../i18n/LocalizedLink';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/projects/ProjectCard';
import PartnersStrip from '../components/PartnersStrip';
import ShareCTA from '../components/ShareCTA';
import { internationalProjects } from '../data/international';

export default function RedesignInternational() {
  const { t } = useTranslation('projects');
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageMeta routeId="international" />
      <PageHero
        badge={t('international.hero.badge')}
        title={t('international.hero.title')}
        highlight={t('international.hero.highlight')}
        description={t('international.hero.description')}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-[0.2em] block mb-3">
            {t('international.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('international.heading')}
          </h2>
          <p className="text-slate-600 text-base mt-3">
            {t('international.intro')}
          </p>
        </div>

        {internationalProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalProjects.map((project) => (
              <ProjectCard key={project.fieldPath} project={project} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-stone-200/80 shadow-sm p-8 sm:p-12 text-center space-y-4">
            <div
              className="w-14 h-14 mx-auto rounded-2xl bg-brand-50 text-brand-800 border border-brand-100 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {t('international.emptyHeading')}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('international.emptyText')}
            </p>
            <LocalizedLink
              routeId="contact" hash="#kontaktformular"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-sm transition-colors"
            >
              {t('international.emptyCta')}
            </LocalizedLink>
          </div>
        )}
      </section>

      <PartnersStrip />

      <ShareCTA />
    </div>
  );
}
