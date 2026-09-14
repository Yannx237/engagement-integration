import { useState } from 'react';
import PageHero from '../components/PageHero';
import ShareCTA from '../components/ShareCTA';

export default function RedesignProjects() {
  const [selectedLocation, setSelectedLocation] = useState<'all' | 'castrop' | 'dortmund'>('castrop');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'castrop' | 'dortmund' | 'berlin'>('all');

  const castropProjects = [
    {
      badge: 'Bildung & Nachhilfe',
      title: 'Bildung und Erziehung',
      desc: 'Kostenfreie qualifizierte Nachhilfe in den Kernfächern Deutsch, Mathematik und Englisch für Schüler aller Schulformen.',
      details: [
        'Gezielte Hausaufgabenbetreuung & Prüfungsvorbereitung',
        'Mehrsprachige Lernbegleitung für Kinder mit Deutsch als Zweitsprache',
        'Stärkung der Medienkompetenz und des selbstständigen Lernens'
      ],
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      badge: 'Sprache & Begegnung',
      title: 'Migration und Integration',
      desc: 'Sprach- und Kulturförderung für Erwachsene, Frauen und Neuzugewanderte im Stadtteil.',
      details: [
        'Offenes Sprachcafé zum ungezwungenen Deutschsprechen',
        'Frauencafé mit Schwerpunkt auf Empowerment und Gesundheit',
        'Niedrigschwellige Beratung und Begleitung zu Behörden und Institutionen'
      ],
      iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      badge: 'Kinder & Jugend',
      title: 'Kinder, Jugend und Familie',
      desc: 'Erlebnis- und Freizeitpädagogik, interkulturelle Ausflüge und verlässliche Tandem-Patenschaften.',
      details: [
        'Eins-zu-eins Tandem-Patenschaften für Kinder und Jugendliche',
        'Kreative Feriencamps, Sportangebote und Bildungsreisen',
        'Elternberatung und Unterstützung im deutschen Schulsystem'
      ],
      iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const dortmundProjects = [
    {
      badge: 'Netzwerk & Beratung',
      title: 'Migration und Integration Dortmund',
      desc: 'Niedrigschwellige Beratung, Lotsenfunktionen und Kulturförderung im Raum Dortmund.',
      details: [
        'Orientierungsberatung für Neuzugewanderte',
        'Kulturelle Brückenangebote und interkulturelle Workshops',
        'Hilfestellung bei Anträgen, Dokumenten und Behördenkontakten'
      ],
      iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      badge: 'Mentoring & Patenschaft',
      title: 'Erlebnis- und Freizeitpädagogik',
      desc: 'Tandem-Patenschaften und Freizeitangebote für Jugendliche zur Förderung von Selbstvertrauen und Vernetzung.',
      details: [
        'Aufbau stabiler Mentor-Mentee-Beziehungen',
        'Gemeinsame Freizeit- und Kulturaktivitäten in der Region',
        'Förderung von sozialer Kompetenz und Resilienz'
      ],
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  // Activities gallery with original images
  const activityPhotos = [
    { src: '/assets/images/f1.png', location: 'castrop', title: 'Lern- und Nachhilfegruppe', desc: 'Kinder bei der gemeinsamen Hausaufgabenbetreuung' },
    { src: '/assets/images/f2.png', location: 'castrop', title: 'Gemeinschaftsaktivität', desc: 'Kreativworkshop im Stadtteil' },
    { src: '/assets/images/f3.png', location: 'castrop', title: 'Frauentreffen & Austausch', desc: 'Offener Dialog und Unterstützung' },
    { src: '/assets/images/f4.png', location: 'castrop', title: 'Sprachförderung vor Ort', desc: 'Sprachtraining in Kleingruppen' },
    { src: '/assets/images/f5.png', location: 'castrop', title: 'Freizeit- und Erlebnispädagogik', desc: 'Sportliche Aktivität im Freien' },
    { src: '/assets/images/f6.png', location: 'castrop', title: 'Kulturelle Feierlichkeit', desc: 'Begegnung und Zusammenhalt' },
    { src: '/assets/images/f7.png', location: 'castrop', title: 'Tandem-Projekt Castrop', desc: 'Jugendliche im Mentoring-Austausch' },
    { src: '/assets/images/f8.png', location: 'dortmund', title: 'Netzwerktreffen Dortmund', desc: 'Koordinierungsgespräche der Patenschaften' },
    { src: '/assets/images/f9.png', location: 'dortmund', title: 'Beratung & Begleitung Dortmund', desc: 'Individuelle Orientierungsunterstützung' },
    { src: '/assets/images/f10.png', location: 'berlin', title: 'Bundesweite Repräsentanz Berlin', desc: 'Fachaustausch und Kooperationsgespräche' },
    { src: '/assets/images/f11.png', location: 'berlin', title: 'Delegation & Dialog Berlin', desc: 'Institutioneller Austausch für Integrationsfragen' }
  ];

  const filteredPhotos = activityPhotos.filter(
    photo => galleryFilter === 'all' || photo.location === galleryFilter
  );

  return (
    <div className="w-full bg-[#fbfbfa] text-slate-800">
      {/* 1. Page Hero */}
      <PageHero
        badge="Unsere Projekte"
        title="Wir tun dies für jedes"
        highlight="menschliche Projekt."
        description="Als gemeinnützige Migrantenselbstorganisation fördern wir gesellschaftliche Teilhabe durch zielgerichtete Handlungsfelder: von kostenfreier Nachhilfe über Sprachförderung bis zu individuellen Tandem-Patenschaften in NRW und darüber hinaus."
      />

      {/* 2. Handlungsfelder & Projekte nach Standort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            Handlungsfelder nach Standort
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gezielte Unterstützung genau dort, wo sie gebraucht wird
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Wählen Sie einen unserer Hauptstandorte, um die spezifischen Programme und Angebote kennenzulernen.
          </p>

          {/* Location Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-200/80 border border-stone-300/80 mt-8 gap-1">
            <button
              type="button"
              onClick={() => setSelectedLocation('castrop')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedLocation === 'castrop'
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-brand-800'
              }`}
            >
              Castrop-Rauxel (Zentrum)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLocation('dortmund')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedLocation === 'dortmund'
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-brand-800'
              }`}
            >
              Dortmund (Netzwerk-Hub)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {(selectedLocation === 'castrop' ? castropProjects : dortmundProjects).map((project, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-white border border-stone-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${project.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="space-y-2.5 border-t border-stone-100 pt-5">
                  {project.details.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <svg className="w-4 h-4 text-limeAccent-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-800 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Jetzt teilnehmen oder anfragen</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Unsere Aktivitäten in Bildern (Authentic Gallery with f1.png to f11.png) */}
      <section className="bg-white py-16 sm:py-24 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
                Fotogalerie
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Unsere Aktivitäten in Bildern
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Eindrücke aus unseren Projekten, Ausflügen, Bildungsangeboten und Stadtteilaktionen an all unseren Standorten.
              </p>
            </div>

            {/* Gallery Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Alle Standorte' },
                { id: 'castrop', label: 'Castrop-Rauxel' },
                { id: 'dortmund', label: 'Dortmund' },
                { id: 'berlin', label: 'Berlin' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setGalleryFilter(f.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                    galleryFilter === f.id
                      ? 'bg-brand-700 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                      {photo.location === 'castrop' ? 'Castrop-Rauxel' : photo.location === 'dortmund' ? 'Dortmund' : 'Berlin'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {photo.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              Keine Fotos für diesen Standort hinterlegt.
            </div>
          )}
        </div>
      </section>

      {/* 4. Reusable Share CTA */}
      <ShareCTA />
    </div>
  );
}
