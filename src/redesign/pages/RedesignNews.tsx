import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignNews() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Page Hero */}
      <PageHero
        badge="Neuigkeiten &amp; Aktuelles"
        title="Aktuelle Berichte,"
        highlight="Ereignisse &amp; Einblicke."
        description="Erfahren Sie aus erster Hand, wie unsere Projekte Menschen zusammenbringen: von Quartiersmärkten in Merklinde über humanitäre Solidaritätsaktionen bis hin zu diplomatischen Dialogen in Berlin."
      />

      {/* 2. News Articles Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">

        {/* ========================================================================= */}
        {/* ARTICLE 1: Internationaler Austausch Berlin (Botschaft)                   */}
        {/* ========================================================================= */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                  Diplomatischer Dialog
                </span>
                <span className="text-xs text-stone-500 font-medium">20. März 2024</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Offizieller Austausch in der Botschaft in Berlin
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Am 20. März 2024 hatte unser Vorstand die ehrenvolle Gelegenheit, die Ziele und Aktivitäten unseres Vereins Engagement für Integration e.V. in den Räumlichkeiten der kamerunischen Botschaft in Berlin vorzustellen. Ziel des Treffens war es, eine enge und zukunftsorientierte Kooperation im Bereich der gesellschaftlichen und beruflichen Integration junger Migranten aufzubauen.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Im Namen des Botschafters wurden wir von Ministerberater <strong>NDO MINLA'A Salomon Richard</strong> herzlich empfangen. In einem offenen Dialog präsentierten wir unsere Vereinsprojekte, insbesondere unsere Bildungsprogramme, Sprachkurse und Unterstützung bei der Orientierung in der deutschen Gesellschaft. Ein besonderes Augenmerk lag auf der Förderung von Bildungschancen sowie der Sensibilisierung für Rechte und Pflichten von Neuzugewanderten.
              </p>

              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 text-xs text-brand-900 font-medium">
                „Wir danken der Botschaft für die herzliche Gastfreundschaft und Offenheit. Dieser Austausch bestärkt uns in unserem Engagement, junge Menschen auf ihrem Bildungsweg in Deutschland gezielt zu fördern.“
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-stone-200 group bg-stone-100">
                <img 
                  src="/assets/images/news-8.png" 
                  alt="Austausch mit der kamerunischen Botschaft in Berlin" 
                  className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs text-stone-500 mt-2.5 max-w-sm">
                Vorstand von EFI e.V. im Gespräch mit Ministerberater NDO MINLA'A Salomon Richard in Berlin.
              </p>
            </div>

          </div>
        </article>

        {/* ========================================================================= */}
        {/* ARTICLE 2: Internationale Frauenfeier zum Weltfrauentag                  */}
        {/* ========================================================================= */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                Empowerment &amp; Vielfalt
              </span>
              <span className="text-xs text-stone-500 font-medium">22. März 2024</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Internationale Frauenfeier: Vielfalt, Stärke und Zusammenhalt
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Anlässlich des Internationalen Frauentags organisierten wir eine feierliche Begegnung mit 15 engagierten Teilnehmerinnen aus verschiedenen Nationen. Die Veranstaltung bot einen geschützten und inspirierenden Raum, um die Lebenswege, Herausforderungen und Erfolge von Frauen aus unterschiedlichen Kulturen zu würdigen.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Nach einer thematischen Einführung und Reden zur Gleichberechtigung teilten die Frauen in interaktiven Gesprächsrunden ihre persönlichen Geschichten. Kulturelle Darbietungen, traditionelle Tänze und ein gemeinsames Buffet mit Spezialitäten aus den jeweiligen Herkunftsländern machten die Feier zu einem unvergesslichen Erlebnis. Den feierlichen Abschluss bildete eine Anerkennungszeremonie für jede Teilnehmerin.
            </p>
          </div>

          {/* Photos Mosaic: news-9, news-10, news-11, news-12, news-13 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-stone-100">
            {[
              { src: '/assets/images/news-9.png', alt: 'Frauenfeier Austausch' },
              { src: '/assets/images/news-10.png', alt: 'Kulturelle Präsentation' },
              { src: '/assets/images/news-11.png', alt: 'Gemeinschaft & Tanz' },
              { src: '/assets/images/news-12.png', alt: 'Gemeinsames Abendessen' },
              { src: '/assets/images/news-13.png', alt: 'Abschlusszeremonie Frauentag' }
            ].map((img, i) => (
              <div key={i} className="h-48 rounded-2xl overflow-hidden shadow-sm group">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </article>

        {/* ========================================================================= */}
        {/* ARTICLE 3: Ukraine Flüchtlinge Willkommen                                  */}
        {/* ========================================================================= */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            {[
              { src: '/assets/images/news-5.png', alt: 'Willkommensveranstaltung Ukraine 1' },
              { src: '/assets/images/news-6.png', alt: 'Willkommensveranstaltung Ukraine 2' },
              { src: '/assets/images/news-7.png', alt: 'Willkommensveranstaltung Ukraine 3' }
            ].map((img, i) => (
              <div key={i} className="h-60 rounded-2xl overflow-hidden shadow-sm group">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </article>

        {/* ========================================================================= */}
        {/* ARTICLE 4: Merklinder MitMachMarkt                                        */}
        {/* ========================================================================= */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100">
            {[
              { src: '/assets/images/news-1.png', alt: 'MitMachMarkt Stand 1' },
              { src: '/assets/images/news-2.png', alt: 'MitMachMarkt Stand 2' },
              { src: '/assets/images/news-3.png', alt: 'MitMachMarkt Stand 3' },
              { src: '/assets/images/news-4.png', alt: 'MitMachMarkt Stand 4' }
            ].map((img, i) => (
              <div key={i} className="h-48 rounded-2xl overflow-hidden shadow-sm group">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </article>

      </div>

      {/* 3. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
