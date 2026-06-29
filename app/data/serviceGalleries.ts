import { SITE_IMAGES } from './siteImages';

const img = (name: string) => `/images/${name}`;

export type ServiceGalleryItem = {
  image: string;
  title: string;
  description: string;
};

export const SERVICE_GALLERIES: Record<string, ServiceGalleryItem[]> = {
  'menuiserie-aluminium': [
    {
      image: img('ouvrier-scie-onglet-profile-aluminium-01.jpg'),
      title: 'Découpe de profilés aluminium',
      description: 'Préparation précise des profilés en atelier avant pose sur chantier.',
    },
    {
      image: img('equipe-smart-renov-pose-profile-menuiserie-01.jpg'),
      title: 'Pose de menuiserie sur chantier',
      description: 'Installation de cadres aluminium par nos équipes à Douala.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[0],
      title: 'Prise de mesures sur site',
      description: 'Relevé et côtes pour fabrication sur mesure de vos ouvertures.',
    },
    {
      image: img('livraison-fenetres-aluminium-camion.jpg'),
      title: 'Fourniture et livraison',
      description: 'Menuiseries aluminium vitrées livrées et prêtes à être posées.',
    },
    {
      image: img('fenetre-coulissante-alu-blanc-vitrage-bleu.jpg'),
      title: 'Fenêtre coulissante aluminium',
      description: 'Fenêtre blanche à vitrage performant — finition soignée.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[5],
      title: 'Volets aluminium',
      description: 'Protection solaire et sécurité pour vos ouvertures.',
    },
  ],
  'baies-coulissantes': [
    {
      image: img('baie-vitree-coulissante-alu-teintee-balcon-01.jpg'),
      title: 'Baie coulissante sur balcon',
      description: 'Grande ouverture vitrée pour relier salon et extérieur.',
    },
    {
      image: img('baie-vitree-coulissante-alu-noir-balcon-02.jpg'),
      title: 'Baie aluminium noir',
      description: 'Finition anthracite avec vitrage teinté — pose sur balcon.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[2],
      title: 'Baie coulissante bronze',
      description: 'Grande baie vitrée coulissante finition bronze.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[3],
      title: 'Façade à baies coulissantes',
      description: 'Ensemble de baies pour façade résidentielle ou commerciale.',
    },
    {
      image: img('baies-coulissantes.jpg'),
      title: 'Baies coulissantes installées',
      description: 'Ouverture maximale et luminosité pour espaces de vie.',
    },
    {
      image: img('amenagement-patio-baie-vitree-gazon-synthetique.jpg'),
      title: 'Baie vitrée sur patio',
      description: 'Liaison intérieur / extérieur avec finitions premium.',
    },
  ],
  'portes-entree': [
    {
      image: SITE_IMAGES.gallery.menuiserie[1],
      title: 'Porte double vitrée',
      description: "Porte d'entrée double vitrage aluminium avec imposte.",
    },
    {
      image: img('pose-porte-vitree-pvc-blanche-imposte-arc.jpg'),
      title: 'Porte vitrée à imposte',
      description: 'Pose de porte blanche avec arc vitré — entrée lumineuse.',
    },
    {
      image: img('pose-porte-vitree-pvc-blanche-ferme-porte.jpg'),
      title: 'Porte vitrée sécurisée',
      description: 'Porte d\'entrée vitrée avec système de fermeture renforcé.',
    },
    {
      image: SITE_IMAGES.services.serrurerie,
      title: 'Porte commerciale sécurisée',
      description: 'Solution de fermeture pour locaux professionnels.',
    },
  ],
  'portes-coulissantes': [
    {
      image: img('installtion-porte-coullisante.png'),
      title: 'Porte coulissante vitrée',
      description: 'Système coulissant pour séparer les espaces sans encombrement.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[2],
      title: 'Coulissant grande dimension',
      description: 'Baie coulissante pour ouverture fluide et gain de place.',
    },
    {
      image: img('baie-vitree-coulissante-alu-noir-balcon-02.jpg'),
      title: 'Coulissant aluminium noir',
      description: 'Profilés fins et vitrage généreux pour un rendu contemporain.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[3],
      title: 'Portes coulissantes façade',
      description: 'Plusieurs vantaux coulissants pour commerces et villas.',
    },
  ],
  verrieres: [
    {
      image: SITE_IMAGES.gallery.menuiserie[4],
      title: 'Puits de lumière',
      description: 'Lanterneau vitré pour apporter la lumière naturelle.',
    },
    {
      image: img('cloison-vitree-bureau-cadre-blanc-desk.jpg'),
      title: 'Verrière de bureau',
      description: 'Séparation vitrée blanche pour espaces de travail lumineux.',
    },
    {
      image: img('cloison-modulaire-aluminium-vitree-atelier.jpg'),
      title: 'Structure vitrée modulaire',
      description: 'Verrière aluminium sur mesure en environnement professionnel.',
    },
    {
      image: img('cloisons-bureau-aluminium-verre-bande-bleue.jpg'),
      title: 'Verrière intérieure design',
      description: 'Cloison vitrée avec finitions aluminium et bande décorative.',
    },
  ],
  'facades-vitrees': [
    {
      image: img('renovation-facade-immeuble-alucobond-gris-blanc-01.jpg'),
      title: 'Façade Alucobond',
      description: 'Bardage moderne et baies vitrées pour immeuble R+.',
    },
    {
      image: img('facade-immeuble-mur-rideau-verre-bleu.jpg'),
      title: 'Mur rideau vitré',
      description: 'Façade vitrée avec vitrage bleu — architecture contemporaine.',
    },
    {
      image: img('facade-immeuble-bardage-blanc-gris-verre-bleu-01.jpg'),
      title: 'Façade blanc & gris',
      description: 'Panneaux et vitrages coordonnés pour image de marque soignée.',
    },
    {
      image: img('renovation-facade-immeuble-panneaux-gris-vitrage-bleu-02.jpg'),
      title: 'Rénovation de façade',
      description: 'Transformation complète de l\'enveloppe du bâtiment.',
    },
    {
      image: SITE_IMAGES.gallery.facade[1],
      title: 'Façade immeuble',
      description: 'Bardage et baies vitrées — chantier Smart Rénov à Douala.',
    },
    {
      image: SITE_IMAGES.hero.slide2,
      title: 'Façade commerce',
      description: 'Vitrine et façade pour local professionnel.',
    },
  ],
  securite: [
    {
      image: SITE_IMAGES.services.securite,
      title: 'Rideau métallique magasin',
      description: 'Protection anti-effraction pour vitrines et entrées commerciales.',
    },
    {
      image: img('realisation-menuiserie-rideau.jpg'),
      title: 'Grille de sécurité',
      description: 'Rideau métallique à mailles — sécurité sans occulter totalement.',
    },
    {
      image: SITE_IMAGES.services.serrurerie,
      title: 'Porte commerciale blindée',
      description: 'Fermeture renforcée pour locaux professionnels.',
    },
    {
      image: img('formationsportails-automatiques.jpg'),
      title: 'Portail automatique',
      description: 'Solutions motorisées pour accès sécurisés.',
    },
  ],
  agencements: [
    {
      image: SITE_IMAGES.services.agencement,
      title: 'Pose de cloisons vitrées',
      description: 'Installation de séparations aluminium et verre sur chantier.',
    },
    {
      image: img('amenagement-bureau-cloison-vitree-aluminium-blanc-01.jpg'),
      title: 'Bureau cloisonné vitré',
      description: 'Agencement de bureaux avec cloisons aluminium blanches.',
    },
    {
      image: img('cloison-modulaire-aluminium-vitree-atelier.jpg'),
      title: 'Cabine modulaire vitrée',
      description: 'Structure aluminium modulaire pour espaces professionnels.',
    },
    {
      image: img('cloison-vitree-cadre-noir-bureau-chantier.jpg'),
      title: 'Cloison cadre noir',
      description: 'Séparation vitrée design pour open space.',
    },
    {
      image: img('cloisons-bureau-aluminium-verre-bande-bleue.jpg'),
      title: 'Cloisons de bureau',
      description: 'Agencement intérieur avec profilés aluminium et verre.',
    },
    {
      image: img('amenagement-bureau-cloisons-aluminium-stores-gris.jpg'),
      title: 'Bureaux avec stores',
      description: 'Cloisons vitrées et stores intégrés pour confort visuel.',
    },
  ],
  maintenance: [
    {
      image: SITE_IMAGES.services.maintenance,
      title: 'Finition et jointoiement',
      description: 'Intervention de finition sur cloison vitrée après installation.',
    },
    {
      image: img('pose-joint-finition-cloison-bureau-01.jpg'),
      title: 'Entretien des joints',
      description: 'Application de mastic et contrôle d\'étanchéité sur site.',
    },
    {
      image: img('stock-pose-fenetre-pvc-perceuse.jpg'),
      title: 'Réglage de fenêtre',
      description: 'Ajustement et maintenance des ouvrants par nos techniciens.',
    },
    {
      image: img('equipe-smart-renov-pose-profile-menuiserie-01.jpg'),
      title: 'Intervention sur chantier',
      description: 'Équipe Smart Rénov en intervention maintenance et SAV.',
    },
  ],
  'isolation-thermique': [
    {
      image: img('fenetre-coulissante-alu-anthracite-moustiquaire.jpg'),
      title: 'Fenêtre à rupture de pont thermique',
      description: 'Menuiserie anthracite avec moustiquaire intégrée.',
    },
    {
      image: img('fenetre-coulissante-alu-blanc-vitrage-bleu.jpg'),
      title: 'Vitrage performant',
      description: 'Fenêtre coulissante à vitrage isolant pour réduire les déperditions.',
    },
    {
      image: img('volet-persienne-aluminium-effet-bois-marron.jpg'),
      title: 'Persienne aluminium',
      description: 'Protection solaire et isolation complémentaire des ouvertures.',
    },
    {
      image: SITE_IMAGES.gallery.menuiserie[5],
      title: 'Volets isolants',
      description: 'Volets aluminium pour améliorer le confort thermique.',
    },
  ],
};

function normalizeImagePath(path: string) {
  return path.split('?')[0];
}

/** Retire les doublons et l'image déjà utilisée en hero */
export function dedupeServiceGallery(
  items: ServiceGalleryItem[],
  exclude: string[] = [],
): ServiceGalleryItem[] {
  const excluded = new Set(exclude.map(normalizeImagePath));
  const seen = new Set<string>();

  return items.filter((item) => {
    const path = normalizeImagePath(item.image);
    if (excluded.has(path) || seen.has(path)) return false;
    seen.add(path);
    return true;
  });
}

export function getServiceGallery(slug: string, exclude: string[] = []): ServiceGalleryItem[] {
  return dedupeServiceGallery(SERVICE_GALLERIES[slug] ?? [], exclude);
}
