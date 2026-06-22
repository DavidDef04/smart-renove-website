import type { MetadataRoute } from 'next';
import { SITE, SITE_MESSAGING } from '@/app/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Smart Renov',
    description: SITE_MESSAGING.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#1e40af',
    lang: 'fr',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
