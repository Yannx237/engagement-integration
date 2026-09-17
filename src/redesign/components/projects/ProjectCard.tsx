import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const flyers = project.flyers ?? [];
  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${project.iconBg} shadow-sm group-hover:scale-110 transition-transform`}
          >
            {project.icon}
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-stone-100 text-stone-700">
            {project.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="space-y-2.5 border-t border-stone-100 pt-5">
          {project.details.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
            >
              <svg
                className="w-4 h-4 text-limeAccent-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flyers for this field of action, or a contact route when none exists. */}
      <div className="mt-8 pt-6 border-t border-stone-100">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          Flyer zum Projekt
        </h4>

        {flyers.length > 0 ? (
          <ul className="space-y-2">
            {flyers.map((flyer) => (
              <li key={flyer.file}>
                <a
                  href={flyer.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 rounded-xl border border-stone-200 bg-sand-50 px-3.5 py-3 text-sm font-semibold text-brand-800 hover:border-brand-500/50 hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>
                    {flyer.title}
                    {flyer.note && (
                      <span className="block text-xs font-normal text-slate-500 mt-0.5">
                        {flyer.note}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-500 leading-relaxed">
            Für dieses Handlungsfeld liegt an diesem Standort derzeit kein Flyer
            zum Download bereit. Sprechen Sie uns an — wir informieren Sie
            persönlich.
          </p>
        )}

        <Link
          to="/contact#kontaktformular"
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-800 uppercase tracking-wider"
        >
          <span>Jetzt teilnehmen oder anfragen</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
