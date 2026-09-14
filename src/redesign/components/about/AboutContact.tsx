import { useFormConfirmation } from '../../hooks/useFormConfirmation';
export default function AboutContact() {
  const { formSubmitted, handleSubmit } = useFormConfirmation();
  return (
    <section
      id="kontakt-formular"
      className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            Kontakt aufnehmen
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sich zu informieren, ist bereits eine Hilfe
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Haben Sie Fragen zu unserem Verein, unseren Angeboten oder möchten
            Sie sich ehrenamtlich einbringen? Schreiben Sie uns direkt!
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-stone-200/80">
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
                Vielen Dank für Ihre Nachricht!
              </h3>
              <p className="text-sm text-brand-800">
                Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich
                bei Ihnen.
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
  );
}
