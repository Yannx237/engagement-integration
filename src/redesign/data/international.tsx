import type { Project } from './projects';

/**
 * Projects EFI runs abroad, kept apart from the three German locations.
 *
 * Add one entry per project: an id, an iconBg, an icon and optional flyers.
 * The text belongs in projects.json under international.projects.<id>, with
 * badge / title / desc / detail1..3, exactly like the city fields of action.
 *
 * While the list is empty the page shows an honest placeholder with a contact
 * route instead of inventing content.
 */
export const internationalProjects: readonly Project[] = [];
