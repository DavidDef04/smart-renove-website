'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const ServicesHero = () => {
  // Variantes pour les animations
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      } as const
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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

      {/* Contenu */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          variants={item}
        >
          Menuiserie Aluminium <span className="text-[var(--color-orange)]">Haut de Gamme</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
          variants={item}
        >
          Découvrez notre expertise en menuiserie aluminium pour des solutions durables, esthétiques et performantes.
        </motion.p>
        
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            href="#services" 
            className="px-8 py-3 bg-[var(--color-orange)] hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos services
          </motion.a>
          <motion.a 
            href="/contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un devis
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Flèche de défilement améliorée */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default ServicesHero;
