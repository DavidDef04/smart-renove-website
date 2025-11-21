import { Metadata } from 'next';
import ServiceLayout from '../ServiceLayout';

export const metadata: Metadata = {
  title: 'Isolation Thermique des Menuiseries | Smart Renov',
  description: 'Solutions d\'isolation thermique performantes pour vos menuiseries en aluminium. Réduisez votre consommation énergétique et améliorez votre confort toute l\'année avec nos solutions sur mesure.',
  keywords: 'isolation thermique, économies d\'énergie, rénovation énergétique, menuiseries isolantes, vitrage performant, Smart Renov',
};

export default function IsolationThermiquePage() {
  return (
    <ServiceLayout
      title="ISOLATION THERMIQUE HAUTE PERFORMANCE"
      description="Nos solutions d'isolation thermique pour menuiseries en aluminium vous permettent de réaliser d'importantes économies d'énergie tout en améliorant votre confort thermique. Nous vous proposons des solutions adaptées à vos besoins, que ce soit pour une construction neuve ou une rénovation."
      heroImage="/images/isolation-thermique-hero.jpg"
      heroTitle="ÉCONOMISEZ L'ÉNERGIE, PRÉSERVEZ LE CONFORT"
      heroDescription="Des solutions d'isolation thermique performantes pour un habitat plus économe et plus confortable."
      features={[
        {
          title: "Économies d'énergie",
          description: "Réduction significative des déperditions thermiques et de votre facture énergétique.",
          icon: "Zap"
        },
        {
          title: "Confort optimal",
          description: "Température homogène dans toutes les pièces, été comme hiver.",
          icon: "Thermometer"
        },
        {
          title: "Écologique",
          description: "Réduction de votre empreinte carbone grâce à une meilleure performance énergétique.",
          icon: "Leaf"
        },
        {
          title: "Qualité de l'air",
          description: "Ventilation maîtrisée pour un air intérieur sain et renouvelé.",
          icon: "Wind"
        },
        {
          title: "Silence préservé",
          description: "Réduction des nuisances sonores extérieures pour un intérieur plus calme.",
          icon: "VolumeX"
        },
        {
          title: "Valorisation",
          description: "Amélioration de la performance énergétique de votre logement, un atout pour sa valeur.",
          icon: "TrendingUp"
        }
      ]}
      process={{
        title: "Notre approche en 5 étapes",
        steps: [
          "1. Audit énergétique - Analyse des déperditions thermiques de votre habitation.",
          "2. Diagnostic - Identification des points faibles et des solutions adaptées.",
          "3. Proposition - Présentation d'un plan d'action personnalisé avec estimation des économies.",
          "4. Réalisation - Mise en œuvre des solutions d'isolation par nos équipes qualifiées.",
          "5. Suivi - Contrôle et conseils pour optimiser les performances."
        ]
      }}
      gallery={[
        "/images/isolation-1.jpg",
        "/images/isolation-2.jpg",
        "/images/isolation-3.jpg",
        "/images/isolation-4.jpg"
      ]}
      faqs={[
        {
          question: "Quels sont les signes d'une mauvaise isolation thermique ?",
          answer: "Plusieurs signes peuvent indiquer une mauvaise isolation thermique : variations importantes de température dans les pièces, parois froides en hiver, sensation de courant d'air au niveau des fenêtres et portes, présence de condensation ou de moisissures, et bien sûr des factures d'énergie anormalement élevées. Une expertise thermique peut confirmer ces observations par des mesures précises."
        },
        {
          question: "Quelle est la différence entre simple, double et triple vitrage ?",
          answer: "Le simple vitrage est constitué d'une seule vitre, le double vitrage de deux vitres séparées par une lame d'air ou de gaz argon, et le triple vitrage de trois vitres avec deux lames d'air. Plus il y a de vitres, meilleure est l'isolation thermique et phonique. Le double vitrage est aujourd'hui la norme, offrant un bon rapport performance/prix, tandis que le triple vitrage apporte un confort supérieur, particulièrement dans les régions froides ou pour les bâtiments à haute performance énergétique."
        },
        {
          question: "Qu'est-ce que le coefficient Uw et à quoi sert-il ?",
          answer: "Le coefficient Uw (W/m².K) mesure la déperdition thermique d'une menuiserie (vitrage + cadre). Plus ce coefficient est bas, meilleure est l'isolation. Par exemple, une fenêtre avec un Uw de 1,3 est plus performante qu'une fenêtre avec un Uw de 2,0. La réglementation thermique actuelle impose un Uw maximum de 1,8 W/m².K pour les fenêtres en rénovation, mais les produits haut de gamme peuvent descendre en dessous de 1,0 W/m².K."
        },
        {
          question: "Peut-on améliorer l'isolation des menuiseries existantes sans tout remplacer ?",
          answer: "Oui, plusieurs solutions existent pour améliorer l'isolation des menuiseries sans les remplacer complètement : pose de survitrage, remplacement des vitrages simples par du double vitrage (si l'ossature est en bon état), pose de joints d'étanchéité, installation de rideaux ou de volets isolants. Cependant, ces solutions intermédiaires offrent généralement des performances inférieures à un remplacement complet par des menuiseries neuves performantes."
        },
        {
          question: "Quelles aides financières sont disponibles pour l'isolation thermique ?",
          answer: "Plusieurs aides peuvent être cumulées pour financer vos travaux d'isolation : MaPrimeRénov', éco-prêt à taux zéro, TVA réduite à 5,5%, aides des collectivités locales, certificats d'économies d'énergie (CEE). Les conditions d'éligibilité varient selon les dispositifs et votre situation. Notre équipe peut vous accompagner dans le montage de votre dossier pour bénéficier de ces aides."
        },
        {
          question: "Combien de temps durent les travaux d'isolation des menuiseries ?",
          answer: "La durée des travaux dépend de l'ampleur du chantier. Pour le remplacement d'une fenêtre standard, il faut compter environ 2 à 3 heures par fenêtre. Pour une maison moyenne (8 à 10 fenêtres), les travaux s'étalent généralement sur 2 à 3 jours. Nous veillons à limiter la gêne occasionnée et à protéger vos biens pendant l'intervention. Pour les projets plus importants ou complexes, nous établissons un calendrier précis en accord avec vous."
        }
      ]}
    />
  );
}
