import { MessageCircle, Phone } from 'lucide-react';

import { site } from '@/content/site';

const { hero, contact } = site;

export function Hero() {
  return (
    <section
      id="top"
      className="on-ink relative isolate flex min-h-[38rem] items-end overflow-hidden bg-ink pb-14 pt-32 text-cream sm:min-h-[42rem] sm:pb-20 lg:min-h-[46rem] lg:pb-24"
    >
      {/* Arka plan görseli + koyu overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.image.src}
        alt=""
        width={hero.image.width}
        height={hero.image.height}
        fetchPriority="high"
        decoding="async"
        aria-hidden
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      {/* Dikey katman: üstte header, altta bölüm geçişi için koyulaşır */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,32,0.58)_0%,rgba(11,16,32,0.26)_45%,rgba(11,16,32,0.80)_100%)]"
      />
      {/* Yatay katman: metnin durduğu sol tarafı koyu tutar */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,16,32,0.82)_0%,rgba(11,16,32,0.38)_58%,rgba(11,16,32,0.08)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="container-nice relative">
        <div className="max-w-3xl">
          <p className="eyebrow text-copper-light">
            <span aria-hidden className="h-px w-8 bg-copper-light/60" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-[clamp(2.125rem,1.25rem+3.9vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.028em] text-white">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-cream/85 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-copper px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#7a4420]"
            >
              <MessageCircle className="size-[1.15rem]" strokeWidth={2} aria-hidden />
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-7 py-4 text-base font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/10"
            >
              <Phone className="size-[1.15rem]" strokeWidth={2} aria-hidden />
              <span className="sr-only">Bizi arayın: </span>
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-7 text-sm text-cream/70">
            {contact.address.district} / {contact.address.city} · Türkiye geneline sevkiyat
          </p>
        </div>
      </div>
    </section>
  );
}
