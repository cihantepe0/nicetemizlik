/**
 * Build sonrası `out/` klasörüne robots.txt ve sitemap.xml yazar.
 *
 * Tek kaynak: NEXT_PUBLIC_SITE_URL (yoksa content/site.ts içindeki siteUrl).
 * NEXT_PUBLIC_NOINDEX=true verilirse arama motorlarına kapatır — Railway gibi
 * geçici adreslerde asıl alan adıyla çift içerik oluşmasını engellemek için.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'out');

// content/site.ts içindeki varsayılan adresi oku (TS derlemeden, basit eşleşmeyle)
function defaultSiteUrl() {
  const src = readFileSync(join(process.cwd(), 'content', 'site.ts'), 'utf8');
  const match = src.match(/DEFAULT_SITE_URL\s*=\s*'([^']+)'/);
  if (!match) throw new Error('content/site.ts içinde DEFAULT_SITE_URL bulunamadı');
  return match[1];
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl()).replace(/\/+$/, '');
const noindex = process.env.NEXT_PUBLIC_NOINDEX === 'true';

const robots = noindex
  ? `# Geçici yayın adresi — arama motorlarına kapalı.
# Asıl alan adına geçtiğinizde NEXT_PUBLIC_NOINDEX değişkenini kaldırın.
User-agent: *
Disallow: /
`
  : `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Tek sayfalık site. Bu dosya build sırasında üretilir. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

writeFileSync(join(OUT, 'robots.txt'), robots, 'utf8');

if (noindex) {
  // Arama motorlarına kapalıyken sitemap yayınlamak çelişkili olur.
  writeFileSync(
    join(OUT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Geçici adres: sitemap boş bırakıldı. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`,
    'utf8',
  );
} else {
  writeFileSync(join(OUT, 'sitemap.xml'), sitemap, 'utf8');
}

console.log(
  `  ✓ robots.txt & sitemap.xml → ${siteUrl}${noindex ? '  (NOINDEX: arama motorlarına kapalı)' : ''}`,
);
