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
  {
    image: '/assets/images/partner-3.png',
    imageAlt: 'Anita Nga — Vorsitzende',
    role: 'Vorsitzende',
    title: 'Anita Nga',
    description:
      'Leitung der Integrations- und Bildungsinitiativen, Koordination von Frauen- und Familienprojekten.',
    emailHref: 'mailto:anita.nga@engagement-integration.de',
    email: 'anita.nga@engagement-integration.de',
  },
];
