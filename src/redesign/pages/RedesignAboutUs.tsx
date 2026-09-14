import AboutMission from '../components/about/AboutMission';
import AboutTeam from '../components/about/AboutTeam';
import AboutPartners from '../components/about/AboutPartners';
import AboutContact from '../components/about/AboutContact';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignAboutUs() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Subpage Hero */}
      <PageHero
        badge="Über uns"
        title="Gemeinsam damit gleichberechtigte"
        highlight="Teilhabe gelingt."
        description="Engagement für Integration e.V. ist eine anerkannte Migrantenselbstorganisation. Wir setzen uns mit Herzblut dafür ein, Brücken zu bauen, Vorurteile abzubauen und gleiche Zukunftschancen für alle zu verwirklichen."
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
