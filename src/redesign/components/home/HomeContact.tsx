export default function HomeContact() {
  return (
    <section
      className="py-24 bg-white scroll-mt-28"
      data-purpose="contact-and-inquiry"
      id="kontakt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">
                Kontaktieren Sie uns
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sich zu informieren, ist bereits eine weitere Hilfe.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Haben Sie Fragen zu unseren kostenfreien Nachhilfekursen,
                möchten Sie ehrenamtlich mitwirken oder benötigen Sie Beratung
                bei Behördenschreiben? Schreiben Sie uns oder kommen Sie vorbei.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Zentraler Standort
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    Begegnungszentrum Merklinde
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    Wittener Str. 322B, 44577 Castrop-Rauxel
                  </p>
                  <span className="text-[11px] text-brand-700 font-semibold mt-1 block">
                    Barrierefreier Zugang • ÖPNV-nah
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Telefon &amp; WhatsApp
                  </h4>
                  <a
                    className="text-sm font-bold text-slate-900 block mt-0.5 hover:text-emerald-700 transition-colors"
                    href="https://wa.me/491773218743"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +49 (0) 177 3218743
                  </a>
                  <a
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-1"
                    href="https://wa.me/491773218743"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Direkt per WhatsApp schreiben</span> →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    E-Mail &amp; Anfragen
                  </h4>
                  <a
                    className="text-sm font-semibold text-brand-700 hover:text-brand-900 block mt-0.5"
                    href="mailto:info@engagement-integration.de"
                  >
                    info@engagement-integration.de
                  </a>
                  <span className="text-xs text-slate-500 block">
                    engagementintegration@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Sprechzeiten &amp; Treffen
                  </h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    <strong className="font-bold">Dienstag – Freitag:</strong>{' '}
                    10:00 – 17:00 Uhr
                  </p>
                  <p className="text-xs text-slate-700">
                    <strong className="font-bold">Samstag:</strong> 11:00 –
                    13:00 Uhr (Tandem-Gruppe)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-sand-50 rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-subtle">
              <form
                action="#"
                className="space-y-6"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      htmlFor="first-name"
                    >
                      Vorname
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400"
                      id="first-name"
                      name="first-name"
                      placeholder="z. B. Amina"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      htmlFor="last-name"
                    >
                      Nachname
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400"
                      id="last-name"
                      name="last-name"
                      placeholder="z. B. Schmidt"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="email"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400"
                    id="email"
                    name="email"
                    placeholder="name@beispiel.de"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="topic"
                  >
                    Anliegen / Bereich
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all"
                    id="topic"
                    name="topic"
                  >
                    <option value="nachhilfe">
                      Kostenfreie Nachhilfe anfragen
                    </option>
                    <option value="deutschkurs">
                      Deutschkurse &amp; Frauencafé
                    </option>
                    <option value="beratung">Niedrigschwellige Beratung</option>
                    <option value="ehrenamt">Ehrenamt / Mitgliedschaft</option>
                    <option value="spende">Spenden &amp; Sponsoring</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    htmlFor="message"
                  >
                    Ihre Nachricht
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400"
                    id="message"
                    name="message"
                    placeholder="Wie können wir Ihnen weiterhelfen?"
                    required
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    className="rounded border-stone-300 text-brand-700 focus:ring-brand-600 mt-1"
                    id="privacy"
                    required
                    type="checkbox"
                  />
                  <label className="text-xs text-slate-600" htmlFor="privacy">
                    Ich stimme der Verarbeitung meiner Angaben zum Zweck der
                    Bearbeitung meiner Kontaktanfrage gemäß der
                    Datenschutzerklärung zu.
                  </label>
                </div>
                <button
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-brand-800 hover:bg-brand-900 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <svg
                    className="w-4 h-4 text-limeAccent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>Nachricht absenden</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
