'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100"
    >
      {/* Image du service */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-[var(--color-orange)] text-white rounded-full flex items-center justify-center text-2xl transform transition-transform duration-300 group-hover:rotate-12">
          {service.icon}
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-orange)] transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1">
          {service.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Points forts :</h4>
          <ul className="space-y-1.5">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-[var(--color-orange)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link 
            href={`/services#service-${service.id}`}
            className="inline-flex items-center text-[var(--color-blue)] font-medium hover:text-[var(--color-orange)] transition-colors duration-300 group/button"
          >
            En savoir plus
            <svg 
              className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/button:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Effet de survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-orange)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </motion.div>
  );
}
