// Importing the instance for its side effect guarantees i18next is initialised
// wherever a page is mounted — including scripts/check-page-markup.mjs, which
// never goes through src/main.tsx.
import './index';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_LOCALE, isLocale } from './config';
import type { Locale } from './config';
import { buildPath, segmentToId } from './routes';
import type { RouteId } from './routes';

/**
 * The locale is derived from the URL, never from a React context.
 *
 * scripts/check-page-markup.mjs mounts page components straight into a
 * MemoryRouter, without any layout, so a context provider would leave them
 * without a locale. Reading useLocation() keeps that script working.
 */
export function useLocale(): Locale {
  const segment = useLocation().pathname.split('/')[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** Which page we are on, whichever language it is written in. */
export function useRouteId(): RouteId {
  const locale = useLocale();
  const segment = useLocation().pathname.split('/')[2] ?? '';
  return segmentToId[locale][segment] ?? 'notFound';
}

export function useLocalePath() {
  const locale = useLocale();
  return useCallback(
    (id: RouteId, options?: { query?: string; hash?: string }) =>
      buildPath(locale, id, options),
    [locale]
  );
}

/** The current page in the other language, keeping query string and anchor. */
export function useEquivalentPath(target: Locale): string {
  const { search, hash } = useLocation();
  const routeId = useRouteId();
  return buildPath(target, routeId, { query: search, hash });
}
