import type { Locale } from './config';

/** 2500 -> "25,00 EUR" in German, "EUR25.00" in English, via Intl. */
export function formatPrice(locale: Locale, cents: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}
