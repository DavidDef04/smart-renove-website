'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Users, Clock, Shield, DollarSign, Wrench, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-gradient-to-br from-[var(--color-blue)] via-blue-600 to-[var(--color-orange)] text-white"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conditions d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">Utilisation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Les règles qui encadrent nos services de menuiserie aluminium et vitrerie pour une collaboration transparente et efficace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                Contrat Clair
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <Shield className="w-5 h-5 mr-2" />
                Services Garantis
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Contrat de Service</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Bienvenue chez <span className="font-semibold text-[var(--color-blue)]">Smart Renov</span>. Ces conditions d'utilisation définissent le cadre de notre collaboration pour tous vos projets de menuiserie aluminium, vitrerie et rénovation au Cameroun.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              En utilisant nos services, vous acceptez ces termes qui visent à assurer une relation professionnelle transparente et bénéfique pour toutes les parties.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Services Proposés",
              description: "Menuiserie aluminium, vitrerie, baies coulissantes, façades, isolation",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: "Tarification",
              description: "Devis gratuits, prix transparents, paiement échelonné possible",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Délais d'Intervention",
              description: "Réponse 48h, chantier selon planning, respect des délais convenus",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Garantie",
              description: "Garantie matériaux 10 ans, garantie pose 2 ans, service après-vente",
              color: "from-orange-500 to-orange-600"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Engagement Client",
              description: "Conseil personnalisé, suivi projet, satisfaction garantie",
              color: "from-red-500 to-red-600"
            },
            {
              icon: <AlertCircle className="w-6 h-6" />,
              title: "Responsabilités",
              description: "Limitation de responsabilité, assurance professionnelle, conformité normes",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Conditions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[var(--color-blue)] to-blue-600 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Conditions Générales</h2>
            <div className="space-y-6">
              {[
                {
                  title: "1. Devis et Acceptation",
                  content: "Tous nos devis sont gratuits et valables 30 jours. Le devis doit être signé et retourné pour confirmation du commande."
                },
                {
                  title: "2. Modalités de Paiement",
                  content: "30% à la commande, 40% à mi-chantier, 30% à la réception finale. Paiement possible par virement bancaire, mobile money ou espèces."
                },
                {
                  title: "3. Délais d'Exécution",
                  content: "Les délais sont indiqués sur le devis. Nous nous engageons à les respecter sauf cas de force majeure ou retard client."
                },
                {
                  title: "4. Garantie et SAV",
                  content: "Garantie décennale sur structure, 2 ans sur pose. Service après-vente disponible 7j/7 pour toute urgence."
                },
                {
                  title: "5. Responsabilité",
                  content: "Notre responsabilité est limitée aux prestations convenues. Assurance professionnelle couvrant tous nos chantiers."
                }
              ].map((condition, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-200">{condition.title}</h3>
                  <p className="text-blue-50 leading-relaxed">{condition.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Obligations Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Obligations Réciproques</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-blue)]">Nos Engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Respect des normes de qualité</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Respect des délais convenus</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Proposition de matériaux certifiés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Nettoyage du chantier après travaux</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-orange)]">Vos Obligations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Accès au chantier sécurisé</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Respect des échéances de paiement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Validation des étapes de chantier</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Communication sur les contraintes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions sur nos Conditions ?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe commerciale est à votre disposition pour clarifier tous les points de nos conditions d'utilisation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Contacter un conseiller
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-900 text-white py-8"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-gray-500 text-sm">
            Ces conditions d'utilisation peuvent être modifiées à tout moment pour améliorer nos services.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
