import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function RefugeeWelcomeArticle() {

  return (
<NewsArticle>
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                Solidarität vor Ort
              </span>
              <span className="text-xs text-stone-500 font-medium">Mai 2022</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Willkommens- und Solidaritätsveranstaltung für geflüchtete Menschen
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In Castrop-Rauxel veranstaltete unser Verein ein großes Willkommensfest für aus der Ukraine und weiteren Krisenregionen geflüchtete Familien. Im Mittelpunkt standen die Erstorientierung, die Vermittlung von Sprachkursen und kinderfreundliche Betreuungsangebote.
            </p>
          </div>

          {/* Photos: news-5, news-6, news-7 */}
          <NewsPhotoGallery photos={[
              { src: '/assets/images/news-5.png', alt: 'Willkommensveranstaltung Ukraine 1' },
              { src: '/assets/images/news-6.png', alt: 'Willkommensveranstaltung Ukraine 2' },
              { src: '/assets/images/news-7.png', alt: 'Willkommensveranstaltung Ukraine 3' }
            ]} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100" imageClassName="h-60 rounded-2xl overflow-hidden shadow-sm group" />
        </NewsArticle>
  );
}
