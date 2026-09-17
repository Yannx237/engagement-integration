import { useTranslation } from 'react-i18next';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/teamMembers';

export default function AboutTeam() {
  const { t } = useTranslation('about');
  return (
    <section className="bg-white py-16 sm:py-24 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            {t('team.badge')}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('team.heading')}
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            {t('team.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          {teamMembers.map((item) => (
            <TeamMemberCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
