import { useTranslation } from 'react-i18next';
import type { BadgeTone, FeaturedProject } from '../../data/featuredProjects';

const BADGE_CLASS: Record<BadgeTone, string> = {
  location:
    'px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30',
  funder:
    'px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-red-600/90 text-white shadow-sm',
  funderDark:
    'px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-brand-800 text-white shadow-sm',
};

export default function FeaturedProjectCard({
  project,
}: {
  project: FeaturedProject;
}) {
  const { t } = useTranslation('home');
  const linkProps = project.whatsappHref
    ? {
        href: project.whatsappHref,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : { href: '#kontakt' };

  return (
    <div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <img
          alt={t(`featured.${project.id}.imageAlt`)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.image}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.badges.map((badge) => (
            <span key={badge.key} className={BADGE_CLASS[badge.tone]}>
              {t(`featured.badges.${badge.key}`)}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">
            {t(`featured.${project.id}.category`)}
          </span>
          <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">
            {t(`featured.${project.id}.title`)}
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            {t(`featured.${project.id}.description`)}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span
            className={
              project.scheduleTone === 'accent'
                ? 'text-limeAccent-300 font-semibold'
                : 'text-stone-300'
            }
          >
            {t(`featured.${project.id}.schedule`)}
          </span>
          <a
            className="font-bold text-limeAccent-400 hover:text-white transition-colors flex items-center gap-1"
            {...linkProps}
          >
            <span>{t(`featured.${project.id}.link`)}</span> &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
