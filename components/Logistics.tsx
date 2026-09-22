import { Info } from 'lucide-react';

import { site } from '@/content/site';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { logistics, contact } = site;

export function Logistics() {
  return (
    <Section id="sevkiyat" tone="cream" labelledBy="sevkiyat-baslik">
      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="sevkiyat-baslik"
            eyebrow={logistics.eyebrow}
            title={logistics.title}
          />
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {logistics.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="relative flex h-full flex-col rounded-2xl border border-ink/12 bg-paper p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-ink text-copper-light">
                    <Icon name={step.icon} className="size-[1.3rem]" />
                  </span>
                  <span
                    aria-hidden
                    className="font-display text-3xl font-semibold tabular-nums text-ink/12"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* TODO: müşteri bilgisi bekleniyor — anlaşmalı kargo/nakliye firması,
            ortalama teslim süresi ve minimum sipariş koşulu. Bilgi gelene kadar
            bu notta rakam veya süre verilmez. */}
        <Reveal delay={140}>
          <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-ink/12 bg-sand/60 p-7 sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div className="flex gap-4">
              <Info
                className="mt-0.5 size-5 shrink-0 text-copper"
                strokeWidth={1.8}
                aria-hidden
              />
              <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                {logistics.note}
              </p>
            </div>
            <a
              href={contact.phoneHref}
              className="shrink-0 rounded-full bg-ink px-6 py-3 text-center font-semibold text-cream transition-colors hover:bg-ink-soft"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
