import { useState } from 'react';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignAboutUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const valuesList = [
    {
      title: 'Unser Engagement',
      subtitle: 'Inklusion & Solidarität',
      desc: 'Unsere Organisation, gegründet auf festen Werten von Inklusion und gelebter Solidarität, engagiert sich aktiv für die gelungene Integration von Migranten und Geflüchteten – unabhängig von Herkunft, Sprache oder Religion.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Mission & Ziel',
      subtitle: 'Nachhaltige Selbstständigkeit',
      desc: 'Als gemeinnützige Migrantenselbstorganisation ist es unsere zentrale Aufgabe, den Ankommenden das notwendige Rüstzeug an die Hand zu geben, um sich selbstbestimmt zu entfalten und als gleichberechtigte Bürger zur Gesellschaft beizutragen.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Vielfalt als Reichtum',
      subtitle: 'Ganzheitliche Begleitung',
      desc: 'Wir betrachten Diversität als Stärke für ganz Deutschland. Unser Handeln deckt alle Lebensbereiche ab: Zugang zu Grunddiensten wie Wohnen, mehrsprachige Bildung, Gesundheitsversorgung sowie aktive Unterstützung bei Sprache und Arbeitsmarkteinstieg.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Starke Partnerschaften',
      subtitle: 'Gemeinsam vor Ort',
      desc: 'In enger Kooperation mit Kommunen, städtischen Behörden, Schulen, regionalen Unternehmen und engagierten Ehrenamtlichen realisieren wir zielgenaue Programme zur Emanzipation und sozialen Teilhabe.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Willkommenskultur',
      subtitle: 'Aufklärung & Dialog',
      desc: 'Wir fördern aktiv den interkulturellen Dialog und gegenseitigen Respekt durch offene Begegnungsräume, Bürgerfeste, Aufklärungsworkshops und den direkten Austausch mit der Mehrheitsgesellschaft.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Würdige Zukunft',
      subtitle: 'Perspektiven schaffen',
      desc: 'Wir streben nach einer Zukunft, in der jeder Mensch – gleich welcher Herkunft – die Chance erhält, sein volles Potenzial in Würde und Gleichberechtigung zu entfalten.',
      icon: (
        <svg className="w-6 h-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Subpage Hero */}
      <PageHero
        badge="Über uns"
        title="Gemeinsam damit gleichberechtigte"
        highlight="Teilhabe gelingt."
        description="Engagement für Integration e.V. ist eine anerkannte Migrantenselbstorganisation. Wir setzen uns mit Herzblut dafür ein, Brücken zu bauen, Vorurteile abzubauen und gleiche Zukunftschancen für alle zu verwirklichen."
      />

      {/* 2. Mission, Core Values & Quick Contact Sidebar */}
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
              {valuesList.map((val, idx) => (
                <div 
                  key={idx} 
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

      {/* 3. Unser Team (Anita Nga & Alex Etobe) */}
      <section className="bg-white py-16 sm:py-24 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
              Vorstand &amp; Leitung
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Die Menschen hinter EFI e.V.
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Verlässlichkeit, interkulturelle Kompetenz und Herzblut prägen die Führung unserer Organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Anita Nga */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-stone-200">
                <img 
                  src="/assets/images/partner-3.png" 
                  alt="Anita Nga — Vorsitzende" 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
                  Vorsitzende
                </span>
                <h3 className="text-xl font-bold text-slate-900">Anita Nga</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leitung der Integrations- und Bildungsinitiativen, Koordination von Frauen- und Familienprojekten.
                </p>
                <a 
                  href="mailto:anita.nga@engagement-integration.de" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800 pt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  anita.nga@engagement-integration.de
                </a>
              </div>
            </div>

            {/* Alex Etobe */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-stone-200">
                <img 
                  src="/assets/images/partner-4.png" 
                  alt="Alex Etobe — Vorsitzender" 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
                  Vorsitzender
                </span>
                <h3 className="text-xl font-bold text-slate-900">Alex Etobe</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategische Entwicklung, institutionelle Partnerschaften und Kooperation mit öffentlichen Trägern.
                </p>
                <a 
                  href="mailto:alex.etobe@engagement-integration.de" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800 pt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  alex.etobe@engagement-integration.de
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Partner Network (Original image logos + KIM & Kreis Recklinghausen) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            Netzwerk &amp; Förderer
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Unsere Partner &amp; Unterstützer
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Zusammen mit starken Institutionen und Trägern setzen wir erfolgreiche Maßnahmen zur gesellschaftlichen Teilhabe um.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {[
            { src: '/assets/images/logo-kreis-recklinghausen.png', alt: 'Kreis Recklinghausen' },
            { src: '/assets/images/logo-kim-nrw.png', alt: 'KIM — Kommunales Integrationsmanagement NRW' },
            { src: '/assets/images/image-10.png', alt: 'Partner Institution' },
            { src: '/assets/images/image-4.png', alt: 'Partner Organisation' },
            { src: '/assets/images/image-5.png', alt: 'Partner Netzwerk' },
            { src: '/assets/images/image-6.png', alt: 'Partner Träger' },
            { src: '/assets/images/image-7.png', alt: 'Kooperationspartner' },
            { src: '/assets/images/image-8.png', alt: 'Unterstützer' }
          ].map((partner, i) => (
            <div 
              key={i} 
              className="w-full h-24 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-center hover:border-brand-500 transition-colors"
            >
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="max-h-14 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Reusable Share CTA */}
      <ShareCTA />

      {/* 6. Inline Contact Form */}
      <section id="kontakt-formular" className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              Kontakt aufnehmen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sich zu informieren, ist bereits eine Hilfe
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Haben Sie Fragen zu unserem Verein, unseren Angeboten oder möchten Sie sich ehrenamtlich einbringen? Schreiben Sie uns direkt!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-stone-200/80">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-brand-50 rounded-2xl border border-brand-200">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-900">Vielen Dank für Ihre Nachricht!</h3>
                <p className="text-sm text-brand-800">
                  Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ihr Nachname"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Vorname *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ihr Vorname"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    E-Mail Adresse *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="beispiel@domain.de"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ihre Nachricht *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Wie können wir Ihnen weiterhelfen oder wie möchten Sie mitwirken?"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md hover:shadow-lg transition-all"
                >
                  Nachricht jetzt absenden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
