// Text lives in about.json under team.members.<id>; this file keeps the photo
// and the address, which are not translated.
export type TeamMemberId = 'anita-nga';

export interface TeamMember {
  id: TeamMemberId;
  image: string;
  emailHref: string;
  email: string;
}

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'anita-nga',
    image: '/assets/images/partner-3.png',
    emailHref: 'mailto:anita.nga@engagement-integration.de',
    email: 'anita.nga@engagement-integration.de',
  },
];
