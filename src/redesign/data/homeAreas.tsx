import type { ReactNode } from 'react';
export interface HomeArea {
iconClass: string;
icon: ReactNode;
pillarClass: string;
pillar: string;
title: string;
description: ReactNode;
badgeClass: string;
badge: string;
action: string;
}
export const homeAreas: readonly HomeArea[] = [
{iconClass: "w-14 h-14 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-limeAccent-400 transition-colors duration-300",
icon: <><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg></>,
pillarClass: "text-xs font-bold uppercase tracking-wider text-brand-600 mb-1 block",
pillar: "Säule 01",
title: "Begleitung",
description: <>
                <strong>Sprachmittlung &amp; Alltagsorientierung:</strong> Geschulte ehrenamtliche Begleitpersonen zur Überwindung sprachlicher Barrieren bei Behördengängen, Arztbesuchen, Kitas und Schulen.
              </>,
badgeClass: "text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md",
badge: "Sprachmittlung",
action: "Begleitung anfragen →"},
{iconClass: "w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6 group-hover:bg-amber-800 group-hover:text-amber-200 transition-colors duration-300",
icon: <><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg></>,
pillarClass: "text-xs font-bold uppercase tracking-wider text-amber-700 mb-1 block",
pillar: "Säule 02",
title: "Beratung",
description: <>
                <strong>Allgemeine Sozialberatung:</strong> Niedrigschwellige Unterstützung bei behördlichen Anträgen (Bürgeramt, Ausländerbehörde, Jobcenter-Online), Erstberatung und Verweisung an Fachstellen.
              </>,
badgeClass: "text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md",
badge: "Kostenfrei",
action: "Termin buchen →"},
{iconClass: "w-14 h-14 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center mb-6 group-hover:bg-rose-800 group-hover:text-rose-200 transition-colors duration-300",
icon: <><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg></>,
pillarClass: "text-xs font-bold uppercase tracking-wider text-rose-700 mb-1 block",
pillar: "Säule 03",
title: "Begegnung",
description: <>
                <strong>Tanz, Frauencafé &amp; Dialog:</strong> Offene und geschützte Begegnungsräume im Begegnungszentrum Merklinde zum Austausch auf Augenhöhe, gegenseitigen Kennenlernen und Abbau von Vorurteilen.
              </>,
badgeClass: "text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md",
badge: "Frauencafé",
action: "Mehr erfahren →"},
{iconClass: "w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-emerald-200 transition-colors duration-300",
icon: <><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg></>,
pillarClass: "text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 block",
pillar: "Säule 04",
title: "Bildung",
description: <>
                <strong>Nachhilfe, Sprachcafé &amp; Workshops:</strong> Kostenfreie Hausaufgabenbetreuung für Schüler, alltagsbezogene Sprachförderung und praxisnahe Seminare für digitale Grundbildung.
              </>,
badgeClass: "text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md",
badge: "Nachhilfe & Kurse",
action: "Angebote ansehen →"}
];
