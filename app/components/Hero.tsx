'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

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
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
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
        pagination={{ clickable: true }}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
        initialSlide={0}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Image de fond avec superposition */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                opacity: activeIndex === index ? 1 : 0,
                zIndex: 1
              }}
            />
            {/* Superposition de couleur */}
            <div 
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                background: `linear-gradient(to bottom, 
                  rgba(6, 71, 197, 0.8) 0%, 
                  rgba(6, 71, 197, 0.5) 50%, 
                  rgba(6, 71, 197, 0.8) 100%)`,
                opacity: activeIndex === index ? 1 : 0,
                zIndex: 2
              }}
            />
            {/* Effet de flou */}
            <div 
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                maskImage: 'linear-gradient(to bottom, black 20%, transparent 40%, transparent 60%, black 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 40%, transparent 60%, black 80%)',
                opacity: activeIndex === index ? 1 : 0,
                zIndex: 3
              }}
            />
            
            {/* Contenu du slide */}
            <div className="relative h-full flex items-center z-10">
              <div className="container mx-auto px-4 text-white z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 
                    className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className={`text-xl md:text-2xl mb-8 transition-all duration-500 delay-100 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    {slide.description}
                  </p>
                  <div 
                    className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-500 delay-200 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Flèche de défilement vers le bas */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
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
      </div>
    </section>
  );
}
