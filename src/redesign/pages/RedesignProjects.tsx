import { useTranslation } from 'react-i18next';
import PageMeta from '../../i18n/PageMeta';
import ProjectsByLocation from '../components/projects/ProjectsByLocation';
import ProjectGallery from '../components/projects/ProjectGallery';
import PageHero from '../components/PageHero';
import PartnersStrip from '../components/PartnersStrip';
import ShareCTA from '../components/ShareCTA';

export default function RedesignProjects() {
  const { t } = useTranslation('projects');
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageMeta routeId="projects" />
      {/* 1. Page Hero */}
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        description={t('hero.description')}
      />

      {/* 2. Standort → Handlungsfeld → Flyer */}
      <ProjectsByLocation />

      {/* 3. Unsere Aktivitäten in Bildern (Authentic Gallery with f1.png to f11.png) */}
      <ProjectGallery />

      {/* 4. Gemeinsamer Partnerblock */}
      <PartnersStrip />

      {/* 5. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
