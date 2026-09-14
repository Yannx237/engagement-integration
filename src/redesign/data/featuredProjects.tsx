import type { ReactNode } from 'react';
export interface FeaturedProject {
  id: string;
  image: string;
  imageAlt: string;
  badges: ReactNode;
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
  footer: ReactNode;
}
export const featuredProjects: readonly FeaturedProject[] = [{
    id: 'featured-1',
    image: "/assets/images/project-tandem.jpg",
    imageAlt: "Tandem statt Barriere – Inklusives Radfahren in Castrop-Rauxel",
    badges: (<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Castrop-Rauxel
                </span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-red-600/90 text-white shadow-sm">
                  Aktion Mensch
                </span>
</div>),
    category: (<>Inklusion &amp; Mobilität</>),
    title: (<>
                  Tandem statt Barriere
                </>),
    description: (<>
                  Gemeinsam mobil werden: Fahr- &amp; Sicherheitstrainings für Menschen mit und ohne Behinderung jeden Alters. Fahrräder &amp; Begleitung vorhanden.
                </>),
    footer: (<>
<span className="text-limeAccent-300 font-semibold">Sa 11:00–13:00 Uhr</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors flex items-center gap-1" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
  <span>WhatsApp</span> →
</a>
</>),
  },
{
    id: 'featured-2',
    image: "/assets/images/project-digitale-frauen.jpg",
    imageAlt: "Digitale Orientierung im Alltag für Frauen",
    badges: (<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Castrop-Rauxel
                </span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-brand-800 text-white shadow-sm">
                  KIM NRW &amp; Land
                </span>
</div>),
    category: (<>Frauen &amp; Digitales</>),
    title: (<>
                  Digitale Orientierung im Alltag
                </>),
    description: (<>
                  Für geflüchtete &amp; zugewanderte Frauen: Online-Termine bei Bürgeramt/Jobcenter, Dokumente scannen, Kita-Apps &amp; Postfach selbstständig nutzen.
                </>),
    footer: (<>
<span className="text-stone-300">2x im Monat</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Anmelden →</a>
</>),
  },
{
    id: 'featured-3',
    image: "/assets/images/projet-10.png",
    imageAlt: "Kostenfreie schulische Nachhilfe und Betreuung",
    badges: (<div className="absolute top-3 left-3">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  100% Kostenfrei
                </span>
</div>),
    category: (<>Schule &amp; Jugend</>),
    title: (<>
                  Kostenfreie Nachhilfe
                </>),
    description: (<>
                  Qualifizierte Begleitung in Deutsch, Französisch, Mathematik und Englisch für Kinder aller Altersstufen in Castrop-Rauxel und Dortmund.
                </>),
    footer: (<>
<span className="text-stone-300">Wöchentlich</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Details →</a>
</>),
  },
{
    id: 'featured-4',
    image: "/assets/images/projet-8.png",
    imageAlt: "Frauencafé im Begegnungszentrum Merklinde",
    badges: (<div className="absolute top-3 left-3">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Merklinde
                </span>
</div>),
    category: (<>Begegnung &amp; Austausch</>),
    title: (<>
                  Frauencafé Castrop-Rauxel
                </>),
    description: (<>
                  Ein geschützter Raum zum Kennenlernen, Deutsch sprechen, Erfahrungen austauschen und Kraft tanken bei Kaffee &amp; guten Gesprächen.
                </>),
    footer: (<>
<span className="text-stone-300">Regelmäßig</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Kennenlernen →</a>
</>),
  }];
