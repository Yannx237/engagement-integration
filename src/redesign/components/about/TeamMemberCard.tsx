import type { TeamMember } from '../../data/teamMembers';
export default function TeamMemberCard({ item }: { item: TeamMember }) {
return (
<div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-stone-50 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-stone-200">
                <img 
                  src={item.image} 
                  alt={item.imageAlt} 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">{item.role}</span>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                <a 
                  href={item.emailHref} 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800 pt-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {item.email}</a>
              </div>
            </div>
);
}
