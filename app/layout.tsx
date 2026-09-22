import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Sans } from 'next/font/google';

import { site } from '@/content/site';
import { JsonLd } from '@/components/JsonLd';

import './globals.css';

/**
 * Fontlar build sırasında indirilip `out/` içine gömülür (self-host).
 * Çalışma anında Google Fonts'a hiçbir istek gitmez.
 */
const display = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-display-src',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-body-src',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.company.name,
  authors: [{ name: site.company.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.seo.locale,
    url: site.seo.siteUrl,
    siteName: site.company.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [
      {
        url: site.seo.ogImage,
        width: site.hero.image.width,
        height: site.hero.image.height,
        alt: site.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/logo.svg' },
};

export const viewport: Viewport = {
  themeColor: '#141b2e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased">
        {/* JS kapalıyken reveal animasyonu içeriği gizlemesin */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
        >
          İçeriğe geç
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
