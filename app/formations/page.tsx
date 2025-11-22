'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FormationCard from '../components/FormationCard';
import HeroSlides from '../components/HeroSlides';
import Footer from '../components/Footer';
import PartnersSlider from '../components/PartnersSlider';

const allFormations = [
  {
    id: 1,
    title: "Installation de Menuiserie Aluminium",
    description: "Formation complète sur les techniques d'installation des menuiseries aluminium, de la prise de mesure à la pose finale. Maîtrisez les dernières innovations du secteur.",
    duration: "5 jours",
    imageUrl: "/images/menuiserie-aluminium(2).jpg"
  },
  {
    id: 2,
    title: "Sécurité des Baies Vitrées",
    description: "Apprenez à installer des systèmes de sécurité avancés pour les grandes surfaces vitrées et les portes coulissantes. Formation pratique avec des cas concrets.",
    duration: "3 jours",
    imageUrl: "/images/securite-baies-vitrees.jpg"
  },
  {
    id: 3,
    title: "Rénovation de Façades Aluminium",
    description: "Maîtrisez les techniques de rénovation et d'isolation thermique des façades en aluminium. Découvrez les meilleures pratiques du secteur.",
    duration: "4 jours",
    imageUrl: "/images/formation-renovation-facades.jpg"
  },
  {
    id: 4,
    title: "Travaux de Vitrerie sur Mesure",
    description: "Apprenez les techniques de pose et de remplacement de vitres sur mesure pour des finitions parfaites et étanches.",
    duration: "3 jours",
    imageUrl: "/images/formationsvitrerie-mesure.jpg"
  },
  {
    id: 5,
    title: "Montage de Portails Automatiques",
    description: "Formation complète sur l'installation et la maintenance des portails automatiques en aluminium et acier.",
    duration: "4 jours",
    imageUrl: "/images/formationsportails-automatiques.jpg"
  },
  {
    id: 6,
    title: "Isolation Thermique des Menuiseries",
    description: "Découvrez les techniques d'isolation thermique pour améliorer l'efficacité énergétique des bâtiments.",
    duration: "3 jours",
    imageUrl: "/images/formationsisolation-thermique.jpg"
  },
  {
    id: 7,
    title: "Serrurerie et Sécurité Avancée",
    description: "Maîtrisez l'installation des systèmes de serrurerie haut de gamme et des dispositifs de sécurité avancés.",
    duration: "5 jours",
    imageUrl: "/images/formationsserrurerie-securite.jpg"
  },
  {
    id: 8,
    title: "Découpe et Pose de Verre Trempé",
    description: "Techniques de découpe et de pose de verre trempé pour des applications intérieures et extérieures.",
    duration: "3 jours",
    imageUrl: "/images/formationsverre-trempe.jpg"
  }
];

export default function FormationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const formationsPerPage = 6;
  const totalPages = Math.ceil(allFormations.length / formationsPerPage);

  // Calculer les formations à afficher pour la page actuelle
  const indexOfLastFormation = currentPage * formationsPerPage;
  const indexOfFirstFormation = indexOfLastFormation - formationsPerPage;
  const currentFormations = allFormations.slice(indexOfFirstFormation, indexOfLastFormation);

  // Diviser les formations en deux rangées de 3
  const firstRow = currentFormations.slice(0, 3);
  const secondRow = currentFormations.slice(3, 6);

  // Fonction pour changer de page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Faire défiler vers le haut de la section des formations
    const formationsSection = document.getElementById('formations');
    if (formationsSection) {
      const headerOffset = 100; // Ajustez cette valeur selon la hauteur de votre en-tête fixe s'il y en a un
      const elementPosition = formationsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero avec slider vidéo */}
      <div className="h-screen">
        <HeroSlides />
      </div>
      
      {/* Contenu principal */}
      <main className="relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          {/* En-tête de la page */}
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Formations Professionnelles</h1>
            <p className="text-xl text-gray-600 mb-8">
              Développez vos compétences avec nos formations expertes en menuiserie aluminium et sécurisation des ouvertures
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Découvrir nos formations
            </button>
          </div>

          {/* Grille des formations */}
          <div className="space-y-8 mb-12" id="formations">
            {/* Première rangée */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {firstRow.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FormationCard
                    id={formation.id}
                    title={formation.title}
                    description={formation.description}
                    duration={formation.duration}
                    imageUrl={formation.imageUrl}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Deuxième rangée */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondRow.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                >
                  <FormationCard
                    id={formation.id}
                    title={formation.title}
                    description={formation.description}
                    duration={formation.duration}
                    imageUrl={formation.imageUrl}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination améliorée */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-16" aria-label="Pagination">
              <nav className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Page précédente"
                >
                  <span className="sr-only">Précédent</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {(() => {
                  const pages = [];
                  const maxVisiblePages = 5;
                  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

                  if (endPage - startPage + 1 < maxVisiblePages) {
                    startPage = Math.max(1, endPage - maxVisiblePages + 1);
                  }

                  if (startPage > 1) {
                    pages.push(
                      <button
                        key={1}
                        onClick={() => paginate(1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                          1 === currentPage 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        1
                      </button>
                    );
                    if (startPage > 2) {
                      pages.push(<span key="start-ellipsis" className="px-2">...</span>);
                    }
                  }

                  for (let i = startPage; i <= endPage; i++) {
                    pages.push(
                      <button
                        key={i}
                        onClick={() => paginate(i)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                          i === currentPage 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={i === currentPage ? 'page' : undefined}
                      >
                        {i}
                      </button>
                    );
                  }

                  if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                      pages.push(<span key="end-ellipsis" className="px-2">...</span>);
                    }
                    pages.push(
                      <button
                        key={totalPages}
                        onClick={() => paginate(totalPages)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                          totalPages === currentPage 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {totalPages}
                      </button>
                    );
                  }

                  return pages;
                })()}

                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Page suivante"
                >
                  <span className="sr-only">Suivant</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          )}

          {/* Section Témoignages */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ils ont suivi nos formations
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    id: 1,
                    name: "Thomas M.",
                    role: "Artisan Menuisier",
                    content: "La formation en menuiserie aluminium a révolutionné ma façon de travailler. Les techniques apprises m'ont permis de gagner en efficacité et en qualité de finition.",
                    rating: 5
                  },
                  {
                    id: 2,
                    name: "Sophie L.",
                    role: "Chef de Chantier",
                    content: "Excellente formation sur la sécurité des baies vitrées. Les formateurs sont des experts passionnés qui savent transmettre leur savoir-faire.",
                    rating: 5
                  },
                  {
                    id: 3,
                    name: "Karim D.",
                    role: "Entrepreneur BTP",
                    content: "Je recommande vivement ces formations. Le contenu est complet et directement applicable sur le terrain. Un vrai plus pour mon entreprise !",
                    rating: 4
                  }
                ].map((testimonial) => (
                  <motion.div 
                    key={testimonial.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section d'appel à l'action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à développer vos compétences ?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour en savoir plus sur nos formations ou pour vous inscrire à une session
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Nous contacter
              </a>
              <a 
                href="#formations" 
                className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Voir les formations
              </a>
            </div>
          </div>
          
          {/* Section Partenaires */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nos Partenaires de Confiance
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nous collaborons avec des marques leaders pour vous offrir des formations de qualité
                </p>
              </div>
              <PartnersSlider />
            </div>
          </div>
        </div>
      </main>
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
}
