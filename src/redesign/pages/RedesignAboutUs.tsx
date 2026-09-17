import { useTranslation } from 'react-i18next';
import AboutMission from '../components/about/AboutMission';
import AboutTeam from '../components/about/AboutTeam';
import AboutPartners from '../components/about/AboutPartners';
import AboutContact from '../components/about/AboutContact';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignAboutUs() {
  const { t } = useTranslation('about');
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Subpage Hero */}
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        description={t('hero.description')}
      />

      {/* 2. Mission, Core Values & Quick Contact Sidebar */}
      <AboutMission />

      {/* 3. Unser Team (Anita Nga & Alex Etobe) */}
      <AboutTeam />

      {/* 4. Partner Network (Original image logos + KIM & Kreis Recklinghausen) */}
      <AboutPartners />

      {/* 5. Reusable Share CTA */}
      <ShareCTA />

      {/* 6. Inline Contact Form */}
      <AboutContact />
    </div>
  );
}
