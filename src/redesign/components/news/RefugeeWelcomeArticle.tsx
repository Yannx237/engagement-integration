import { useTranslation } from 'react-i18next';
import ArticleDate from '../../../i18n/ArticleDate';
import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function RefugeeWelcomeArticle() {
  const { t } = useTranslation('news');
  return (
    <NewsArticle>
      <div className="max-w-3xl space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            {t('articles.refugeeWelcome.category')}
          </span>
          <ArticleDate iso="2022-05" className="text-xs text-stone-500 font-medium" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {t('articles.refugeeWelcome.title')}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t('articles.refugeeWelcome.lead')}
        </p>
      </div>

      {/* Photos: news-5, news-6, news-7 */}
      <NewsPhotoGallery
        photos={[
          { src: '/assets/images/news-5.png', alt: t('articles.refugeeWelcome.photos.one') },
          { src: '/assets/images/news-6.png', alt: t('articles.refugeeWelcome.photos.two') },
          { src: '/assets/images/news-7.png', alt: t('articles.refugeeWelcome.photos.three') },
        ]}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100"
        imageClassName="h-60 rounded-2xl overflow-hidden shadow-sm group"
      />
    </NewsArticle>
  );
}
