import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Façades Vitrées en Aluminium | Smart Renov',
  description: 'Solutions de façades vitrées sur mesure en aluminium pour un design contemporain et des performances optimales. Découvrez nos réalisations et demandez un devis personnalisé.',
  keywords: 'façades vitrées, aluminium, vitrage, architecture moderne, rénovation, construction, Smart Renov',
};

export default function FacadesVitreesPage() {
  return (
    <ServiceLayout
      title="FAÇADES VITRÉES SUR MESURE"
      description="Nos façades vitrées en aluminium allient esthétique contemporaine et performances techniques exceptionnelles. Que ce soit pour un bâtiment professionnel ou une résidence privée, nos solutions sur mesure apportent lumière naturelle et modernité à vos espaces."
      heroImage="/images/facades-vitrees-hero.jpg"
      heroTitle="FAÇADES VITRÉES HAUT DE GAMME"
      heroDescription="Des solutions architecturales innovantes pour des bâtiments lumineux et performants énergétiquement."
      features={[
        {
          title: "Design sur mesure",
          description: "Conception personnalisée selon l'architecture de votre bâtiment et vos besoins spécifiques.",
          icon: "Ruler"
        },
        {
          title: "Performance énergétique",
          description: "Systèmes à rupture de pont thermique pour une isolation optimale et des économies d'énergie.",
          icon: "Thermometer"
        },
        {
          title: "Sécurité renforcée",
          description: "Verres feuilletés et structures en aluminium renforcées pour une sécurité maximale.",
          icon: "ShieldCheck"
        },
        {
          title: "Entretien minimal",
          description: "Matériaux durables et résistants aux intempéries pour un entretien simplifié.",
          icon: "Sun"
        },
        {
          title: "Lumière naturelle",
          description: "Optimisation de l'apport lumineux pour des espaces plus agréables et économes en énergie.",
          icon: "Sun"
        },
        {
          title: "Isolation phonique",
          description: "Réduction significative des nuisances sonores pour un confort acoustique optimal.",
          icon: "Volume2"
        }
      ]}
      process={{
        title: "Notre processus en 6 étapes",
        steps: [
          "1. Étude de faisabilité - Analyse de votre projet et des contraintes techniques.",
          "2. Conception sur mesure - Création d'une solution adaptée à votre bâtiment.",
          "3. Fabrication en atelier - Production des éléments avec une précision millimétrique.",
          "4. Pose par nos experts - Installation professionnelle dans le respect des normes.",
          "5. Réception des travaux - Vérification et mise en service de votre installation.",
          "6. Service après-vente - Suivi et entretien pour une durabilité optimale."
        ]
      }}
      gallery={[
        "/images/facades-vitrees-1.jpg",
        "/images/facades-vitrees-2.jpg",
        "/images/facades-vitrees-3.jpg",
        "/images/facades-vitrees-4.jpg"
      ]}
      faqs={[
        {
          question: "Quels sont les avantages d'une façade vitrée en aluminium ?",
          answer: "Les façades vitrées en aluminium offrent une excellente résistance aux intempéries, une grande durabilité, une esthétique moderne, une bonne isolation thermique et phonique, ainsi qu'une grande liberté architecturale grâce à la possibilité de créer de très grandes surfaces vitrées sans structure apparente trop importante."
        },
        {
          question: "Quelle est la durée de vie d'une façade vitrée en aluminium ?",
          answer: "Une façade vitrée en aluminium de qualité peut durer plus de 40 ans avec un entretien régulier. L'aluminium est naturellement résistant à la corrosion, surtout lorsqu'il est traité par anodisation ou avec un revêtement en poudre de haute qualité."
        },
        {
          question: "Quelles sont les options de personnalisation disponibles ?",
          answer: "Vous pouvez personnaliser la couleur de l'aluminium, le type de verre (teinté, réfléchissant, à contrôle solaire, etc.), les dimensions des châssis, le type d'ouverture (fixe, oscillo-battant, coulissante), ainsi que divers accessoires de sécurité et de confort (brise-soleil, ventilation naturelle, etc.)."
        },
        {
          question: "Quelle est la différence entre une façade rideau et une façade structurelle ?",
          answer: "Une façade rideau est une enveloppe légère fixée à la structure du bâtiment, tandis qu'une façade structurelle utilise le verre comme élément porteur. Les façades rideaux sont plus courantes et plus économiques, tandis que les façades structurelles offrent une esthétique plus épurée mais sont plus complexes à mettre en œuvre."
        },
        {
          question: "Quel est le budget à prévoir pour une façade vitrée ?",
          answer: "Le coût d'une façade vitrée varie considérablement en fonction de la surface, du type de verre, des finitions choisies et de la complexité de l'installation. En moyenne, il faut compter entre 500€ et 1 500€ du mètre carré pour une installation complète. Nous vous recommandons de demander un devis personnalisé pour obtenir une estimation précise adaptée à votre projet."
        },
        {
          question: "Quelle est la réglementation pour les façades vitrées ?",
          answer: "Les façades vitrées sont soumises à différentes réglementations concernant la sécurité (vitrage feuilleté obligatoire en zone accessible), l'isolation thermique (RT 2020), l'accessibilité (hauteur des poignées, largeur de passage) et la protection solaire. Nos équipes sont formées à ces réglementations et vous conseillent pour que votre projet soit parfaitement conforme."
        }
      ]}
    />
  );
}
