'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectType = {
  id: number;
  title: string;
  description: string;
  status: string;
  tags: string[];
  image: string;
  color: string;
};

type ImageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

type ImageGalleryProps = {
  projects: ProjectType[];
  additionalImages?: ImageType[];
  showThumbnails?: boolean;
  autoPlay?: boolean;
  showFullscreen?: boolean;
};

export default function ImageGallery({ 
  projects = [],
  additionalImages = [],
  showThumbnails = true,
  autoPlay = false,
  showFullscreen = true
}: ImageGalleryProps) {
  // Images des projets
  const projectImages = projects.map(project => ({
    src: project.image,
    alt: project.title,
    title: project.title,
    description: project.description
  }));

  // Combiner les images des projets avec les images supplémentaires
  const images = [...projectImages, ...additionalImages];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Effet pour le défilement automatique
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    if (showFullscreen) {
      setIsFullscreen(!isFullscreen);
    }
  };


  return (
    <motion.div 
      className={`relative w-full ${isFullscreen ? 'fixed inset-0 bg-black z-50 p-4' : 'max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl'}`}
      layout
    >
      {/* Image principale avec animation */}
      <div className="relative bg-gray-100" style={{ height: isFullscreen ? 'calc(100vh - 200px)' : '70vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <Image
              src={images[currentIndex]?.src || ''}
              alt={images[currentIndex]?.alt || 'Image de la galerie'}
              fill
              className="object-contain transition-opacity duration-500 p-4"
              style={{ opacity: isLoading ? 0 : 1 }}
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
          </motion.div>
        </AnimatePresence>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        )}

        {/* Boutons de navigation */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Image précédente"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          aria-label="Image suivante"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Bouton plein écran */}
        {showFullscreen && (
          <motion.button
            onClick={toggleFullscreen}
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
            aria-label={isFullscreen ? 'Quitter le mode plein écran' : 'Plein écran'}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </motion.button>
        )}

        {/* Légende */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h3 className="text-xl font-bold">{images[currentIndex]?.title}</h3>
          {images[currentIndex]?.description && (
            <p className="text-sm opacity-90 line-clamp-2">{images[currentIndex]?.description}</p>
          )}
          <div className="mt-2 text-sm opacity-75">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Vignettes */}
      {showThumbnails && images.length > 1 && (
        <motion.div 
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 p-4 bg-gray-50 dark:bg-gray-800 h-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                index === currentIndex 
                  ? 'border-amber-500 scale-105 shadow-lg' 
                  : 'border-transparent hover:border-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3,
                delay: 0.1 + (index * 0.03)
              }}
              aria-label={`Aller à l'image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 16.66vw, 12.5vw"
              />
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
