import {
  Sun,
  Home,
  Shield,
  Ruler,
  CloudRain,
  Sparkles,
} from 'lucide-react';
import ServiceLayout from '../ServiceLayout';
import { servicePageMetadata } from '@/app/lib/seo';
import { ServiceBreadcrumbLd } from '@/app/components/seo/ServiceBreadcrumbLd';
import { getServiceGallery } from '@/app/data/serviceGalleries';

export const metadata = servicePageMetadata('percolat');

export default function PercolatPage() {
  return (
    <>
      <ServiceBreadcrumbLd serviceName="Percolat" slug="percolat" />
      <ServiceLayout
        title="PERCOLAT"
        description="Conception et pose de percolats en aluminium : structures pour terrasses, balcons et espaces extérieurs. Ombre, protection et esthétique moderne pour prolonger votre maison dehors."
        heroImage="/images/rendu-3d-maison-moderne-pergola-balcon.jpg"
        heroTitle="PERCOLAT ALUMINIUM SUR MESURE"
        heroDescription="Terrasses et balcons ombragés, structures durables et design contemporain — réalisés par Smart Rénov à Douala."
        features={[
          {
            title: 'Ombre & confort',
            description:
              'Protégez-vous du soleil tout en profitant de votre terrasse ou balcon toute l\'année.',
            icon: <Sun className="h-6 w-6 text-white" />,
          },
          {
            title: 'Structure aluminium',
            description:
              'Résistance au climat tropical, entretien minimal et finitions soignées.',
            icon: <Shield className="h-6 w-6 text-white" />,
          },
          {
            title: 'Sur mesure',
            description:
              'Dimensions, couleurs et couverture adaptées à votre façade et à votre usage.',
            icon: <Ruler className="h-6 w-6 text-white" />,
          },
          {
            title: 'Protection pluie',
            description:
              'Options de couverture pour rester à l\'abri lors des averses.',
            icon: <CloudRain className="h-6 w-6 text-white" />,
          },
          {
            title: 'Valorisation du bien',
            description:
              'Un espace extérieur bien conçu augmente le confort et l\'attrait de votre maison.',
            icon: <Home className="h-6 w-6 text-white" />,
          },
          {
            title: 'Design moderne',
            description:
              'Lignes épurées qui s\'accordent avec menuiseries et façades aluminium.',
            icon: <Sparkles className="h-6 w-6 text-white" />,
          },
        ]}
        process={{
          title: 'Notre processus en 5 étapes',
          steps: [
            '1. Visite - Prise de mesures et analyse de l\'espace extérieur.',
            '2. Conception - Proposition de structure et de couverture adaptées.',
            '3. Validation - Choix des matériaux, coloris et devis détaillé.',
            '4. Fabrication - Préparation des éléments en atelier.',
            '5. Pose - Installation propre et sécurisée sur site.',
          ],
        }}
        gallery={getServiceGallery('percolat')}
        faqs={[
          {
            question: 'Qu\'est-ce qu\'un percolat ?',
            answer:
              'Un percolat est une structure extérieure (type pergola / couverture de terrasse) en aluminium qui offre de l\'ombre et une protection partielle contre les intempéries, tout en restant ouverte et esthétique.',
          },
          {
            question: 'Pour quels espaces le percolat est-il adapté ?',
            answer:
              'Terrasses, balcons, patios, entrées et zones de détente attenantes à la maison ou au local commercial. Nous adaptons la structure à la portée et aux contraintes du bâtiment.',
          },
          {
            question: 'Le percolat résiste-t-il au climat de Douala ?',
            answer:
              'Oui : l\'aluminium traité et une pose professionnelle assurent une bonne tenue face à l\'humidité, au soleil et aux pluies. Nous sélectionnons les fixations et la couverture en conséquence.',
          },
          {
            question: 'Peut-on combiner percolat et baies vitrées ?',
            answer:
              'Absolument. De nombreux projets associent baies coulissantes et percolat pour créer une continuité intérieur / extérieur agréable et moderne.',
          },
          {
            question: 'Quel est le délai de réalisation ?',
            answer:
              'Selon la complexité, comptez en général quelques jours à quelques semaines entre validation du devis, fabrication et pose. Un planning précis vous est communiqué avant le démarrage.',
          },
        ]}
      />
    </>
  );
}
