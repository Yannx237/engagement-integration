import BerlinExchangeArticle from '../components/news/BerlinExchangeArticle';
import WomensDayArticle from '../components/news/WomensDayArticle';
import RefugeeWelcomeArticle from '../components/news/RefugeeWelcomeArticle';
import NeighborhoodMarketArticle from '../components/news/NeighborhoodMarketArticle';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignNews() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Page Hero */}
      <PageHero
        badge="Neuigkeiten &amp; Aktuelles"
        title="Aktuelle Berichte,"
        highlight="Ereignisse &amp; Einblicke."
        description="Erfahren Sie aus erster Hand, wie unsere Projekte Menschen zusammenbringen: von Quartiersmärkten in Merklinde über humanitäre Solidaritätsaktionen bis hin zu diplomatischen Dialogen in Berlin."
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
