'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

import type { Swiper as SwiperType } from 'swiper';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
};

// Données des slides
const slides = [
  {
    id: 1,
    title: 'Installation Professionnelle de Fenêtres',
    description: 'Pose experte de fenêtres en aluminium sur mesure pour une isolation optimale et un design moderne',
    button1: 'Nos Fenêtres',
    button2: 'Demander un Devis',
    image: '/images/imagesslider1.jpg',
  },
  {
    id: 2,
    title: 'Portes d\'Entrée Haut de Gamme',
    description: 'Sécurité, isolation et élégance avec nos portes en aluminium sur mesure pour une entrée remarquable',
    button1: 'Nos Portes',
    button2: 'Nous Contacter',
    image: '/images/imageslider2.jpg',
  },
  {
    id: 3,
    title: 'Vérandas et Baies Coulissantes',
    description: 'Profitez de votre espace extérieur toute l\'année avec nos solutions d\'extensions en aluminium',
    button1: 'Nos Vérandas',
    button2: 'En Savoir Plus',
    image: '/images/baies-coulissantes.jpg',
  },
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Utilisation de requestAnimationFrame pour éviter l'avertissement de mise à jour synchrone
    const timer = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    // La variable activeIndex a été supprimée car non utilisée
    // Mais nous gardons la fonction pour le cas où elle serait nécessaire plus tard
    console.log('Slide changed to:', swiper.realIndex);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <Swiper
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white/50 hover:bg-white transition-all duration-300 w-3 h-3 mx-1 rounded-full"></span>`;
          }
        }}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
        initialSlide={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Image de fond avec superposition */}
            <AnimatePresence>
              <motion.div
                key={`bg-${slide.id}`}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  zIndex: 1
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { 
                    duration: 1.2, 
                    ease: [0.6, -0.05, 0.01, 0.99] as const 
                  }
                }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>

            {/* Superposition de couleur */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, 
                  rgba(6, 71, 197, 0.8) 0%, 
                  rgba(6, 71, 197, 0.5) 50%, 
                  rgba(6, 71, 197, 0.8) 100%)`,
                zIndex: 2
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
            />

            {/* Effet de flou */}
            <motion.div 
              className="absolute inset-0"
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                maskImage: 'linear-gradient(to bottom, black 20%, transparent 40%, transparent 60%, black 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 40%, transparent 60%, black 80%)',
                zIndex: 3
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
            />
            
            {/* Contenu du slide */}
            <motion.div 
              className="relative h-full flex items-center z-10"
              variants={container}
              initial="hidden"
              animate={isMounted ? "show" : "hidden"}
            >
              <div className="container mx-auto px-4 text-white z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-6"
                    variants={item}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl md:text-2xl mb-8"
                    variants={item}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    variants={item}
                  >
                    <Link 
                      href="/services" 
                      className="bg-[var(--color-orange)] hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                    >
                      {slide.button1}
                    </Link>
                    <Link 
                      href="/contact" 
                      className="bg-transparent border-2 border-white hover:bg-[var(--color-blue)] hover:border-[var(--color-blue)] text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                    >
                      {slide.button2}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Flèche de défilement vers le bas */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: 1,
          transition: {
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
      >
        <svg 
          className="w-10 h-10 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
}
