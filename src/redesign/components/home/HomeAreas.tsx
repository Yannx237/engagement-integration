import { useTranslation } from 'react-i18next';
import HomeAreaCard from './HomeAreaCard';
import { homeAreas } from '../../data/homeAreas';

export default function HomeAreas() {
  const { t } = useTranslation('home');
  return (
    <section
      className="py-24 bg-sand-100 border-y border-stone-200/80 scroll-mt-28"
      data-purpose="areas-of-action"
      id="handlungsfelder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">
              {t('areas.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('areas.heading')}
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              {t('areas.intro')}
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeAreas.map((item) => (
            <HomeAreaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
