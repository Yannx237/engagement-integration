import { useTranslation } from 'react-i18next';
import PageMeta from '../../i18n/PageMeta';
import InternationalPartnership from '../components/international/InternationalPartnership';
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

        {/* Structured projects, once there are any. The partnership block below
            carries the page on its own until then, so no placeholder here. */}
        {internationalProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalProjects.map((project) => (
              <ProjectCard key={project.fieldPath} project={project} />
            ))}
          </div>
        )}
      </section>

      <InternationalPartnership />

      <PartnersStrip />

      <ShareCTA />
    </div>
  );
}
