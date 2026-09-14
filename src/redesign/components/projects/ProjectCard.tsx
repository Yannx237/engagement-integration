import type { Project } from '../../data/projects';
export default function ProjectCard({ project }: { project: Project }) {
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

      <div className="mt-8 pt-6 border-t border-stone-100">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-800 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
        >
          <span>Jetzt teilnehmen oder anfragen</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
