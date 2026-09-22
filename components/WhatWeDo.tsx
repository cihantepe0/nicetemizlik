import { site } from '@/content/site';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { whatWeDo } = site;

export function WhatWeDo() {
  return (
    <Section id="ne-yapiyoruz" tone="cream" labelledBy="ne-yapiyoruz-baslik">
      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="ne-yapiyoruz-baslik"
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.title}
          />
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-16 lg:grid-cols-3">
          {whatWeDo.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="bg-paper">
              <div className="flex h-full flex-col p-8 lg:p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink text-copper-light">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.9875rem] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
