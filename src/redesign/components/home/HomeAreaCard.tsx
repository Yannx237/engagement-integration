import { Trans, useTranslation } from 'react-i18next';
import type { HomeArea } from '../../data/homeAreas';

export default function HomeAreaCard({ item }: { item: HomeArea }) {
  const { t } = useTranslation('home');
  return (
    <div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className={item.iconClass}>{item.icon}</div>
        <span className={item.pillarClass}>{t(`areas.${item.id}.pillar`)}</span>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {t(`areas.${item.id}.title`)}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          <Trans i18nKey={`areas.${item.id}.description`} ns="home" />
        </p>
      </div>
      {/* Wraps as a row rather than letting each label break: English labels are
          longer than the German ones, and a pill split over two lines or a lone
          arrow on its own line both read as a mistake. */}
      <div className="pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
        <span className={`${item.badgeClass} whitespace-nowrap`}>
          {t(`areas.${item.id}.badge`)}
        </span>
        <a
          className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform"
          href="#kontakt"
        >
          {t(`areas.${item.id}.action`)}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
