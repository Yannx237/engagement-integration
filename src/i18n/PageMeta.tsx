import { useTranslation } from 'react-i18next';
import { LOCALES, SITE_URL } from './config';
import type { Locale } from './config';
import { buildPath } from './routes';
import type { RouteId } from './routes';
import { useLocale } from './useLocale';

/**
 * React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree into
 * <head>, so no helmet library is needed.
 *
 * Called explicitly at the top of each page rather than derived from the route
 * match: eight visible lines beat one hidden coupling to the router.
 */
export default function PageMeta({
  routeId,
  canonicalLocale,
}: {
  routeId: RouteId;
  /**
   * Point the canonical at another language. Used by the legal pages, whose
   * English URL serves the German text: without this the two would be indexed
   * as duplicates of each other.
   */
  canonicalLocale?: Locale;
}) {
  const { t } = useTranslation('meta');
  const locale = useLocale();
  const url = (l: Locale) => `${SITE_URL}${buildPath(l, routeId)}`;
  const canonical = url(canonicalLocale ?? locale);
  const title = t(`${routeId}.title`);
  const description = t(`${routeId}.description`);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={url(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={url('de')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:locale"
        content={locale === 'de' ? 'de_DE' : 'en_GB'}
      />
    </>
  );
}
