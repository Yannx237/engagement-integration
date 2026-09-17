import type { ReactNode } from 'react';

export type ProjectLocation = 'berlin' | 'castrop' | 'dortmund';
export type GalleryLocation = ProjectLocation;
export type GalleryFilter = GalleryLocation | 'all';

// A downloadable project flyer. `file` is a path under /assets/flyers/<stadt>/.
export interface Flyer {
  title: string;
  file: string;
  note?: string;
}

export interface Project {
  badge: string;
  title: string;
  desc: string;
  details: readonly string[];
  iconBg: string;
  icon: ReactNode;
  // Flyers belong to one city and one field of action. A field without its own
  // document stays empty and offers a contact route instead — flyers are never
  // borrowed from another city.
  flyers?: readonly Flyer[];
}

export interface ActivityPhoto {
  src: string;
  location: GalleryLocation;
  title: string;
  desc: string;
}

export const galleryFilters: readonly { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'Alle Standorte' },
  { id: 'castrop', label: 'Castrop-Rauxel' },
  { id: 'dortmund', label: 'Dortmund' },
  { id: 'berlin', label: 'Berlin' },
];

export const castropProjects: readonly Project[] = [
  {
    badge: 'Bildung & Nachhilfe',
    title: 'Bildung und Erziehung',
    desc: 'Kostenfreie qualifizierte Nachhilfe in den Kernfächern Deutsch, Mathematik und Englisch für Schüler aller Schulformen.',
    details: [
      'Gezielte Hausaufgabenbetreuung & Prüfungsvorbereitung',
      'Mehrsprachige Lernbegleitung für Kinder mit Deutsch als Zweitsprache',
      'Stärkung der Medienkompetenz und des selbstständigen Lernens',
    ],
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    badge: 'Sprache & Begegnung',
    title: 'Migration und Integration',
    desc: 'Sprach- und Kulturförderung für Erwachsene, Frauen und Neuzugewanderte im Stadtteil.',
    details: [
      'Offenes Sprachcafé zum ungezwungenen Deutschsprechen',
      'Frauencafé mit Schwerpunkt auf Empowerment und Gesundheit',
      'Niedrigschwellige Beratung und Begleitung zu Behörden und Institutionen',
    ],
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    badge: 'Kinder & Jugend',
    title: 'Kinder, Jugend und Familie',
    desc: 'Erlebnis- und Freizeitpädagogik, interkulturelle Ausflüge und verlässliche Tandem-Patenschaften.',
    details: [
      'Eins-zu-eins Tandem-Patenschaften für Kinder und Jugendliche',
      'Kreative Feriencamps, Sportangebote und Bildungsreisen',
      'Elternberatung und Unterstützung im deutschen Schulsystem',
    ],
    iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export const dortmundProjects: readonly Project[] = [
  {
    badge: 'Netzwerk & Beratung',
    title: 'Migration und Integration Dortmund',
    desc: 'Niedrigschwellige Beratung, Lotsenfunktionen und Kulturförderung im Raum Dortmund.',
    details: [
      'Orientierungsberatung für Neuzugewanderte',
      'Kulturelle Brückenangebote und interkulturelle Workshops',
      'Hilfestellung bei Anträgen, Dokumenten und Behördenkontakten',
    ],
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    badge: 'Mentoring & Patenschaft',
    title: 'Erlebnis- und Freizeitpädagogik',
    desc: 'Tandem-Patenschaften und Freizeitangebote für Jugendliche zur Förderung von Selbstvertrauen und Vernetzung.',
    details: [
      'Aufbau stabiler Mentor-Mentee-Beziehungen',
      'Gemeinsame Freizeit- und Kulturaktivitäten in der Region',
      'Förderung von sozialer Kompetenz und Resilienz',
    ],
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export const berlinProjects: readonly Project[] = [
  {
    badge: 'Sprache & Begegnung',
    title: 'Migration und Integration',
    desc: 'Sprach- und Kulturförderung sowie niedrigschwellige Begleitung für Neuzugewanderte in der Bundeshauptstadt.',
    details: [
      'Sprachcafé zum ungezwungenen Deutschsprechen',
      'Frauencafé mit Schwerpunkt Empowerment und Gesundheit',
      'Niedrigschwellige Beratung und Begleitung zu Behörden',
    ],
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    badge: 'Bildung & Nachhilfe',
    title: 'Bildung und Erziehung',
    desc: 'Kostenfreie Nachhilfe in den Kernfächern Deutsch, Mathematik und Englisch für Schülerinnen und Schüler.',
    details: [
      'Kostenfreie Nachhilfe in Deutsch, Mathe und Englisch',
      'Hausaufgabenbetreuung und Prüfungsvorbereitung',
      'Mehrsprachige Lernbegleitung für Kinder mit Deutsch als Zweitsprache',
    ],
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    badge: 'Kinder & Jugend',
    title: 'Kinder, Jugend und Familie',
    desc: 'Erlebnis- und Freizeitpädagogik für Kinder und Jugendliche sowie verlässliche Tandem-Patenschaften.',
    details: [
      'Erlebnis- und Freizeitpädagogik für Kinder und Jugendliche',
      'Tandem-Patenschaften als verlässliche Eins-zu-eins Begleitung',
      'Elternberatung und Unterstützung im deutschen Schulsystem',
    ],
    iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export interface City {
  id: ProjectLocation;
  name: string;
  tagline: string;
  address: string;
  domains: readonly Project[];
}

// One entry per city; the fields of action follow from the chosen city.
export const cities: readonly City[] = [
  {
    id: 'berlin',
    name: 'Berlin',
    tagline: 'Dialog- und Netzwerkpräsenz in der Bundeshauptstadt',
    address: 'Berlin',
    domains: berlinProjects,
  },
  {
    id: 'castrop',
    name: 'Castrop-Rauxel',
    tagline: 'Begegnungszentrum Merklinde',
    address: 'Wittener Str. 322B, 44577 Castrop-Rauxel',
    domains: castropProjects,
  },
  {
    id: 'dortmund',
    name: 'Dortmund',
    tagline: 'Projekt-Hub und Netzwerkarbeit',
    // The walk-in office, as shown on the storefront and on every Dortmund
    // flyer. Klarastr. 19 in the Impressum is the postal address, not the venue.
    address: 'Lütgendortmunder Str. 132, 44388 Dortmund',
    domains: dortmundProjects,
  },
];

// Activities gallery with original images
export const activityPhotos: readonly ActivityPhoto[] = [
  {
    src: '/assets/images/f1.png',
    location: 'castrop',
    title: 'Lern- und Nachhilfegruppe',
    desc: 'Kinder bei der gemeinsamen Hausaufgabenbetreuung',
  },
  {
    src: '/assets/images/f2.png',
    location: 'castrop',
    title: 'Gemeinschaftsaktivität',
    desc: 'Kreativworkshop im Stadtteil',
  },
  {
    src: '/assets/images/f3.png',
    location: 'castrop',
    title: 'Frauentreffen & Austausch',
    desc: 'Offener Dialog und Unterstützung',
  },
  {
    src: '/assets/images/f4.png',
    location: 'castrop',
    title: 'Sprachförderung vor Ort',
    desc: 'Sprachtraining in Kleingruppen',
  },
  {
    src: '/assets/images/f5.png',
    location: 'castrop',
    title: 'Freizeit- und Erlebnispädagogik',
    desc: 'Sportliche Aktivität im Freien',
  },
  {
    src: '/assets/images/f6.png',
    location: 'castrop',
    title: 'Kulturelle Feierlichkeit',
    desc: 'Begegnung und Zusammenhalt',
  },
  {
    src: '/assets/images/f7.png',
    location: 'castrop',
    title: 'Tandem-Projekt Castrop',
    desc: 'Jugendliche im Mentoring-Austausch',
  },
  {
    src: '/assets/images/f8.png',
    location: 'dortmund',
    title: 'Netzwerktreffen Dortmund',
    desc: 'Koordinierungsgespräche der Patenschaften',
  },
  {
    src: '/assets/images/f9.png',
    location: 'dortmund',
    title: 'Beratung & Begleitung Dortmund',
    desc: 'Individuelle Orientierungsunterstützung',
  },
  {
    src: '/assets/images/f10.png',
    location: 'berlin',
    title: 'Bundesweite Repräsentanz Berlin',
    desc: 'Fachaustausch und Kooperationsgespräche',
  },
  {
    src: '/assets/images/f11.png',
    location: 'berlin',
    title: 'Delegation & Dialog Berlin',
    desc: 'Institutioneller Austausch für Integrationsfragen',
  },
];
