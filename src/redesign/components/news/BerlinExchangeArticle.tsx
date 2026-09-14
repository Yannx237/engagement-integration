import NewsArticle from './NewsArticle';

export default function BerlinExchangeArticle() {

  return (
<NewsArticle>
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
        </NewsArticle>
  );
}
