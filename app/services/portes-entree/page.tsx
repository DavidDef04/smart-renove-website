import React from 'react';
import { Lock, Shield, Home, Palette, Award, Thermometer } from 'lucide-react';
import ServiceLayout from '../ServiceLayout';

export const metadata = {
  title: 'Portes d\'Entrée Aluminium | Smart Renov',
  description: 'Portes d\'entrée en aluminium haut de gamme alliant sécurité, isolation et design pour une première impression remarquable de votre habitation.',
};

const PortesEntreePage = () => {
  return (
    <ServiceLayout
      title="Portes d'Entrée Aluminium"
      description="Nos portes d'entrée en aluminium allient sécurité renforcée, isolation optimale et design contemporain pour une première impression remarquable de votre habitation."
      heroImage="/images/porte-entree-hero.jpg"
      heroTitle="Portes d'Entrée Haut de Gamme"
      heroDescription="Sécurité, isolation et élégance pour l'entrée de votre maison"
      features={[
        {
          title: "Sécurité Maximale",
          description: "Nos portes sont équipées de systèmes de verrouillage multipoints, de gonds renforcés et de serrures certifiées A2P pour une protection optimale.",
          icon: <Lock className="h-6 w-6 text-white" />
        },
        {
          title: "Isolation Thermique",
          description: "Performances thermiques exceptionnelles grâce à une isolation renforcée et une étanchéité optimale aux intempéries.",
          icon: <Thermometer className="h-6 w-6 text-white" />
        },
        {
          title: "Design Personnalisable",
          description: "Large choix de coloris, de vitrages et d'options de personnalisation pour une porte d'entrée unique qui reflète votre style.",
          icon: <Palette className="h-6 w-6 text-white" />
        },
        {
          title: "Résistance aux Intempéries",
          description: "L'aluminium est naturellement résistant à la corrosion, aux UV et aux variations climatiques pour une longévité exceptionnelle.",
          icon: <Shield className="h-6 w-6 text-white" />
        },
        {
          title: "Isolation Phonique",
          description: "Réduction significative des nuisances sonores pour préserver le calme et le confort de votre intérieur.",
          icon: <Home className="h-6 w-6 text-white" />
        },
        {
          title: "Garantie Décennale",
          description: "Toutes nos portes d'entrée bénéficient d'une garantie décennale pour une tranquillité d'esprit totale.",
          icon: <Award className="h-6 w-6 text-white" />
        }
      ]}
      process={{
        title: "Notre Processus de Pose",
        steps: [
          "Étude personnalisée de votre projet",
          "Prise de mesures précises par un expert",
          "Conseils sur le modèle et les options",
          "Fabrication sur mesure en atelier",
          "Pose par nos artisans qualifiés",
          "Contrôle qualité et mise en service"
        ]
      }}
      gallery={[
        "/images/securite.jpg",
        "/images/veranda.jpg",
        "/images/porte-entree-3.png",
        "/images/porte-entree-4.png",
        "/images/porte-entree-5.png",
        "/images/porte-entree-6.png"
      ]}
      faqs={[
        {
          question: "Quelle est la durée de vie d'une porte d'entrée en aluminium ?",
          answer: "Nos portes d'entrée en aluminium sont conçues pour durer plus de 30 ans sans nécessiter de remplacement, grâce à la résistance naturelle de l'aluminium à la corrosion."
        },
        {
          question: "Les portes en aluminium sont-elles plus sécurisées que les portes en PVC ou en bois ?",
          answer: "Oui, l'aluminium est un matériau plus résistant aux tentatives d'effraction que le PVC. Combiné à des systèmes de verrouillage haut de gamme, il offre une sécurité optimale."
        },
        {
          question: "Peut-on personnaliser l'aspect de sa porte d'entrée en aluminium ?",
          answer: "Absolument ! Nous proposons une large gamme de finitions, de couleurs, de verres décoratifs et d'options de personnalisation pour créer une porte unique à votre image."
        },
        {
          question: "Quel est l'entretien nécessaire pour une porte d'entrée en aluminium ?",
          answer: "L'entretien est minimal : un simple nettoyage occasionnel à l'eau savonneuse suffit. L'aluminium ne nécessite pas de peinture ou de traitement particulier."
        },
        {
          question: "Les portes en aluminium sont-elles adaptées aux régions côtières ?",
          answer: "Oui, l'aluminium est particulièrement adapté aux environnements marins car il est totalement imputrescible et résiste parfaitement à la corrosion saline."
        },
        {
          question: "Quel est le délai moyen pour la pose d'une porte d'entrée ?",
          answer: "Le délai moyen est de 4 à 6 semaines après validation du devis, incluant la fabrication sur mesure. La pose elle-même ne prend généralement qu'une journée."
        }
      ]}
    />
  );
};

export default PortesEntreePage;
