import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function NeighborhoodMarketArticle() {

  return (
<NewsArticle>
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                Stadtteilleben Merklinde
              </span>
              <span className="text-xs text-stone-500 font-medium">14. Mai 2022</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              1. Merklinder MitMachMarkt in Castrop-Rauxel
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Am 14. Mai fand der 1. Merklinder MitMachMarkt statt. Organisiert vom Quartiersmanagement Merklinde präsentierten sich insgesamt 21 Vereine und Institutionen mit vielfältigen Aktionen, Informationsständen und kulinarischen Spezialitäten. Unser Stand war ein beliebter Anlaufpunkt für Nachbarschaftsgespräche und direkte Integrationsberatung.
            </p>
          </div>

          {/* Photos: news-1, news-2, news-3, news-4 */}
          <NewsPhotoGallery photos={[
              { src: '/assets/images/news-1.png', alt: 'MitMachMarkt Stand 1' },
              { src: '/assets/images/news-2.png', alt: 'MitMachMarkt Stand 2' },
              { src: '/assets/images/news-3.png', alt: 'MitMachMarkt Stand 3' },
              { src: '/assets/images/news-4.png', alt: 'MitMachMarkt Stand 4' }
            ]} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100" imageClassName="h-48 rounded-2xl overflow-hidden shadow-sm group" />
        </NewsArticle>
  );
}
