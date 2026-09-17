import { useTranslation } from 'react-i18next';
import ArticleDate from '../../../i18n/ArticleDate';
import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function WomensDayArticle() {
  const { t } = useTranslation('news');
  return (
    <NewsArticle>
      <div className="max-w-3xl space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            {t('articles.womensDay.category')}
          </span>
          <ArticleDate iso="2024-03-22" className="text-xs text-stone-500 font-medium" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {t('articles.womensDay.title')}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t('articles.womensDay.lead')}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          {t('articles.womensDay.body')}
        </p>
      </div>

      {/* Photos Mosaic: news-9, news-10, news-11, news-12, news-13 */}
      <NewsPhotoGallery
        photos={[
          { src: '/assets/images/news-9.png', alt: t('articles.womensDay.photos.exchange') },
          { src: '/assets/images/news-10.png', alt: t('articles.womensDay.photos.culture') },
          { src: '/assets/images/news-11.png', alt: t('articles.womensDay.photos.dance') },
          { src: '/assets/images/news-12.png', alt: t('articles.womensDay.photos.dinner') },
          { src: '/assets/images/news-13.png', alt: t('articles.womensDay.photos.ceremony') },
        ]}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-stone-100"
        imageClassName="h-48 rounded-2xl overflow-hidden shadow-sm group"
      />
    </NewsArticle>
  );
}
