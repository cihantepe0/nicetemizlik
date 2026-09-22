import { site } from '@/content/site';

/**
 * Logo tek yerden referans verilir.
 *
 * `<img>` ile yüklenen SVG dış CSS'i (currentColor dâhil) devralmadığı için
 * iki dosya tutulur:
 *   public/logo.svg        → açık zeminde kullanılan koyu sürüm
 *   public/logo-light.svg  → koyu zeminde kullanılan açık sürüm
 * Müşteriden gerçek logo gelince bu iki dosya değiştirilir; bileşenlerde
 * başka hiçbir yerde logo yolu geçmez.
 */
export function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={variant === 'light' ? '/logo-light.svg' : '/logo.svg'}
      alt={site.company.name}
      width={200}
      height={44}
      className={className}
      decoding="async"
    />
  );
}
