import type { ReactNode } from 'react';

export default function NewsArticle({ children }: { children: ReactNode }) {
  return (
    <article className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
      {children}
    </article>
  );
}
