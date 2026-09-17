export const LOCALES = ['de', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

// German is the source language: it is what the association writes, and what
// every untranslated key falls back to.
export const DEFAULT_LOCALE: Locale = 'de';

export const LOCALE_STORAGE_KEY = 'efi.lang';

export function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly string[]).includes(value ?? '');
}
