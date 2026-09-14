import type { ContactSubject } from '../../hooks/useContactInquiry';
export default function ContactSupport({
  scrollToFormWithSubject,
}: {
  scrollToFormWithSubject: (subject: ContactSubject) => void;
}) {
  return (
    <section
      id="spenden"
      className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200"
    >
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
                Jede Spende kommt direkt den Kindern und Familien in NRW zugute:
                zur Finanzierung von Schulmaterialien, Nachhilfelehrkräften und
                interkulturellen Freizeitaktivitäten. Auf Wunsch stellen wir
                Ihnen eine Spendenbescheinigung aus.
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-slate-700 space-y-1.5 mb-6">
                <div>
                  <strong>Empfänger:</strong> Engagement für Integration e.V.
                </div>
                <div>
                  <strong>Verwendungszweck:</strong> Spende Bildungs- &amp;
                  Integrationsprojekte
                </div>
                <div>
                  <strong>Kontoauskunft:</strong> Erfragen Sie gerne direkt
                  unsere IBAN via Kontaktformular oder E-Mail.
                </div>
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
          <div
            id="mitglied"
            className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-md flex flex-col justify-between scroll-mt-28"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
                Gemeinschaft gestalten
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Mitglied werden bei EFI e.V.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Werden Sie ordentliches oder förderndes Mitglied! Bringen Sie
                Ihre Ideen, Ihre Fachkompetenz oder Ihr Ehrenamt ein, um
                gemeinsam unsere Gesellschaft solidarischer zu gestalten.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mitbestimmung auf der Mitgliederversammlung</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Regelmäßige interne Projekt- und Planungsberichte</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Ein starkes Netzwerk für Vielfalt und Zivilgesellschaft
                  </span>
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
  );
}
