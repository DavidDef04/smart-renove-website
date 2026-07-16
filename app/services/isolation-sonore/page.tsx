import {
  Volume2,
  Shield,
  Home,
  Layers,
  CheckCircle,
  Headphones,
} from 'lucide-react';
import ServiceLayout from '../ServiceLayout';
import { servicePageMetadata } from '@/app/lib/seo';
import { ServiceBreadcrumbLd } from '@/app/components/seo/ServiceBreadcrumbLd';
import { getServiceGallery } from '@/app/data/serviceGalleries';

export const metadata = servicePageMetadata('isolation-sonore');

export default function IsolationSonorePage() {
  return (
    <>
      <ServiceBreadcrumbLd serviceName="Isolation sonore" slug="isolation-sonore" />
      <ServiceLayout
        title="ISOLATION SONORE"
        description="Réduisez les nuisances sonores grâce à nos solutions d'isolation acoustique pour menuiseries, cloisons et ouvertures. Plus de calme à l'intérieur, sans sacrifier la lumière ni le design."
        heroImage="/images/fenetre-coulissante-alu-anthracite-moustiquaire.jpg"
        heroTitle="ISOLATION SONORE POUR UN INTÉRIEUR PLUS CALME"
        heroDescription="Menuiseries et cloisons conçues pour atténuer le bruit de la rue, des voisins et de l'environnement urbain à Douala."
        features={[
          {
            title: 'Atténuation du bruit',
            description:
              'Vitrages et joints adaptés pour limiter la transmission des bruits extérieurs vers l\'intérieur.',
            icon: <Volume2 className="h-6 w-6 text-white" />,
          },
          {
            title: 'Confort au quotidien',
            description:
              'Un habitat plus serein pour dormir, travailler et se reposer, même en zone animée.',
            icon: <Headphones className="h-6 w-6 text-white" />,
          },
          {
            title: 'Menuiseries performantes',
            description:
              'Fenêtres et portes aluminium avec vitrage acoustique et étanchéité soignée.',
            icon: <Home className="h-6 w-6 text-white" />,
          },
          {
            title: 'Cloisons & séparations',
            description:
              'Cloisons vitrées et structures aluminium pour isoler phoniquement les pièces.',
            icon: <Layers className="h-6 w-6 text-white" />,
          },
          {
            title: 'Qualité de pose',
            description:
              'Une pose précise des joints et cadres est essentielle pour l\'efficacité acoustique.',
            icon: <CheckCircle className="h-6 w-6 text-white" />,
          },
          {
            title: 'Sur mesure',
            description:
              'Solutions adaptées à votre bâtiment, votre budget et le niveau de confort souhaité.',
            icon: <Shield className="h-6 w-6 text-white" />,
          },
        ]}
        process={{
          title: 'Notre approche en 5 étapes',
          steps: [
            '1. Diagnostic - Identification des sources de bruit et des points faibles.',
            '2. Conseil - Choix des vitrages, menuiseries ou cloisons adaptés.',
            '3. Devis - Proposition claire et chiffrée, sans engagement.',
            '4. Réalisation - Fabrication et pose par nos équipes qualifiées.',
            '5. Contrôle - Vérification de l\'étanchéité et du confort obtenu.',
          ],
        }}
        gallery={getServiceGallery('isolation-sonore')}
        faqs={[
          {
            question: "Qu'est-ce que l'isolation sonore ?",
            answer:
              "L'isolation sonore (ou acoustique) vise à réduire les bruits qui traversent les ouvertures et les parois : circulation, voisinage, activité urbaine. Elle repose sur le type de vitrage, la qualité des joints, la densité des cadres et la pose.",
          },
          {
            question: 'Quels sont les signes d\'une mauvaise isolation acoustique ?',
            answer:
              'Bruits de rue ou de voisinage très présents, conversations entendues entre pièces, vibrations au niveau des fenêtres, sensation d\'inconfort pour le sommeil ou le travail. Un diagnostic sur place permet d\'identifier les points à traiter en priorité.',
          },
          {
            question: 'Le double vitrage suffit-il pour isoler du bruit ?',
            answer:
              'Le double vitrage améliore déjà le confort, surtout avec des épaisseurs de verre différentes (vitrage asymétrique). Pour un résultat plus poussé, on combine vitrage acoustique, joints performants et pose soignée des menuiseries.',
          },
          {
            question: 'Peut-on améliorer l\'isolation sans tout remplacer ?',
            answer:
              'Oui, selon l\'état des menuiseries : remplacement des joints, survitrage, renforcement des cloisons, ou remplacement ciblé des ouvertures les plus exposées. Nous vous indiquons la solution la plus efficace pour votre situation.',
          },
          {
            question: 'Intervenez-vous à Douala et environs ?',
            answer:
              'Oui, Smart Rénov intervient principalement à Douala et dans les grandes villes du Cameroun pour la pose de menuiseries et solutions d\'isolation sonore.',
          },
        ]}
      />
    </>
  );
}
