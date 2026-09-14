import { useRef } from 'react';
import StandorteMap from './StandorteMap';

export default function RedesignHome() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const shopContainerRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      projectsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollShop = (direction: 'left' | 'right') => {
    if (shopContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      shopContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <main>

<section className="relative overflow-hidden bg-brand-deep text-white min-h-[85vh] flex items-center scroll-mt-28" data-purpose="hero-section" id="hero">

<div className="absolute inset-0 z-0">
  <img 
    alt="Hände der Solidarität vor der deutschen Flagge" 
    className="w-full h-full object-cover object-center opacity-65 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out" 
    src="/assets/images/banner-2.png"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/75 to-brand-deep/50"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-limeAccent-500/15 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-8 space-y-7">

<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/80 border border-limeAccent-500/30 text-limeAccent-400 text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-limeAccent-400 animate-ping"></span>
              Anerkannte Migrantenselbstorganisation • Castrop-Rauxel &amp; Dortmund
            </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Gemeinsam, damit <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeAccent-400 to-emerald-300 underline decoration-limeAccent-500/50 decoration-wavy decoration-2">gleichberechtigte Teilhabe</span> gelingt.
            </h1>

<p className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl">
              Wir begleiten Kinder, Jugendliche, Geflüchtete und Familien auf ihrem Weg zur aktiven gesellschaftlichen Mitgestaltung – durch kostenfreie Nachhilfe, Sprachcafés und ganzheitliche Begegnung auf Augenhöhe.
            </p>

<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-glow transition-all transform hover:-translate-y-0.5" href="#handlungsfelder">
<span>Unsere Handlungsfelder</span>
<svg className="w-5 h-5 text-brand-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all" href="#projekte">
                Aktuelle Projekte ansehen
              </a>
</div>

<div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8 max-w-xl">
<div>
<div className="text-2xl sm:text-3xl font-extrabold text-limeAccent-400">1.200+</div>
<div className="text-xs sm:text-sm text-stone-300 font-medium">Begleitete Menschen</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
<div className="text-xs sm:text-sm text-stone-300 font-medium">Kostenfreie Angebote</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-extrabold text-limeAccent-400">2</div>
<div className="text-xs sm:text-sm text-stone-300 font-medium">Feste Hubs in NRW</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative hidden lg:block">
<div className="relative mx-auto max-w-sm">

<div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-limeAccent-500/30 to-brand-500/20 blur-lg"></div>
<div className="relative rounded-2xl overflow-hidden bg-brand-900 border border-white/20 shadow-2xl p-3">
<img alt="Schülerinnen und Lehrende im gemeinsamen Austausch" className="w-full h-72 object-cover rounded-xl" src="/assets/images/about-6.png"/>
<div className="p-4 bg-brand-950/90 rounded-xl mt-3 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-limeAccent-500 flex items-center justify-center text-brand-950 font-bold text-sm">
                      ✓
                    </div>
<div>
<p className="text-xs font-semibold text-stone-300 uppercase tracking-wider">Begegnungszentrum Merklinde</p>
<h4 className="text-sm font-bold text-white">Castrop-Rauxel &amp; Dortmund</h4>
</div>
</div>
<p className="text-xs text-stone-300 mt-2">
  Wittener Str. 322B • Tandem statt Barriere, digitale Bildung &amp; Sozialberatung vor Ort.
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-white relative scroll-mt-28" data-purpose="mission-statement" id="mission">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-6 order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4 relative">
<div className="space-y-4">
<div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
<img alt="Freundesgruppe und Ehrenamtliche halten zusammen" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" src="/assets/images/about-5.png"/>
</div>
<div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
<img alt="Engagierte Menschen bei einer gemeinsamen Teamarbeit" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="/assets/images/about-6.png"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="overflow-hidden rounded-2xl shadow-subtle border border-stone-200">
<img alt="Gemeinsames Puzzeln und Lösen von Herausforderungen" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="/assets/images/about-7.png"/>
</div>
<div className="bg-brand-50 p-6 rounded-2xl border border-brand-200 flex flex-col justify-center">
<span className="text-3xl font-extrabold text-brand-800">10+</span>
<span className="text-sm font-medium text-brand-900 mt-1">Jahre engagierte Brückenarbeit in NRW</span>
</div>
</div>

<div className="absolute -bottom-6 left-6 right-6 bg-brand-deep text-white p-4 rounded-xl shadow-xl border border-limeAccent-500/40 hidden sm:block">
<p className="text-xs sm:text-sm font-medium italic text-stone-200">
                  „Integration ist keine Einbahnstraße, sondern eine gemeinsame Begegnung auf Augenhöhe.“
                </p>
</div>
</div>
</div>

<div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              Wer sind wir?
            </div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Wir bauen Brücken für Chancengleichheit und gesellschaftliche Teilhabe.
            </h2>
<div className="space-y-4 text-base text-slate-600 leading-relaxed">
<p>
<strong className="font-bold text-slate-900">EFI e.V. (Engagement &amp; Integration)</strong> ist ein gemeinnütziger Verein und eine anerkannte Migrantenselbstorganisation. Unser Hauptziel ist die nachhaltige und ganzheitliche Unterstützung der Integration von Migrantinnen, Migranten und Geflüchteten – vollkommen unabhängig von Herkunft, Sprache oder religiöser Überzeugung.
              </p>
<p>
                Von unserem festen Standort in Castrop-Rauxel bis in den Raum Dortmund stärken wir Menschen durch alltagsnahe Bildungsformate, individuelle Begleitung bei Behördengängen und lebendige Begegnungsorte, an denen gegenseitiges Verständnis wächst.
              </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
<div className="flex items-start gap-2.5">
<div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-800">Partizipation &amp; Empowerment</span>
</div>
<div className="flex items-start gap-2.5">
<div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-800">Kostenfreie Nachhilfe</span>
</div>
<div className="flex items-start gap-2.5">
<div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-800">Sprach- &amp; Kulturcafés</span>
</div>
<div className="flex items-start gap-2.5">
<div className="w-5 h-5 rounded-full bg-limeAccent-500/20 text-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-800">Starke Tandem-Netzwerke</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900 group" href="#kontakt">
<span>Erfahren Sie mehr über unser Vorstandsteam &amp; Satzung</span>
<span className="transform group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-sand-100 border-y border-stone-200/80 scroll-mt-28" data-purpose="areas-of-action" id="handlungsfelder">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">Die 4 Säulen unserer Arbeit</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Begleitung, Beratung, Begegnung und Bildung.
            </h2>
<p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Unser ganzheitlicher Ansatz für gelingende gesellschaftliche Teilhabe und Selbstständigkeit im Ruhrgebiet.
            </p>
</div>

<div aria-label="Standortauswahl" className="inline-flex p-1 rounded-full bg-white border border-stone-200 shadow-sm" role="tablist">
<a href="#handlungsfelder" aria-selected="true" className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-brand-800 text-white shadow-sm inline-block" role="tab">
              Alle Handlungsfelder
            </a>
<a href="#standorte" className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-900 transition-colors">
              Castrop-Rauxel
            </a>
<a href="#standorte" className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-900 transition-colors">
              Dortmund
            </a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-limeAccent-400 transition-colors duration-300">
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1 block">Säule 01</span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Begleitung</h3>
<p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>Sprachmittlung &amp; Alltagsorientierung:</strong> Geschulte ehrenamtliche Begleitpersonen zur Überwindung sprachlicher Barrieren bei Behördengängen, Arztbesuchen, Kitas und Schulen.
              </p>
</div>
<div className="pt-5 border-t border-stone-100 flex items-center justify-between">
<span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md">Sprachmittlung</span>
<a className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform" href="#kontakt">
                Begleitung anfragen →
              </a>
</div>
</div>

<div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6 group-hover:bg-amber-800 group-hover:text-amber-200 transition-colors duration-300">
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1 block">Säule 02</span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Beratung</h3>
<p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>Allgemeine Sozialberatung:</strong> Niedrigschwellige Unterstützung bei behördlichen Anträgen (Bürgeramt, Ausländerbehörde, Jobcenter-Online), Erstberatung und Verweisung an Fachstellen.
              </p>
</div>
<div className="pt-5 border-t border-stone-100 flex items-center justify-between">
<span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">Kostenfrei</span>
<a className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform" href="#kontakt">
                Termin buchen →
              </a>
</div>
</div>

<div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center mb-6 group-hover:bg-rose-800 group-hover:text-rose-200 transition-colors duration-300">
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1 block">Säule 03</span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Begegnung</h3>
<p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>Tanz, Frauencafé &amp; Dialog:</strong> Offene und geschützte Begegnungsräume im Begegnungszentrum Merklinde zum Austausch auf Augenhöhe, gegenseitigen Kennenlernen und Abbau von Vorurteilen.
              </p>
</div>
<div className="pt-5 border-t border-stone-100 flex items-center justify-between">
<span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md">Frauencafé</span>
<a className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform" href="#kontakt">
                Mehr erfahren →
              </a>
</div>
</div>

<div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-emerald-200 transition-colors duration-300">
<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 block">Säule 04</span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Bildung</h3>
<p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong>Nachhilfe, Sprachcafé &amp; Workshops:</strong> Kostenfreie Hausaufgabenbetreuung für Schüler, alltagsbezogene Sprachförderung und praxisnahe Seminare für digitale Grundbildung.
              </p>
</div>
<div className="pt-5 border-t border-stone-100 flex items-center justify-between">
<span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Nachhilfe &amp; Kurse</span>
<a className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-950 group-hover:translate-x-1 transition-transform" href="#kontakt">
                Angebote ansehen →
              </a>
</div>
</div>

</div>
</div>
</section>


<section className="py-24 bg-brand-deep text-white relative overflow-hidden scroll-mt-28" data-purpose="featured-projects" id="projekte">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/80 border border-limeAccent-500/30 text-limeAccent-400 text-xs font-bold uppercase tracking-wider mb-3">
              Unsere Projekte
            </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Folgen Sie allen unseren Projekten &amp; Aktivitäten.
            </h2>
<p className="text-stone-300 mt-2 max-w-xl text-base">
              Einblicke in unsere laufenden Initiativen, Sprachworkshops und Begegnungsstätten in der Region.
            </p>
</div>

<div className="flex items-center gap-3">
<button 
  onClick={() => scrollProjects('left')}
  aria-label="Vorheriges Projekt" 
  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button 
  onClick={() => scrollProjects('right')}
  aria-label="Nächstes Projekt" 
  className="w-12 h-12 rounded-full bg-limeAccent-500 hover:bg-limeAccent-400 active:scale-95 text-brand-950 flex items-center justify-center transition-all shadow-md cursor-pointer"
>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div ref={projectsContainerRef} className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 scrollbar-none pb-4 scroll-smooth">

<div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
<div className="relative h-56 overflow-hidden">
<img alt="Tandem statt Barriere – Inklusives Radfahren in Castrop-Rauxel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/images/project-tandem.jpg"/>
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Castrop-Rauxel
                </span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-red-600/90 text-white shadow-sm">
                  Aktion Mensch
                </span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">Inklusion &amp; Mobilität</span>
<h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">
                  Tandem statt Barriere
                </h3>
<p className="text-xs text-stone-300 leading-relaxed">
                  Gemeinsam mobil werden: Fahr- &amp; Sicherheitstrainings für Menschen mit und ohne Behinderung jeden Alters. Fahrräder &amp; Begleitung vorhanden.
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
<span className="text-limeAccent-300 font-semibold">Sa 11:00–13:00 Uhr</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors flex items-center gap-1" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
  <span>WhatsApp</span> →
</a>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
<div className="relative h-56 overflow-hidden">
<img alt="Digitale Orientierung im Alltag für Frauen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/images/project-digitale-frauen.jpg"/>
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Castrop-Rauxel
                </span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-brand-800 text-white shadow-sm">
                  KIM NRW &amp; Land
                </span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">Frauen &amp; Digitales</span>
<h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">
                  Digitale Orientierung im Alltag
                </h3>
<p className="text-xs text-stone-300 leading-relaxed">
                  Für geflüchtete &amp; zugewanderte Frauen: Online-Termine bei Bürgeramt/Jobcenter, Dokumente scannen, Kita-Apps &amp; Postfach selbstständig nutzen.
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
<span className="text-stone-300">2x im Monat</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Anmelden →</a>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
<div className="relative h-56 overflow-hidden">
<img alt="Kostenfreie schulische Nachhilfe und Betreuung" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/images/projet-10.png"/>
<div className="absolute top-3 left-3">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  100% Kostenfrei
                </span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">Schule &amp; Jugend</span>
<h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">
                  Kostenfreie Nachhilfe
                </h3>
<p className="text-xs text-stone-300 leading-relaxed">
                  Qualifizierte Begleitung in Deutsch, Französisch, Mathematik und Englisch für Kinder aller Altersstufen in Castrop-Rauxel und Dortmund.
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
<span className="text-stone-300">Wöchentlich</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Details →</a>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-start bg-brand-900/60 rounded-2xl overflow-hidden border border-white/15 hover:border-limeAccent-400/50 transition-all duration-300 flex flex-col group">
<div className="relative h-56 overflow-hidden">
<img alt="Frauencafé im Begegnungszentrum Merklinde" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/images/projet-8.png"/>
<div className="absolute top-3 left-3">
<span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-deep/85 backdrop-blur-md text-limeAccent-300 border border-limeAccent-500/30">
                  Merklinde
                </span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<span className="text-xs font-bold text-limeAccent-400 uppercase tracking-wider">Begegnung &amp; Austausch</span>
<h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-limeAccent-300 transition-colors">
                  Frauencafé Castrop-Rauxel
                </h3>
<p className="text-xs text-stone-300 leading-relaxed">
                  Ein geschützter Raum zum Kennenlernen, Deutsch sprechen, Erfahrungen austauschen und Kraft tanken bei Kaffee &amp; guten Gesprächen.
                </p>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
<span className="text-stone-300">Regelmäßig</span>
<a className="font-bold text-limeAccent-400 hover:text-white transition-colors" href="#kontakt">Kennenlernen →</a>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-brand-deep bg-white hover:bg-limeAccent-400 transition-colors shadow-lg" href="#kontakt">
<span>Alle aktuellen Veranstaltungen &amp; Kurse anfragen</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>


<section className="py-20 bg-white scroll-mt-28" data-purpose="partners-and-sponsors" id="partner">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            Einige Partner &amp; Förderer
          </div>
<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Gemeinsam mit starken Partnern für nachhaltige Wirkung.
          </h2>
<p className="text-slate-600 text-sm mt-2">
            Unsere Projekte und Initiativen werden gefördert, fachlich begleitet und unterstützt von vertrauensvollen Bundes-, Landes- und Kommunalinstitutionen.
          </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6 items-center">
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Aktion Mensch – Förderer von Tandem statt Barriere">
    <img src="/assets/images/aktion-mensch.svg" alt="Aktion Mensch" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Kommunales Integrationsmanagement NRW (KIM)">
    <img src="/assets/images/logo-kim-nrw.png" alt="Kommunales Integrationsmanagement NRW" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Kommunales Integrationszentrum Kreis Recklinghausen">
    <img src="/assets/images/image-4.png" alt="Kommunales Integrationszentrum Kreis Recklinghausen" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration NRW">
    <img src="/assets/images/image-5.png" alt="Land NRW - MKJFGFI" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="KOMM-AN NRW">
    <img src="/assets/images/image-10.png" alt="KOMM-AN NRW" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Stiftung Bildung">
    <img src="/assets/images/image-6.png" alt="Stiftung Bildung" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="MENSCHEN STÄRKEN MENSCHEN">
    <img src="/assets/images/image-7.png" alt="MENSCHEN STÄRKEN MENSCHEN" className="max-h-14 max-w-full object-contain" />
  </div>
  <div className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm" title="Bundesministerium für Familie, Senioren, Frauen und Jugend">
    <img src="/assets/images/image-8.png" alt="Bundesministerium für Familie, Senioren, Frauen und Jugend" className="max-h-14 max-w-full object-contain" />
  </div>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-10 relative z-20" data-purpose="share-cta-banner">
<div className="rounded-3xl bg-gradient-to-r from-brand-800 via-brand-900 to-brand-950 p-8 sm:p-12 shadow-2xl border border-limeAccent-500/30 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="max-w-2xl text-center lg:text-left">
<span className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">Gemeinsam Großes bewegen</span>
<h3 className="text-2xl sm:text-3xl font-extrabold mt-1 tracking-tight text-white">
            Magst du unsere Organisation unterstützen?
          </h3>
<p className="text-sm sm:text-base text-stone-300 mt-2">
            Hilf uns, bekannter zu werden! Teile unsere Angebote mit Freunden, Familien und Nachbarn oder engagiere dich selbst aktiv bei EFI e.V.
          </p>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
<button className="px-6 py-3.5 rounded-full text-sm font-bold bg-white text-brand-950 hover:bg-sand-100 transition-colors shadow-md flex items-center gap-2" onClick={() => {}}>
<svg className="w-4 h-4 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Die Seite teilen</span>
</button>
<a className="px-6 py-3.5 rounded-full text-sm font-bold bg-limeAccent-500 text-brand-950 hover:bg-limeAccent-400 transition-colors shadow-glow" href="#kontakt">
            Aktiv mitmachen
          </a>
</div>
</div>
</section>


<section className="pt-28 pb-20 bg-sand-50 relative overflow-hidden scroll-mt-28" data-purpose="locations-and-presence" id="standorte">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">Unsere Standorte</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Wir befinden uns hier in diesem Teil des Landes.
          </h2>
<p className="text-slate-600 text-base mt-2">
            Verwurzelt im Ruhrgebiet und vernetzt in Nordrhein-Westfalen. Unsere Anlaufstellen sind barrierefrei erreichbar und für alle offen.
          </p>
</div>

<div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-subtle overflow-hidden">

          {/* Interactive 3D Rotating Mapbox Globe */}
          <div className="mb-8">
            <StandorteMap />
          </div>

          {/* Concrete Location Cards with Flyer Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
            {/* Castrop-Rauxel Card */}
            <div className="p-6 rounded-2xl bg-sand-50 border border-brand-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-800 text-white">
                    Hauptstandort • Zentrum
                  </span>
                  <span className="text-xs font-semibold text-brand-700">Kreis Recklinghausen</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Castrop-Rauxel</h3>
                <p className="text-xs text-brand-900 font-medium mb-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-brand-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Begegnungszentrum Merklinde, Wittener Str. 322B, 44577 Castrop-Rauxel</span>
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Tandem statt Barriere:</strong> Jeden Samstag 11:00 – 13:00 Uhr (Aktion Mensch)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Digitale Orientierung für Frauen:</strong> 2x im Monat (KIM NRW &amp; MKJFGFI)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Allgemeine Sozialberatung &amp; Sprachmittlung:</strong> Nach Terminabsprache</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold">•</span>
                    <span><strong>Frauencafé &amp; Kostenfreie Nachhilfe:</strong> Regelmäßige Gruppen</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <a href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950">
                  <span>WhatsApp: +49 (0) 177 3218743</span> →
                </a>
                <a href="#kontakt" className="text-xs font-semibold text-stone-500 hover:text-slate-800">
                  Wegbeschreibung
                </a>
              </div>
            </div>

            {/* Dortmund Card */}
            <div className="p-6 rounded-2xl bg-sand-50 border border-sky-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-800 text-white">
                    Projekt-Hub • Netzwerk
                  </span>
                  <span className="text-xs font-semibold text-sky-700">Metropole Ruhr</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Dortmund</h3>
                <p className="text-xs text-sky-950 font-medium mb-3 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-sky-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Regionaler Netzwerk- und Tandem-Knotenpunkt</span>
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Tandem-Partnerschaften:</strong> 1:1 Begleitung zwischen Einheimischen &amp; Neuzugewanderten</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Mentoring für geflüchtete Jugendliche:</strong> Unterstützung beim Schulabschluss &amp; Berufseinstieg</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Schul- &amp; Kita-Vernetzung:</strong> Enge Kooperation mit Bildungsträgern im Ruhrgebiet</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span><strong>Multiplikatoren-Workshops:</strong> Schulungen für interkulturelle Ehrenamtliche</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <a href="mailto:info@engagement-integration.de" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950">
                  <span>info@engagement-integration.de</span> →
                </a>
                <a href="#kontakt" className="text-xs font-semibold text-stone-500 hover:text-slate-800">
                  Netzwerk anfragen
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-6 border-t border-stone-200">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">01</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Begegnungszentrum Merklinde</h4>
<p className="text-xs text-slate-500">Wittener Str. 322B, Castrop-Rauxel</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">240+</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Monatliche Beratungen</h4>
<p className="text-xs text-slate-500">Alltagsberatung &amp; Sprachmittlung</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center font-bold text-lg">18+</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Partnerschulen &amp; Kitas</h4>
<p className="text-xs text-slate-500">Im Kreis Recklinghausen &amp; Ruhrgebiet</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-white scroll-mt-28" data-purpose="contact-and-inquiry" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-5 space-y-8">
<div>
<span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">Kontaktieren Sie uns</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sich zu informieren, ist bereits eine weitere Hilfe.
              </h2>
<p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                Haben Sie Fragen zu unseren kostenfreien Nachhilfekursen, möchten Sie ehrenamtlich mitwirken oder benötigen Sie Beratung bei Behördenschreiben? Schreiben Sie uns oder kommen Sie vorbei.
              </p>
</div>

<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
<div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Zentraler Standort</h4>
<p className="text-sm font-bold text-slate-900 mt-0.5">Begegnungszentrum Merklinde</p>
<p className="text-xs text-slate-700 font-medium">Wittener Str. 322B, 44577 Castrop-Rauxel</p>
<span className="text-[11px] text-brand-700 font-semibold mt-1 block">Barrierefreier Zugang • ÖPNV-nah</span>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
<div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
</svg>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Telefon &amp; WhatsApp</h4>
<a className="text-sm font-bold text-slate-900 block mt-0.5 hover:text-emerald-700 transition-colors" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
  +49 (0) 177 3218743
</a>
<a className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-1" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
  <span>Direkt per WhatsApp schreiben</span> →
</a>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
<div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">E-Mail &amp; Anfragen</h4>
<a className="text-sm font-semibold text-brand-700 hover:text-brand-900 block mt-0.5" href="mailto:info@engagement-integration.de">
  info@engagement-integration.de
</a>
<span className="text-xs text-slate-500 block">engagementintegration@gmail.com</span>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-stone-200/80">
<div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center flex-shrink-0">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Sprechzeiten &amp; Treffen</h4>
<p className="text-xs text-slate-700 mt-0.5"><strong className="font-bold">Dienstag – Freitag:</strong> 10:00 – 17:00 Uhr</p>
<p className="text-xs text-slate-700"><strong className="font-bold">Samstag:</strong> 11:00 – 13:00 Uhr (Tandem-Gruppe)</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-sand-50 rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-subtle">
<form action="#" className="space-y-6" method="POST" onSubmit={(e) => { e.preventDefault(); }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="first-name">Vorname</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400" id="first-name" name="first-name" placeholder="z. B. Amina" required type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="last-name">Nachname</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400" id="last-name" name="last-name" placeholder="z. B. Schmidt" required type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="email">E-Mail-Adresse</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400" id="email" name="email" placeholder="name@beispiel.de" required type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="topic">Anliegen / Bereich</label>
<select className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all" id="topic" name="topic">
<option value="nachhilfe">Kostenfreie Nachhilfe anfragen</option>
<option value="deutschkurs">Deutschkurse &amp; Frauencafé</option>
<option value="beratung">Niedrigschwellige Beratung</option>
<option value="ehrenamt">Ehrenamt / Mitgliedschaft</option>
<option value="spende">Spenden &amp; Sponsoring</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="message">Ihre Nachricht</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-stone-400" id="message" name="message" placeholder="Wie können wir Ihnen weiterhelfen?" required rows={4}></textarea>
</div>
<div className="flex items-start gap-3">
<input className="rounded border-stone-300 text-brand-700 focus:ring-brand-600 mt-1" id="privacy" required type="checkbox"/>
<label className="text-xs text-slate-600" htmlFor="privacy">
                    Ich stimme der Verarbeitung meiner Angaben zum Zweck der Bearbeitung meiner Kontaktanfrage gemäß der Datenschutzerklärung zu.
                  </label>
</div>
<button className="w-full py-4 rounded-xl font-bold text-sm text-white bg-brand-800 hover:bg-brand-900 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2" type="submit">
<svg className="w-4 h-4 text-limeAccent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Nachricht absenden</span>
</button>
</form>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-sand-100 border-t border-stone-200 scroll-mt-28" data-purpose="solidarity-merchandise" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
              Support-Gadgets &amp; Solidarität
            </div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trage unsere Botschaft nach außen.
            </h2>
<p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Mit dem Erwerb unserer Vereins-Gadgets fließt jeder Reinerlös zu 100% direkt in Lernmaterialien für unsere kostenfreien Nachhilfekurse.
            </p>
</div>
<div className="flex items-center gap-2">
<button 
  onClick={() => scrollShop('left')}
  aria-label="Vorheriges Produkt" 
  className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-sm"
>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button 
  onClick={() => scrollShop('right')}
  aria-label="Nächstes Produkt" 
  className="w-10 h-10 rounded-full bg-brand-800 hover:bg-brand-900 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div ref={shopContainerRef} className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 scrollbar-none pb-4 scroll-smooth">

<div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group">
<div>
<div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">

<img alt="EFI Charity T-Shirt in Dunkelgrün mit Vereins-Emblem" className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300" src="/assets/images/tshirt-2.png"/>
<span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">Bio-Baumwolle</span>
</div>
<h3 className="font-bold text-slate-900 text-base">EFI Charity T-Shirt</h3>
<p className="text-xs text-slate-500 mt-1">Fair produziert mit gesticktem EFI-Logo</p>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-lg font-extrabold text-brand-950">25,00 €</span>
<a 
  href="mailto:info@engagement-integration.de?subject=Bestellung%3A%20EFI%20Charity%20T-Shirt&body=Hallo%20EFI-Team%2C%0D%0A%0D%0AIch%20m%C3%B6chte%20gerne%20folgenden%20Solidarit%C3%A4ts-Artikel%20bestellen%3A%0D%0A-%20Artikel%3A%20EFI%20Charity%20T-Shirt%0D%0A-%20Preis%3A%2025%2C00%20%E2%82%AC%0D%0A-%20Gr%C3%B6%C3%9Fe%20(bitte%20angeben%3A%20S%20%2F%20M%20%2F%20L%20%2F%20XL)%3A%20%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20die%20Zahlungs-%20und%20Abholungsdetails%20mit.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%2C"
  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Kaufen</span>
</a>
</div>
</div>

<div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group">
<div>
<div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">
<img alt="Bestickte EFI Kappe Basecap in Dunkelgrau/Grün" className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300" src="/assets/images/charity.png"/>
<span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">Verstellbar</span>
</div>
<h3 className="font-bold text-slate-900 text-base">EFI Basecap Snapback</h3>
<p className="text-xs text-slate-500 mt-1">Hochwertiger 3D-Stick auf der Front</p>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-lg font-extrabold text-brand-950">28,00 €</span>
<a 
  href="mailto:info@engagement-integration.de?subject=Bestellung%3A%20EFI%20Basecap%20Snapback&body=Hallo%20EFI-Team%2C%0D%0A%0D%0AIch%20m%C3%B6chte%20gerne%20folgenden%20Solidarit%C3%A4ts-Artikel%20bestellen%3A%0D%0A-%20Artikel%3A%20EFI%20Basecap%20Snapback%0D%0A-%20Preis%3A%2028%2C00%20%E2%82%AC%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20die%20Zahlungs-%20und%20Abholungsdetails%20mit.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%2C"
  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Kaufen</span>
</a>
</div>
</div>

<div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group">
<div>
<div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">
<img alt="EFI Canvas Tragetasche Tote Bag" className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300" src="/assets/images/bac-2.png"/>
<span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">Canvas 340g</span>
</div>
<h3 className="font-bold text-slate-900 text-base">Robuste Canvas-Tasche</h3>
<p className="text-xs text-slate-500 mt-1">Langlebige Tragetasche für Unterricht &amp; Alltag</p>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-lg font-extrabold text-brand-950">30,00 €</span>
<a 
  href="mailto:info@engagement-integration.de?subject=Bestellung%3A%20Robuste%20EFI%20Canvas-Tasche&body=Hallo%20EFI-Team%2C%0D%0A%0D%0AIch%20m%C3%B6chte%20gerne%20folgenden%20Solidarit%C3%A4ts-Artikel%20bestellen%3A%0D%0A-%20Artikel%3A%20Robuste%20EFI%20Canvas-Tasche%20(Tote%20Bag)%0D%0A-%20Preis%3A%2030%2C00%20%E2%82%AC%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20die%20Zahlungs-%20und%20Abholungsdetails%20mit.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%2C"
  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Kaufen</span>
</a>
</div>
</div>

<div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group">
<div>
<div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">
<img alt="EFI Kugelschreiber aus Recyclingmaterial" className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300" src="/assets/images/stylo.png"/>
<span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">Recycelt</span>
</div>
<h3 className="font-bold text-slate-900 text-base">EFI Kugelschreiber</h3>
<p className="text-xs text-slate-500 mt-1">Ergonomisch &amp; nachfüllbar mit blauer Mine</p>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-lg font-extrabold text-brand-950">8,00 €</span>
<a 
  href="mailto:info@engagement-integration.de?subject=Bestellung%3A%20EFI%20Kugelschreiber&body=Hallo%20EFI-Team%2C%0D%0A%0D%0AIch%20m%C3%B6chte%20gerne%20folgenden%20Solidarit%C3%A4ts-Artikel%20bestellen%3A%0D%0A-%20Artikel%3A%20EFI%20Kugelschreiber%20(Recycelt)%0D%0A-%20Preis%3A%208%2C00%20%E2%82%AC%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20die%20Zahlungs-%20und%20Abholungsdetails%20mit.%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%2C"
  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Kaufen</span>
</a>
</div>
</div>
</div>
</div>
</section>

</main>
    </div>
  );
}
