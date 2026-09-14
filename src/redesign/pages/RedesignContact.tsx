import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('allgemein');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const thema = params.get('thema');

    if (thema === 'spende' || thema === 'spenden' || location.hash === '#spenden') {
      setSelectedSubject('spende');
      const targetId = thema === 'spende' && location.hash === '#kontaktformular' ? '#kontaktformular' : '#spenden';
      const elem = document.querySelector(targetId);
      if (elem) {
        setTimeout(() => elem.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    } else if (thema === 'mitglied' || location.hash === '#mitglied') {
      setSelectedSubject('mitglied');
      const targetId = thema === 'mitglied' && location.hash === '#kontaktformular' ? '#kontaktformular' : '#mitglied';
      const elem = document.querySelector(targetId);
      if (elem) {
        setTimeout(() => elem.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    } else if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => elem.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, [location]);

  const scrollToFormWithSubject = (sub: string) => {
    setSelectedSubject(sub);
    const formElem = document.getElementById('kontaktformular');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Subpage Hero */}
      <PageHero
        badge="Kontakt &amp; Beratung"
        title="Sich zu informieren, ist bereits"
        highlight="eine weitere Hilfe."
        description="Wir haben stets ein offenes Ohr für Ihre Anliegen, Fragen zu unseren Angeboten oder Kooperationswünsche. Nehmen Sie direkt Kontakt zu unserem Team in Castrop-Rauxel und Dortmund auf."
      />

      {/* 2. Three Main Contact Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: E-Mail */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
                Schriftlicher Kontakt
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Mail Beratung</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Unser freundliches Team steht Ihnen bei allen Fragen gerne und zeitnah zur Verfügung.
              </p>
            </div>
            <a 
              href="mailto:info@engagement-integration.de" 
              className="font-bold text-sm text-brand-700 hover:text-brand-800 break-all"
            >
              info@engagement-integration.de
            </a>
          </div>

          {/* Card 2: Büros */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
                Vor Ort Treffen
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Standorte</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Besuchen Sie uns in unserem Begegnungszentrum oder vereinbaren Sie einen Termin im Netzwerk-Hub.
              </p>
            </div>
            <div className="text-xs text-slate-700 space-y-1">
              <div><strong>Castrop-Rauxel:</strong> Wittener Str. 322B (Begegnungszentrum)</div>
              <div><strong>Dortmund:</strong> Netzwerk-Hub &amp; Patenschaften</div>
            </div>
          </div>

          {/* Card 3: Telefon & WhatsApp */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
                Telefonisch &amp; WhatsApp
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direkter Anruf</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Montag bis Freitag durchgehend von 8:00 bis 17:00 Uhr für Sie erreichbar.
              </p>
            </div>
            <a 
              href="tel:+491773218743" 
              className="font-bold text-base text-brand-700 hover:text-brand-800"
            >
              (+49) 0 177 3218743
            </a>
          </div>

        </div>
      </section>

      {/* 3. Interactive Contact Form & Inquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              Nachricht senden
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Wir freuen uns auf Ihre Nachricht
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Ob Nachhilfeunterricht für Ihr Kind, Beratung zu Sprachkursen, ehrenamtliches Engagement als Tandem-Partner oder institutionelle Zusammenarbeit: Füllen Sie einfach das Formular aus, wir melden uns umgehend bei Ihnen.
            </p>

            <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100 space-y-4">
              <h4 className="font-bold text-brand-900 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Datenschutz &amp; Diskretion
              </h4>
              <p className="text-xs text-brand-800 leading-relaxed">
                Ihre Angaben werden vertraulich behandelt und ausschließlich zur Beantwortung Ihrer persönlichen Anfrage verwendet. Keine Weitergabe an unbefugte Dritte.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-brand-50 rounded-2xl border border-brand-200">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-900">Nachricht erfolgreich versendet!</h3>
                <p className="text-sm text-brand-800">
                  Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird Ihre Anfrage zeitnah bearbeiten.
                </p>
              </div>
            ) : (
              <form id="kontaktformular" onSubmit={handleSubmit} className="space-y-5 scroll-mt-32">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-Mail Adresse *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ihre.mail@beispiel.de"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefonnummer (optional)
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+49 ..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Anliegen / Betreff *
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="nachhilfe">Kostenfreie Nachhilfe (Deutsch, Mathe, Englisch)</option>
                    <option value="beratung">Integrationsberatung &amp; Sprachcafé</option>
                    <option value="tandem">Tandem-Patenschaften / Mentoring</option>
                    <option value="spende">Spenden &amp; Förderpartnerschaft</option>
                    <option value="mitglied">Mitgliedschaft im Verein</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ihre Nachricht *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Frage..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-slate-800 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 px-6 rounded-full text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-md hover:shadow-lg transition-all"
                >
                  Nachricht jetzt absenden
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. Spenden & Mitglied werden (Explicit Anchors #spenden & #mitglied) */}
      <section id="spenden" className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Spenden Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-md flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-limeAccent-100 text-limeAccent-800 text-xs font-bold uppercase tracking-wider mb-4">
                  Gemeinnützig &amp; Steuerlich absetzbar
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                  Spenden für Chancengleichheit
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Jede Spende kommt direkt den Kindern und Familien in NRW zugute: zur Finanzierung von Schulmaterialien, Nachhilfelehrkräften und interkulturellen Freizeitaktivitäten. Auf Wunsch stellen wir Ihnen eine Spendenbescheinigung aus.
                </p>
                
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-slate-700 space-y-1.5 mb-6">
                  <div><strong>Empfänger:</strong> Engagement für Integration e.V.</div>
                  <div><strong>Verwendungszweck:</strong> Spende Bildungs- &amp; Integrationsprojekte</div>
                  <div><strong>Kontoauskunft:</strong> Erfragen Sie gerne direkt unsere IBAN via Kontaktformular oder E-Mail.</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href="mailto:info@engagement-integration.de?subject=Spende%20Engagement%20f%C3%BCr%20Integration"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 transition-colors shadow-sm"
                >
                  Spendeninfos per E-Mail
                </a>
                <button
                  type="button"
                  onClick={() => scrollToFormWithSubject('spende')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors cursor-pointer"
                >
                  Direkt im Formular anfragen ↓
                </button>
              </div>
            </div>

            {/* Mitglied werden Box */}
            <div id="mitglied" className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-md flex flex-col justify-between scroll-mt-28">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
                  Gemeinschaft gestalten
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                  Mitglied werden bei EFI e.V.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Werden Sie ordentliches oder förderndes Mitglied! Bringen Sie Ihre Ideen, Ihre Fachkompetenz oder Ihr Ehrenamt ein, um gemeinsam unsere Gesellschaft solidarischer zu gestalten.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Mitbestimmung auf der Mitgliederversammlung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Regelmäßige interne Projekt- und Planungsberichte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Ein starkes Netzwerk für Vielfalt und Zivilgesellschaft</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href="mailto:info@engagement-integration.de?subject=Mitgliedsantrag%20EFI%20e.V."
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-brand-900 hover:bg-stone-100 border border-stone-300 transition-colors"
                >
                  Mitgliedsantrag per E-Mail
                </a>
                <button
                  type="button"
                  onClick={() => scrollToFormWithSubject('mitglied')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors cursor-pointer"
                >
                  Direkt im Formular anfragen ↓
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
