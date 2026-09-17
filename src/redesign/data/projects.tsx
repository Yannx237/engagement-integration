import type { ReactNode } from 'react';

export type ProjectLocation = 'berlin' | 'castrop' | 'dortmund';
export type GalleryLocation = ProjectLocation;
export type GalleryFilter = GalleryLocation | 'all';

// A downloadable project flyer. `file` is a path under /assets/flyers/<stadt>/.
export interface Flyer {
  title: string;
  file: string;
  note?: string;
}

/**
 * Every field of action that exists, spelled out. This is what lets
 * `t(`${fieldPath}.title`)` type-check as a real translation key instead of an
 * arbitrary string — a new field of action is added here and in projects.json,
 * and tsc points at anything that does not line up.
 */
export type FieldPath =
  | 'fields.castrop.bildung'
  | 'fields.castrop.migration'
  | 'fields.castrop.kinder'
  | 'fields.dortmund.migration'
  | 'fields.dortmund.erlebnis'
  | 'fields.berlin.migration'
  | 'fields.berlin.bildung'
  | 'fields.berlin.kinder';

/**
 * A field of action. Text lives in projects.json at `fieldPath`; this file
 * keeps the icon and the flyers, neither of which is translated.
 */
export interface Project {
  fieldPath: FieldPath;
  iconBg: string;
  icon: ReactNode;
  // Flyers belong to one city and one field of action. A field without its own
  // document stays empty and offers a contact route instead — flyers are never
  // borrowed from another city.
  flyers?: readonly Flyer[];
}

export type ActivityPhotoId =
  | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6'
  | 'f7' | 'f8' | 'f9' | 'f10' | 'f11';

export interface ActivityPhoto {
  id: ActivityPhotoId;
  src: string;
  location: GalleryLocation;
}

export const galleryFilters: readonly GalleryFilter[] = [
  'all',
  'castrop',
  'dortmund',
  'berlin',
];

export const castropProjects: readonly Project[] = [
  {
    fieldPath: 'fields.castrop.bildung',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    fieldPath: 'fields.castrop.migration',
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    fieldPath: 'fields.castrop.kinder',
    iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export const dortmundProjects: readonly Project[] = [
  {
    fieldPath: 'fields.dortmund.migration',
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    fieldPath: 'fields.dortmund.erlebnis',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export const berlinProjects: readonly Project[] = [
  {
    fieldPath: 'fields.berlin.migration',
    iconBg: 'bg-lime-50 text-lime-800 border-lime-200',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    fieldPath: 'fields.berlin.bildung',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    fieldPath: 'fields.berlin.kinder',
    iconBg: 'bg-brand-50 text-brand-800 border-brand-100',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export interface City {
  id: ProjectLocation;
  domains: readonly Project[];
}

// One entry per city; the fields of action follow from the chosen city.
export const cities: readonly City[] = [
  { id: 'berlin', domains: berlinProjects },
  { id: 'castrop', domains: castropProjects },
  { id: 'dortmund', domains: dortmundProjects },
];

// Activities gallery with original images
export const activityPhotos: readonly ActivityPhoto[] = [
  { id: 'f1', src: '/assets/images/f1.png', location: 'castrop' },
  { id: 'f2', src: '/assets/images/f2.png', location: 'castrop' },
  { id: 'f3', src: '/assets/images/f3.png', location: 'castrop' },
  { id: 'f4', src: '/assets/images/f4.png', location: 'castrop' },
  { id: 'f5', src: '/assets/images/f5.png', location: 'castrop' },
  { id: 'f6', src: '/assets/images/f6.png', location: 'castrop' },
  { id: 'f7', src: '/assets/images/f7.png', location: 'castrop' },
  { id: 'f8', src: '/assets/images/f8.png', location: 'dortmund' },
  { id: 'f9', src: '/assets/images/f9.png', location: 'dortmund' },
  { id: 'f10', src: '/assets/images/f10.png', location: 'berlin' },
  { id: 'f11', src: '/assets/images/f11.png', location: 'berlin' },
];
