'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  { id: 1, logo: '/images/partenaire1.jpg', name: 'Partenaire 1' },
  { id: 2, logo: '/images/partenaire2.jpg', name: 'Partenaire 2' },
  { id: 3, logo: '/images/partenaire3.jpg', name: 'Partenaire 3' },
  { id: 4, logo: '/images/partenaire4.jpg', name: 'Partenaire 4' },
  { id: 5, logo: '/images/partenaire5.jpg', name: 'Partenaire 5' },
];

const PartnerCard = ({ partner, index }: { partner: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="flex-shrink-0 px-6 md:px-10"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
        <div className="relative w-36 h-28 md:w-44 md:h-32 bg-white rounded-xl p-4 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 9rem, 11rem"
              priority={index < 5}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PartnersSlider() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-blue)]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-[var(--color-orange)]/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-[var(--color-blue)] mb-3 px-4 py-1 bg-blue-50 rounded-full">
            Partenariats
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-[var(--color-orange)]">Partenaires</span> de Confiance
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nous collaborons avec des marques d'excellence pour vous offrir des solutions de qualité supérieure
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlay on the sides */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Infinite scrolling logos */}
          <div className="py-8">
            <motion.div
              className="flex"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 45,
                  ease: 'linear',
                },
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <PartnerCard key={`${partner.id}-${index}`} partner={partner} index={index % partners.length} />
              ))}
            </motion.div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -bottom-8 left-1/4 w-4 h-4 rounded-full bg-[var(--color-orange)]"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div 
            className="absolute -top-4 right-1/3 w-3 h-3 rounded-full bg-[var(--color-blue)]"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  );
}
