import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RedesignLayout from '../redesign/RedesignLayout';
import type { Locale } from './config';

export default function LocaleLayout({ locale }: { locale: Locale }) {
  const { i18n } = useTranslation();

  // Switched during render, not in an effect: resources are bundled, so this is
  // synchronous, and an effect would let one frame render the previous language
  // under the new URL. The guard makes it idempotent under StrictMode.
  if (i18n.resolvedLanguage !== locale) {
    void i18n.changeLanguage(locale);
  }

  // React cannot render the <html> attribute, so it is set imperatively.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <RedesignLayout />;
}
