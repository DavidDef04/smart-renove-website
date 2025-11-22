'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Phone, Mail, MapPin, User, Calendar, Shield, FileCheck, ChevronRight, Globe, Briefcase } from 'lucide-react';
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

export default function MentionsLegales() {
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
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mentions <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">Légales</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Informations légales et identification de Smart Renov, votre expert en menuiserie aluminium et vitrerie au Cameroun.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <FileCheck className="w-5 h-5 mr-2" />
                Entreprise Légale
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <Shield className="w-5 h-5 mr-2" />
                Conforme Réglementations
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
        
        {/* Company Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Identification de l'Entreprise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-blue)]">Informations Générales</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Raison Sociale</p>
                      <p className="text-gray-600">Smart Renov SARL</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Forme Juridique</p>
                      <p className="text-gray-600">Société à Responsabilité Limitée</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Activité Principale</p>
                      <p className="text-gray-600">Menuiserie aluminium et vitrerie</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-blue)]">Coordonnées</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Siège Social</p>
                      <p className="text-gray-600">Douala, Cameroun</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <p className="text-gray-600">+237 694 522 255</p>
                      <p className="text-gray-600">+237 675 993 229</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[var(--color-orange)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">contact@smartrenov.cm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal Information Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <FileCheck className="w-6 h-6" />,
              title: "Immatriculation",
              description: "N° RCCM : CM/DLA/2023/B/1234",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "N° Contribuable",
              description: "M1234567890123",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <User className="w-6 h-6" />,
              title: "Directeur Général",
              description: "M. PEUKONG JORDAN",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Date de Création",
              description: "15 Janvier 2023",
              color: "from-orange-500 to-orange-600"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Capital Social",
              description: "10 000 000 XAF",
              color: "from-red-500 to-red-600"
            },
            {
              icon: <Building className="w-6 h-6" />,
              title: "Assurance Professionnelle",
              description: "N° Police : AXA-2023-456789",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((info, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 font-medium">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hosting Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[var(--color-blue)] to-blue-600 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Hébergement du Site</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-200">Hébergeur Web</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Nom de l'hébergeur</p>
                      <p className="text-blue-100">[Nom de l'hébergeur]</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Adresse</p>
                      <p className="text-blue-100">[Adresse de l'hébergeur]</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-200">Propriété Intellectuelle</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Droits d'auteur</p>
                      <p className="text-blue-100">© 2024 Smart Renov SARL</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileCheck className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Tous droits réservés</p>
                      <p className="text-blue-100">Reproduction interdite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Avis Légal</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-blue)]">Responsabilité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart Renov SARL s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, 
                  nous ne garantissons pas l'exhaustivité ou l'exactitude des informations et déclinons toute responsabilité 
                  pour les erreurs ou omissions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-blue)]">Liens Externes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ce site peut contenir des liens vers des sites tiers. Smart Renov n'est pas responsable du contenu 
                  de ces sites externes et n'exprime aucune opinion sur leur contenu.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-blue)]">Litiges</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tout litige relatif à l'utilisation de ce site sera soumis à la compétence des tribunaux 
                  compétents du ressort de Douala, Cameroun.
                </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Pour toute question concernant nos mentions légales ou pour obtenir des informations complémentaires, 
              n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Contacter le service juridique
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                Retour à l'accueil
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
            Ces mentions légales sont mises à jour régulièrement pour refléter les informations actuelles de l'entreprise.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
