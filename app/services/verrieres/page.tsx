import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Verrières sur Mesure | Smart Renov',
  description: 'Verrières élégantes et fonctionnelles en aluminium pour apporter lumière et modernité à vos espaces intérieurs. Solutions sur mesure pour une décoration contemporaine.',
  keywords: 'verrières, verrière intérieure, cloisons vitrées, séparation d\'espace, aménagement intérieur, aluminium, Smart Renov',
};

export default function VerrieresPage() {
  return (
    <ServiceLayout
      title="VERRIÈRES SUR MESURE"
      description="Nos verrières en aluminium apportent une touche d'élégance et de modernité à vos intérieurs. Que ce soit pour séparer des espaces tout en laissant passer la lumière ou pour créer une extension lumineuse, nos solutions sur mesure s'adaptent à tous les styles d'habitation."
      heroImage="/images/verrieres-hero.jpg"
      heroTitle="VERRIÈRES ÉLÉGANTES POUR VOTRE INTÉRIEUR"
      heroDescription="Des solutions sur mesure pour des espaces lumineux et ouverts, tout en préservant l'intimité de chaque pièce."
      features={[
        {
          title: "Design personnalisé",
          description: "Conception sur mesure pour s'adapter parfaitement à votre espace et à votre style.",
          icon: "Ruler"
        },
        {
          title: "Lumière naturelle",
          description: "Optimisation de l'apport lumineux pour des pièces plus claires et accueillantes.",
          icon: "Sun"
        },
        {
          title: "Séparation d'espaces",
          description: "Délimitez vos espaces tout en maintenant une sensation d'ouverture et de fluidité.",
          icon: "Layout"
        },
        {
          title: "Isolation phonique",
          description: "Réduction des nuisances sonores entre les pièces pour plus de confort.",
          icon: "Volume2"
        },
        {
          title: "Matériaux durables",
          description: "Aluminium de qualité supérieure pour une excellente durabilité et un entretien minimal.",
          icon: "Shield"
        },
        {
          title: "Installation rapide",
          description: "Pose propre et efficace par nos équipes qualifiées, avec un minimum de désagréments.",
          icon: "Clock"
        }
      ]}
      process={{
        title: "Notre processus en 5 étapes",
        steps: [
          "1. Consultation - Évaluation de vos besoins et de votre espace.",
          "2. Conception - Création d'un design personnalisé en 3D.",
          "3. Validation - Approbation des plans et choix des matériaux.",
          "4. Fabrication - Réalisation sur mesure en atelier.",
          "5. Installation - Pose par nos experts avec un souci du détail."
        ]
      }}
      gallery={[
        "/images/verrieres-1.jpg",
        "/images/verrieres-2.jpg",
        "/images/verrieres-3.jpg",
        "/images/verrieres-4.jpg"
      ]}
      faqs={[
        {
          question: "Quels types de verrières proposez-vous ?",
          answer: "Nous proposons différents types de verrières : fixes, ouvrantes, coulissantes ou amovibles, avec des profils en aluminium fin ou plus larges, et différents types de verre (transparent, dépoli, sablé, etc.) pour s'adapter à tous les besoins et toutes les décorations."
        },
        {
          question: "Une verrière est-elle adaptée à toutes les pièces ?",
          answer: "Les verrières s'adaptent à de nombreux espaces : cuisine, salle de bain, séjour, bureau, etc. Elles sont particulièrement appréciées pour ouvrir visuellement une cuisine sur le salon ou délimiter un espace bureau dans une pièce à vivre. Nous évaluerons ensemble la faisabilité technique de votre projet."
        },
        {
          question: "Quelle est la différence entre une verrière et une baie vitrée ?",
          answer: "Une verrière est généralement plus légère et plus fine qu'une baie vitrée, avec des montants en aluminium plus étroits. Elle est souvent utilisée en intérieur pour séparer des espaces tout en laissant passer la lumière, tandis qu'une baie vitrée est plutôt destinée à séparer l'intérieur de l'extérieur."
        },
        {
          question: "Peut-on installer une verrière soi-même ?",
          answer: "Bien que certains kits de verrière soient proposés en auto-installation, nous recommandons fortement une pose par des professionnels pour garantir une parfaite étanchéité, une installation solide et durable, ainsi qu'une finition irréprochable. De plus, nos installateurs sont formés pour résoudre les éventuels problèmes techniques."
        },
        {
          question: "Quel est le prix moyen d'une verrière sur mesure ?",
          answer: "Le prix d'une verrière sur mesure dépend de nombreux facteurs : dimensions, type d'ouverture, qualité du verre, finitions, etc. En moyenne, il faut compter entre 300€ et 800€ du mètre linéaire pose comprise. Nous vous proposerons un devis personnalisé gratuit après une étude précise de votre projet."
        },
        {
          question: "Comment entretenir une verrière en aluminium ?",
          answer: "L'entretien d'une verrière en aluminium est très simple : un dépoussiérage régulier avec un chiffon microfibre légèrement humide suffit. Pour les traces plus tenaces, utilisez un produit doux non abrasif. L'aluminium est un matériau résistant qui ne rouille pas et ne nécessite aucun entretien particulier dans le temps."
        }
      ]}
    />
  );
}
