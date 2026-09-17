export const LOCALES = ['de', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

// German is the source language: it is what the association writes, and what
// every untranslated key falls back to.
export const DEFAULT_LOCALE: Locale = 'de';

export const LOCALE_STORAGE_KEY = 'efi.lang';

/** Absolute origin, needed for canonical and hreflang URLs. */
export const SITE_URL = 'https://engagement-integration.de';

export function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly string[]).includes(value ?? '');
}
