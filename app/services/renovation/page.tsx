import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Rénovation de Menuiseries | Smart Renov',
  description: 'Rénovation complète de vos menuiseries en aluminium. Redonnez une seconde vie à vos fenêtres, portes et façades avec nos solutions de rénovation sur mesure et économiques.',
  keywords: 'rénovation menuiseries, rénovation aluminium, remplacement fenêtres, rénovation façade, économie d\'énergie, Smart Renov',
};

export default function RenovationPage() {
  return (
    <ServiceLayout
      title="RÉNOVATION DE MENUISERIES ALUMINIUM"
      description="Donnez une seconde vie à vos menuiseries en aluminium avec nos solutions de rénovation complètes. Que vos fenêtres, portes ou façades aient besoin d'une simple remise en état ou d'une rénovation complète, nos experts vous proposent des solutions adaptées à vos besoins et à votre budget."
      heroImage="/images/renovation-hero.jpg"
      heroTitle="RÉNOVEZ, ÉCONOMISEZ, VALORISEZ"
      heroDescription="Des solutions de rénovation innovantes pour des menuiseries comme neuves, sans les inconvénients d'un remplacement complet."
      features={[
        {
          title: "Économique",
          description: "Jusqu'à 40% d'économies par rapport au remplacement complet.",
          icon: "PiggyBank"
        },
        {
          title: "Rapide",
          description: "Intervention rapide avec un minimum de désagréments.",
          icon: "Clock"
        },
        {
          title: "Écologique",
          description: "Solution durable qui évite le gaspillage des ressources existantes.",
          icon: "Leaf"
        },
        {
          title: "Performance",
          description: "Amélioration des performances thermiques et acoustiques.",
          icon: "Zap"
        },
        {
          title: "Esthétique",
          description: "Apparence comme neuve avec un large choix de finitions.",
          icon: "Palette"
        },
        {
          title: "Garantie",
          description: "Travaux garantis pour une tranquillité d'esprit totale.",
          icon: "ShieldCheck"
        }
      ]}
      process={{
        title: "Notre processus de rénovation en 5 étapes",
        steps: [
          "1. Diagnostic complet - État des lieux détaillé de vos menuiseries.",
          "2. Devis personnalisé - Proposition technique et financière claire.",
          "3. Préparation - Protection des lieux et préparation du chantier.",
          "4. Rénovation - Intervention par nos techniciens qualifiés.",
          "5. Livraison - Vérification et nettoyage des lieux."
        ]
      }}
      gallery={[
        "/images/renovation-avant-apres-1.jpg",
        "/images/renovation-avant-apres-2.jpg",
        "/images/renovation-avant-apres-3.jpg",
        "/images/renovation-avant-apres-4.jpg"
      ]}
      faqs={[
        {
          question: "Quand faut-il rénover plutôt que remplacer ses menuiseries ?",
          answer: "La rénovation est particulièrement intéressante lorsque les menuiseries sont en bon état structurel mais présentent des signes d'usure esthétique ou fonctionnelle. C'est la solution idéale pour les fenêtres et portes qui ferment mal, qui ont des joints défectueux, dont la peinture s'écaille, ou qui présentent des fuites d'air. Si l'ossature est déformée, rouillée ou très endommagée, le remplacement complet peut être plus approprié. Notre équipe peut évaluer l'état de vos menuiseries et vous conseiller sur la meilleure approche."
        },
        {
          question: "Quels sont les avantages de la rénovation par rapport au remplacement ?",
          answer: "La rénovation offre plusieurs avantages : coût réduit (jusqu'à 40% d'économie), durée des travaux plus courte, pas de démolition lourde, conservation de l'aspect d'origine (important pour les bâtiments classés ou en secteur protégé), et impact environnemental moindre. De plus, la rénovation permet souvent d'améliorer significativement les performances thermiques et acoustiques sans avoir à changer toute la menuiserie."
        },
        {
          question: "Peut-on améliorer l'isolation thermique en rénovant ses menuiseries ?",
          answer: "Absolument ! La rénovation thermique des menuiseries est l'une de nos spécialités. Nous pouvons remplacer les joints d'étanchéité usagés, ajouter des ruptures de ponts thermiques, poser des doubles ou triples vitrages sur mesure, et améliorer les systèmes de fermeture pour éliminer les fuites d'air. Ces interventions peuvent réduire considérablement les déperditions thermiques et améliorer le confort de votre logement, tout en réalisant des économies d'énergie substantielles."
        },
        {
          question: "Combien de temps dure une rénovation de menuiseries ?",
          answer: "La durée d'une rénovation dépend de l'ampleur des travaux et du nombre de menuiseries à traiter. En moyenne, comptez environ 2 à 4 heures par fenêtre pour une rénovation standard (ponçage, peinture, remplacement des joints). Pour une maison de taille moyenne avec 8 à 10 fenêtres, les travaux s'étalent généralement sur 2 à 3 jours. Nous nous efforçons de minimiser la gêne occasionnée et protégeons systématiquement vos biens pendant les interventions."
        },
        {
          question: "Quelle est la durée de vie d'une menuiserie rénovée ?",
          answer: "Une menuiserie en aluminium correctement rénovée peut durer aussi longtemps qu'une neuve, soit 30 à 40 ans en moyenne. La qualité de la rénovation est évidemment primordiale : en utilisant des matériaux de qualité et en respectant les règles de l'art, nous garantissons des résultats durables. Nos interventions sont couvertes par une garantie de 10 ans sur les défauts de fabrication et de mise en œuvre."
        },
        {
          question: "Quelles aides financières sont disponibles pour la rénovation de menuiseries ?",
          answer: "Plusieurs aides peuvent être cumulées pour financer vos travaux de rénovation : MaPrimeRénov' (éligible à tous les propriétaires), l'éco-prêt à taux zéro (éco-PTZ), la TVA réduite à 5,5%, les aides des collectivités locales, et les primes CEE (Certificats d'Économies d'Énergie). Les conditions d'éligibilité varient selon les dispositifs et votre situation. Notre équipe peut vous accompagner dans le montage de votre dossier pour bénéficier de ces aides, et nous vous fournissons tous les justificatifs nécessaires."
        }
      ]}
    />
  );
}
