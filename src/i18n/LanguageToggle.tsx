import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LOCALE_STORAGE_KEY } from './config';
import type { Locale } from './config';
import { useEquivalentPath, useLocale } from './useLocale';

function remember(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Blocked storage only costs the visitor the memory of their choice.
  }
}

/**
 * With two languages a dropdown is wasted space and a wasted click, so the
 * control shows the language you would switch *to*. It is a link rather than a
 * button: crawlable, openable in a new tab, and it carries hrefLang.
 */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { t } = useTranslation();
  const locale = useLocale();
  const other: Locale = locale === 'de' ? 'en' : 'de';
  const href = useEquivalentPath(other);

  return (
    <Link
      to={href}
      hrefLang={other}
      rel="alternate"
      onClick={() => remember(other)}
      aria-label={other === 'en' ? t('language.switchToEn') : t('language.switchToDe')}
      className={`inline-flex items-center gap-1 rounded-full border border-stone-200 px-2.5 py-1 text-xs font-bold text-brand-900 hover:bg-stone-100 transition-colors ${className}`}
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
      {other.toUpperCase()}
    </Link>
  );
}

/** Full-width segmented control for the mobile drawer. */
export function LanguageSegmented({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation();
  const locale = useLocale();
  const toDe = useEquivalentPath('de');
  const toEn = useEquivalentPath('en');
  const base =
    'w-full text-center py-2.5 rounded-full text-xs font-bold transition-colors border';
  const active = `${base} bg-brand-700 text-white border-brand-700`;
  const idle = `${base} bg-stone-100 text-brand-900 border-stone-200 hover:bg-stone-200`;

  return (
    <div
      className="pt-3 grid grid-cols-2 gap-2"
      role="group"
      aria-label={t('language.groupLabel')}
    >
      {/* Each label stays in its own language and is never translated. */}
      <Link
        to={toDe}
        hrefLang="de"
        aria-current={locale === 'de' ? 'true' : undefined}
        onClick={() => {
          remember('de');
          onNavigate?.();
        }}
        className={locale === 'de' ? active : idle}
      >
        {t('language.de')}
      </Link>
      <Link
        to={toEn}
        hrefLang="en"
        aria-current={locale === 'en' ? 'true' : undefined}
        onClick={() => {
          remember('en');
          onNavigate?.();
        }}
        className={locale === 'en' ? active : idle}
      >
        {t('language.en')}
      </Link>
    </div>
  );
}
