import { useTranslation } from 'react-i18next';

/**
 * Shown above the legal pages when the site is in English.
 *
 * The body of these pages deliberately never goes through t(): a legally
 * binding text must not be able to fall back silently to another language, or
 * lose a paragraph when keys are reorganised. It stays in German, marked up as
 * such, and this notice says so plainly.
 */
export default function LegalGermanOnlyNotice() {
  const { t } = useTranslation('legal');
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 -mb-4">
      <div className="rounded-2xl border border-amber-300/80 bg-amber-50 px-5 py-4">
        <h2 className="text-sm font-bold text-amber-900">
          {t('germanOnly.heading')}
        </h2>
        <p className="text-xs text-amber-800 mt-1 leading-relaxed">
          {t('germanOnly.text')}
        </p>
      </div>
    </div>
  );
}
