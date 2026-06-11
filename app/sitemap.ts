import type { MetadataRoute } from 'next';
import { SITEMAP_ROUTES } from '@/app/lib/seo';
import { SITE_SEO } from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_SEO.url.replace(/\/$/, '');
  const now = new Date();

  return SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
