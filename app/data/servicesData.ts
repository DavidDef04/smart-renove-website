import { SITE_IMAGES } from './siteImages';

export const servicesData = [
  {
    id: 0,
    title: 'RÉNOVATION COMPLÈTE',
    description:
      'Maison ou local commercial : électricité, plomberie, carrelage, peinture, menuiserie — un seul interlocuteur du devis à la livraison.',
    icon: 'Home',
    bgGradient: 'from-rose-500 to-pink-600',
    textColor: 'text-white',
    borderColor: 'border-rose-100',
    image: SITE_IMAGES.services.renovation,
    slug: 'renovation-complete',
    href: '/renovation-complete',
  },
  {
    id: 1,
    title: 'MENUISERIE ALUMINIUM',
    description:
      'Fenêtres, portes, baies coulissantes et façades vitrées sur mesure — le cœur de notre expertise à Douala.',
    icon: 'Wrench',
    bgGradient: 'from-[var(--color-blue)] to-blue-600',
    textColor: 'text-white',
    borderColor: 'border-[var(--color-blue)]/20',
    image: SITE_IMAGES.services.menuiserie,
    slug: 'menuiserie-aluminium',
  },
  {
    id: 2,
    title: 'BAIES COULISSANTES',
    description:
      'Grandes ouvertures pour salon, terrasse ou commerce : lumière, confort et finitions premium.',
    icon: 'Layout',
    bgGradient: 'from-emerald-500 to-teal-600',
    textColor: 'text-white',
    borderColor: 'border-emerald-100',
    image: SITE_IMAGES.services.baies,
    slug: 'baies-coulissantes',
  },
  {
    id: 3,
    title: 'ÉLECTRICITÉ',
    description:
      'Installation, rénovation de tableaux, éclairage et mise en sécurité pour logements et locaux pro.',
    icon: 'Zap',
    bgGradient: 'from-amber-500 to-orange-600',
    textColor: 'text-white',
    borderColor: 'border-amber-100',
    image: SITE_IMAGES.services.electricite,
    slug: 'electricite',
    href: '/renovation-complete',
  },
  {
    id: 4,
    title: 'CARRELAGE & FAÏENCE',
    description:
      'Sols et murs intérieurs/extérieurs : pose précise, joints soignés, adaptés aux usages au Cameroun.',
    icon: 'Grid3x3',
    bgGradient: 'from-slate-600 to-slate-800',
    textColor: 'text-white',
    borderColor: 'border-slate-200',
    image: SITE_IMAGES.services.carrelage,
    slug: 'carrelage',
    href: '/renovation-complete',
  },
  {
    id: 5,
    title: 'PEINTURE & FINITIONS',
    description:
      'Préparation des murs, enduits et peintures résistantes au climat tropical pour un rendu impeccable.',
    icon: 'Paintbrush',
    bgGradient: 'from-violet-500 to-purple-600',
    textColor: 'text-white',
    borderColor: 'border-violet-100',
    image: SITE_IMAGES.services.peinture,
    slug: 'peinture',
    href: '/renovation-complete',
  },
];
