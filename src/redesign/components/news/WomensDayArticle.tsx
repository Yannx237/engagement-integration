import NewsArticle from './NewsArticle';
import NewsPhotoGallery from './NewsPhotoGallery';

export default function WomensDayArticle() {
  return (
    <NewsArticle>
      <div className="max-w-3xl space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            Empowerment &amp; Vielfalt
          </span>
          <span className="text-xs text-stone-500 font-medium">
            22. März 2024
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          Internationale Frauenfeier: Vielfalt, Stärke und Zusammenhalt
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Anlässlich des Internationalen Frauentags organisierten wir eine
          feierliche Begegnung mit 15 engagierten Teilnehmerinnen aus
          verschiedenen Nationen. Die Veranstaltung bot einen geschützten und
          inspirierenden Raum, um die Lebenswege, Herausforderungen und Erfolge
          von Frauen aus unterschiedlichen Kulturen zu würdigen.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Nach einer thematischen Einführung und Reden zur Gleichberechtigung
          teilten die Frauen in interaktiven Gesprächsrunden ihre persönlichen
          Geschichten. Kulturelle Darbietungen, traditionelle Tänze und ein
          gemeinsames Buffet mit Spezialitäten aus den jeweiligen
          Herkunftsländern machten die Feier zu einem unvergesslichen Erlebnis.
          Den feierlichen Abschluss bildete eine Anerkennungszeremonie für jede
          Teilnehmerin.
        </p>
      </div>

      {/* Photos Mosaic: news-9, news-10, news-11, news-12, news-13 */}
      <NewsPhotoGallery
        photos={[
          { src: '/assets/images/news-9.png', alt: 'Frauenfeier Austausch' },
          { src: '/assets/images/news-10.png', alt: 'Kulturelle Präsentation' },
          { src: '/assets/images/news-11.png', alt: 'Gemeinschaft & Tanz' },
          { src: '/assets/images/news-12.png', alt: 'Gemeinsames Abendessen' },
          {
            src: '/assets/images/news-13.png',
            alt: 'Abschlusszeremonie Frauentag',
          },
        ]}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-stone-100"
        imageClassName="h-48 rounded-2xl overflow-hidden shadow-sm group"
      />
    </NewsArticle>
  );
}
