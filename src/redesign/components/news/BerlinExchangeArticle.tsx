import { Trans, useTranslation } from 'react-i18next';
import ArticleDate from '../../../i18n/ArticleDate';
import NewsArticle from './NewsArticle';

export default function BerlinExchangeArticle() {
  const { t } = useTranslation('news');
  return (
    <NewsArticle>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              {t('articles.berlin.category')}
            </span>
            <ArticleDate iso="2024-03-20" className="text-xs text-stone-500 font-medium" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {t('articles.berlin.title')}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('articles.berlin.lead')}
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            <Trans
              i18nKey="articles.berlin.body"
              ns="news"
              components={{ name: <strong /> }}
            />
          </p>

          <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 text-xs text-brand-900 font-medium">
            {t('articles.berlin.quote')}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-stone-200 group bg-stone-100">
            <img
              src="/assets/images/news-8.png"
              alt={t('articles.berlin.imageAlt')}
              className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <p className="text-center text-xs text-stone-500 mt-2.5 max-w-sm">
            {t('articles.berlin.caption')}
          </p>
        </div>
      </div>
    </NewsArticle>
  );
}
