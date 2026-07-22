import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://curiousmedia.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Googlebot',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
