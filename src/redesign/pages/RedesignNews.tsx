import { useTranslation } from 'react-i18next';
import BerlinExchangeArticle from '../components/news/BerlinExchangeArticle';
import WomensDayArticle from '../components/news/WomensDayArticle';
import RefugeeWelcomeArticle from '../components/news/RefugeeWelcomeArticle';
import NeighborhoodMarketArticle from '../components/news/NeighborhoodMarketArticle';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignNews() {
  const { t } = useTranslation('news');
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Page Hero */}
      <PageHero
        badge={t('hero.badge')}
        title={t('hero.title')}
        highlight={t('hero.highlight')}
        description={t('hero.description')}
      />

      {/* 2. News Articles Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* ========================================================================= */}
        {/* ARTICLE 1: Internationaler Austausch Berlin (Botschaft)                   */}
        {/* ========================================================================= */}
        <BerlinExchangeArticle />

        {/* ========================================================================= */}
        {/* ARTICLE 2: Internationale Frauenfeier zum Weltfrauentag                  */}
        {/* ========================================================================= */}
        <WomensDayArticle />

        {/* ========================================================================= */}
        {/* ARTICLE 3: Ukraine Flüchtlinge Willkommen                                  */}
        {/* ========================================================================= */}
        <RefugeeWelcomeArticle />

        {/* ========================================================================= */}
        {/* ARTICLE 4: Merklinder MitMachMarkt                                        */}
        {/* ========================================================================= */}
        <NeighborhoodMarketArticle />
      </div>

      {/* 3. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
