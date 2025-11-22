'use client';

import { CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
      ease: "easeOut"
    }
  }
};

export default function ExpertiseSection() {
  const expertisePoints = [
    {
      title: 'Expertise technique de haut niveau',
      description: 'Des professionnels qualifiés pour des réalisations d\'exception'
    },
    {
      title: 'Équipe passionnée et dévouée',
      description: 'À votre écoute pour concrétiser vos projets les plus ambitieux'
    },
    {
      title: 'Solutions sur mesure & évolutives',
      description: 'Des réponses adaptées à vos besoins spécifiques et évolutifs'
    }
  ];

  return (
    <section className="bg-[var(--color-orange)] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertisePoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="group flex flex-col items-center text-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-default"
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="bg-white/20 rounded-full p-3 mb-4 group-hover:bg-white/30 transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-white/90">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
