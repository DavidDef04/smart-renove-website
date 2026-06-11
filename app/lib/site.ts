/** URL canonique du site (production) */
export const SITE_SEO = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://srs.cm',
  locale: 'fr_CM' as const,
  defaultKeywords: [
    'Smart Rénov',
    'rénovation Douala',
    'rénovation Cameroun',
    'rénovation maison Douala',
    'rénovation clé en main',
    'menuiserie aluminium Douala',
    'travaux rénovation Douala',
    'entreprise rénovation Cameroun',
    'devis rénovation Douala',
  ],
  geo: {
    latitude: 4.0511,
    longitude: 9.7679,
  },
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
} as const;

/** Coordonnées, routes et messages globaux du site */
export const SITE_MESSAGING = {
  tagline: 'Rénovation complète clé en main',
  shortDescription:
    'Rénovation de maisons et locaux au Cameroun : électricité, menuiserie aluminium, carrelage, peinture, plomberie et tous les corps de métier, avec un seul interlocuteur.',
  footerAbout:
    'Votre partenaire rénovation clé en main à Douala : maison, appartement ou local commercial transformés de A à Z avec qualité, délais maîtrisés et suivi chantier.',
  servicesIntro:
    'Une offre complète pour rénover et équiper votre bien : rénovation globale, second œuvre, finitions et menuiserie aluminium sur mesure.',
} as const;

export const SITE_SOCIAL = {
  facebook: 'https://www.facebook.com/share/1DhYYbHJSc/?mibextid=wwXIfr',
  linkedin:
    'https://www.linkedin.com/in/smart-renov-308b483b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  tiktok: 'https://www.tiktok.com/@smart_renov?_r=1&_t=ZN-96CBFiu6mso',
  youtube: 'https://www.youtube.com/@smartrenov',
} as const;

export const SITE = {
  name: 'Smart Rénov',
  email: 'info@srs.cm',
  phone: '+237694522355',
  phoneDisplay: '+237 694 522 355',
  phoneSecondary: '+237675993229',
  phoneSecondaryDisplay: '+237 675 993 229',
  whatsapp: 'https://wa.me/237694522355',
  social: SITE_SOCIAL,
  address: {
    line1: 'Rond Point CC',
    line2: 'Douala, Cameroun',
    hint: "(Entre Ndogkoti et Le Commissariat 8ème)",
  },
  routes: {
    home: '/',
    about: '/about',
    services: '/services',
    formations: '/formations',
    realisations: '/realisations',
    contact: '/contact',
    renovationComplete: '/renovation-complete',
    privacy: '/pages/politique-confidentialite',
    terms: '/pages/conditions-utilisation',
    legal: '/pages/mentions-legales',
  },
} as const;
