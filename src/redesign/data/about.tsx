import type { ReactNode } from 'react';

interface AssociationValue {
  title: string;
  subtitle: string;
  desc: string;
  icon: ReactNode;
}

export const valuesList: readonly AssociationValue[] = [
  {
    title: 'Unser Engagement',
    subtitle: 'Inklusion & Solidarität',
    desc: 'Unsere Organisation, gegründet auf festen Werten von Inklusion und gelebter Solidarität, engagiert sich aktiv für die gelungene Integration von Migranten und Geflüchteten – unabhängig von Herkunft, Sprache oder Religion.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
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
  {
    title: 'Mission & Ziel',
    subtitle: 'Nachhaltige Selbstständigkeit',
    desc: 'Als gemeinnützige Migrantenselbstorganisation ist es unsere zentrale Aufgabe, den Ankommenden das notwendige Rüstzeug an die Hand zu geben, um sich selbstbestimmt zu entfalten und als gleichberechtigte Bürger zur Gesellschaft beizutragen.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Vielfalt als Reichtum',
    subtitle: 'Ganzheitliche Begleitung',
    desc: 'Wir betrachten Diversität als Stärke für ganz Deutschland. Unser Handeln deckt alle Lebensbereiche ab: Zugang zu Grunddiensten wie Wohnen, mehrsprachige Bildung, Gesundheitsversorgung sowie aktive Unterstützung bei Sprache und Arbeitsmarkteinstieg.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
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
    title: 'Starke Partnerschaften',
    subtitle: 'Gemeinsam vor Ort',
    desc: 'In enger Kooperation mit Kommunen, städtischen Behörden, Schulen, regionalen Unternehmen und engagierten Ehrenamtlichen realisieren wir zielgenaue Programme zur Emanzipation und sozialen Teilhabe.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Willkommenskultur',
    subtitle: 'Aufklärung & Dialog',
    desc: 'Wir fördern aktiv den interkulturellen Dialog und gegenseitigen Respekt durch offene Begegnungsräume, Bürgerfeste, Aufklärungsworkshops und den direkten Austausch mit der Mehrheitsgesellschaft.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: 'Würdige Zukunft',
    subtitle: 'Perspektiven schaffen',
    desc: 'Wir streben nach einer Zukunft, in der jeder Mensch – gleich welcher Herkunft – die Chance erhält, sein volles Potenzial in Würde und Gleichberechtigung zu entfalten.',
    icon: (
      <svg
        className="w-6 h-6 text-brand-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];
