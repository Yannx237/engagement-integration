export interface TeamMember {
image: string;
imageAlt: string;
role: string;
title: string;
description: string;
emailHref: string;
email: string;
}
export const teamMembers: readonly TeamMember[] = [
{image: "/assets/images/partner-3.png",
imageAlt: "Anita Nga — Vorsitzende",
role: "Vorsitzende",
title: "Anita Nga",
description: "Leitung der Integrations- und Bildungsinitiativen, Koordination von Frauen- und Familienprojekten.",
emailHref: "mailto:anita.nga@engagement-integration.de",
email: 'anita.nga@engagement-integration.de'},
{image: "/assets/images/partner-4.png",
imageAlt: "Alex Etobe — Vorsitzender",
role: "Vorsitzender",
title: "Alex Etobe",
description: "Strategische Entwicklung, institutionelle Partnerschaften und Kooperation mit öffentlichen Trägern.",
emailHref: "mailto:alex.etobe@engagement-integration.de",
email: 'alex.etobe@engagement-integration.de'}
];
