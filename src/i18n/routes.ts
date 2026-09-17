import { LOCALES } from './config';
import type { Locale } from './config';

export type RouteId =
  | 'home'
  | 'about'
  | 'projects'
  | 'international'
  | 'news'
  | 'contact'
  | 'imprint'
  | 'privacy'
  | 'notFound';

/**
 * The single source of truth for URL segments. Both languages are prefixed and
 * both have their own segments: /de/kontakt and /en/contact.
 *
 * Query keys and anchors are deliberately NOT part of this table. `thema=spende`,
 * `stadt=berlin`, `#spenden`, `#mitglied`, `#kontaktformular` and `#standorte`
 * stay German in every locale: they are typed identifiers, they are asserted by
 * scripts/check-page-interactions.mjs, and they appear in links we do not
 * control. Only their visible labels get translated.
 */
export const routePaths: Record<RouteId, Record<Locale, string>> = {
  home: { de: '', en: '' },
  about: { de: 'ueber-uns', en: 'about-us' },
  projects: { de: 'projekte', en: 'services-for-immigrants' },
  international: { de: 'international', en: 'international' },
  news: { de: 'neuigkeiten', en: 'news' },
  contact: { de: 'kontakt', en: 'contact' },
  imprint: { de: 'impressum', en: 'imprint' },
  privacy: { de: 'datenschutz', en: 'privacy-policy' },
  notFound: { de: '404', en: '404' },
};

export const ROUTE_IDS = Object.keys(routePaths) as RouteId[];

/** Reverse index, per locale: URL segment -> route id. */
export const segmentToId: Record<Locale, Record<string, RouteId>> = LOCALES.reduce(
  (acc, locale) => {
    acc[locale] = {};
    for (const id of ROUTE_IDS) acc[locale][routePaths[id][locale]] = id;
    return acc;
  },
  {} as Record<Locale, Record<string, RouteId>>
);

/**
 * URLs that were indexed before the locale prefix existed. They all served
 * German content, so they all redirect into /de/ — never into /en/.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  'about-us': '/de/ueber-uns',
  'services-for-immigrants': '/de/projekte',
  projekte: '/de/projekte',
  international: '/de/international',
  news: '/de/neuigkeiten',
  neuigkeiten: '/de/neuigkeiten',
  contact: '/de/kontakt',
  kontakt: '/de/kontakt',
  mentions: '/de/impressum',
  impressum: '/de/impressum',
  'privacy-policy': '/de/datenschutz',
  datenschutz: '/de/datenschutz',
  redesign: '/de',
  '404': '/de/404',
};

export function buildPath(
  locale: Locale,
  id: RouteId,
  options?: { query?: string; hash?: string }
): string {
  const segment = routePaths[id][locale];
  return `/${locale}${segment ? `/${segment}` : ''}${options?.query ?? ''}${options?.hash ?? ''}`;
}
