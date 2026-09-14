import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type ContactSubject = 'allgemein' | 'nachhilfe' | 'beratung' | 'tandem' | 'spende' | 'mitglied' | 'shop';

interface ContactTargetResult {
  subject?: ContactSubject;
  target?: string;
  message?: string;
}

function getContactTarget(search: string, hash: string): ContactTargetResult {
  const params = new URLSearchParams(search);
  const subject = params.get('thema');
  const artikel = params.get('artikel');

  if (subject === 'shop' || Boolean(artikel)) {
    return {
      subject: 'shop',
      target: '#kontaktformular',
      message: artikel
        ? `Hallo EFI-Team,\n\nich möchte gerne folgenden Solidaritäts-Artikel bestellen:\n- Artikel: ${artikel}\n\nBitte teilen Sie mir die Details zur Bezahlung und Abholung/Lieferung mit.\n\nMit freundlichen Grüßen`
        : `Hallo EFI-Team,\n\nich interessiere mich für die Solidaritäts-Artikel im Vereins-Shop.\n\nMit freundlichen Grüßen`,
    };
  }

  if (subject === 'spende' || subject === 'spenden' || hash === '#spenden') {
    return {
      subject: 'spende',
      target: subject === 'spende' && hash === '#kontaktformular' ? '#kontaktformular' : '#spenden',
    };
  }
  if (subject === 'mitglied' || hash === '#mitglied') {
    return {
      subject: 'mitglied',
      target: subject === 'mitglied' && hash === '#kontaktformular' ? '#kontaktformular' : '#mitglied',
    };
  }
  return { subject: undefined, target: hash };
}

export function useContactInquiry() {
  const location = useLocation();
  const target = getContactTarget(location.search, location.hash);
  const [selection, setSelection] = useState<{ locationKey: string; subject: ContactSubject; message: string }>({
    locationKey: location.key,
    subject: target.subject ?? 'allgemein',
    message: target.message ?? '',
  });

  // A new navigation applies its preset; edits within that navigation take precedence.
  if (selection.locationKey !== location.key) {
    setSelection({
      locationKey: location.key,
      subject: target.subject ?? selection.subject,
      message: target.message !== undefined ? target.message : selection.message,
    });
  }

  useEffect(() => {
    if (!target.target) return;
    const elementId = target.target.startsWith('#') ? target.target.slice(1) : target.target;
    const element = document.getElementById(elementId);
    if (!element) return;
    const timeout = setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 120);
    return () => clearTimeout(timeout);
  }, [location.key, target.target]);

  function setSelectedSubject(subject: ContactSubject) {
    setSelection(prev => ({ ...prev, subject }));
  }

  function setMessageText(message: string) {
    setSelection(prev => ({ ...prev, message }));
  }

  function scrollToFormWithSubject(subject: ContactSubject) {
    setSelectedSubject(subject);
    document.getElementById('kontaktformular')?.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    selectedSubject: selection.subject,
    setSelectedSubject,
    messageText: selection.message,
    setMessageText,
    scrollToFormWithSubject,
  };
}
