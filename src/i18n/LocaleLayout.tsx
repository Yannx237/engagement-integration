import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RedesignLayout from '../redesign/RedesignLayout';
import type { Locale } from './config';

export default function LocaleLayout({ locale }: { locale: Locale }) {
  const { i18n } = useTranslation();

  // useLayoutEffect, not useEffect: it runs before the browser paints, so the
  // re-render it triggers replaces the previous language in the same frame and
  // nobody ever sees a stale string. Doing this during render instead would be
  // a side effect in render, and React rightly rejects it.
  useLayoutEffect(() => {
    if (i18n.resolvedLanguage !== locale) void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  }, [locale, i18n]);

  return <RedesignLayout />;
}
