'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/app/components/Footer';
import Testimonials from '@/app/components/Testimonials';
import ImageGallery from '@/app/components/ImageGallery';

// Animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const projectsData = [
  {
    id: 1,
    title: "Toiture Vitrée",
    description: "Toiture vitrée sur mesure pour une résidence haut de gamme avec baies coulissantes et portes-fenêtres élégantes.",
    status: "Terminé",
    tags: ["Toiture vitrée", "Sur-mesure"],
    image: "/images/formationsverre-trempe.jpg",
    color: "amber"
  },
  {
    id: 2,
    title: "Toilette Vitrée",
    description: "Toilette vitrée sur mesure pour une résidence haut de gamme avec baies coulissantes et portes-fenêtres élégantes.",
    status: "Terminé",
    tags: ["Toilette vitrée", "Sur-mesure", "Porte Coulissante"],
    image: "/images/toilette-vitre.jpg",
    color: "blue"
  },
  {
    id: 3,
    title: "Bureaux Modernes",
    description: "Aménagement de bureaux avec cloisons et menuiseries sur mesure pour un espace de travail moderne et fonctionnel.",
    status: "Terminé",
    image: "/images/bureaux.png",
    tags: ["Cloisons", "Design"],
    color: "purple"
  },
  {
    id: 4,
    title: "Bureaux de controle",
    description: "Bureaux de controle sur mesure pour une résidence haut de gamme avec baies coulissantes et portes-fenêtres élégantes.",
    status: "Terminé",
    tags: ["Bureaux de controle", "Sur-mesure"],
    image: "/images/bureauxcontrole.png",
    color: "blue"
  },
  {
    id: 5,
    title: "Fenetre decalée",
    description: "Fenetre decalée sur mesure pour une résidence haut de gamme avec baies coulissantes et portes-fenêtres élégantes.",
    status: "Terminé",
    tags: ["Fenetre decalée", "Sur-mesure"],
    image: "/images/fenetre-decalee.jpg",
    color: "amber"
  },
  {
    id: 6,
    title: "Immeuble",
    description: "Création d'un design en verre pour un immeuble haut de gamme.",
    status: "Terminé",
    tags: ["Immeuble", "Sur-mesure"],
    image: "/images/formation-renovation-facades.jpg",
    color: "green"
  },
  {
    id: 7,
    title: "Porte Commerciale Sécurisée",
    description: "Création d'une porte commerciale sécurisée pour un immeuble haut de gamme.",
    status: "Terminé",
    tags: ["Porte Commerciale Sécurisée", "Sur-mesure"],
    image: "/images/porte-commerciale-securisee.jpg",
    color: "green"
  },
  {
    id: 8,
    title: "Veranda",
    description: "Création d'une veranda en aluminium pour un immeuble haut de gamme.",
    status: "Terminé",
    tags: ["Veranda", "Sur-mesure"],
    image: "/images/veranda.jpg",
    color: "green"
  },
  {
    id: 9,
    title: "Toiture Aluminium",
    description: "Création d'une toiture aluminium pour un immeuble haut de gamme.",
    status: "Terminé",
    tags: ["Toiture Aluminium", "Sur-mesure"],
    image: "/images/toiture-aluminium.jpg",
    color: "green"
  }

];

export default function RealisationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[80vh] min-h-[500px] bg-gray-900"
        initial="initial"
        animate="animate"
      >
        {/* Image de fond avec animation */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          variants={{
            initial: { opacity: 0, scale: 1.1 },
            animate: { 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 1.2, 
                ease: [0.6, -0.05, 0.01, 0.99] 
              }
            }
          }}
        >
          <Image
            src="/images/sur-mesure.jpg"
            alt="Nos réalisations sur mesure"
            fill
            className="object-cover opacity-70"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        
        {/* Contenu avec animation */}
        <motion.div 
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
          variants={{
            initial: { y: 50, opacity: 0 },
            animate: { 
              y: 0, 
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
        >
          <div className="max-w-4xl space-y-8">
            {/* Titre avec animation de dégradé */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #f59e0b, #f97316, #f59e0b, #f97316)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Nos Réalisations
            </motion.h1>
            
            {/* Séparateur avec animation */}
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: 96, 
                opacity: 1,
                transition: { 
                  delay: 0.6, 
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            />
            
            {/* Carte de texte avec animation au survol */}
            <motion.div 
              className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/10 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.9,
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            >
              <motion.p 
                className="text-xl md:text-2xl text-white/90 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { 
                    delay: 1.2,
                    duration: 0.8 
                  }
                }}
              >
                <span className="font-medium text-amber-300">Découvrez nos projets récents</span> et laissez-vous inspirer par notre savoir-faire en menuiserie aluminium.
                Chaque réalisation est le <span className="text-amber-200 font-medium">fruit d&apos;un travail minutieux</span> et d&apos;une expertise pointue.
              </motion.p>
              
              {/* Bouton d'appel à l'action avec animation */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: 1.5,
                    duration: 0.8 
                  }
                }}
              >
                <a 
                  href="#nos-projets"
                  className="inline-flex items-center px-8 py-3.5 text-lg font-semibold text-gray-900 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:from-amber-300 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-amber-500/20"
                >
                  Voir nos réalisations
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            
            <div className="flex mt-8 flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="#nos-projets" 
                className="px-8 py-3 bg-[var(--color-orange)] hover:bg-opacity-90 text-white font-medium rounded-md transition-all transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: 1.8,
                    duration: 0.8 
                  }
                }}
              >
                Voir nos projets
              </motion.a>
              <motion.a 
                href="/contact" 
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-md backdrop-blur-sm transition-all transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: 2.1,
                    duration: 0.8 
                  }
                }}
              >
                Parler de votre projet
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid Section */}
      <section id="nos-projets" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full mb-4">Nos Projets</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Découvrez Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Savoir-Faire</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque projet est une histoire unique, racontée à travers notre expertise en menuiserie aluminium sur mesure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="h-72 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <a 
                        href="/contact" 
                        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-full transition-colors duration-300"
                      >
                        Besoin du même service ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === 'Terminé' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
                    }`}>
                      <svg className={`-ml-0.5 mr-1.5 h-2 w-2 ${project.status === 'Terminé' ? 'text-amber-500' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 bg-${project.color}-50 text-${project.color}-700 text-xs font-medium rounded-full border border-${project.color}-100`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === index + 1
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour concrétiser vos idées et réaliser un projet sur mesure qui correspond à vos attentes.
            </p>
            <a 
              href="/contact" 
              className="group inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Parler de votre projet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10px" }}
        className="relative py-4 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-2"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Galerie
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Découvrez Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-amber-500 to-orange-500 animate-gradient-x">Galerie</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-amber-400 to-orange-400 mx-auto rounded-full mb-8"
              variants={fadeInUp}
            ></motion.div>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <span className="font-semibold text-blue-600">Parcourez nos réalisations</span> et laissez-vous inspirer par notre <span className="font-medium text-amber-600">savoir-faire</span> en menuiserie aluminium.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={item}
            className="transform transition-all duration-500"
          >
            <motion.div
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <ImageGallery 
                projects={projectsData}
                showThumbnails={true}
                additionalImages={[
                  // Vidéo en premier
                  {
                    src: "/videos/realisation-presentation.mp4",
                    alt: "Présentation de nos réalisations",
                    title: "Nos réalisations en vidéo",
                    description: "Découvrez notre savoir-faire en action",
                    type: 'video' as const,
                    thumbnail: '/images/realisation-video-thumbnail.jpg'
                  },
                  // Toutes les images de projets
                  ...projectsData.map(project => ({
                    src: project.image,
                    alt: project.title,
                    title: project.title,
                    description: project.description,
                    type: 'image' as const
                  })),
                  // Autres images supplémentaires
                  {
                    src: "/images/montagebureau.png",
                    alt: "Montage de bureaux",
                    title: "Montage de bureaux",
                    description: "Précision et finition soignée pour chaque pièce",
                    type: 'image' as const
                  },
                  {
                    src: "/images/reconnaissanceterrain.png",
                    alt: "Reconnaissance du terrain",
                    title: "Reconnaissance du terrain",
                    description: "Reconnaissance d'un chantier avant le début du projet",
                    type: 'image' as const
                  },
                  {
                    src: "/images/installtion-porte-coullisante.png",
                    alt: "Installation d'une porte coulissante",
                    title: "Installation d'une porte coulissante",
                    description: "Installation d'une porte coulissante sur mesure",
                    type: 'image' as const
                  },
                  {
                    src: "/images/equipe.png",
                    alt: "Equipe de travail",
                    title: "Equipe de travail",
                    description: "Une equipe de travail expérimentée et compétente",
                    type: 'image' as const
                  },
                  {
                    src: "/images/porte-vitree-bois.png",
                    alt: "Porte vitree en bois",
                    title: "Porte vitree en bois",
                    description: "Porte vitree en bois pour une elegance et une durabilite",
                    type: 'image' as const
                  },
                  {
                    src: "/images/mini-bureau.png",
                    alt: "Mini bureau",
                    title: "Mini bureau",
                    description: "Mini bureau sur mesure, elegant et durable pour un espace personnel",
                    type: 'image' as const
                  }
              ]}
              autoPlay={false}
            />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Séparateur moderne avec effet de vague */}
      <div className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full">
            <svg 
              className="w-full h-12 text-amber-500"
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,67.3c104.3,17.77,208.8-12.5,298.5-37.69,123.8-34.88,231-82.67,318-142.7V0Z" 
                fill="currentColor"
                className="opacity-25"
              ></path>
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,67.3c104.3,17.77,208.8-12.5,298.5-37.69,123.8-34.88,231-82.67,318-142.7V0Z" 
                fill="currentColor" 
                className="opacity-75"
                style={{ transform: 'translateY(10px) scaleX(-1)' }}
              ></path>
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.67,583,67.3c104.3,17.77,208.8-12.5,298.5-37.69,123.8-34.88,231-82.67,318-142.7V0Z" 
                fill="currentColor"
                style={{ transform: 'translateY(20px) scaleX(1)' }}
              ></path>
            </svg>
          </div>
        </div>
        <div className="relative">
          <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full opacity-30"></div>
        </div>
      </div>

      {/*testimonials*/}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
