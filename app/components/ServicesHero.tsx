'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-hero.jpg"
          alt="Services de menuiserie aluminium"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-[var(--color-orange)] mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nos Services
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Solutions Sur Mesure en <span className="text-[var(--color-orange)]">Aluminium</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Découvrez notre expertise en menuiserie aluminium pour des solutions durables, esthétiques et performantes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="px-8 py-3 bg-[var(--color-orange)] hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos services
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300"
            >
              Demander un devis
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Flèche de défilement */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
