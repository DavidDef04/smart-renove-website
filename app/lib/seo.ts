import type { Metadata } from 'next';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE, SITE_MESSAGING, SITE_SOCIAL, SITE_SEO } from './site';

const DEFAULT_OG_IMAGE = SITE_IMAGES.seo.og;

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** false pour pages légales peu prioritaires */
  index?: boolean;
  ogImage?: string;
};

/** Construit les métadonnées Next.js (canonical, OG, Twitter, robots) */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  index = true,
  ogImage = DEFAULT_OG_IMAGE,
}: PageSeoInput): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_SEO.url}${canonicalPath}`;
  const fullTitle =
    title.includes(SITE.name) || title.includes('|')
      ? title
      : `${title} | ${SITE.name}`;

  const keywordSet = new Set([
    ...SITE_SEO.defaultKeywords,
    ...keywords,
    'Douala',
    'Cameroun',
    'rénovation',
  ]);

  return {
    title: fullTitle,
    description,
    keywords: [...keywordSet],
    alternates: { canonical: canonicalPath },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }
      : { index: false, follow: true },
    openGraph: {
      type: 'website',
      locale: SITE_SEO.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_SEO.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE_MESSAGING.tagline} à Douala`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_SEO.url}${ogImage}`],
    },
  };
}

/** Métadonnées par défaut du site (layout racine) */
export function buildRootMetadata(): Metadata {
  const verification: Metadata['verification'] = {};
  if (SITE_SEO.googleSiteVerification) {
    verification.google = SITE_SEO.googleSiteVerification;
  }
  if (SITE_SEO.bingSiteVerification) {
    verification.other = {
      ...(verification.other ?? {}),
      'msvalidate.01': SITE_SEO.bingSiteVerification,
    };
  }

  return {
    metadataBase: new URL(SITE_SEO.url),
    applicationName: SITE.name,
    title: {
      default: `${SITE.name} — Rénovation clé en main à Douala, Cameroun`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE_MESSAGING.shortDescription,
    keywords: [...SITE_SEO.defaultKeywords],
    authors: [{ name: SITE.name, url: SITE_SEO.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: 'construction',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: '/',
      languages: { 'fr-CM': '/' },
    },
    openGraph: {
      type: 'website',
      locale: SITE_SEO.locale,
      url: SITE_SEO.url,
      siteName: SITE.name,
      title: `${SITE.name} — Rénovation clé en main à Douala`,
      description: SITE_MESSAGING.shortDescription,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE.name} — Rénovation à Douala`,
      description: SITE_MESSAGING.shortDescription,
      images: [`${SITE_SEO.url}${DEFAULT_OG_IMAGE}`],
    },
    verification: Object.keys(verification).length > 0 ? verification : undefined,
    other: {
      'geo.region': 'CM-LT',
      'geo.placename': 'Douala',
      'geo.position': `${SITE_SEO.geo.latitude};${SITE_SEO.geo.longitude}`,
      ICBM: `${SITE_SEO.geo.latitude}, ${SITE_SEO.geo.longitude}`,
    },
  };
}

/** Routes indexables pour le sitemap */
export const SITEMAP_ROUTES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/renovation-complete', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/realisations', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/formations', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/menuiserie-aluminium', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/baies-coulissantes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/portes-entree', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/facades-vitrees', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/portes-coulissantes', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/services/verrieres', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/services/agencements', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/services/securite', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/services/maintenance', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pages/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/pages/politique-confidentialite', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/pages/conditions-utilisation', changeFrequency: 'yearly', priority: 0.3 },
];

export const SERVICE_SEO = {
  'menuiserie-aluminium': {
    title: 'Menuiserie aluminium sur mesure à Douala',
    description:
      'Fenêtres, portes et façades en aluminium sur mesure à Douala. Fabrication, pose et devis gratuit — Smart Rénov, expert menuiserie au Cameroun.',
    keywords: ['menuiserie aluminium', 'fenêtres Douala', 'portes aluminium Cameroun'],
  },
  'baies-coulissantes': {
    title: 'Baies coulissantes aluminium à Douala',
    description:
      'Baies coulissantes élégantes et sécurisées pour maison ou commerce à Douala. Grandes ouvertures, pose professionnelle — devis Smart Rénov.',
    keywords: ['baies coulissantes', 'baie vitrée Douala', 'coulissant aluminium'],
  },
  'portes-entree': {
    title: 'Portes d\'entrée aluminium sécurisées — Douala',
    description:
      'Portes d\'entrée aluminium haut de gamme : sécurité, isolation et design. Pose à Douala et environs — Smart Rénov Cameroun.',
    keywords: ['porte entrée aluminium', 'porte sécurisée Douala'],
  },
  'facades-vitrees': {
    title: 'Façades vitrées aluminium — Douala, Cameroun',
    description:
      'Façades vitrées sur mesure pour locaux commerciaux et bureaux à Douala. Design moderne, performance et pose par des experts.',
    keywords: ['façade vitrée', 'vitrine commerce Douala', 'façade aluminium'],
  },
  'portes-coulissantes': {
    title: 'Portes coulissantes aluminium à Douala',
    description:
      'Portes coulissantes gain de place pour intérieur et extérieur. Solutions sur mesure, pose à Douala — Smart Rénov.',
    keywords: ['porte coulissante', 'porte aluminium Douala'],
  },
  'verrieres': {
    title: 'Verrières aluminium sur mesure — Douala',
    description:
      'Verrières design pour apporter lumière et modernité à votre intérieur. Conception et pose à Douala — devis gratuit.',
    keywords: ['verrière aluminium', 'verrière Douala', 'lumière naturelle'],
  },
  'agencements': {
    title: 'Agencements intérieurs aluminium — Douala',
    description:
      'Cloisons, séparations vitrées et agencements intérieurs sur mesure à Douala. Optimisez vos espaces avec Smart Rénov.',
    keywords: ['agencement intérieur', 'cloison vitrée Douala'],
  },
  'securite': {
    title: 'Sécurité menuiseries aluminium — Douala',
    description:
      'Renforcement sécurité : vitrages, serrures multipoints, anti-effraction pour vos ouvertures à Douala. Expert Smart Rénov.',
    keywords: ['sécurité fenêtre', 'menuiserie sécurisée Douala'],
  },
  'maintenance': {
    title: 'Maintenance et SAV menuiseries — Douala',
    description:
      'Entretien, dépannage et SAV pour vos menuiseries aluminium à Douala. Intervention rapide — Smart Rénov Cameroun.',
    keywords: ['maintenance menuiserie', 'SAV aluminium Douala'],
  },
} as const;

export type ServiceSeoSlug = keyof typeof SERVICE_SEO;

export function servicePageMetadata(slug: ServiceSeoSlug): Metadata {
  const entry = SERVICE_SEO[slug];
  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    path: `/services/${slug}`,
    keywords: [...entry.keywords],
  });
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_SEO.url}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export function serviceBreadcrumbJsonLd(
  serviceName: string,
  slug: string
): Record<string, unknown> {
  return breadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: serviceName, path: `/services/${slug}` },
  ]);
}

export function localBusinessJsonLd(): Record<string, unknown> {
  const sameAs = Object.values(SITE_SOCIAL).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_SEO.url}/#organization`,
    name: SITE.name,
    alternateName: ['Smart Renov 237', 'Smart Rénov Cameroun', 'smartrenov237.com'],
    url: SITE_SEO.url,
    logo: `${SITE_SEO.url}/icon`,
    image: `${SITE_SEO.url}${DEFAULT_OG_IMAGE}`,
    description: SITE_MESSAGING.mission,
    slogan: SITE_MESSAGING.vision,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: 'Douala',
      addressRegion: 'Littoral',
      addressCountry: 'CM',
      postalCode: '',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_SEO.geo.latitude,
      longitude: SITE_SEO.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Douala' },
      { '@type': 'Country', name: 'Cameroun' },
    ],
    openingHoursSpecification: SITE_SEO.openingHours.map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    priceRange: '$$',
    sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de rénovation',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rénovation complète clé en main',
            areaServed: 'Douala, Cameroun',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Menuiserie aluminium',
            areaServed: 'Douala, Cameroun',
          },
        },
      ],
    },
  };
}

export function servicesItemListJsonLd(): Record<string, unknown> {
  const servicePaths = SITEMAP_ROUTES.filter(
    (r) => r.path.startsWith('/services/') || r.path === '/renovation-complete'
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services Smart Rénov',
    itemListElement: servicePaths.map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: route.path.replace('/services/', '').replace(/-/g, ' ') || 'rénovation complète',
      url: `${SITE_SEO.url}${route.path}`,
    })),
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_SEO.url}/#website`,
    url: SITE_SEO.url,
    name: SITE.name,
    alternateName: ['Smart Renov 237', 'smartrenov237.com'],
    description: SITE_MESSAGING.shortDescription,
    inLanguage: 'fr-CM',
    publisher: { '@id': `${SITE_SEO.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_SEO.url}/contact?subject={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
