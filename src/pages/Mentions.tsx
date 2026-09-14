import LegalContent from '../redesign/components/LegalContent';
import PageHero from '../redesign/components/PageHero';

export default function Mentions() {
  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      <PageHero
        badge="Rechtliches"
        title="Impressum &amp;"
        highlight="Rechtliche Angaben"
        description="Angaben zum Verein, Kontaktinformationen und rechtliche Hinweise."
        breadcrumbs={[{ label: 'Home', to: '/' }]}
      />

      <LegalContent className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/80 space-y-8">
        <div className="border-b border-stone-100 pb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            EFI-Engagement für Integration e.V.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ginsterweg 14
            <br />
            44575 Castrop-Rauxel
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            Vereinsregister: VR7781<br />
            Registergericht: Amtsgericht Dortmund
          </p>
        </div>

        <div className="border-b border-stone-100 pb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Vertreten durch</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Anita Nga (Vorstandsvorsitzende)
          </p>
        </div>

        <div className="border-b border-stone-100 pb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Kontakt</h2>
          <div className="text-slate-600 text-sm space-y-1">
            <p>
              Telefon:{' '}
              <a
                href="tel:+491773218743"
                className="text-brand-700 font-semibold hover:underline"
              >
                (+49)0 177 3218743
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:engagementintegration@gmail.com"
                className="text-brand-700 font-semibold hover:underline break-words"
              >
                engagementintegration@gmail.com
              </a>
            </p>
            <p>Postanschrift: Klarastr.19<br />44388 Dortmund</p>
            <p>Weitere Präsenz: Berlin</p>
          </div>
        </div>

        <div className="border-b border-stone-100 pb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Haftungsausschluss (Disclaimer)
          </h2>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Haftung für Inhalte</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Haftung für Links</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Urheberrecht
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autoren bzw. Ersteller. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </LegalContent>
    </div>
  );
}
