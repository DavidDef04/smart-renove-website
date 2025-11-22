'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Clock, Users, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: 250,
    suffix: '+',
    label: 'Projets réalisés',
    icon: Clock,
  },
  {
    id: 2,
    value: 180,
    suffix: '+',
    label: 'Clients satisfaits',
    icon: Users,
  },
  {
    id: 3,
    value: 7,
    suffix: '+',
    label: 'Années d\'expérience',
    icon: Award,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut'
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
      ease: 'easeOut'
    }
  }
};

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const duration = 2; // seconds
      const start = 0;
      const end = value;
      const step = (end - start) / (60 * duration); // 60fps
      
      let current = start;
      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          setCurrentValue(end);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.floor(current));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 0.5 }
      }}
    >
      {currentValue}{suffix}
    </motion.span>
  );
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[var(--color-blue)] text-white py-12 md:py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
                transition: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-orange)]/10 flex items-center justify-center"
                whileHover={{ 
                  rotate: 5,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <stat.icon className="w-10 h-10 text-[var(--color-orange)]" />
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-orange)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
