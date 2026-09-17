# Flyers des projets

Un flyer appartient à **une ville** et à **un domaine d'activité**.
Un domaine sans document propre n'affiche pas de flyer : la carte propose un
contact à la place. On ne réutilise jamais le document d'une autre ville.

## 1. Déposer le fichier

    public/assets/flyers/berlin/
    public/assets/flyers/castrop-rauxel/
    public/assets/flyers/dortmund/
    public/assets/flyers/international/

Nom de fichier en minuscules, sans accent ni espace :
`tandem-statt-barriere.pdf`, `nachhilfe-2026.pdf`.

## 2. Le déclarer

Villes : `src/redesign/data/projects.tsx`, sur le domaine concerné
(`castropProjects`, `dortmundProjects`, `berlinProjects`).
International : `src/redesign/data/international.tsx`.

```ts
{
  badge: 'Bildung & Nachhilfe',
  title: 'Bildung und Erziehung',
  // …
  flyers: [
    {
      title: 'Flyer Nachhilfe Castrop-Rauxel',
      file: '/assets/flyers/castrop-rauxel/nachhilfe-2026.pdf',
      note: 'PDF · Schuljahr 2026/27', // facultatif
    },
  ],
}
```

Le chemin commence par `/assets/flyers/…` (pas `public/`).
