'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Gestion du chargement de la vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Forcer la lecture sur mobile
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Gestion des erreurs de lecture automatique
          console.log("La lecture automatique a échoué:", error);
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          poster="/about-hero-poster.jpg" // Image de remplacement pendant le chargement
        >
          <source src="/videos/videoabout.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {/* Superposition dégradée améliorée pour une meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-blue)]/95 via-[var(--color-blue)]/70 to-[var(--color-blue)]/95"></div>
        
        {/* Effet de contraste amélioré */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        
        {/* Effet de lumière focalisée sur le texte */}
        <div className="absolute inset-0 bg-radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)"></div>
        
        {/* Effet de grain subtil renforcé */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
      </div>

      {/* Contenu du héros */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-white z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp text-white drop-shadow-lg">
              Notre Histoire, <span className="text-[var(--color-orange)]">Votre Confort</span>
            </h1>
            <div className="w-24 h-1.5 bg-[var(--color-orange)] mx-auto mb-8 transform scale-110"></div>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto animate-fadeInUp animation-delay-200 text-white/90 font-medium">
              Depuis plus de 7 ans, nous transformons les espaces de vie avec des solutions de menuiserie aluminium innovantes, alliant <span className="font-semibold text-white">esthétique</span>, <span className="font-semibold text-white">performance</span> et <span className="font-semibold text-white">durabilité</span>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp animation-delay-400">
              <Link 
                href="/contact" 
                className="bg-[var(--color-orange)] hover:bg-opacity-90 text-white font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 text-lg"
              >
                Demander un Devis
              </Link>
              <Link 
                href="#notre-equipe" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 text-lg"
              >
                Découvrir Notre Équipe
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton muet */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors"
        aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Flèche de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-10 h-10 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
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
