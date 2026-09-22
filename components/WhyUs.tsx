import { site } from '@/content/site';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { whyUs } = site;

export function WhyUs() {
  return (
    <Section id="neden-nice" tone="sand" labelledBy="neden-nice-baslik">
      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16 xl:gap-24">
          <div>
            <Reveal>
              <SectionHeading
                id="neden-nice-baslik"
                eyebrow={whyUs.eyebrow}
                title={whyUs.title}
              />
            </Reveal>

            <ol className="mt-12 divide-y divide-ink/12 border-t border-ink/12">
              {whyUs.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <div className="flex gap-6 py-7 sm:gap-8">
                    <span
                      aria-hidden
                      className="font-display text-sm font-semibold tabular-nums text-copper"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[0.9875rem] leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={140} className="lg:pt-4">
            <figure className="relative">
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={whyUs.image.src}
                  alt={whyUs.image.alt}
                  width={whyUs.image.width}
                  height={whyUs.image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                Sipariş, hazırlık ve sevkiyat aynı ekip tarafından takip edilir.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
