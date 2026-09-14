import type { ReactNode } from 'react';

export default function LegalContent({ children, className }: { children: ReactNode; className: string }) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className={className}>{children}</div>
    </section>
  );
}
