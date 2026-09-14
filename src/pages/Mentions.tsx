import LegalContent from '../redesign/components/LegalContent';
import PageHero from '../redesign/components/PageHero';

export default function Mentions() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageHero
        badge="Rechtliches"
        title="Impressum &amp;"
        highlight="Rechtliche Angaben"
        description="Verpflichtende Angaben nach § 5 TMG sowie Hinweise zur Verbraucher- und Streitbeilegung."
        breadcrumbs={[{ label: 'Home', to: '/' }]}
      />

      <LegalContent className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/80 space-y-8">
          
          <div className="border-b border-stone-100 pb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Engagement für Integration e.V.<br />
              (bzw. Nga und Etobe GbR im Gründungsstadium)
            </p>
          </div>

          <div className="border-b border-stone-100 pb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Kontakt</h2>
            <div className="text-slate-600 text-sm space-y-1">
              <p>Telefon: <a href="tel:+491773218743" className="text-brand-700 font-semibold hover:underline">(+49) 0 177 3218743</a></p>
              <p>E-Mail: <a href="mailto:info@engagement-integration.de" className="text-brand-700 font-semibold hover:underline">info@engagement-integration.de</a></p>
            </div>
          </div>

          <div className="border-b border-stone-100 pb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">EU-Streitschlichtung</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-700 underline hover:text-brand-800"
              >
                https://ec.europa.eu/consumers/odr/
              </a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </LegalContent>
    </div>
  );
}
