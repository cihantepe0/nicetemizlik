import { MessageCircle } from 'lucide-react';

import { site } from '@/content/site';

const { contact, whatsappFab } = site;

/**
 * Sabit WhatsApp butonu. Mobilde de görünür; sağ altta, alt güvenli alanın
 * üstünde durur ve içerikle çakışmaması için sayfa altına boşluk bırakılır
 * (bkz. `app/page.tsx` içindeki alt padding).
 */
export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappFab.srLabel}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-copper py-3.5 pl-4 pr-4 font-semibold text-white shadow-lg shadow-ink/25 transition-colors hover:bg-[#7a4420] sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <MessageCircle className="size-5 shrink-0" strokeWidth={2} aria-hidden />
      <span className="hidden text-[0.9375rem] sm:inline">
        {whatsappFab.label}
      </span>
    </a>
  );
}
