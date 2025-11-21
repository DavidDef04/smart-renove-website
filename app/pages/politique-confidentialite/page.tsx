'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Cookie, FileText, Mail, Phone, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
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

export default function PolitiqueConfidentialite() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">Confidentialité</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Votre protection est notre priorité. Découvrez comment nous protégeons vos données personnelles avec transparence et sécurité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                RGPD Conforme
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <Lock className="w-5 h-5 mr-2" />
                Sécurité Maximale
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Engagement</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Chez <span className="font-semibold text-[var(--color-blue)]">Smart Renov</span>, nous nous engageons à protéger votre vie privée et à sécuriser vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez nos services de menuiserie aluminium et vitrerie.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              En tant qu'entreprise camerounaise spécialisée dans la rénovation et la menuiserie, nous respectons scrupuleusement les réglementations locales et internationales en matière de protection des données.
            </p>
          </div>
        </motion.div>

        {/* Data Collection Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <UserCheck className="w-6 h-6" />,
              title: "Informations d'Identification",
              description: "Nom, prénom, email, téléphone, adresse",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Données de Localisation",
              description: "Adresse de chantier, zone géographique d'intervention",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Informations de Projet",
              description: "Devis, plans, photos, caractéristiques techniques",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: <Cookie className="w-6 h-6" />,
              title: "Cookies et Tracking",
              description: "Navigation sur notre site, préférences utilisateur",
              color: "from-orange-500 to-orange-600"
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Communications",
              description: "Appels, emails, messages, discussions de projet",
              color: "from-red-500 to-red-600"
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Données Techniques",
              description: "Métriques d'utilisation, logs système, performances",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Usage Policy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[var(--color-blue)] to-blue-600 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Utilisation de Vos Données</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fournir nos services de menuiserie et vitrerie",
                "Établir des devis personnalisés et précis",
                "Coordonner les interventions sur vos chantiers",
                "Améliorer nos produits et services",
                "Communiquer avec vous sur vos projets",
                "Respecter nos obligations légales et réglementaires"
              ].map((usage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-50">{usage}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Rights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vos Droits</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Droit d'accès",
                  description: "Vous pouvez demander une copie de toutes vos données personnelles que nous détenons."
                },
                {
                  title: "Droit de rectification",
                  description: "Vous pouvez nous demander de corriger toute information inexacte vous concernant."
                },
                {
                  title: "Droit de suppression",
                  description: "Vous pouvez demander la suppression de vos données personnelles sous certaines conditions."
                },
                {
                  title: "Droit de limitation",
                  description: "Vous pouvez limiter l'utilisation de vos données à des finalités spécifiques."
                },
                {
                  title: "Droit de portabilité",
                  description: "Vous pouvez récupérer vos données dans un format structuré et lisible."
                },
                {
                  title: "Droit d'opposition",
                  description: "Vous pouvez vous opposer à certains traitements de vos données personnelles."
                }
              ].map((right, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[var(--color-orange)] to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{right.title}</h3>
                    <p className="text-gray-600">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Measures */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Mesures de Sécurité</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">Techniques</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-green-400" />
                    <span>Chiffrement SSL/TLS</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-green-400" />
                    <span>Contrôle d'accès strict</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-green-400" />
                    <span>Sauvegardes sécurisées</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">Organisationnelles</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <UserCheck className="w-5 h-5 text-blue-400" />
                    <span>Formation du personnel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span>Politiques internes strictes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span>Audit régulier</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-lg text-gray-600 mb-8">
              Pour toute question concernant notre politique de confidentialité ou l'exercice de vos droits, n'hésitez pas à nous contacter.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-[var(--color-orange)]" />
                <span>+237 694 522 255</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-[var(--color-orange)]" />
                <span>contact@smartrenov.cm</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-[var(--color-orange)]" />
                <span>Cameroun</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Nous contacter
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
            Cette politique peut être modifiée à tout moment. Nous vous invitons à la consulter régulièrement.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
