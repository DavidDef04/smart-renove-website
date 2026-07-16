import { SITE_IMAGES } from './siteImages';

export type FormationItem = {
  id: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
};

export const FORMATIONS: FormationItem[] = [
  {
    id: 1,
    title: 'Pose de menuiserie aluminium',
    description:
      'Formation pratique à la pose de fenêtres, portes et baies aluminium. Vous serez opérationnel sur les chantiers résidentiels et commerciaux.',
    duration: '24 Mois',
    imageUrl: SITE_IMAGES.formations.menuiserie,
  },
  {
    id: 2,
    title: 'Carrelage & revêtements de sol',
    description:
      'Formation à la pose de carrelage et revêtements de sol. Vous maîtriserez salles de bain, cuisines et finitions intérieures.',
    duration: '6 Mois',
    imageUrl: SITE_IMAGES.formations.carrelage,
  },
  {
    id: 3,
    title: 'Électricité du bâtiment',
    description:
      'Formation aux installations électriques : tableaux, câblage et mise en sécurité. Base indispensable pour intervenir sur tout chantier.',
    duration: '12 Mois',
    imageUrl: SITE_IMAGES.formations.electricite,
  },
  {
    id: 4,
    title: 'Peinture & finitions intérieures',
    description:
      'Formation peinture et finitions : préparation des supports et application adaptée au climat tropical pour un rendu durable.',
    duration: '6 Mois',
    imageUrl: SITE_IMAGES.formations.peinture,
  },
];
