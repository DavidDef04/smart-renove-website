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
      'Prise de mesures, découpe et pose de fenêtres, portes et baies coulissantes — compétence très recherchée sur les chantiers à Douala et dans les grandes villes.',
    duration: '10 Mois',
    imageUrl: SITE_IMAGES.formations.menuiserie,
  },
  {
    id: 2,
    title: 'Carrelage & revêtements de sol',
    description:
      'Pose, ragréage et finitions pour salles de bain, cuisines et sols intérieurs — un métier indispensable sur le marché camerounais.',
    duration: '8 Mois',
    imageUrl: SITE_IMAGES.formations.carrelage,
  },
  {
    id: 3,
    title: 'Électricité du bâtiment',
    description:
      'Tableaux, câblage, éclairage et mise en sécurité pour logements et locaux commerciaux — base de toute rénovation sérieuse.',
    duration: '12 Mois',
    imageUrl: SITE_IMAGES.formations.supervision,
  },
  {
    id: 4,
    title: 'Peinture & finitions intérieures',
    description:
      'Préparation des supports, enduits et peintures adaptées au climat tropical pour des finitions durables et professionnelles.',
    duration: '10 Mois',
    imageUrl: SITE_IMAGES.services.peinture,
  },
];
