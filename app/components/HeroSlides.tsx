'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    videoUrl: '/videos/videoabout.mp4',
    title: 'Formations Professionnelles',
    description: 'Découvrez nos formations expertes en menuiserie aluminium',
    buttonText: 'Découvrir',
    buttonLink: '/formations'
  },
  {
    id: 2,
    videoUrl: '/videos/slideexpertise.mp4',
    title: 'Expertise de Qualité',
    description: 'Apprenez des meilleurs professionnels du secteur',
    buttonText: 'En savoir plus',
    buttonLink: '/a-propos'
  },
  {
    id: 3,
    videoUrl: '/videos/slidevideo3.mp4', 
    title: 'Installation & Rénovation',
    description: 'Maîtrisez les techniques les plus avancées',
    buttonText: 'Nos services',
    buttonLink: '/services'
  }
];

export default function HeroSlides() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVideoPlay = (index: number) => {
    Object.entries(videoRefs.current).forEach(([i, video]) => {
      if (video && parseInt(i) !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Vidéo de fond */}
            <div className="absolute inset-0">
              <video
                ref={el => { videoRefs.current[index] = el; }}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => handleVideoPlay(index)}
              >
                <source src={slide.videoUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenu du slide */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {slide.description}
                  </p>
                </motion.div>
                
                {slide.buttonText && slide.buttonLink && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <a
                      href={slide.buttonLink}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
                    >
                      {slide.buttonText}
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
