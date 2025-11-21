'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-[var(--color-blue)] text-white py-20 overflow-hidden relative">
      {/* Effets de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[var(--color-orange)]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Besoin d'un Menuisier <span className="text-[var(--color-orange)]">Aluminium</span> ?
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0">
              Notre équipe d'experts est à votre disposition pour concrétiser vos projets de menuiserie aluminium.
              Qualité, durabilité et esthétique au service de votre confort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-[var(--color-orange)] hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg text-center"
              >
                Demander un Devis
              </Link>
              <Link 
                href="/realisations" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg text-center"
              >
                Voir nos Réalisations
              </Link>
            </div>
          </motion.div>

          {/* Partie image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 md:h-96 lg:h-[500px]"
          >
            <Image
              src="/besoinserrurier.jpg"
              alt="Menuiserie Aluminium de qualité"
              fill
              className="object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              style={{ objectPosition: 'center' }}
              priority
            />
            {/* Badge animé */}
            <div className="absolute -bottom-6 -right-6 bg-white text-[var(--color-blue)] px-6 py-3 rounded-full shadow-lg font-bold animate-pulse">
              +7 ans d'expérience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
