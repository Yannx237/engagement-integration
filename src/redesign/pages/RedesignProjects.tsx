import ProjectsByLocation from '../components/projects/ProjectsByLocation';
import ProjectGallery from '../components/projects/ProjectGallery';
import PageHero from '../components/PageHero';
import PartnersStrip from '../components/PartnersStrip';
import ShareCTA from '../components/ShareCTA';

export default function RedesignProjects() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Page Hero */}
      <PageHero
        badge="Unsere Projekte"
        title="Wir tun dies für jedes"
        highlight="menschliche Projekt."
        description="Als gemeinnützige Migrantenselbstorganisation fördern wir gesellschaftliche Teilhabe durch zielgerichtete Handlungsfelder: von kostenfreier Nachhilfe über Sprachförderung bis zu individuellen Tandem-Patenschaften in NRW und darüber hinaus."
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
