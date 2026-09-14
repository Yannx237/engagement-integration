import type { HomeArea } from '../../data/homeAreas';
export default function HomeAreaCard({ item }: { item: HomeArea }) {
  return (
    <div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className={item.iconClass}>{item.icon}</div>
        <span className={item.pillarClass}>{item.pillar}</span>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {item.description}
        </p>
      </div>
      <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
        <span className={item.badgeClass}>{item.badge}</span>
        <a
          className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform"
          href="#kontakt"
        >
          {item.action}
        </a>
      </div>
    </div>
  );
}
