import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Maintenance & SAV Menuiseries Aluminium | Smart Renov',
  description: "Service après-vente et maintenance préventive pour vos menuiseries en aluminium. Entretien, dépannage et rénovation pour préserver la performance et l'esthétique de vos installations.",
  keywords: 'maintenance menuiseries, SAV aluminium, entretien fenêtres, réparation portes, service après-vente, Smart Renov',
};

export default function MaintenancePage() {
  return (
    <ServiceLayout
      title="MAINTENANCE & SERVICE APRÈS-VENTE"
      description="Notre service de maintenance et SAV prend soin de vos menuiseries en aluminium tout au long de leur cycle de vie. De l'entretien préventif aux réparations courantes, nos techniciens qualifiés interviennent rapidement pour garantir la longévité et les performances optimales de vos installations."
      heroImage="/images/maintenance-hero.jpg"
      heroTitle="VOTRE SATISFACTION, NOTRE ENGAGEMENT"
      heroDescription="Un service après-vente réactif et des contrats de maintenance sur mesure pour une tranquillité d'esprit totale."
      features={[
        {
          title: "Réactivité",
          description: "Intervention rapide sur rendez-vous pour tous vos besoins d'urgence.",
          icon: "Zap"
        },
        {
          title: "Expertise",
          description: "Techniciens qualifiés et formés aux dernières techniques d'intervention.",
          icon: "Award"
        },
        {
          title: "Prévention",
          description: "Contrôles réguliers pour anticiper les pannes et usures prématurées.",
          icon: "Shield"
        },
        {
          title: "Pièces détachées",
          description: "Stock important de pièces détachées d'origine pour une réparation immédiate.",
          icon: "Package"
        },
        {
          title: "Flexibilité",
          description: "Interventions planifiées selon vos disponibilités, même en soirée ou le week-end.",
          icon: "Clock"
        },
        {
          title: "Garantie",
          description: "Travaux garantis et suivi personnalisé pour chaque intervention.",
          icon: "ShieldCheck"
        }
      ]}
      process={{
        title: "Notre processus d'intervention",
        steps: [
          "1. Diagnostic - Analyse précise de la panne ou du problème rencontré.",
          "2. Devis - Évaluation des travaux nécessaires et validation avec vous.",
          "3. Réparation - Intervention par nos techniciens qualifiés.",
          "4. Contrôle - Vérification du bon fonctionnement après réparation.",
          "5. Suivi - Compte-rendu d'intervention et conseils d'utilisation."
        ]
      }}
      gallery={[
        "/images/maintenance-1.jpg",
        "/images/maintenance-2.jpg",
        "/images/maintenance-3.jpg",
        "/images/maintenance-4.jpg"
      ]}
      faqs={[
        {
          question: "Quand faire appel à un service de maintenance pour mes menuiseries ?",
          answer: "Il est recommandé de faire appel à nos services dans plusieurs cas : difficulté à ouvrir ou fermer vos fenêtres/portes, présence de courants d'air, joints d'étanchéité abîmés, vitres embuées entre les vitrages, serrures ou poignées défectueuses, ou tout simplement pour un entretien annuel préventif. Une intervention rapide permet souvent d'éviter des réparations plus coûteuses par la suite. Nous proposons également des contrats d'entretien annuel pour une maintenance régulière et préventive."
        },
        {
          question: "Quels sont les avantages d'un contrat de maintenance annuel ?",
          answer: "Un contrat de maintenance annuel vous offre plusieurs avantages : interventions prioritaires, tarifs préférentiels sur les pièces détachées et la main d'œuvre, vérification complète de vos menuiseries (étanchéité, fonctionnement des ouvrants, état des joints et des accessoires), nettoyage des rails et des systèmes de fermeture, et bien sûr la tranquillité d'esprit. Ces contrats sont personnalisables en fonction du nombre et du type de menuiseries à entretenir, et peuvent inclure des passages réguliers (1 à 2 fois par an)."
        },
        {
          question: "Quelle est la durée de garantie sur les réparations effectuées ?",
          answer: "Toutes nos interventions de réparation bénéficient d'une garantie de 2 ans sur la main d'œuvre et les pièces détachées fournies. Cette garantie couvre les défauts de matériel et les problèmes liés à la pose. Elle ne couvre pas les dommages dus à une mauvaise utilisation, à des conditions météorologiques exceptionnelles, ou à des événements extérieurs (chocs, vandalisme, etc.). Un justificatif d'intervention vous est remis à chaque passage, mentionnant la date d'effet et la durée de la garantie."
        },
        {
          question: "Intervenez-vous en urgence pour les problèmes de sécurité ?",
          answer: "Oui, nous disposons d'un service d'urgence pour les problèmes de sécurité : portes ou fenêtres qui ne ferment plus, vitres cassées, serrures bloquées, etc. Nos techniciens interviennent généralement dans les 24 heures suivant votre appel pour les urgences. En cas de situation critique (dégât des eaux, effraction, etc.), nous faisons de notre mieux pour intervenir le jour même. Nos horaires d'ouverture du service d'urgence sont du lundi au samedi de 8h à 20h, avec des tarifs spécifiques pour les interventions en dehors des heures ouvrables."
        },
        {
          question: "Quels sont les gestes d'entretien à faire soi-même ?",
          answer: "Pour maintenir vos menuiseries en bon état, nous vous recommandons de : nettoyer régulièrement les profilés avec un chiffon doux et de l'eau savonneuse, éviter les produits abrasifs ou solvants, graisser les mécanismes de fermeture 1 à 2 fois par an avec une graisse silicone, vérifier l'état des joints d'étanchéité et les remplacer si nécessaire, nettoyer les rails des portes coulissantes et les systèmes d'écoulement d'eau, et contrôler le bon fonctionnement des ouvrants. Notre équipe peut vous fournir une notice d'entretien personnalisée pour vos menuiseries."
        },
        {
          question: "Comment se déroule une intervention de maintenance ?",
          answer: "Une intervention de maintenance type comprend plusieurs étapes : accueil du technicien et présentation de la mission, inspection visuelle des menuiseries, nettoyage des parties mobiles (rails, charnières, crémones), vérification de l'étanchéité à l'air et à l'eau, contrôle du bon fonctionnement des ouvrants et des systèmes de fermeture, réglage des vantaux si nécessaire, remplacement des pièces usagées, et enfin essais de fonctionnement. À l'issue de l'intervention, le technicien vous remet un compte-rendu détaillé avec ses observations et recommandations. Comptez environ 30 à 45 minutes par fenêtre pour une maintenance complète."
        }
      ]}
    />
  );
}
