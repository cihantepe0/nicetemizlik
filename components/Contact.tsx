import { MapPin, MessageCircle, Phone } from 'lucide-react';

import { site } from '@/content/site';
import { ContactForm } from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHeading } from '@/components/Section';

const { contactSection, contact } = site;

export function Contact() {
  return (
    <Section id="iletisim" tone="sand" labelledBy="iletisim-baslik">
      <div className="container-nice py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            id="iletisim-baslik"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            intro={contactSection.intro}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-8">
          {/* İletişim bilgileri */}
          <Reveal className="flex">
            <div className="on-ink flex w-full flex-col rounded-2xl bg-ink p-7 text-cream lg:p-8">
              <div>
                <h3 className="eyebrow text-copper-light">
                  <span aria-hidden className="h-px w-6 bg-copper-light/60" />
                  {contactSection.addressLabel}
                </h3>
                <address className="mt-4 not-italic leading-relaxed text-cream">
                  {contact.address.street}
                  <br />
                  {contact.address.district} / {contact.address.city}
                </address>
                <a
                  href={contact.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-copper-light underline-offset-4 hover:underline"
                >
                  <MapPin className="size-4" strokeWidth={2} aria-hidden />
                  {contactSection.mapLinkLabel}
                </a>
              </div>

              <div className="mt-8 border-t border-ink-line pt-8">
                <h3 className="eyebrow text-copper-light">
                  <span aria-hidden className="h-px w-6 bg-copper-light/60" />
                  {contactSection.phoneLabel}
                </h3>
                <a
                  href={contact.phoneHref}
                  className="mt-4 block font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]"
                >
                  {contact.phoneDisplay}
                </a>

                <div className="mt-6 grid gap-3">
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-copper px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#a86134]"
                  >
                    <MessageCircle className="size-[1.05rem]" strokeWidth={2} aria-hidden />
                    {contact.whatsappLabel}
                  </a>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-6 py-3.5 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/10"
                  >
                    <Phone className="size-[1.05rem]" strokeWidth={2} aria-hidden />
                    Hemen ara
                  </a>
                </div>
              </div>

              {/* Harita — görünür alana yaklaşınca yüklenir */}
              <div className="mt-8 overflow-hidden rounded-xl border border-ink-line">
                <iframe
                  src={contact.mapsEmbedSrc}
                  title={contactSection.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-56 w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          {/* Teklif formu */}
          <Reveal delay={110} className="flex">
            <div className="w-full rounded-2xl border border-ink/12 bg-paper p-7 sm:p-8 lg:p-10">
              <h3 className="font-display text-xl font-semibold text-ink">
                {contactSection.form.title}
              </h3>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
