import type { MetadataRoute } from 'next';
import { SITE_SEO } from '@/app/lib/site';

export default function robots(): MetadataRoute.Robots {
  const base = SITE_SEO.url.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/videos/', '/_next/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
