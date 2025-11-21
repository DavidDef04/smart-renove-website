import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations | Smart Renov',
  description: 'Découvrez nos réalisations en menuiserie aluminium. Des projets uniques et sur mesure pour des clients satisfaits.',
  keywords: 'réalisations, projets, menuiserie aluminium, rénovation, Smart Renov',
};

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/videos/realisations-hero.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire en menuiserie aluminium.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#nos-projets" 
              className="px-8 py-3 bg-[var(--color-orange)] hover:bg-opacity-90 text-white font-medium rounded-md transition-all transform hover:scale-105"
            >
              Voir nos projets
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-md backdrop-blur-sm transition-all transform hover:scale-105"
            >
              Parler de votre projet
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section id="nos-projets" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nos Derniers Projets
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection de nos réalisations les plus marquantes en menuiserie aluminium
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-400">
                  <span>Image du projet 1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Projet Résidentiel</h3>
                <p className="text-gray-600 mb-4">Installation de baies coulissantes sur mesure avec vue imprenable.</p>
                <a 
                  href="/realisations/projet-1" 
                  className="text-[var(--color-blue)] font-medium hover:underline inline-flex items-center"
                >
                  Voir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                  <span>Image du projet 2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bureaux Modernes</h3>
                <p className="text-gray-600 mb-4">Façades vitrées pour un espace de travail lumineux et moderne.</p>
                <a 
                  href="/realisations/projet-2" 
                  className="text-[var(--color-blue)] font-medium hover:underline inline-flex items-center"
                >
                  Voir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-gray-400">
                  <span>Image du projet 3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maison Contemporaine</h3>
                <p className="text-gray-600 mb-4">Portes d'entrée en aluminium sur mesure avec vitrage sécurisé.</p>
                <a 
                  href="/realisations/projet-3" 
                  className="text-[var(--color-blue)] font-medium hover:underline inline-flex items-center"
                >
                  Voir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vous avez un projet en tête ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour concrétiser vos idées et réaliser un projet sur mesure qui correspond à vos attentes.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-orange)] hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
            >
              Parler de votre projet
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
