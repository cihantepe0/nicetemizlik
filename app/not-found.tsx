import type { Metadata } from 'next';

import { site } from '@/content/site';

export const metadata: Metadata = {
  title: `Sayfa bulunamadı | ${site.company.name}`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="on-ink flex min-h-dvh items-center bg-ink text-cream">
      <div className="container-nice py-24">
        <p className="eyebrow text-copper-light">
          <span aria-hidden className="h-px w-8 bg-copper-light/60" />
          Hata 404
        </p>
        <h1 className="mt-6 max-w-2xl text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-semibold leading-[1.08] text-white">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-5 max-w-lg leading-relaxed text-muted-invert">
          Bağlantı değişmiş ya da yanlış yazılmış olabilir. Ana sayfadan devam
          edebilir veya doğrudan bize ulaşabilirsiniz.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#a86134]"
          >
            Ana sayfaya dön
          </a>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3.5 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/10"
          >
            {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
