import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Agencements Intérieurs en Aluminium | Smart Renov',
  description: 'Solutions d\'agencement intérieur sur mesure en aluminium. Cloisons, séparations d\'espace et aménagements intérieurs design et fonctionnels pour optimiser vos surfaces.',
  keywords: 'agencement intérieur, cloisons amovibles, séparation d\'espace, aménagement sur mesure, design intérieur, Smart Renov',
};

export default function AgencementsPage() {
  return (
    <ServiceLayout
      title="AGENCEMENTS INTÉRIEURS SUR MESURE"
      description="Donnez vie à vos espaces intérieurs avec nos solutions d'agencement en aluminium sur mesure. Que vous souhaitiez séparer des pièces, créer des espaces de rangement ou apporter une touche design à votre intérieur, nos solutions s'adaptent à tous vos besoins et à tous les styles."
      heroImage="/images/agencements-hero.jpg"
      heroTitle="RÉINVENTEZ VOS ESPACES INTÉRIEURS"
      heroDescription="Des solutions d'agencement sur mesure pour optimiser l'espace et le rendre plus fonctionnel."
      features={[
        {
          title: "Sur mesure",
          description: "Solutions personnalisées adaptées à vos besoins et à votre espace.",
          icon: "Ruler"
        },
        {
          title: "Modulable",
          description: "Aménagements évolutifs qui s'adaptent à vos changements d'usage.",
          icon: "Layout"
        },
        {
          title: "Design",
          description: "Esthétique contemporaine pour des intérieurs élégants et tendance.",
          icon: "Palette"
        },
        {
          title: "Fonctionnel",
          description: "Optimisation de l'espace pour plus de praticité au quotidien.",
          icon: "Package"
        },
        {
          title: "Lumière",
          description: "Jeux de transparence pour préserver la luminosité naturelle.",
          icon: "Sun"
        },
        {
          title: "Durable",
          description: "Matériaux résistants et faciles à entretenir pour une longue durée de vie.",
          icon: "Shield"
        }
      ]}
      process={{
        title: "Notre méthode en 5 étapes",
        steps: [
          "1. Écoute - Compréhension de vos besoins et de vos envies.",
          "2. Conseil - Proposition de solutions adaptées à votre espace.",
          "3. Conception - Élaboration des plans et validation des choix.",
          "4. Fabrication - Réalisation sur mesure dans nos ateliers.",
          "5. Installation - Mise en place par nos équipes qualifiées."
        ]
      }}
      gallery={[
        "/images/agencements-1.jpg",
        "/images/agencements-2.jpg",
        "/images/agencements-3.jpg",
        "/images/agencements-4.jpg"
      ]}
      faqs={[
        {
          question: "Quels types d'agencements intérieurs proposez-vous ?",
          answer: "Nous proposons une large gamme de solutions d'agencement intérieur : cloisons de séparation fixes ou amovibles, parois vitrées, portes coulissantes, placards et rangements sur mesure, meubles intégrés, escaliers en aluminium, et bien plus encore. Chaque projet est unique et conçu sur mesure pour s'adapter parfaitement à votre espace et à vos besoins spécifiques. Nous travaillons différents matériaux comme l'aluminium, le verre, le bois et les panneaux laqués pour créer des ambiances variées."
        },
        {
          question: "Comment choisir entre une cloison fixe et une cloison amovible ?",
          answer: "Le choix entre une cloison fixe et amovible dépend de plusieurs facteurs. Une cloison fixe est idéale pour une séparation définitive, offrant une meilleure isolation phonique et thermique. Une cloison amovible ou coulissante est parfaite pour des espaces polyvalents que vous souhaitez moduler selon vos besoins. Nous vous conseillons en fonction de l'usage prévu, de l'acoustique souhaitée, et de votre projet d'aménagement global."
        },
        {
          question: "Peut-on intégrer des rangements dans les cloisons ?",
          answer: "Absolument ! Nous concevons des cloisons avec des rangements intégrés pour optimiser l'espace. Ces solutions sur mesure peuvent inclure des étagères ouvertes ou fermées, des placards coulissants, des casiers ou encore des espaces de rangement spécifiques. Ces aménagements sont particulièrement utiles dans les petits espaces où chaque mètre carré compte, comme les studios, les appartements ou les combles aménagés."
        },
        {
          question: "Quels sont les avantages de l'aluminium pour l'aménagement intérieur ?",
          answer: "L'aluminium offre de nombreux avantages pour l'aménagement intérieur : légèreté et résistance, finesse des profilés pour un design épuré, stabilité dans le temps (ne se déforme pas), résistance à l'humidité (idéal pour salles de bain et cuisines), entretien facile, et possibilité de finitions variées (laquage dans toutes les teintes RAL, aspect métal brut, brossé, etc.). C'est également un matériau 100% recyclable, ce qui en fait un choix écologique."
        },
        {
          question: "Combien de temps faut-il prévoir pour un projet d'agencement intérieur ?",
          answer: "Le délai d'un projet d'agencement intérieur dépend de sa complexité. Pour une étude et un devis, comptez environ une semaine. La fabrication sur mesure prend généralement entre 2 et 6 semaines selon l'ampleur du projet. L'installation dure de quelques jours à quelques semaines selon les travaux. Pour un projet complet (séjour + cuisine + chambres), il est raisonnable de prévoir 2 à 3 mois entre la première prise de contact et la livraison finale. Nous établissons ensemble un calendrier précis en fonction de vos contraintes."
        },
        {
          question: "Quel est le budget à prévoir pour un agencement intérieur sur mesure ?",
          answer: "Le coût d'un agencement intérieur sur mesure varie considérablement en fonction des matériaux choisis, de la surface à aménager, et de la complexité des aménagements. En moyenne, comptez entre 300€ et 1 200€ du mètre linéaire pour des rangements sur mesure, et entre 500€ et 2 000€ du mètre carré pour des cloisons ou séparations d'espace. Nous proposons des solutions adaptées à différents budgets et pouvons vous conseiller sur les options les plus économiques sans sacrifier la qualité ni l'esthétique."
        }
      ]}
    />
  );
}
