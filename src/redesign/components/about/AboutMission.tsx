import { valuesList } from '../../data/about';
export default function AboutMission() {

  return (
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Values Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
                Wer wir sind
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Unser Leitbild: Solidarität, Bildung und Chancengleichheit
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Seit unserer Gründung begleiten wir Menschen mit Migrations- und Fluchtbiografie bei ihren ersten Schritten und auf ihrem langfristigen Lebensweg in Deutschland. Wir sind Ansprechpartner, Wegweiser und verlässlicher Partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valuesList.map((val) => (
                <div 
                  key={val.title}
                  className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {val.icon}
                  </div>
                  <span className="text-[11px] font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
                    {val.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Direct Info Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 text-white p-8 shadow-xl border border-brand-800">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800 text-limeAccent-400 text-xs font-bold uppercase tracking-wider mb-4">
                  Direkter Kontakt
                </span>
                <h3 className="text-xl font-bold text-white mb-6">
                  Wir sind für Sie da
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0 text-limeAccent-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 uppercase tracking-wider block">E-Mail</span>
                      <a href="mailto:info@engagement-integration.de" className="text-white font-medium hover:text-limeAccent-400 transition-colors">
                        info@engagement-integration.de
                      </a>
                      <p className="text-xs text-stone-400 mt-0.5">Schnelle Antwort werktags binnen 24h.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0 text-limeAccent-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 uppercase tracking-wider block">Standorte</span>
                      <strong className="text-white block font-semibold">Castrop-Rauxel</strong>
                      <span className="text-xs text-stone-300 block">Begegnungszentrum Merklinde, Wittener Str. 322B</span>
                      <strong className="text-white block font-semibold mt-1">Dortmund</strong>
                      <span className="text-xs text-stone-300 block">Netzwerk-Hub &amp; Tandem-Partnerschaften</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-800/80 border border-brand-700 flex items-center justify-center flex-shrink-0 text-limeAccent-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 uppercase tracking-wider block">Telefon / WhatsApp</span>
                      <a href="tel:+491773218743" className="text-white font-semibold hover:text-limeAccent-400 transition-colors">
                        (+49) 0 177 3218743
                      </a>
                      <p className="text-xs text-stone-400 mt-0.5">Montag bis Freitag, 8:00 – 17:00 Uhr.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-800">
                  <a 
                    href="#kontakt-formular"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 transition-colors"
                  >
                    Nachricht senden
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
