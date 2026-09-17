import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { shopProducts } from '../data/shopProducts';
import type { ShopProductId } from '../data/shopProducts';

export type { ContactSubject } from '../data/contactSubjects';
import type { ContactSubject } from '../data/contactSubjects';

type Translate = (key: string, options?: Record<string, unknown>) => string;

interface ContactTargetResult {
  subject?: ContactSubject;
  target?: string;
  message?: string;
  /**
   * Identifies *which* preset this is, independently of the language it is
   * written in. A language switch is a navigation like any other, so without
   * this the visitor's own text would be wiped on every switch.
   */
  presetKey?: string;
}

function isShopProductId(value: string): value is ShopProductId {
  return shopProducts.some((product) => product.id === value);
}

/**
 * Pure: `t` is passed in rather than imported, so this stays testable and does
 * not reach for a module-level i18n instance during render.
 */
function getContactTarget(
  search: string,
  hash: string,
  t: Translate
): ContactTargetResult {
  const params = new URLSearchParams(search);
  const subject = params.get('thema');
  const artikel = params.get('artikel');

  if (subject === 'shop' || Boolean(artikel)) {
    // The parameter carries a product id. Anything else is kept as free text,
    // so older links that spelled out a German product name still work.
    const label =
      artikel && isShopProductId(artikel)
        ? t(`home:shop.products.${artikel}.name`)
        : artikel;
    return {
      subject: 'shop',
      target: '#kontaktformular',
      presetKey: `shop|${artikel ?? ''}`,
      message: label
        ? t('presets.shopWithArticle', { artikel: label })
        : t('presets.shopGeneral'),
    };
  }

  if (subject === 'spende' || subject === 'spenden' || hash === '#spenden') {
    return {
      subject: 'spende',
      target:
        subject === 'spende' && hash === '#kontaktformular'
          ? '#kontaktformular'
          : '#spenden',
    };
  }
  if (subject === 'mitglied' || hash === '#mitglied') {
    return {
      subject: 'mitglied',
      target:
        subject === 'mitglied' && hash === '#kontaktformular'
          ? '#kontaktformular'
          : '#mitglied',
    };
  }
  return { subject: undefined, target: hash };
}

export function useContactInquiry() {
  const location = useLocation();
  const { t } = useTranslation(['contact', 'home']);
  const target = getContactTarget(
    location.search,
    location.hash,
    t as Translate
  );
  const [selection, setSelection] = useState<{
    locationKey: string;
    subject: ContactSubject;
    message: string;
    appliedPreset: string;
    presetKey: string;
  }>({
    locationKey: location.key,
    subject: target.subject ?? 'allgemein',
    message: target.message ?? '',
    appliedPreset: target.message ?? '',
    presetKey: target.presetKey ?? '',
  });

  const untouched = selection.message === selection.appliedPreset;
  const samePreset = (target.presetKey ?? '') === selection.presetKey;

  if (selection.locationKey !== location.key) {
    // A different preset means a real content change and wins. The same preset
    // in another language keeps whatever the visitor has written.
    const takePreset =
      target.message !== undefined && (!samePreset || untouched);
    setSelection({
      locationKey: location.key,
      subject: target.subject ?? selection.subject,
      message: takePreset ? target.message! : selection.message,
      appliedPreset: takePreset ? target.message! : selection.appliedPreset,
      presetKey: target.presetKey ?? '',
    });
  } else if (
    target.message !== undefined &&
    untouched &&
    selection.message !== target.message
  ) {
    setSelection({
      ...selection,
      message: target.message,
      appliedPreset: target.message,
    });
  }

  useEffect(() => {
    if (!target.target) return;
    const elementId = target.target.startsWith('#')
      ? target.target.slice(1)
      : target.target;
    const element = document.getElementById(elementId);
    if (!element) return;
    const timeout = setTimeout(
      () => element.scrollIntoView({ behavior: 'smooth' }),
      120
    );
    return () => clearTimeout(timeout);
  }, [location.key, target.target]);

  function setSelectedSubject(subject: ContactSubject) {
    setSelection((prev) => ({ ...prev, subject }));
  }

  function setMessageText(message: string) {
    setSelection((prev) => ({ ...prev, message }));
  }

  function scrollToFormWithSubject(subject: ContactSubject) {
    setSelectedSubject(subject);
    document
      .getElementById('kontaktformular')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    selectedSubject: selection.subject,
    setSelectedSubject,
    messageText: selection.message,
    setMessageText,
    scrollToFormWithSubject,
  };
}
