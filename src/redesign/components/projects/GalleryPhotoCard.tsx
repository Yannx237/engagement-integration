import type { ActivityPhoto } from '../../data/projects';
export default function GalleryPhotoCard({ photo }: { photo: ActivityPhoto }) { return (<div 
                className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                      {photo.location === 'castrop' ? 'Castrop-Rauxel' : photo.location === 'dortmund' ? 'Dortmund' : 'Berlin'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {photo.desc}
                    </p>
                  </div>
                </div>
              </div>); }
