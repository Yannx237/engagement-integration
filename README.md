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
