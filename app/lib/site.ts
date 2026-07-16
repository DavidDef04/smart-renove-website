/** Domaine canonique du site */
export const SITE_DOMAIN = 'smartrenov237.com';

/** URL canonique du site (production) */
export const SITE_SEO = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`,
  locale: 'fr_CM' as const,
  defaultKeywords: [
    'Smart Rénov',
    'Smart Renov 237',
    'smartrenov237',
    'smartrenov237.com',
    'rénovation Douala',
    'rénovation Cameroun',
    'rénovation maison Douala',
    'rénovation clé en main',
    'rénovation clé en main Douala',
    'entreprise rénovation Douala',
    'entreprise rénovation Cameroun',
    'travaux rénovation Douala',
    'devis rénovation Douala',
    'devis rénovation Cameroun',
    'menuiserie aluminium Douala',
    'menuiserie aluminium Cameroun',
    'second œuvre Douala',
    'travaux bâtiment Douala',
    'construction rénovation Cameroun',
  ],
  geo: {
    latitude: 4.0511,
    longitude: 9.7679,
  },
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:30' },
    { days: ['Saturday'], opens: '08:00', closes: '13:30' },
  ],
} as const;

import { COMPANY_MISSION, COMPANY_VISION } from '../data/companyIdentity';

/** Coordonnées, routes et messages globaux du site */
export const SITE_MESSAGING = {
  tagline: 'Rénovation complète clé en main',
  mission: COMPANY_MISSION,
  vision: COMPANY_VISION,
  shortDescription:
    'Smart Rénov — rénovation clé en main à Douala et au Cameroun : maison, appartement ou local commercial. Électricité, plomberie, carrelage, peinture, menuiserie aluminium. Devis gratuit.',
  footerAbout:
    'Donner une nouvelle vie aux bâtiments à Douala — rénovations fiables, durables et de qualité, avec transparence et un seul interlocuteur.',
  servicesIntro:
    'Une offre complète pour rénover et équiper votre bien : rénovation globale, second œuvre, finitions et menuiserie aluminium sur mesure.',
} as const;

export const SITE_SOCIAL = {
  facebook: 'https://www.facebook.com/share/1D3dEBrQo6/?mibextid=wwXIfr',
  linkedin:
    'https://www.linkedin.com/in/smart-renov-308b483b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  tiktok: 'https://www.tiktok.com/@smart_renov?_r=1&_t=ZN-96CBFiu6mso',
} as const;

export const SITE = {
  name: 'Smart Rénov',
  legalName: 'Ets Smart Renove-Services',
  legalForm: 'Établissement abrégé (Ets)',
  foundedOn: '17 août 2023',
  capital: '999 999 XAF',
  rccm: 'R.C / DLA / 2020 / A15180',
  taxId: 'P 079916051360 A',
  email: 'contact@smartrenov237.com',
  phone: '+237687185953',
  phoneDisplay: '+237 6 87 18 59 53',
  phoneSecondary: '+237694522355',
  phoneSecondaryDisplay: '+237 694 522 355',
  whatsapp: 'https://wa.me/237687185953',
  social: SITE_SOCIAL,
  address: {
    line1: 'Rond Point CC',
    line2: 'Douala, Cameroun',
    hint: "(Entre Ndogkoti et Le Commissariat 8ème)",
  },
  hours: {
    weekdays: 'Lun – Ven : 8h – 17h30',
    saturday: 'Sam : 8h – 13h30',
    faq: 'Nos bureaux sont ouverts du lundi au vendredi de 8h à 17h30 et le samedi de 8h à 13h30. Notre équipe est également disponible en dehors de ces horaires sur rendez-vous.',
  },
  paymentSchedule:
    '50 % à la commande, 30 % à mi-chantier, 20 % à la réception finale. Paiement possible par virement bancaire, mobile money ou espèces.',
  siteAuthor: {
    name: 'David René METOMO',
    role: 'Développeur fullstack & pentester',
    email: 'metomo442@gmail.com',
    portfolio: 'https://portofio-metomo.vercel.app/',
    linkedin:
      'https://www.linkedin.com/in/david-ren%C3%A9-metomo-elogo-5b0432314/',
    whatsappPrimary: 'https://wa.me/237656156546',
    whatsappSecondary: 'https://wa.me/237679413963',
    whatsappDisplay: '+237 6 56 15 65 46',
    whatsappSecondaryDisplay: '+237 6 79 41 39 63',
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
