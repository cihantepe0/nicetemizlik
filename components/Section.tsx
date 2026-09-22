import type { ReactNode } from 'react';

type Tone = 'cream' | 'sand' | 'ink';

const toneClass: Record<Tone, string> = {
  cream: 'bg-cream text-ink',
  sand: 'bg-sand text-ink',
  ink: 'bg-ink text-cream on-ink',
};

/**
 * Bölüm sarmalayıcı. Arka plan tonu dönüşümlü kullanılarak sayfaya
 * görsel olmadan da ritim kazandırılır.
 */
export function Section({
  id,
  tone = 'cream',
  className = '',
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden ${toneClass[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/** Bölüm başlığı bloğu: etiket + başlık + isteğe bağlı giriş metni. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  tone = 'light',
  align = 'left',
  className = '',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}) {
  const dark = tone === 'dark';
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}
    >
      <p className={`eyebrow ${dark ? 'text-copper-light' : 'text-copper'}`}>
        <span
          aria-hidden
          className={`h-px w-8 ${dark ? 'bg-copper-light/60' : 'bg-copper/50'}`}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 text-[clamp(1.75rem,1.15rem+2.6vw,3rem)] font-semibold leading-[1.1] ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-2xl text-[1.0625rem] leading-relaxed ${
            dark ? 'text-muted-invert' : 'text-muted'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
