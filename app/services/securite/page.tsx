import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Sécurité Renforcée pour Menuiseries | Smart Renov',
  description: 'Systèmes de sécurité avancés pour vos menuiseries en aluminium. Protégez votre domicile ou votre entreprise avec nos solutions anti-effraction et de sécurité renforcée.',
  keywords: 'sécurité renforcée, portes blindées, fenêtres sécurisées, protection anti-effraction, vitrage de sécurité, Smart Renov',
};

export default function SecuritePage() {
  return (
    <ServiceLayout
      title="SÉCURITÉ RENFORCÉE POUR VOTRE HABITAT"
      description="Nos solutions de sécurité pour menuiseries en aluminium vous offrent une protection optimale contre les tentatives d'effraction, tout en conservant l'esthétique de votre habitation. Découvrez nos gammes de produits certifiés A2P et répondant aux normes de sécurité en vigueur."
      heroImage="/images/securite-hero.jpg"
      heroTitle="PROTÉGEZ VOTRE INTÉRIEUR AVEC NOS SOLUTIONS HAUT DE GAMME"
      heroDescription="Des systèmes de sécurité discrets et efficaces pour une protection maximale de votre domicile ou entreprise."
      features={[
        {
          title: "Protection maximale",
          description: "Systèmes anti-effraction certifiés A2P pour une sécurité renforcée.",
          icon: "ShieldCheck"
        },
        {
          title: "Verrous multipoints",
          description: "Fermeture sécurisée sur plusieurs points pour une résistance optimale.",
          icon: "Lock"
        },
        {
          title: "Vitrage de sécurité",
          description: "Vitres feuilletées résistantes aux chocs et aux tentatives d'effraction.",
          icon: "Shield"
        },
        {
          title: "Discret et esthétique",
          description: "Sécurité intégrée sans compromis sur le design de vos menuiseries.",
          icon: "EyeOff"
        },
        {
          title: "Serrurerie renforcée",
          description: "Cylindres haute sécurité et systèmes de verrouillage avancés.",
          icon: "Key"
        },
        {
          title: "Surveillance intégrée",
          description: "Compatible avec les systèmes d'alarme et de domotique.",
          icon: "Video"
        }
      ]}
      process={{
        title: "Notre démarche en 5 étapes",
        steps: [
          "1. Analyse des risques - Évaluation des points faibles de votre habitation.",
          "2. Conseil personnalisé - Proposition de solutions adaptées à vos besoins.",
          "3. Choix des équipements - Sélection des systèmes de sécurité les plus performants.",
          "4. Installation professionnelle - Mise en œuvre par nos experts certifiés.",
          "5. Formation et suivi - Explication du fonctionnement et service après-vente."
        ]
      }}
      gallery={[
        "/images/securite-1.jpg",
        "/images/securite-2.jpg",
        "/images/securite-3.jpg",
        "/images/securite-4.jpg"
      ]}
      faqs={[
        {
          question: "Qu'est-ce que la certification A2P et pourquoi est-elle importante ?",
          answer: "La certification A2P (Assurance Prévention Protection) est délivrée par le CNPP (Centre National de Prévention et de Protection) et garantit la résistance des produits aux tentatives d'effraction. Elle est reconnue par les compagnies d'assurance et peut vous permettre de bénéficier de réductions sur vos primes. Les produits sont classés en différentes catégories (de 1 à 3 étoiles) en fonction de leur niveau de résistance. Nous vous conseillons sur le niveau de protection adapté à votre situation."
        },
        {
          question: "Quelle est la différence entre un vitrage classique et un vitrage de sécurité ?",
          answer: "Un vitrage de sécurité, contrairement à un vitrage classique, est conçu pour résister aux chocs et aux tentatives d'effraction. Le vitrage feuilleté, par exemple, est composé de plusieurs feuilles de verre collées entre elles par un film PVB qui empêche le bris en cas de choc. Même cassé, le verre reste en place, offrant une protection supplémentaire. Nous proposons différents niveaux de vitrage de sécurité adaptés à chaque besoin, du vitrage pare-balles au vitrage anti-effraction."
        },
        {
          question: "Quels sont les points faibles d'une menuiserie en termes de sécurité ?",
          answer: "Les points faibles courants d'une menuiserie sont : les gonds et charnières (souvent peu protégés), le système de fermeture (points de verrouillage insuffisants), la qualité du vitrage (facilement cassable), les renforts de cadre (parfois trop légers) et les accessoires (poignées non sécurisées). Nos solutions de sécurité renforcée traitent spécifiquement chacun de ces points pour offrir une protection globale et homogène."
        },
        {
          question: "Peut-on sécuriser des menuiseries existantes sans les remplacer ?",
          answer: "Oui, il est possible d'améliorer la sécurité de menuiseries existantes sans forcément les remplacer entièrement. Nous pouvons ajouter des sécurités supplémentaires comme des barres anti-effraction, des renforts de cadre, des serrures multipoints additionnelles, ou encore remplacer les vitrages par des modèles de sécurité. Cependant, pour une protection optimale, notamment dans les zones à risque, le remplacement par des menuiseries neuves spécialement conçues pour la sécurité est recommandé."
        },
        {
          question: "Quel est le niveau de sécurité recommandé pour une maison individuelle ?",
          answer: "Pour une maison individuelle, nous recommandons généralement un niveau de sécurité A2P 2 étoiles, qui offre une bonne protection contre les effractions par effraction. Pour les biens de valeur ou dans les zones à risque, un niveau 3 étoiles peut être préférable. Le choix dépend également de votre assurance : certaines compagnies imposent des niveaux de sécurité spécifiques pour couvrir les vols. Nous pouvons vous conseiller en fonction de votre situation géographique, de l'environnement de votre habitation et de vos besoins spécifiques."
        },
        {
          question: "Quelles sont les normes de sécurité à respecter pour les portes d'entrée ?",
          answer: "Une porte d'entrée sécurisée doit répondre à plusieurs critères : une structure renforcée (acier ou aluminium épais), un bloc-porte résistant aux coups de pied et de bélier, un système de fermeture multipoints avec au moins 3 points d'ancrage, des gonds inaccessibles de l'extérieur, une serrure certifiée A2P, un œilleton large angle ou vidéo, et éventuellement un détecteur d'ouverture. Tous nos produits de sécurité sont conformes à la norme NF DTU 36.5 pour les portes d'entrée et à la norme NF EN 1627 pour la résistance à l'effraction."
        }
      ]}
    />
  );
}
