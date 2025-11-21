import React from 'react';
import { MoveRight, Sun, Shield, Maximize2, Leaf, Ruler } from 'lucide-react';
import ServiceLayout from '../ServiceLayout';

export const metadata = {
  title: 'Baies Coulissantes | Smart Renov',
  description: 'Découvrez nos baies coulissantes élégantes et fonctionnelles pour une ouverture maximale sur l\'extérieur. Lumière naturelle et espace optimisé.',
};

const BaiesCoulissantesPage = () => {
  return (
    <ServiceLayout
      title="Baies Coulissantes"
      description="Nos baies coulissantes allient élégance et fonctionnalité pour créer des espaces lumineux et ouverts sur l'extérieur, tout en garantissant une excellente isolation et sécurité."
      heroImage="/images/baies-coulissantes-hero.jpg"
      heroTitle="Baies Coulissantes Élégantes"
      heroDescription="Ouvrez grand vos espaces sur l'extérieur avec nos solutions sur mesure"
      features={[
        {
          title: "Ouverture Maximale",
          description: "Profitez d'une ouverture complète sur votre extérieur avec nos systèmes de coulissement innovants et fluides.",
          icon: <Maximize2 className="h-6 w-6 text-white" />
        },
        {
          title: "Lumière Naturelle",
          description: "Bénéficiez d'un apport maximal en lumière naturelle grâce à de grandes surfaces vitrées.",
          icon: <Sun className="h-6 w-6 text-white" />
        },
        {
          title: "Isolation Performante",
          description: "Nos baies coulissantes offrent une excellente isolation thermique et phonique, même en grande dimension.",
          icon: <Shield className="h-6 w-6 text-white" />
        },
        {
          title: "Gain de Place",
          description: "Contrairement aux ouvertures classiques, nos baies coulissantes n'empiètent pas sur l'espace intérieur.",
          icon: <MoveRight className="h-6 w-6 text-white" />
        },
        {
          title: "Écologique",
          description: "Réduction des besoins en éclairage et chauffage grâce à une meilleure captation de la lumière naturelle.",
          icon: <Leaf className="h-6 w-6 text-white" />
        },
        {
          title: "Sur Mesure",
          description: "Fabrication sur mesure pour s'adapter parfaitement à toutes les dimensions et contraintes de votre projet.",
          icon: <Ruler className="h-6 w-6 text-white" />
        }
      ]}
      process={{
        title: "Notre Processus d'Installation",
        steps: [
          "Étude technique et prise de mesures précises",
          "Conception personnalisée selon vos besoins",
          "Validation du projet et du devis détaillé",
          "Fabrication sur mesure en atelier",
          "Installation par nos experts qualifiés",
          "Contrôle qualité et mise en service"
        ]
      }}
      gallery={[
        "/images/baie-coulissante-1.png",
        "/images/baies-coulissantes.jpg",
        "/images/formationsisolation-thermique.jpg",
        "/images/baie-coulissante-4.png",
        "/images/baie-coulisante5.png",
        "/images/baie-coulisante6.png"
      ]}
      faqs={[
        {
          question: "Quelle est la durée de vie d'une baie coulissante ?",
          answer: "Nos baies coulissantes sont conçues pour durer plus de 25 ans, grâce à des matériaux de qualité et une fabrication robuste."
        },
        {
          question: "Les baies coulissantes sont-elles sécurisées ?",
          answer: "Oui, nos baies coulissantes sont équipées de systèmes de verrouillage multipoints et de vitres sécurisées pour une protection optimale."
        },
        {
          question: "Peut-on installer des baies coulissantes en remplacement d'un mur ?",
          answer: "Absolument, c'est même l'une de nos spécialités. Nous réalisons l'ouverture dans le mur existant en respectant les règles de structure."
        },
        {
          question: "Quel entretien pour une baie coulissante ?",
          answer: "Un simple nettoyage régulier des vitres et des rails avec des produits adaptés suffit. Les profilés en aluminium sont imputrescibles et résistants aux intempéries."
        },
        {
          question: "Est-il possible d'avoir des baies coulissantes avec des moustiquaires ?",
          answer: "Oui, nous proposons des moustiquaires intégrées discrètes et efficaces qui s'adaptent parfaitement à nos baies coulissantes."
        },
        {
          question: "Quel est le délai moyen pour l'installation d'une baie coulissante ?",
          answer: "Le délai moyen est de 5 à 8 semaines après validation du devis, incluant la fabrication sur mesure et l'installation par nos équipes."
        }
      ]}
    />
  );
};

export default BaiesCoulissantesPage;
