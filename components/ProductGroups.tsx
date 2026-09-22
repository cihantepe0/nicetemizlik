import { MessageCircle } from 'lucide-react';

import { site } from '@/content/site';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { products, contact } = site;

export function ProductGroups() {
  return (
    <Section id="urun-gruplari" tone="sand" labelledBy="urun-gruplari-baslik">
      <div aria-hidden className="texture-dots absolute inset-0 -z-10 opacity-70" />

      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="lg:max-w-2xl">
            <SectionHeading
              id="urun-gruplari-baslik"
              eyebrow={products.eyebrow}
              title={products.title}
              intro={products.intro}
            />
          </Reveal>
          <Reveal delay={120}>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-ink/20 px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink/45 hover:bg-ink/5"
            >
              <MessageCircle className="size-[1.05rem]" strokeWidth={2} aria-hidden />
              Ürün listesi isteyin
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 90}>
              <div className="group flex h-full items-start gap-5 rounded-xl border border-ink/12 bg-cream/70 p-6 transition-colors hover:border-ink/30 hover:bg-paper sm:p-7">
                <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-ink/12 bg-paper text-copper transition-colors group-hover:border-copper/35">
                  <Icon name={item.icon} className="size-[1.35rem]" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
