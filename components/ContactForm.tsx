'use client';

import { useId, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

import { WEB3FORMS_ENDPOINT, WEB3FORMS_KEY, site } from '@/content/site';

const { form } = site.contactSection;

type Status = 'idle' | 'sending' | 'success' | 'error';

const fieldClass =
  'w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-muted/55 transition-colors focus:border-copper focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-copper';

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    // Statik hosting: HTML action post'u yok, gönderim client-side fetch ile.
    event.preventDefault();
    if (status === 'sending') return;

    // React senkron olmayan işlemden sonra currentTarget'ı boşaltır; referansı saklıyoruz.
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Yeni teklif talebi — ${site.company.name}`,
      from_name: site.company.name,
      ad_soyad: String(data.get('ad_soyad') ?? ''),
      isletme_adi: String(data.get('isletme_adi') ?? ''),
      telefon: String(data.get('telefon') ?? ''),
      ihtiyac: String(data.get('ihtiyac') ?? ''),
      // Web3Forms'un kendi bot tuzağı alanı
      botcheck: String(data.get('botcheck') ?? ''),
    };

    if (!payload.ad_soyad.trim() || !payload.telefon.trim() || !payload.ihtiyac.trim()) {
      setStatus('error');
      setMessage(form.requiredMessage);
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result: { success?: boolean } = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setMessage(form.successMessage);
        formEl.reset();
      } else {
        setStatus('error');
        setMessage(form.errorMessage);
      }
    } catch {
      setStatus('error');
      setMessage(form.errorMessage);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {/* Bot tuzağı — ekran okuyuculardan ve klavyeden gizli */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${id}-ad`}
            className="mb-2 block text-sm font-semibold text-ink"
          >
            {form.fields.name.label}{' '}
            <span className="text-copper" title={form.requiredHint}>
              *
            </span>
          </label>
          <input
            id={`${id}-ad`}
            name="ad_soyad"
            type="text"
            required
            autoComplete="name"
            placeholder={form.fields.name.placeholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-isletme`}
            className="mb-2 block text-sm font-semibold text-ink"
          >
            {form.fields.company.label}
          </label>
          <input
            id={`${id}-isletme`}
            name="isletme_adi"
            type="text"
            autoComplete="organization"
            placeholder={form.fields.company.placeholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${id}-telefon`}
          className="mb-2 block text-sm font-semibold text-ink"
        >
          {form.fields.phone.label}{' '}
          <span className="text-copper" title={form.requiredHint}>
            *
          </span>
        </label>
        <input
          id={`${id}-telefon`}
          name="telefon"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder={form.fields.phone.placeholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor={`${id}-ihtiyac`}
          className="mb-2 block text-sm font-semibold text-ink"
        >
          {form.fields.need.label}{' '}
          <span className="text-copper" title={form.requiredHint}>
            *
          </span>
        </label>
        <textarea
          id={`${id}-ihtiyac`}
          name="ihtiyac"
          required
          rows={5}
          placeholder={form.fields.need.placeholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-copper px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#7a4420] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? (
            <Loader2 className="size-[1.05rem] animate-spin" strokeWidth={2} aria-hidden />
          ) : (
            <Send className="size-[1.05rem]" strokeWidth={2} aria-hidden />
          )}
          {status === 'sending' ? form.submittingLabel : form.submitLabel}
        </button>
        <p className="text-xs leading-relaxed text-muted sm:max-w-xs sm:text-right">
          {form.kvkkNote}
        </p>
      </div>

      {/* Durum mesajları — sayfa yenilenmeden, satır içi */}
      <p aria-live="polite" className="sr-only">
        {message}
      </p>
      {status === 'success' || status === 'error' ? (
        <p
          className={`flex items-start gap-2.5 rounded-lg border px-4 py-3.5 text-[0.9375rem] ${
            status === 'success'
              ? 'border-copper/25 bg-copper/8 text-ink'
              : 'border-red-700/25 bg-red-700/8 text-red-900'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle2 className="mt-0.5 size-[1.05rem] shrink-0 text-copper" strokeWidth={2} aria-hidden />
          ) : (
            <AlertCircle className="mt-0.5 size-[1.05rem] shrink-0" strokeWidth={2} aria-hidden />
          )}
          <span>{message}</span>
        </p>
      ) : null}
    </form>
  );
}
