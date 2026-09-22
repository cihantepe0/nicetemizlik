import { site } from '@/content/site';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { sectors, contact } = site;

export function Sectors() {
  return (
    <Section id="sektorler" tone="ink" labelledBy="sektorler-baslik">
      <div aria-hidden className="texture-grid absolute inset-0 -z-10 opacity-45" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-copper/12 blur-3xl"
      />

      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="sektorler-baslik"
            eyebrow={sectors.eyebrow}
            title={sectors.title}
            intro={sectors.intro}
            tone="dark"
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:mt-16 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={(i % 4) * 70}
              className="bg-ink-deep"
            >
              <div className="group flex h-full min-h-[8.5rem] flex-col justify-between gap-4 p-5 transition-colors hover:bg-ink-soft sm:min-h-[9.5rem] sm:p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-line text-copper-light transition-colors group-hover:border-copper-light/50 sm:size-11">
                  <Icon name={item.icon} className="size-[1.2rem] sm:size-[1.35rem]" />
                </span>
                <h3 className="font-display text-[0.9375rem] font-semibold leading-snug text-cream sm:text-base">
                  {item.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-ink-line bg-ink-deep/60 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="max-w-xl text-[0.9375rem] leading-relaxed text-muted-invert">
              Listede kendi sektörünüzü göremiyor musunuz? İşletmenizin ihtiyacını
              konuşalım.
            </p>
            <a
              href={contact.phoneHref}
              className="shrink-0 rounded-full bg-cream px-6 py-3 font-semibold text-ink transition-colors hover:bg-white"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
