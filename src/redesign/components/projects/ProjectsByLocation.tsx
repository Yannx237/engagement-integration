import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { castropProjects, dortmundProjects } from '../../data/projects';
export default function ProjectsByLocation() {
  const [selectedLocation, setSelectedLocation] = useState<
    'castrop' | 'dortmund'
  >('castrop');
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
          Handlungsfelder nach Standort
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Gezielte Unterstützung genau dort, wo sie gebraucht wird
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Wählen Sie einen unserer Hauptstandorte, um die spezifischen Programme
          und Angebote kennenzulernen.
        </p>

        {/* Location Toggle Tabs */}
        <div className="inline-flex p-1.5 rounded-full bg-stone-200/80 border border-stone-300/80 mt-8 gap-1">
          <button
            type="button"
            onClick={() => setSelectedLocation('castrop')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedLocation === 'castrop'
                ? 'bg-brand-700 text-white shadow-md'
                : 'text-slate-700 hover:text-brand-800'
            }`}
          >
            Castrop-Rauxel (Zentrum)
          </button>
          <button
            type="button"
            onClick={() => setSelectedLocation('dortmund')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedLocation === 'dortmund'
                ? 'bg-brand-700 text-white shadow-md'
                : 'text-slate-700 hover:text-brand-800'
            }`}
          >
            Dortmund (Netzwerk-Hub)
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {(selectedLocation === 'castrop'
          ? castropProjects
          : dortmundProjects
        ).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
