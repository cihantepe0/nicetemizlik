import { site } from '@/content/site';

/**
 * Organization + LocalBusiness yapısal verisi.
 * Yalnızca doğrulanmış firma verisi kullanılır; uydurma alan eklenmez.
 */
export function JsonLd() {
  const address = {
    '@type': 'PostalAddress',
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.district,
    addressRegion: site.contact.address.city,
    addressCountry: 'TR',
  };

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.seo.siteUrl}/#organization`,
        name: site.company.name,
        description: site.company.description,
        url: site.seo.siteUrl,
        logo: `${site.seo.siteUrl}/logo.svg`,
        telephone: site.contact.phoneIntl,
        address,
        areaServed: { '@type': 'Country', name: 'Türkiye' },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${site.seo.siteUrl}/#localbusiness`,
        name: site.company.name,
        description: site.company.description,
        url: site.seo.siteUrl,
        image: `${site.seo.siteUrl}${site.seo.ogImage}`,
        telephone: site.contact.phoneIntl,
        address,
        parentOrganization: { '@id': `${site.seo.siteUrl}/#organization` },
        // TODO: müşteri bilgisi bekleniyor — openingHours, geo koordinatları,
        // priceRange gibi alanlar doğrulanmadan eklenmeyecek.
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // İçerik statik ve tamamen kendi verimizden üretiliyor.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
