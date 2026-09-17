import type { Project } from './projects';

/**
 * Projects EFI runs abroad, kept apart from the three German locations.
 *
 * Fill one entry per project, using the same shape as the city fields of
 * action so the cards render identically:
 *
 *   {
 *     badge: 'Kamerun',                      // country, shown as the pill
 *     title: 'Name des Projekts',
 *     desc: 'Ein bis zwei Sätze zum Projekt.',
 *     details: ['Schwerpunkt 1', 'Schwerpunkt 2'],
 *     iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
 *     icon: (<svg ... />),
 *     flyers: [{ title: 'Flyer …', file: '/assets/flyers/international/….pdf' }],
 *   }
 *
 * While the list is empty the page shows an honest placeholder with a contact
 * route instead of inventing content.
 */
export const internationalProjects: readonly Project[] = [];
