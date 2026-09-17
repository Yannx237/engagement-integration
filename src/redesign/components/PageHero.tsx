import { LocalizedLink } from '../../i18n/LocalizedLink';
import type { RouteId } from '../../i18n/routes';

interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: { label: string; routeId?: RouteId }[];
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  breadcrumbs = [{ label: 'Home', routeId: 'home' as RouteId }]
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white py-16 sm:py-20 lg:py-24 border-b border-brand-800">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-limeAccent-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-stone-300 mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {crumb.routeId ? (
                <LocalizedLink routeId={crumb.routeId} className="hover:text-limeAccent-400 transition-colors">
                  {crumb.label}
                </LocalizedLink>
              ) : (
                <span className="text-stone-300">{crumb.label}</span>
              )}
              <svg className="w-3.5 h-3.5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
          <span className="text-limeAccent-400 font-semibold">{badge}</span>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/80 border border-brand-700/80 text-limeAccent-400 text-xs font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-limeAccent-400 animate-pulse"></span>
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            {title}{' '}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeAccent-400 to-limeAccent-300">
                {highlight}
              </span>
            )}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
