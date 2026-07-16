import type { LucideIcon } from 'lucide-react';
import {
  Zap,
  Droplets,
  Grid3x3,
  Paintbrush,
  Layers,
  Home,
  Wrench,
  Building2,
} from 'lucide-react';

export type RenovationTrade = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const RENOVATION_TRADES: RenovationTrade[] = [
  {
    id: 'menuiserie',
    title: 'Menuiserie aluminium',
    description:
      'Fenêtres, portes, baies coulissantes, façades vitrées et vérandas sur mesure.',
    icon: Wrench,
    highlights: ['Pose & fabrication', 'Isolation sonore', 'Sécurité renforcée'],
  },
  {
    id: 'electricite',
    title: 'Électricité',
    description:
      'Installation, mise aux normes et rénovation complète des réseaux électriques.',
    icon: Zap,
    highlights: ['Tableaux & câblage', 'Éclairage', 'Mise en sécurité'],
  },
  {
    id: 'plomberie',
    title: 'Plomberie & sanitaire',
    description:
      'Salles de bain, cuisines, réseaux d\'eau et équipements sanitaires.',
    icon: Droplets,
    highlights: ['Réseaux neufs', 'Robinetterie', 'Étanchéité'],
  },
  {
    id: 'carrelage',
    title: 'Carrelage & faïence',
    description:
      'Sols et murs intérieurs/extérieurs avec finitions soignées et durables.',
    icon: Grid3x3,
    highlights: ['Pose précise', 'Découpes sur mesure', 'Joints & finitions'],
  },
  {
    id: 'peinture',
    title: 'Peinture & finitions',
    description:
      'Préparation des supports, peinture, enduits et habillages décoratifs.',
    icon: Paintbrush,
    highlights: ['Intérieur & extérieur', 'Préparation', 'Finitions premium'],
  },
  {
    id: 'platerie',
    title: 'Cloisons & plâtrerie',
    description:
      'Cloisons, faux plafonds, enduits et redistribution des volumes.',
    icon: Layers,
    highlights: ['Cloisons sèches', 'Faux plafonds', 'Ravalement'],
  },
  {
    id: 'etancheite',
    title: 'Étanchéité & toiture',
    description:
      'Protection des toitures, terrasses et points sensibles contre les infiltrations.',
    icon: Home,
    highlights: ['Diagnostic', 'Traitement', 'Durabilité'],
  },
  {
    id: 'agencement',
    title: 'Agencement intérieur',
    description:
      'Aménagement de bureaux, commerces et espaces de vie sur mesure.',
    icon: Building2,
    highlights: ['Conception', 'Fabrication', 'Installation'],
  },
];

export const RENOVATION_PROCESS = [
  'Étude & visite sur site — compréhension de vos besoins et contraintes',
  'Devis détaillé — chiffrage transparent par lot de travaux',
  'Planification — coordination des corps de métier et calendrier',
  'Réalisation — un interlocuteur unique suit votre chantier',
  'Réception & garantie — contrôle qualité et accompagnement après travaux',
];

export const RENOVATION_FAQS = [
  {
    question: 'Qu\'est-ce qu\'une rénovation complète clé en main ?',
    answer:
      'C\'est la prise en charge globale de votre projet : de la conception à la livraison, nous coordonnons tous les métiers (électricité, plomberie, carrelage, peinture, menuiserie, etc.) pour transformer votre maison ou local sans multiplier les interlocuteurs.',
  },
  {
    question: 'Intervenez-vous sur les maisons et les locaux commerciaux ?',
    answer:
      'Oui. Nous rénovons des habitations, appartements, bureaux, commerces et espaces professionnels à Douala et dans les principales villes du Cameroun.',
  },
  {
    question: 'Puis-je ne rénover qu\'une partie de mon bien ?',
    answer:
      'Absolument. Nous adaptons notre intervention : salle de bain, cuisine, façade, bureau ou rénovation totale — le devis est établi selon la portée réelle de vos travaux.',
  },
  {
    question: 'Comment se déroule le suivi de chantier ?',
    answer:
      'Un chef de projet Smart Rénov coordonne les équipes, les délais et la qualité. Vous êtes informé à chaque étape clé jusqu\'à la réception des travaux.',
  },
];
