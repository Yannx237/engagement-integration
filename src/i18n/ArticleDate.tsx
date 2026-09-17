import { useLocale } from './useLocale';

/**
 * Dates were hard-coded in German long form ("20. März 2024"). A machine-readable
 * dateTime plus Intl formatting gives the right shape in each language and makes
 * the date legible to crawlers and assistive technology.
 *
 * `iso` is either YYYY-MM-DD or YYYY-MM when only the month is known.
 */
export default function ArticleDate({
  iso,
  className,
}: {
  iso: string;
  className?: string;
}) {
  const locale = useLocale();
  const monthOnly = iso.length === 7;
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, monthOnly ? 1 : day));
  const formatted = new Intl.DateTimeFormat(locale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    ...(monthOnly ? {} : { day: 'numeric' }),
  }).format(date);
  return (
    <time dateTime={iso} className={className}>
      {formatted}
    </time>
  );
}
