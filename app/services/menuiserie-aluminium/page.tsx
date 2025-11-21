import React from 'react';
import { Check, Ruler, Shield, Settings, ThumbsUp, Users, Wrench } from 'lucide-react';
import ServiceLayout from '../ServiceLayout';

export const metadata = {
  title: 'Menuiserie Aluminium | Smart Renov',
  description: 'Découvrez nos services de menuiserie aluminium sur mesure pour vos fenêtres, portes et façades vitrées. Qualité et durabilité garanties.',
};

const MenuiserieAluminiumPage = () => {
  return (
    <ServiceLayout
      title="Menuiserie Aluminium"
      description="Nos solutions en menuiserie aluminium allient esthétisme, performance énergétique et durabilité pour répondre à tous vos besoins en rénovation et construction neuve."
      heroImage="/images/menuiserie-aluminium-hero.jpg"
      heroTitle="Menuiserie Aluminium Haut de Gamme"
      heroDescription="Des solutions sur mesure pour une isolation optimale et un design contemporain"
      features={[
        {
          title: "Isolation Thermique",
          description: "Nos menuiseries aluminium sont conçues pour une isolation thermique optimale, réduisant les déperditions d'énergie jusqu'à 40%.",
          icon: <Wrench className="h-6 w-6 text-white" />
        },
        {
          title: "Sécurité Renforcée",
          description: "Systèmes de fermeture multipoints et verrous à clé pour une sécurité maximale de votre habitation.",
          icon: <Shield className="h-6 w-6 text-white" />
        },
        {
          title: "Design Personnalisable",
          description: "Large choix de coloris et de finitions pour s'adapter parfaitement à votre style et à votre intérieur.",
          icon: <Settings className="h-6 w-6 text-white" />
        },
        {
          title: "Entretien Minimal",
          description: "L'aluminium est résistant aux intempéries et ne nécessite aucun entretien particulier pour conserver son éclat.",
          icon: <ThumbsUp className="h-6 w-6 text-white" />
        },
        {
          title: "Écologique",
          description: "Matériau 100% recyclable, l'aluminium est un choix responsable pour l'environnement.",
          icon: <Users className="h-6 w-6 text-white" />
        },
        {
          title: "Sur Mesure",
          description: "Fabrication sur mesure pour s'adapter parfaitement à toutes les dimensions et contraintes de votre projet.",
          icon: <Ruler className="h-6 w-6 text-white" />
        }
      ]}
      process={{
        title: "Notre Processus de Fabrication",
        steps: [
          "Étude de votre projet et prise de côtes",
          "Conception sur mesure par nos experts",
          "Validation du devis et des délais",
          "Fabrication en atelier",
          "Pose par nos équipes qualifiées",
          "Réception des travaux et garantie"
        ]
      }}
      gallery={[
        "/images/realisation-menuisserie-1.png",
        "/images/realisation-menuiserie-2.png",
        "/images/realisation-menuiserie-3.png",
        "/images/realisation-menuiserie-4.png",
        "/images/realisation-menuiserie-5.png",
        "/images/realisation-menuiserie-6.png"
      ]}
      faqs={[
        {
          question: "Quelle est la durée de vie des menuiseries en aluminium ?",
          answer: "Nos menuiseries en aluminium sont conçues pour durer plus de 30 ans sans nécessiter de remplacement majeur, grâce à leur résistance à la corrosion et aux intempéries."
        },
        {
          question: "L'aluminium est-il un bon isolant thermique ?",
          answer: "Oui, nos profilés aluminium intègrent une rupture de pont thermique qui améliore considérablement les performances d'isolation, réduisant ainsi les déperditions de chaleur."
        },
        {
          question: "Quels types d'ouvertures proposez-vous ?",
          answer: "Nous proposons une large gamme d'ouvertures : fenêtres à la française, à soufflet, coulissantes, oscillo-battantes, ainsi que des portes-fenêtres et baies coulissantes."
        },
        {
          question: "Quelle est la garantie sur vos menuiseries aluminium ?",
          answer: "Toutes nos menuiseries bénéficient d'une garantie décennale pour la structure et d'une garantie de 5 ans sur les mécanismes et accessoires."
        },
        {
          question: "Peut-on personnaliser la couleur des menuiseries ?",
          answer: "Absolument ! Nous proposons un large choix de coloris RAL et des finitions (lisse, texturée, métallisée) pour s'adapter à vos goûts et à votre décoration."
        },
        {
          question: "Quel est le délai moyen de réalisation ?",
          answer: "Le délai moyen est de 4 à 6 semaines après validation du devis, selon la complexité du projet et la saisonnalité."
        }
      ]}
    />
  );
};

export default MenuiserieAluminiumPage;
