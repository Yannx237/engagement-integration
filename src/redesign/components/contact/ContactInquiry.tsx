import { useFormConfirmation } from '../../hooks/useFormConfirmation';
import type { ContactSubject } from '../../hooks/useContactInquiry';
interface ContactInquiryProps {
  selectedSubject: ContactSubject;
  onSubjectChange: (subject: ContactSubject) => void;
  messageText?: string;
  onMessageChange?: (msg: string) => void;
}

export default function ContactInquiry({
  selectedSubject,
  onSubjectChange,
  messageText = '',
  onMessageChange,
}: ContactInquiryProps) {
  const { formSubmitted, handleSubmit } = useFormConfirmation();
  return (
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
            Ob Nachhilfeunterricht für Ihr Kind, Beratung zu Sprachkursen,
            ehrenamtliches Engagement als Tandem-Partner oder institutionelle
            Zusammenarbeit: Füllen Sie einfach das Formular aus, wir melden uns
            umgehend bei Ihnen.
          </p>

          <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100 space-y-4">
            <h4 className="font-bold text-brand-900 text-sm flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Datenschutz &amp; Diskretion
            </h4>
            <p className="text-xs text-brand-800 leading-relaxed">
              Ihre Angaben werden vertraulich behandelt und ausschließlich zur
              Beantwortung Ihrer persönlichen Anfrage verwendet. Keine
              Weitergabe an unbefugte Dritte.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
          {formSubmitted ? (
            <div className="p-8 text-center space-y-3 bg-brand-50 rounded-2xl border border-brand-200">
              <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-900">
                Nachricht erfolgreich versendet!
              </h3>
              <p className="text-sm text-brand-800">
                Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird Ihre
                Anfrage zeitnah bearbeiten.
              </p>
            </div>
          ) : (
            <form
              id="kontaktformular"
              onSubmit={handleSubmit}
              className="space-y-5 scroll-mt-40"
            >
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
                  onChange={(e) =>
                    onSubjectChange(e.target.value as ContactSubject)
                  }
                >
                  <option value="allgemein">Allgemeine Anfrage</option>
                  <option value="nachhilfe">
                    Kostenfreie Nachhilfe (Deutsch, Mathe, Englisch)
                  </option>
                  <option value="beratung">
                    Integrationsberatung &amp; Sprachcafé
                  </option>
                  <option value="tandem">
                    Tandem-Patenschaften / Mentoring
                  </option>
                  <option value="spende">
                    Spenden &amp; Förderpartnerschaft
                  </option>
                  <option value="mitglied">Mitgliedschaft im Verein</option>
                  <option value="shop">
                    Bestellung Solidar-Shop (Merchandise)
                  </option>
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
                  value={messageText}
                  onChange={(e) => onMessageChange?.(e.target.value)}
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
  );
}
