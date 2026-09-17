import PageMeta from '../i18n/PageMeta';
import LegalContent from '../redesign/components/LegalContent';
import PageHero from '../redesign/components/PageHero';

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageMeta routeId="privacy" />
      <PageHero
        badge="Datenschutz"
        title="Datenschutzerklärung"
        highlight="nach DSGVO"
        description="Transparenz und Schutz Ihrer persönlichen Daten: Erfahren Sie, wie wir Daten erheben, verarbeiten und welche Rechte Ihnen zustehen."
        breadcrumbs={[{ label: 'Home', routeId: 'home' }]}
      />

      <LegalContent className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/80 space-y-10 text-slate-700 text-sm leading-relaxed">
        {/* Section 1 */}
        <div className="border-b border-stone-100 pb-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-bold text-slate-800">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="font-bold text-slate-800 pt-2">
            Datenerfassung auf dieser Website
          </h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
            entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben. Andere Daten werden automatisch oder
            nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst (vor allem technische Daten wie Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten sowie Berichtigung oder Löschung zu verlangen. Zudem steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </div>

        {/* Section 2 */}
        <div className="border-b border-stone-100 pb-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="font-bold text-slate-800">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="font-bold text-slate-800 pt-2">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
            <br />
            <strong>Engagement für Integration e.V.</strong>
            <br />
            E-Mail:{' '}
            <a
              href="mailto:info@engagement-integration.de"
              className="text-brand-700 font-semibold hover:underline"
            >
              info@engagement-integration.de
            </a>
            <br />
            Telefon:{' '}
            <a
              href="tel:+491773218743"
              className="text-brand-700 font-semibold hover:underline"
            >
              (+49) 0 177 3218743
            </a>
          </p>

          <h3 className="font-bold text-slate-800 pt-2">Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt oder Sie
            Ihre Einwilligung widerrufen.
          </p>
        </div>

        {/* Section 3 */}
        <div className="border-b border-stone-100 pb-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-bold text-slate-800">
            Kontaktformular &amp; E-Mail Anfragen
          </h3>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
            lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
            ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist, oder auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            4. Analyse &amp; Plugins
          </h2>
          <h3 className="font-bold text-slate-800">
            Hosting &amp; Reichweitenmessung
          </h3>
          <p>
            Diese Website wird datenschutzfreundlich gehostet. Zur statistischen
            Analyse der Nutzung ohne Personenbezug können anonymisierte
            Server-Logfiles erhoben werden.
          </p>
          <h3 className="font-bold text-slate-800 pt-2">Google Maps</h3>
          <p>
            Diese Seite kann interaktive Kartendienste nutzen, um Ihnen unsere
            Standorte in Castrop-Rauxel und Dortmund darzustellen. Zur Nutzung
            der Funktionen von Google Maps ist es technisch notwendig, Ihre
            IP-Adresse zu verarbeiten. Dies stellt ein berechtigtes Interesse im
            Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
        </div>
      </LegalContent>
    </div>
  );
}
