import { site } from '@/content/site';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';

const { partners } = site;

/**
 * Referans firmalar yalnızca isim olarak, tek tip fontla listelenir.
 * Logo üretilmez veya kullanılmaz.
 */
function Strip({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center ${duplicate ? 'marquee-duplicate' : ''}`}
      aria-hidden={duplicate || undefined}
    >
      {partners.items.map((name) => (
        <li key={name} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-display text-base font-medium tracking-tight text-ink/70 sm:px-9 sm:text-lg">
            {name}
          </span>
          <span aria-hidden className="size-1 rounded-full bg-copper/45" />
        </li>
      ))}
    </ul>
  );
}

export function Partners() {
  return (
    <Section tone="cream" labelledBy="ortaklar-baslik">
      <div className="container-nice pt-20 sm:pt-24 lg:pt-28">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-copper">
                <span aria-hidden className="h-px w-8 bg-copper/50" />
                {partners.eyebrow}
              </p>
              <h2
                id="ortaklar-baslik"
                className="mt-4 text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold text-ink"
              >
                {partners.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {partners.note}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquee-viewport relative overflow-hidden py-10 sm:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28"
        />
        <div className="marquee">
          <Strip />
          <Strip duplicate />
        </div>
      </div>
    </Section>
  );
}
