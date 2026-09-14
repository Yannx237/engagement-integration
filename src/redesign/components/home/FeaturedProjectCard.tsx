import type { FeaturedProject } from '../../data/featuredProjects';

export default function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <img alt={project.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={project.image} />
        {project.badges}
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">{project.category}</span>
          <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">{project.title}</h3>
          <p className="text-xs text-stone-300 leading-relaxed">{project.description}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">{project.footer}</div>
      </div>
    </div>
  );
}
