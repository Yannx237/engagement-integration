import { LocalizedLink } from '../i18n/LocalizedLink';
import Logo from '../components/Logo';

export default function RedesignFooter() {
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10 border-t border-brand-800" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">

          <div className="md:col-span-2 lg:col-span-5 space-y-5">
            <LocalizedLink routeId="home" className="flex items-center gap-3 w-fit focus:outline-none">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-limeAccent-500 shadow-md flex items-center justify-center flex-shrink-0">
                <Logo size={46} className="w-full h-full" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-none">EFI - </span>
                <span className="text-[11px] text-limeAccent-400 font-semibold tracking-wider mt-1 block">Engagement für Integration e.V.</span>
              </div>
            </LocalizedLink>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Vereint für Integration, geführt von Vielfalt. Als anerkannte Migrantenselbstorganisation fördern wir gesellschaftlichen Zusammenhalt, mehrsprachige Bildung und nachhaltige Zukunftschancen in ganz NRW.
            </p>
            <div className="text-xs text-stone-400">
              Gemeinnütziger Verein • Eingetragen im Vereinsregister
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="home">Startseite</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="about">Über uns &amp; Team</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="projects">Unsere Projekte</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="international">EFI International</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="news">Neuigkeiten &amp; Presse</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact">Kontakt &amp; Beratung</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact" query="?thema=spende" hash="#spenden">Spenden &amp; Fördern</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact" query="?thema=mitglied" hash="#mitglied">Mitglied werden</LocalizedLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">Standorte &amp; Kontakt</h4>
            <div className="text-xs sm:text-sm text-stone-300 space-y-3">
              <div>
                <strong className="text-white block font-bold">Castrop-Rauxel (Zentrum):</strong>
                <span>Begegnungszentrum Merklinde, Wittener Str. 322B, 44577 Castrop-Rauxel</span>
              </div>
              <div>
                <strong className="text-white block font-bold">Dortmund (Netzwerk-Hub):</strong>
                <span>Tandem-Partnerschaften &amp; Mentoring</span>
              </div>
              <div>
                <strong className="text-white block font-bold">Berlin (Bundesnetzwerk):</strong>
                <span>Hauptstadt-Dialog &amp; Botschafts-Austausch</span>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a className="text-limeAccent-400 hover:underline inline-flex items-center gap-1.5 font-medium" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
                  <span>WhatsApp: +49 (0) 177 3218743</span>
                </a>
                <a className="text-stone-300 hover:text-white transition-colors break-words" href="mailto:info@engagement-integration.de">
                  info@engagement-integration.de
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left text-xs text-stone-400">
          <p>© 2026 EFI - Engagement für Integration e.V. – Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <LocalizedLink className="hover:text-white transition-colors" routeId="imprint">Impressum</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="privacy">Datenschutzerklärung</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="about">Transparenz</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="contact">Barrierefreiheit</LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
