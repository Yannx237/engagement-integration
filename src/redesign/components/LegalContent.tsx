import type { ReactNode } from 'react';

export default function LegalContent({
  children,
  className,
  lang,
}: {
  children: ReactNode;
  className: string;
  /** Marks the body as German even when the page around it is not. */
  lang?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className={className} lang={lang}>
        {children}
      </div>
    </section>
  );
}
