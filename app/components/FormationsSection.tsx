'use client';

import { motion } from 'framer-motion';
import FormationCard from './FormationCard';

const formationsData = [
  {
    id: 1,
    title: "Installation de Menuiserie Aluminium",
    description: "Formation complète sur les techniques d'installation des menuiseries aluminium, de la prise de mesure à la pose finale. Maîtrisez les dernières innovations du secteur.",
    duration: "24 Mois",
    imageUrl: "/images/imageformation1.png"
  },
  {
    id: 2,
    title: "Sécurité des Baies Vitrées",
    description: "Apprenez à installer des systèmes de sécurité avancés pour les grandes surfaces vitrées et les portes coulissantes. Formation pratique avec des cas concrets.",
    duration: "12 Mois",
    imageUrl: "/images/imageformation2.png"
  },
  {
    id: 3,
    title: "Rénovation de Façades Aluminium",
    description: "Maîtrisez les techniques de rénovation et d'isolation thermique des façades en aluminium. Découvrez les meilleures pratiques du secteur.",
    duration: "12 Mois",
    imageUrl: "/images/imageformation3.png"
  }
];

export default function FormationsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Apprentissage Expert
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Formations <span className="text-blue-600">Spécialisées</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formationsData.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FormationCard
                id={formation.id}
                title={formation.title}
                description={formation.description}
                duration={formation.duration}
                imageUrl={formation.imageUrl}
                className="hover:shadow-2xl"
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="/formations"
            className="inline-block px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Voir toutes les formations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
