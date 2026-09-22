'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

import { site } from '@/content/site';
import { Logo } from '@/components/Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menü açıkken arka plan kaymasın; Esc ile kapansın.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-b border-ink/10 bg-cream/92 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-nice">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <a
            href="#top"
            className={`shrink-0 transition-colors ${solid ? 'text-ink' : 'text-cream'}`}
            aria-label={`${site.company.name} — sayfa başına dön`}
          >
            <Logo variant={solid ? 'dark' : 'light'} className="h-9 w-auto lg:h-10" />
          </a>

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors ${
                      solid
                        ? 'text-muted hover:text-ink'
                        : 'text-cream/80 hover:text-cream'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.contact.phoneHref}
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors sm:inline-flex ${
                solid
                  ? 'bg-ink text-cream hover:bg-ink-soft'
                  : 'bg-cream text-ink hover:bg-white'
              }`}
            >
              <Phone className="size-4" strokeWidth={2} aria-hidden />
              <span>{site.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? 'border-ink/15 text-ink hover:bg-ink/5'
                  : 'border-cream/30 text-cream hover:bg-cream/10'
              }`}
            >
              {open ? (
                <X className="size-5" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="size-5" strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        hidden={!open}
        className="border-t border-ink/10 bg-cream lg:hidden"
      >
        <nav aria-label="Mobil menü" className="container-nice py-4">
          <ul className="divide-y divide-ink/10">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-lg font-semibold text-ink"
                >
                  {item.label}
                  <span aria-hidden className="text-copper">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 pb-2">
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-copper px-5 py-3.5 text-center font-semibold text-white"
            >
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.contact.phoneHref}
              onClick={() => setOpen(false)}
              className="rounded-full border border-ink/20 px-5 py-3.5 text-center font-semibold text-ink"
            >
              {site.contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
