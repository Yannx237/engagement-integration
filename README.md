# Engagement für Integration e.V. (EFI) — Web-Plattform

Offizielle Website des gemeinnützigen Vereins **Engagement für Integration e.V. (EFI)** mit Standorten in Castrop-Rauxel und Dortmund (NRW).

## 🌟 Über das Projekt
Diese moderne Webanwendung dient als digitale Informations- und Anlaufstelle für:
- Begleitung & Beratung von Geflüchteten, Migrantenselbstorganisationen und Familien
- Kostenfreie Nachhilfeangebote für Schülerinnen und Schüler
- Sprachcafés & interkulturelle Begegnungsstätten
- Ehrenamtliche Initiativen, Patenschaften & Mitgliedschaft
- Unterstützung & Spendenabwicklung

---

## 🚀 Technologie-Stack
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) mit individuellem Design-System (Forest Green, Vibrant Lime & Warm Sand)
- **Routing**: [React Router v7](https://reactrouter.com/) mit aktiven Navigationsstatus und Anker-Scroll
- **Karten-Integration**: [Mapbox GL](https://www.mapbox.com/)

---

## 📂 Seiten & Navigation
- `/` : Startseite (Hero, Leitbild, 4 Säulen, Projekte-Karussell, Standorte mit Karte, Solidar-Shop, Kontakt)
- `/about-us` : Über uns & Leitbild (Geschichte, Werte, Vorstand & Team)
- `/services-for-immigrants` (`/projekte`) : Projektübersicht mit dynamischen Filtern nach Stadt und Galerie
- `/news` (`/neuigkeiten`) : Aktuelle Berichte, Presse & Veranstaltungen
- `/contact` (`/kontakt`) : Kontaktformular mit automatischer Vorbelegung (Spenden / Mitgliedschaft / Nachhilfe)
- `/mentions` (`/impressum`) : Impressum gemäß § 5 TMG
- `/privacy-policy` (`/datenschutz`) : Datenschutzerklärung gemäß DSGVO
- `/404` (`*`) : Individuelle 404-Fehlerseite mit Schnellnavigation

---

## 🛠️ Installation & Lokale Entwicklung

```bash
# 1. Repository klonen
git clone <repository-url>
cd "engament integration"

# 2. Abhängigkeiten installieren
npm install

# 3. Lokalen Entwicklungsserver starten
npm run dev

# 4. Produktions-Build erstellen
npm run build
```

## Aufbau der aktiven Seiten

Die Routenseiten in `src/redesign/pages` und `RedesignHome.tsx` setzen die
einzelnen Seitenabschnitte zusammen. Die Komponenten liegen nach Seite geordnet
unter `src/redesign/components/{home,about,contact,projects,news}`.

- Wiederholte Karten verwenden gemeinsame Komponenten, beispielsweise
  `HomeAreaCard`, `FeaturedProjectCard`, `ShopProductCard`, `TeamMemberCard`
  und `ProjectCard`.
- Statische Inhalte und ihre TypeScript-Typen liegen unter `src/redesign/data`.
  Vollständige CSS-Klassen bleiben erhalten; Farbklassen nicht aus Teilstrings erzeugen.
- Lokaler UI-Zustand bleibt in der jeweiligen Sektion. Gemeinsame Logik für
  horizontales Scrollen, Formularbestätigung und Kontakt-Vorbelegung liegt unter
  `src/redesign/hooks`. Zeitgeber werden beim Unmount aufgeräumt.
- `PageHero`, `ShareCTA` und `LegalContent` stellen gemeinsame Seitenelemente bereit.
  Kleine, eigenständige Seiten wie die 404-Seite bleiben bewusst zusammenhängend.
- Alte, nicht geroutete Seiten und die frühere Navigation wurden entfernt.
  `Design de base` enthält nur noch erhaltene Bild- und Schriftressourcen.
  Aktive Routen werden in `src/App.tsx` festgelegt; die verwendeten Rechtstexte
  bleiben unter `src/pages` und das gemeinsame Logo unter `src/components`.

Die Formularbestätigungen behalten das bestehende lokale Verhalten bei; dieser
Refactor fügt keinen E-Mail-Versand und keine Speicherung hinzu.

## Prüfung nach strukturellen Änderungen

`npm run test:ui` startet einen temporären Vite-Server und Chromium im Headless-Modus.
Geprüft werden die acht Seiten bei 1440 und 390 Pixeln, beide mobilen Karussells,
Projekt- und Galeriefilter sowie Kontakt-Vorbelegung und die lokale Bestätigung.
Bei Bedarf den Browserpfad über `CHROME_PATH` setzen.

Der Markup-Vergleich prüft das vollständige serverseitig gerenderte HTML inklusive
Texten, Klassen und Attributen. Vor einer Änderung eine Referenz außerhalb des
Repositories speichern und danach vergleichen:

```powershell
npm run check:markup -- capture "$env:TEMP/efi-markup.json"
# Strukturelle Änderungen durchführen
npm run check:markup -- compare "$env:TEMP/efi-markup.json"
npm run build
npx oxlint src scripts
npm run test:ui
```

Der Markup-Vergleich prüft den initialen Zustand; Interaktionen werden separat
im Browser geprüft. `npm run lint` prüft den Projektcode ohne die entfernten
JavaScript-Dateien der alten Website-Kopien.
