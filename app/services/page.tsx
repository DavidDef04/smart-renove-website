'use client';

import { motion } from 'framer-motion';
import { Wrench, Ruler, Key, ShieldCheck, Building2, Home, Settings, Layout, Thermometer, Hammer, HardHat } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import ServiceImage from '../components/ServiceImage';
import Testimonials from '../components/Testimonials';

const services = [
  {
    id: 1,
    title: 'MENUISERIE ALUMINIUM',
    description: 'Fabrication et pose de fenêtres, portes et façades en aluminium sur mesure pour une intégration parfaite à votre habitat. Nos solutions allient esthétique moderne et performance durable.',
    icon: Wrench,
    bgGradient: "from-[var(--color-blue)] to-blue-600",
    image: '/images/menuiserie-aluminium.jpg',
    slug: 'menuiserie',
    features: [
      'Fenêtres sur mesure',
      'Portes d\'entrée sécurisées',
      'Façades vitrées',
      'Isolation thermique et phonique optimale'
    ]
  },
  {
    id: 2,
    title: 'BAIES COULISSANTES',
    description: 'Des ouvertures élégantes et fonctionnelles qui créent une transition fluide entre vos espaces intérieurs et extérieurs. Parfait pour agrandir visuellement votre espace de vie.',
    icon: Layout,
    bgGradient: "from-emerald-500 to-teal-600",
    image: '/images/baies-coulissantes.jpg',
    slug: 'baies-coulissantes',
    features: [
      'Systèmes coulissants silencieux',
      'Grandes ouvertures',
      'Étanchéité optimale',
      'Design contemporain'
    ]
  },
  {
    id: 3,
    title: 'SOLUTIONS SUR-MESURE',
    description: 'Des créations uniques adaptées à vos besoins spécifiques et à l\'architecture de votre bien. Notre équipe d\'experts vous accompagne de la conception à la réalisation.',
    icon: Ruler,
    bgGradient: "from-amber-500 to-yellow-500",
    image: '/images/sur-mesure.jpg',
    slug: 'sur-mesure',
    features: [
      'Étude personnalisée',
      'Conception sur mesure',
      'Matériaux haut de gamme',
      'Installation professionnelle'
    ]
  },
  {
    id: 4,
    title: 'PROJETS COMMERCIAUX',
    description: 'Solutions professionnelles pour les vitrines, façades et aménagements intérieurs de vos locaux. Des réalisations qui valorisent votre image de marque.',
    icon: Building2,
    bgGradient: "from-indigo-500 to-purple-600",
    image: '/images/projets-commerciaux.jpg',
    slug: 'projets-commerciaux',
    features: [
      'Vitrines professionnelles',
      'Façades vitrées',
      'Aménagements intérieurs',
      'Solutions sur mesure'
    ]
  },
  {
    id: 5,
    title: 'RÉNOVATION COMPLÈTE',
    description: 'Transformation complète de vos espaces avec une approche sur mesure et des matériaux haut de gamme pour un résultat à la hauteur de vos attentes.',
    icon: Home,
    bgGradient: "from-rose-500 to-pink-600",
    image: '/images/renovation.jpg',
    slug: 'renovation',
    features: [
      'Rénovation intérieure/extérieure',
      'Remplacement de menuiseries',
      'Isolation thermique',
      'Travaux clés en main'
    ]
  },
  {
    id: 6,
    title: 'SÉCURITÉ RENFORCÉE',
    description: 'Systèmes de sécurité avancés pour vos ouvertures, alliant esthétique et protection optimale. Des solutions adaptées à vos besoins spécifiques.',
    icon: ShieldCheck,
    bgGradient: "from-red-500 to-rose-600",
    image: '/images/securite.jpg',
    slug: 'securite',
    features: [
      'Portes blindées',
      'Vitres de sécurité',
      'Serrurerie renforcée',
      'Systèmes de verrouillage avancés'
    ]
  },
  {
    id: 7,
    title: 'ISOLATION THERMIQUE',
    description: 'Conseils et solutions d\'isolation performantes pour améliorer le confort et réduire votre consommation d\'énergie. Des économies durables pour votre foyer.',
    icon: Thermometer,
    bgGradient: "from-blue-400 to-cyan-500",
    image: '/images/isolation.jpg',
    slug: 'isolation-thermique',
    features: [
      'Double/triple vitrage',
      'Rupture de pont thermique',
      'Étanchéité à l\'air',
      'Économies d\'énergie'
    ]
  },
  {
    id: 8,
    title: 'FOURNITURE ET POSE',
    description: 'Un service clé en main pour la fourniture et la pose de menuiseries aluminium vitrées. Des produits de qualité, installés par nos équipes qualifiées.',
    icon: Hammer,
    bgGradient: "from-green-500 to-emerald-600",
    image: '/images/fourniture-pose.jpg',
    slug: 'fourniture-pose',
    features: [
      'Produits haut de gamme',
      'Pose professionnelle',
      'Garantie décennale',
      'Service après-vente'
    ]
  },
  {
    id: 9,
    title: 'SERRURERIE',
    description: 'Services complets de serrurerie pour tous types d\'ouvertures et de systèmes de sécurité. Des solutions sur mesure pour une protection optimale.',
    icon: Key,
    bgGradient: "from-amber-700 to-amber-600",
    image: '/images/serrurerie.jpg',
    slug: 'serrurerie',
    features: [
      'Dépannage serrurerie',
      'Changement de serrures',
      'Blindage de portes',
      'Sécurité renforcée'
    ]
  },
  {
    id: 10,
    title: 'AGENCEMENTS INTÉRIEURS',
    description: 'Création de cloisons et séparations vitrées pour optimiser vos espaces de vie. Des solutions élégantes et fonctionnelles pour une meilleure circulation de la lumière.',
    icon: Settings,
    bgGradient: "from-purple-500 to-indigo-600",
    image: '/images/agencements.jpg',
    slug: 'agencements',
    features: [
      'Cloisons vitrées',
      'Séparations d\'espace',
      'Design personnalisé',
      'Lumière naturelle'
    ]
  },
  {
    id: 11,
    title: 'MAINTENANCE & SAV',
    description: 'Service après-vente et maintenance préventive pour garantir la longévité de vos installations. Une équipe réactive à votre écoute pour tous vos besoins.',
    icon: HardHat,
    bgGradient: "from-gray-600 to-gray-800",
    image: '/images/maintenance.jpg',
    slug: 'maintenance',
    features: [
      'Entretien régulier',
      'Dépannage rapide',
      'Pièces détachées',
      'Conseils d\'entretien'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white py-24 md:py-32">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img 
              src="/images/service1.jpg" 
              alt="Menuiserie aluminium de haute qualité"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Effets de fond animés */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
            <div className="absolute -top-1/2 -right-1/4 w-full h-[200%] bg-radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 50%) animate-float"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-full h-[200%] bg-radial-gradient(circle, rgba(249,115,22,0.05) 0%, rgba(59,130,246,0) 50%) animate-float-delayed"></div>
          </div>
          
          {/* Dégradé supplémentaire pour améliorer le contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-blue-100 font-medium">Expertise & Qualité</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight">
                  Nos Services Complets
                </h1>
                
                <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--color-orange)] to-amber-400 mx-auto mb-8 rounded-full"></div>
                
                <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Découvrez l'excellence de nos services professionnels en menuiserie aluminium et rénovation.
                  Des solutions <span className="font-semibold text-white">sur mesure</span> pour sublimer votre espace de vie.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                  <motion.a 
                    href="#services"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Découvrir nos services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300"
                  >
                    Demander un devis
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos Services de <span className="text-[var(--color-orange)]">Menuiserie Aluminium</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Découvrez notre gamme complète de services pour tous vos projets de menuiserie aluminium, de la conception à l'installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  id={service.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative"
                >
                  {/* Decorative Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.bgGradient}`}></div>
                  
                  {/* Image */}
                  <div className="h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <ServiceImage
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={service.id <= 6}
                      />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute -bottom-6 right-6 w-14 h-14 rounded-xl flex items-center justify-center z-20 shadow-lg bg-gradient-to-br ${service.bgGradient} text-white`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 pt-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[var(--color-blue)] group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Points forts :</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-[var(--color-orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center text-[var(--color-blue)] font-medium hover:text-[var(--color-orange)] transition-colors duration-300 group/button"
                    >
                      Demander un devis
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover/button:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 mb-20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Un projet en tête ?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Notre équipe d'experts est à votre écoute pour concrétiser vos idées et vous proposer des solutions sur mesure.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[var(--color-orange)] hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                Nous contacter
              </Link>
            </div>

            {/* Testimonials */}
            <Testimonials />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
