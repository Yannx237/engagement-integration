/**
 * The one list of contact subjects, shared by the home form and the Kontakt
 * page. They used to diverge: the home form offered "deutschkurs" and
 * "ehrenamt", which the Kontakt page did not know about, so a visitor could
 * submit a subject the rest of the site could not read back.
 *
 * These values are identifiers, not copy. They travel in the URL
 * (?thema=spende), they are asserted by the interaction script, and they stay
 * German in every language. Only their labels are translated.
 */
export const CONTACT_SUBJECTS = [
  'allgemein',
  'nachhilfe',
  'beratung',
  'tandem',
  'spende',
  'mitglied',
  'shop',
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export function isContactSubject(value: string | null): value is ContactSubject {
  return (CONTACT_SUBJECTS as readonly string[]).includes(value ?? '');
}
