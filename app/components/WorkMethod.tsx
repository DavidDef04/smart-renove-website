'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Users, Clock, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-[var(--color-orange)]" />,
    title: "Écoute & Devis",
    description: "Nous prenons le temps de comprendre vos besoins et vous proposons un devis détaillé et personnalisé.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Users className="w-8 h-8 text-[var(--color-orange)]" />,
    title: "Validation & Planification",
    description: "Après validation du devis, nous planifions ensemble les étapes du projet et les délais d'intervention.",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[var(--color-orange)]" />,
    title: "Réalisation",
    description: "Nos experts interviennent avec professionnalisme pour concrétiser votre projet dans les délais impartis.",
    color: "from-blue-700 to-blue-800"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-orange)]" />,
    title: "Garantie & SAV",
    description: "Nous assurons un suivi post-intervention et une garantie sur nos prestations pour votre tranquillité d'esprit.",
    color: "from-blue-800 to-blue-900"
  }
];

export default function WorkMethod() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-[var(--color-orange)] font-semibold mb-3">Notre Méthode</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre Méthode de Travail
          </h2>
          <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Découvrez comment nous transformons vos idées en réalité à travers un processus clair et transparent.
          </p>
        </motion.div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
              <div className="relative bg-white p-8 rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45"></div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Temps moyen */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-[var(--color-blue)] rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[var(--color-orange)]/20 rounded-full"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Délai d'intervention rapide</h3>
            <p className="text-blue-100 text-lg mb-6">
              Notre équipe s'engage à vous proposer des créneaux d'intervention rapides et adaptés à vos disponibilités.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-6 py-2 rounded-full">
              <span className="text-2xl font-bold">24h-48h</span>
              <span className="text-blue-100">pour un premier rendez-vous</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
