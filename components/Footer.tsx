import { MapPin, Phone } from 'lucide-react';

import { site } from '@/content/site';
import { Logo } from '@/components/Logo';

const { footer, contact, nav, company } = site;

export function Footer() {
  return (
    <footer className="on-ink bg-ink-deep text-cream">
      {/* Alt boşluk: sabit WhatsApp butonu telif satırını kapatmasın */}
      <div className="container-nice pb-24 pt-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <Logo variant="light" className="h-10 w-auto" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted-invert">
              {footer.about}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Alt menü">
              <h2 className="eyebrow text-copper-light">
                <span aria-hidden className="h-px w-6 bg-copper-light/60" />
                {footer.navTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[0.9375rem] text-muted-invert underline-offset-4 transition-colors hover:text-cream hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-copper-light">
                <span aria-hidden className="h-px w-6 bg-copper-light/60" />
                {footer.contactTitle}
              </h2>
              <ul className="mt-5 grid gap-4">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-cream underline-offset-4 hover:underline"
                  >
                    <Phone className="size-[1.05rem] text-copper-light" strokeWidth={2} aria-hidden />
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <MapPin
                    className="mt-1 size-[1.05rem] shrink-0 text-copper-light"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <address className="not-italic text-[0.9375rem] leading-relaxed text-muted-invert">
                    {contact.address.street}
                    <br />
                    {contact.address.district} / {contact.address.city}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-invert">{footer.copyright}</p>
          <p className="text-sm text-muted-invert/70">
            {company.tagline} · {contact.address.district} / {contact.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
