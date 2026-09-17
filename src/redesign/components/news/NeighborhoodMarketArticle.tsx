import { useTranslation } from 'react-i18next';
import ArticleDate from '../../../i18n/ArticleDate';
import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function NeighborhoodMarketArticle() {
  const { t } = useTranslation('news');
  return (
    <NewsArticle>
      <div className="max-w-3xl space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            {t('articles.market.category')}
          </span>
          <ArticleDate iso="2022-05-14" className="text-xs text-stone-500 font-medium" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {t('articles.market.title')}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t('articles.market.lead')}
        </p>
      </div>

      {/* Photos: news-1, news-2, news-3, news-4 */}
      <NewsPhotoGallery
        photos={[
          { src: '/assets/images/news-1.png', alt: t('articles.market.photos.one') },
          { src: '/assets/images/news-2.png', alt: t('articles.market.photos.two') },
          { src: '/assets/images/news-3.png', alt: t('articles.market.photos.three') },
          { src: '/assets/images/news-4.png', alt: t('articles.market.photos.four') },
        ]}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100"
        imageClassName="h-48 rounded-2xl overflow-hidden shadow-sm group"
      />
    </NewsArticle>
  );
}
