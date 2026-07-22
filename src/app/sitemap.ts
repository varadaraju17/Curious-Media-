import { MetadataRoute } from 'next';

const BASE_URL = 'https://curiousmedia.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'hi'];
  const routes = [
    '',
    '/about',
    '/creators',
    '/studio',
    '/media',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${BASE_URL}/${locale}${route}`;
      const isHome = route === '';

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome ? 'daily' : 'weekly',
        priority: isHome ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}`,
            hi: `${BASE_URL}/hi${route}`,
            'x-default': `${BASE_URL}/en${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
