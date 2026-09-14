import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/teamMembers';

export default function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-24 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            Vorstand &amp; Leitung
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Die Menschen hinter EFI e.V.
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Verlässlichkeit, interkulturelle Kompetenz und Herzblut prägen die
            Führung unserer Organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          {teamMembers.map((item) => (
            <TeamMemberCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
