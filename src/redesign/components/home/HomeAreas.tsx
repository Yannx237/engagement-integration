import HomeAreaCard from './HomeAreaCard';
import { homeAreas } from '../../data/homeAreas';

export default function HomeAreas() {

  return (
<section className="py-24 bg-sand-100 border-y border-stone-200/80 scroll-mt-28" data-purpose="areas-of-action" id="handlungsfelder">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">Die 4 Säulen unserer Arbeit</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Begleitung, Beratung, Begegnung und Bildung.
            </h2>
<p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Unser ganzheitlicher Ansatz für gelingende gesellschaftliche Teilhabe und Selbstständigkeit im Ruhrgebiet.
            </p>
</div>

<div aria-label="Standortauswahl" className="inline-flex p-1 rounded-full bg-white border border-stone-200 shadow-sm" role="tablist">
<a href="#handlungsfelder" aria-selected="true" className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-brand-800 text-white shadow-sm inline-block" role="tab">
              Alle Handlungsfelder
            </a>
<a href="#standorte" className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-900 transition-colors">
              Castrop-Rauxel
            </a>
<a href="#standorte" className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-900 transition-colors">
              Dortmund
            </a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{homeAreas.map(item => <HomeAreaCard key={item.title} item={item} />)}







</div>
</div>
</section>
  );
}
