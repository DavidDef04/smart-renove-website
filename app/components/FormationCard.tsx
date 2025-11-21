'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FormationCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  className?: string;
}

export default function FormationCard({
  id,
  title,
  description,
  duration,
  imageUrl,
  className = ''
}: FormationCardProps) {
  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl ${className}`}
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20">
        <div className="flex items-center mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
            Formation
          </span>
          <span className="ml-2 text-sm text-gray-500 group-hover:text-white transition-colors">
            {duration}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors">
          {description}
        </p>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link 
            href={`/contact?subject=Formation: ${encodeURIComponent(title)}`}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            En savoir plus
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
