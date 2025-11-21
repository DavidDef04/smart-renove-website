const fs = require('fs');
const path = require('path');

const pages = [
  'a-propos/page.tsx',
  'services/page.tsx',
  'services/fenetres-aluminium/page.tsx',
  'services/portes-entree/page.tsx',
  'services/verandas/page.tsx',
  'services/portails/page.tsx',
  'services/pergolas/page.tsx',
  'realisations/page.tsx',
  'blog/page.tsx',
  'contact/page.tsx'
];

const pageTemplate = (title, description) => `
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Smart Rénov',
  description: '${description}'
};

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">${title}</h1>
      <div className="prose max-w-none">
        <p>Contenu de la page ${title} à venir.</p>
      </div>
    </div>
  );
}
`;

const pageData = {
  'a-propos': {
    title: 'À Propos',
    description: 'Découvrez notre entreprise spécialisée dans la menuiserie aluminium.'
  },
  'services': {
    title: 'Nos Services',
    description: 'Découvrez nos services de menuiserie aluminium sur mesure.'
  },
  'services/fenetres-aluminium': {
    title: 'Fenêtres en Aluminium',
    description: 'Découvrez nos solutions de fenêtres en aluminium sur mesure.'
  },
  'services/portes-entree': {
    title: 'Portes d\'entrée',
    description: 'Portes d\'entrée en aluminium sécurisées et design.'
  },
  'services/verandas': {
    title: 'Vérandas',
    description: 'Vérandas en aluminium sur mesure pour profiter de votre extérieur toute l\'année.'
  },
  'services/portails': {
    title: 'Portails et portes de garage',
    description: 'Portails et portes de garage en aluminium sécurisés et esthétiques.'
  },
  'services/pergolas': {
    title: 'Pergolas',
    description: 'Pergolas en aluminium pour aménager votre espace extérieur.'
  },
  'realisations': {
    title: 'Nos Réalisations',
    description: 'Découvrez nos réalisations en menuiserie aluminium.'
  },
  'blog': {
    title: 'Blog',
    description: 'Actualités et conseils sur la menuiserie aluminium.'
  },
  'contact': {
    title: 'Contact',
    description: 'Contactez-nous pour un devis ou des informations supplémentaires.'
  }
};

// Créer les dossiers et fichiers
pages.forEach(pagePath => {
  const fullPath = path.join('app', pagePath);
  const dir = path.dirname(fullPath);
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Créer le fichier de la page
  const pageKey = pagePath.replace('/page.tsx', '');
  const { title, description } = pageData[pageKey];
  
  fs.writeFileSync(fullPath, pageTemplate(title, description).trimStart());
  console.log(`Créé : ${fullPath}`);
});

console.log('\nToutes les pages ont été créées avec succès !');
