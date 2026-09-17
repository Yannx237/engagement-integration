import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/projects/ProjectCard';
import PartnersStrip from '../components/PartnersStrip';
import ShareCTA from '../components/ShareCTA';
import { internationalProjects } from '../data/international';

export default function RedesignInternational() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageHero
        badge="EFI International"
        title="Unser Engagement"
        highlight="über Deutschland hinaus."
        description="Neben unserer Arbeit in Berlin, Castrop-Rauxel und Dortmund begleiten wir Projekte im Ausland. Hier bündeln wir diese internationalen Vorhaben, ihre Partner und die zugehörigen Flyer."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-[0.2em] block mb-3">
            Projekte im Ausland
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Internationale Zusammenarbeit
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Austausch, Bildungspartnerschaften und Jugendbegegnungen jenseits
            der deutschen Standorte.
          </p>
        </div>

        {internationalProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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
              Die Projektseiten werden derzeit aufgebaut
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unsere internationalen Vorhaben und die dazugehörigen Flyer werden
              hier in Kürze veröffentlicht. Bis dahin geben wir Ihnen gerne
              persönlich Auskunft.
            </p>
            <Link
              to="/contact#kontaktformular"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-sm transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        )}
      </section>

      <PartnersStrip />

      <ShareCTA />
    </div>
  );
}
