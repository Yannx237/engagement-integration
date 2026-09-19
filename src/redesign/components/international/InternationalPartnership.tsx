import { useTranslation } from 'react-i18next';

const SOURCE_URL =
  'https://complexe-scolaire-jpsprimero.com/2025/11/16/mr-noa-sylvain-paco-represents-the-promoter-of-jean-paul-sartre-primero-bilingual-school-complex-in-germany-for-a-training-seminar/';

const PHOTOS = [
  { id: 'seminar1', src: '/assets/images/international/jps-seminar-1.jpg' },
  { id: 'seminar2', src: '/assets/images/international/jps-seminar-2.jpg' },
  { id: 'seminar3', src: '/assets/images/international/jps-seminar-3.jpg' },
  { id: 'school1', src: '/assets/images/international/jps-school-1.jpg' },
  { id: 'school2', src: '/assets/images/international/jps-school-2.jpg' },
] as const;

/**
 * The partnership with the school in Yaoundé. Text and photographs belong to
 * the school, so the block credits them and links to their own report rather
 * than presenting their account as ours.
 */
export default function InternationalPartnership() {
  const { t } = useTranslation('projects');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
      <div className="rounded-3xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
        <div className="p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-stone-100">
            <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-sand-50 border border-stone-200 flex items-center justify-center p-2">
              <img
                src="/assets/images/international/jps-logo.png"
                alt={t('international.partnership.logoAlt')}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-[0.2em] block mb-1">
                {t('international.partnership.eyebrow')}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {t('international.partnership.school')}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t('international.partnership.location')}
                <span className="mx-2 text-stone-300">·</span>
                <span className="italic">
                  {t('international.partnership.motto')}
                </span>
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-4 max-w-3xl">
            <p className="text-base text-slate-800 font-medium leading-relaxed">
              {t('international.partnership.lead')}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('international.partnership.body1')}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('international.partnership.body2')}
            </p>
          </div>

          {/* Two breakpoints only. The Tailwind Play CDN emits newly discovered
              classes in discovery order, so a third media-query step can end up
              losing to the one below it — measured here with lg:grid-cols-5. */}
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PHOTOS.map((photo) => (
              <li
                key={photo.id}
                className="rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 aspect-[3/4]"
              >
                <img
                  src={photo.src}
                  alt={t(`international.partnership.photos.${photo.id}`)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              {t('international.partnership.sourceNote')}
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold text-brand-700 hover:text-brand-900"
            >
              {t('international.partnership.sourceLabel')}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
