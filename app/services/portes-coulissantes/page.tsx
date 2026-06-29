import ServiceLayout from '../ServiceLayout';
import { servicePageMetadata } from '@/app/lib/seo';
import { ServiceBreadcrumbLd } from '@/app/components/seo/ServiceBreadcrumbLd';
import { SITE_IMAGES } from '@/app/data/siteImages';
import { getServiceGallery } from '@/app/data/serviceGalleries';

export const metadata = servicePageMetadata('portes-coulissantes');

export default function PortesCoulissantesPage() {
  return (
    <>
      <ServiceBreadcrumbLd serviceName="Portes coulissantes" slug="portes-coulissantes" />
    <ServiceLayout
      title="PORTES COULISSANTES SUR MESURE"
      description="Nos portes coulissantes en aluminium allient esthétique contemporaine et fonctionnalité. Parfaites pour les espaces restreints ou pour créer une séparation élégante entre les pièces, elles s'intègrent parfaitement à tous les styles d'intérieur."
      heroImage={SITE_IMAGES.services.baies}
      heroTitle="PORTES COULISSANTES ÉLÉGANTES"
      heroDescription="Gagnez de l'espace avec nos portes coulissantes design et fonctionnelles, adaptées à tous vos projets d'aménagement."
      features={[
        {
          title: "Gain d'espace",
          description: "Idéales pour les petits espaces, elles n'empiètent pas sur la surface au sol.",
          icon: "Move"
        },
        {
          title: "Design contemporain",
          description: "Lignes épurées et finitions soignées pour une touche d'élégance moderne.",
          icon: "Ruler"
        },
        {
          title: "Fluidité d'ouverture",
          description: "Système de glissement silencieux et fluide pour un confort d'utilisation optimal.",
          icon: "Sliders"
        },
        {
          title: "Isolation phonique",
          description: "Séparation efficace des espaces avec une réduction significative des bruits.",
          icon: "Volume2"
        },
        {
          title: "Sécurité renforcée",
          description: "Systèmes de verrouillage fiables pour une sécurité optimale.",
          icon: "ShieldCheck"
        },
        {
          title: "Personnalisation",
          description: "Large choix de finitions, de couleurs et de vitrages pour s'adapter à votre décoration.",
          icon: "Palette"
        }
      ]}
      process={{
        title: "Notre processus en 5 étapes",
        steps: [
          "1. Diagnostic - Analyse de votre espace et de vos besoins spécifiques.",
          "2. Proposition - Élaboration d'une solution personnalisée avec devis détaillé.",
          "3. Fabrication - Réalisation sur mesure dans nos ateliers.",
          "4. Installation - Pose par nos techniciens qualifiés.",
          "5. Réception - Vérification et mise en service de votre installation."
        ]
      }}
      gallery={getServiceGallery('portes-coulissantes')}
      faqs={[
        {
          question: "Quels sont les avantages des portes coulissantes par rapport aux portes classiques ?",
          answer: "Les portes coulissantes offrent plusieurs avantages : elles économisent de l'espace (pas d'encombrement dû au battement), permettent des ouvertures plus larges, s'intègrent parfaitement dans les espaces modernes, et peuvent être équipées de systèmes de verrouillage sécurisés. Elles sont également idéales pour les personnes à mobilité réduite."
        },
        {
          question: "Quels types de portes coulissantes proposez-vous ?",
          answer: "Nous proposons différents types de portes coulissantes : portes coulissantes sur rail apparent ou encastré, portes coulissantes à galandage (qui s'encastrent dans la cloison), portes coulissantes escamotables dans la paroi, et portes coulissantes sur rails plafonniers. Chaque type a ses spécificités et s'adapte à des configurations différentes."
        },
        {
          question: "Quelle est la durée de vie d'une porte coulissante en aluminium ?",
          answer: "Une porte coulissante en aluminium de qualité peut durer plus de 30 ans avec un entretien minimal. L'aluminium est résistant à la corrosion, ne rouille pas et ne se déforme pas dans le temps. Les systèmes de roulement et de glissière sont conçus pour résister à des milliers de cycles d'ouverture/fermeture."
        },
        {
          question: "Peut-on installer une porte coulissante dans une cloison existante ?",
          answer: "Oui, il est tout à fait possible d'installer une porte coulissante dans une cloison existante, à condition que la structure le permette. Pour les cloisons en placo, nous pouvons renforcer la structure si nécessaire. Nous proposons également des solutions sur mesure qui s'adaptent à votre configuration existante, avec des travaux limités."
        },
        {
          question: "Quel est le prix moyen d'une porte coulissante sur mesure ?",
          answer: "Le prix d'une porte coulissante sur mesure varie en fonction de plusieurs critères : dimensions, type de système coulissant, qualité des matériaux, type de verre, finitions, etc. En moyenne, il faut compter entre 800€ et 3 000€ pour une porte coulissante standard, pose comprise. Nous vous proposerons un devis personnalisé après une étude précise de votre projet."
        },
        {
          question: "Comment entretenir une porte coulissante en aluminium ?",
          answer: "L'entretien d'une porte coulissante en aluminium est simple : nettoyez régulièrement les rails avec un chiffon sec ou légèrement humide pour éliminer la poussière et les saletés. Les profils en aluminium peuvent être nettoyés avec un chiffon doux et de l'eau savonneuse. Pensez à graisser les roulements et les mécanismes de roulement une à deux fois par an avec une graisse silicone pour assurer une bonne longévité et un fonctionnement fluide."
        }
      ]}
    />
    </>
  );
}
