'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Check, ArrowRight, Phone, Mail, MapPin, Clock, Shield, MoveRight } from 'lucide-react';
import Footer from '../components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Process {
  title: string;
  steps: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  features: Feature[];
  process: Process;
  gallery: string[];
  faqs: FAQ[];
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  heroImage,
  heroTitle,
  heroDescription,
  features,
  process,
  gallery,
  faqs,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-gray-900 overflow-hidden"
      >
        {/* Image de fond avec superposition */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue)] via-blue-600 to-[var(--color-orange)] opacity-90" />
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-28 px-4 sm:py-36 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-200 to-orange-200 mx-auto my-6 rounded-full"></div>
              <p className="mt-4 text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
                {heroDescription}
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white rounded-full group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-200 to-orange-200 group-hover:from-orange-200 group-hover:to-yellow-200 transition-all duration-500"></span>
                <span className="relative flex items-center">
                  Demander un devis
                  <MoveRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link 
                href="tel:+237694522355" 
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white border-2 border-white/20 rounded-full hover:border-white/40 transition-all duration-300"
              >
                <Phone className="mr-3 h-5 w-5" />
                <span>+237 694 522 355</span>
                <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Vague décorative en bas */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </motion.div>

      {/* Description du service */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="relative py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-[var(--color-blue)] bg-blue-50 rounded-full mb-4">
              {title}
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
            >
              Une expertise au service de <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[var(--color-blue)] inline-block"
              >
                vos projets
              </motion.span>
            </motion.h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-200 to-orange-200 mx-auto my-6 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          {/* Caractéristiques */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={cardItem}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="p-8 h-full flex flex-col">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-200 to-orange-200 text-white shadow-lg mb-6">
                        <div className="w-6 h-6 flex items-center justify-center">
  {feature.icon}
</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {feature.description}
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <span className="inline-flex items-center text-sm font-medium text-[var(--color-blue)] group-hover:text-[var(--color-orange)] transition-colors">
                          En savoir plus
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent -mb-24"></div>
      </motion.section>
      {/* Galerie d'images - Nos Réalisations */}
      {gallery && gallery.length > 0 && (
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 text-sm font-semibold text-[var(--color-blue)] bg-blue-50 rounded-full mb-4"
              >
                Portfolio
              </motion.span>
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Nos <span className="text-[var(--color-blue)]">Réalisations</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-200 to-orange-200 mx-auto my-6 rounded-full"></div>
              <p className="text-xl text-gray-600">
                Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire en menuiserie aluminium
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={`Projet ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Projet {index + 1}</h3>
                        <p className="text-blue-100 mb-4">Menuiserie Aluminium</p>
                        <button className="inline-flex items-center px-5 py-2.5 bg-white text-[var(--color-blue)] rounded-full font-medium hover:bg-gray-100 transition-colors">
                          Voir plus
                          <MoveRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Projet {index + 1}</h3>
                        <p className="text-gray-500">Menuiserie Aluminium</p>
                      </div>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-[var(--color-blue)]">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link 
                href="/realisations" 
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[var(--color-blue)] hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg"
              >
                Voir tous nos projets
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>
      )}

      {/* Notre processus */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[var(--color-blue)] font-semibold tracking-wide uppercase">
              Notre processus
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Comment nous travaillons
            </p>
          </div>

          <div className="mt-12">
            <div className="flow-root">
              <ul className="-mb-8">
                {process.steps.map((step, index) => (
                  <li key={index}>
                    <div className="relative pb-8">
                      {index !== process.steps.length - 1 && (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      )}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-[var(--color-orange)] flex items-center justify-center ring-8 ring-white">
                            <span className="text-white font-bold">{index + 1}</span>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-lg text-gray-900">{step}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--color-blue)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                Discutons de votre projet
                <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[var(--color-blue)] font-semibold tracking-wide uppercase">
              FAQ
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Questions fréquentes
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Retrouvez les réponses aux questions les plus fréquemment posées sur nos services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <dt className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[var(--color-blue)] mb-4 rounded-lg mx-4">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Prêt à concrétiser votre projet ?</span>
            <span className="block text-blue-100">Contactez-nous dès aujourd'hui.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="tel:+237694522355"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
              >
                <Phone className="-ml-1 mr-2 h-5 w-5" />
                +237 694 522 355
              </Link>
            </div>
          </div>
          <p className="mt-3 text-sm text-blue-50">
            Ou envoyez-nous un email à :{' '}
            <a href="mailto:contact@smart-renov.com" className="text-white font-medium underline">
              contact@smart-renov.com
            </a>
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiceLayout;
