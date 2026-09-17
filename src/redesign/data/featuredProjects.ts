export type FeaturedProjectId =
  | 'tandem'
  | 'digitalWomen'
  | 'tutoring'
  | 'womensCafe';

/** Visual role of a badge, resolved to Tailwind classes by the card. */
export type BadgeTone = 'location' | 'funder' | 'funderDark';

/** Literal union so that `featured.badges.${key}` is a real translation key. */
export type BadgeKey =
  | 'castrop'
  | 'aktionMensch'
  | 'kimNrw'
  | 'free'
  | 'merklinde';

/**
 * Presentation used to live in this file as JSX: badges wrapped in positioned
 * divs, a WhatsApp link and SVGs. All of that moved into FeaturedProjectCard,
 * leaving only data here. Text lives in home.json under featured.<id>.
 */
export interface FeaturedProject {
  id: FeaturedProjectId;
  image: string;
  badges: readonly { tone: BadgeTone; key: BadgeKey }[];
  scheduleTone: 'accent' | 'muted';
  whatsappHref?: string;
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: 'tandem',
    image: '/assets/images/project-tandem.jpg',
    badges: [
      { tone: 'location', key: 'castrop' },
      { tone: 'funder', key: 'aktionMensch' },
    ],
    scheduleTone: 'accent',
    whatsappHref: 'https://wa.me/491773218743',
  },
  {
    id: 'digitalWomen',
    image: '/assets/images/project-digitale-frauen.jpg',
    badges: [
      { tone: 'location', key: 'castrop' },
      { tone: 'funderDark', key: 'kimNrw' },
    ],
    scheduleTone: 'muted',
  },
  {
    id: 'tutoring',
    image: '/assets/images/projet-10.png',
    badges: [{ tone: 'location', key: 'free' }],
    scheduleTone: 'muted',
  },
  {
    id: 'womensCafe',
    image: '/assets/images/projet-8.png',
    badges: [{ tone: 'location', key: 'merklinde' }],
    scheduleTone: 'muted',
  },
];
