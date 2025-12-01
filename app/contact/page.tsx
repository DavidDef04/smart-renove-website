'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import Footer from '@/app/components/Footer';
import useContactForm from '@/app/components/ContactForm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null as File | null,
    isUrgent: false
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formProgress, setFormProgress] = useState(0);
  
  // Utilisation du hook personnalisé pour Turnstile
  const { isSubmitting, isTurnstileValid, submitForm, resetTurnstile, TurnstileWidget } = useContactForm();

  // Fermeture automatique du popup après 10 secondes
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        resetTurnstile();
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, resetTurnstile]);

  // Calcul de la progression du formulaire
  const calculateProgress = useCallback(() => {
    const fields = [
      formData.name,
      formData.email,
      formData.phone,
      formData.subject,
      formData.message
    ];
    
    const filledFields = fields.filter(field => field && field.trim().length > 0).length;
    const progress = (filledFields / fields.length) * 100;
    
    return progress;
  }, [formData]);

  // Mise à jour de la progression avec optimisation
  useEffect(() => {
    const progress = calculateProgress();
    setFormProgress(progress);
  }, [formData, calculateProgress]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement; // Type assertion pour accéder à checked
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      // Limiter le message à 500 caractères pour prévenir les attaques DDOS
      const limitedValue = name === 'message' && value.length > 500 ? value.slice(0, 500) : value;
      
      setFormData(prev => ({
        ...prev,
        [name]: limitedValue
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation du formulaire
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Validation de la longueur du message (sécurité DDOS)
    if (formData.message.length > 500) {
      setError('Le message ne doit pas dépasser 500 caractères');
      return;
    }
    
    try {
      await submitForm(formData);
      setIsSubmitted(true);
      
      // Réinitialiser immédiatement le widget Turnstile après soumission réussie
      resetTurnstile();
      
      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          file: null,
          isUrgent: false
        });
        setFileName('');
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      resetTurnstile();
    }
  };

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      } 
    },
    hover: {
      scale: 1.01,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  } as const;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 8s ease infinite;
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 6s ease infinite;
        }
        
        input:focus, textarea:focus, select:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, #fff 0%, #93c5fd 20%, #fef3c7 40%, #93c5fd 60%, #fff 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 8s linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-24 md:py-32"
      >
        {/* Effet de vague animé en bas */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-16 md:h-24 text-blue-700 transform rotate-180"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,48,589,53.86c103.83,7.19,204.29-11.5,304.07-36.29C1006.9,1.1,1113.83-2.45,1200,8.19V0Z" 
              opacity="0.1" 
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
              Nous sommes là pour vous aider
            </span>
          </motion.div>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-amber-200 animate-gradient-x">
                Contactez-nous
              </span>
            </h1>
            <motion.div 
              className="text-2xl md:text-3xl font-normal mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400 bg-[length:200%_auto] animate-gradient-xy rounded-lg blur-sm opacity-30"></span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white to-blue-200">
                  Votre projet commence ici
                </span>
              </span>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans la concrétisation de vos projets de menuiserie aluminium.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a 
              href="#formulaire-contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-amber-500 hover:bg-amber-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Send className="mr-2 h-5 w-5" />
              Envoyer un message
            </a>
            <a 
              href="tel:+237694522255" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-medium rounded-full text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Phone className="mr-2 h-5 w-5" />
              +237 694 522 255
            </a>
          </motion.div>
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 -ml-20 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Contact Section */}
      <section id="formulaire-contact" className="relative py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-2/3">
                <motion.div 
                  className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                    y: -2
                  }}
                >
                  {/* Bordure animée gradient */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-10"
                    animate={{
                      background: [
                        "linear-gradient(to right, #60a5fa, #6366f1, #a855f7)",
                        "linear-gradient(to right, #a855f7, #60a5fa, #6366f1)",
                        "linear-gradient(to right, #6366f1, #a855f7, #60a5fa)",
                        "linear-gradient(to right, #60a5fa, #6366f1, #a855f7)"
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Bordure intérieure */}
                  <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white"></div>
                  
                  {/* Coins décoratifs */}
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"
                    animate={{ 
                      borderColor: ["#3b82f6", "#6366f1", "#a855f7", "#3b82f6"],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-indigo-500 rounded-tr-3xl"
                    animate={{ 
                      borderColor: ["#6366f1", "#a855f7", "#3b82f6", "#6366f1"],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-500 rounded-bl-3xl"
                    animate={{ 
                      borderColor: ["#a855f7", "#3b82f6", "#6366f1", "#a855f7"],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-pink-500 rounded-br-3xl"
                    animate={{ 
                      borderColor: ["#ec4899", "#a855f7", "#6366f1", "#ec4899"],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                  />

                  {/* Lueurs latérales */}
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scaleY: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-gradient-to-b from-transparent via-purple-400 to-transparent rounded-full"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scaleY: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />

                  {/* Contenu principal */}
                  <div className="relative z-10">
                  {/* Barre de progression */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${formProgress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Indicateur de progression */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Écrivez-nous</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Progression</span>
                      <motion.span 
                        className="text-sm font-bold text-green-600"
                        animate={{ scale: formProgress === 100 ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Math.round(formProgress)}%
                      </motion.span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">Remplissez correctement le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.div 
                        variants={item}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-100 shadow-sm"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                          <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          Contactez-nous
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Notre équipe vous répondra dans les plus brefs délais. 
                          <span className="text-red-500 font-medium ml-1">* Champs obligatoires</span>
                        </p>
                      </motion.div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/*--------Nom---------- */}
                        <motion.div 
                          variants={item}
                          className="relative z-0 group"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="relative block w-full pt-6 pb-2 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 peer transition-all duration-300 hover:border-blue-300 hover:shadow-lg focus:shadow-xl"
                            placeholder=" "
                          />
                          <label 
                            htmlFor="name" 
                            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 left-4 z-10 origin-[0] peer-focus:left-4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-valid:text-green-600"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                              Nom complet *
                            </span>
                          </label>
                          {formData.name && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-3 top-3 text-green-500"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                          )}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
                        </motion.div>

                        {/*--------Email---------- */}
                        <motion.div 
                          variants={item}
                          className="relative z-0 group"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="relative block w-full pt-6 pb-2 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-500 peer transition-all duration-300 hover:border-green-300 hover:shadow-lg focus:shadow-xl"
                            placeholder=" "
                          />
                          <label 
                            htmlFor="email" 
                            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 left-4 z-10 origin-[0] peer-focus:left-4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-valid:text-green-600"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              Adresse email *
                            </span>
                          </label>
                          {formData.email && formData.email.includes('@') && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-3 top-3 text-green-500"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                          )}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
                        </motion.div>
                        
                        {/*--------Téléphone---------- */}
                        <motion.div 
                          variants={item}
                          className="relative z-0 group"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => {
                              // Nettoyage des caractères non numériques
                              let value = e.target.value.replace(/\D/g, '');
                              
                              // Limite à 12 chiffres (237 + 9)
                              value = value.substring(0, 12);
                              
                              // Formatage avec espacements
                              value = value.replace(/(\d{1,3})?(\d{0,3})?(\d{0,3})?(\d{0,3})?/, (match, p1, p2, p3, p4) => {
                                const result = [];
                                if (p1) result.push(p1);
                                if (p2) result.push(p2);
                                if (p3) result.push(p3);
                                if (p4) result.push(p4);
                                return result.join(' ').trim();
                              });
                              
                              setFormData(prev => ({
                                ...prev,
                                phone: value
                              }));
                            }}
                            required
                            className="relative block w-full pt-6 pb-2 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-500 peer transition-all duration-300 hover:border-purple-300 hover:shadow-lg focus:shadow-xl"
                            placeholder=" "
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 left-4 z-10 origin-left peer-focus:left-4 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-valid:text-green-600"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                              </svg>
                              Téléphone *
                            </span>
                          </label>
                          {formData.phone && formData.phone.length >= 9 && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-3 top-3 text-green-500"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                          )}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
                        </motion.div>
                        
                        {/*--------Sujet---------- */}
                        <motion.div 
                          variants={item}
                          className="relative z-0 group"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="relative block w-full pt-6 pb-2 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 peer transition-all duration-300 hover:border-indigo-300 hover:shadow-lg focus:shadow-xl"
                          >
                            <option value="" disabled hidden></option>
                            <option value="Devis">Demande de devis</option>
                            <option value="Information">Demande d&apos;information</option>
                            <option value="Rendez-vous">Prise de rendez-vous</option>
                            <option value="SAV">Service après-vente</option>
                            <option value="Autre">Autre demande</option>
                          </select>
                          <label 
                            htmlFor="subject" 
                            className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 left-4 z-10 origin-[0] peer-focus:left-4 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formData.subject ? 'scale-75 -translate-y-6 text-indigo-600' : 'scale-100 translate-y-0'} peer-valid:text-green-600`}
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                              </svg>
                              Service *
                            </span>
                          </label>
                          {formData.subject && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-3 top-3 text-green-500"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                          )}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                            <motion.svg 
                              className="w-5 h-5 text-indigo-400 peer-focus:text-indigo-600 transition-colors duration-300"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ y: formData.subject ? [0, -2, 0] : 0 }}
                              transition={{ duration: 0.3, repeat: formData.subject ? Infinity : 0, repeatDelay: 3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/*--------Message---------- */}
                      <motion.div 
                        variants={item}
                        className="relative z-0 group mt-8"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          maxLength={500}
                          required
                          className="relative block w-full pt-6 pb-2 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-500 peer min-h-[140px] resize-y transition-all duration-300 hover:border-amber-300 hover:shadow-lg focus:shadow-xl"
                          placeholder=" "
                        ></textarea>
                        <label 
                          htmlFor="message" 
                          className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 left-4 z-10 origin-left peer-focus:left-4 peer-focus:text-amber-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-valid:text-green-600"
                        >
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            Votre message *
                          </span>
                        </label>
                        <div className="flex justify-between items-center mt-2">
                          <span className={`text-xs font-medium transition-colors duration-300 ${
                            formData.message.length > 50 ? 'text-green-500' : 
                            formData.message.length > 0 ? 'text-amber-500' : 'text-gray-400'
                          }`}>
                            {formData.message.length}/500 caractères
                          </span>
                          {formData.message.length > 50 && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-green-500"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </motion.div>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full group-focus-within:w-full"></div>
                      </motion.div>

                      {/*--------Fichier---------- */}
                      <motion.div variants={item} className="mt-6 transition-all duration-200 hover:shadow-sm rounded-xl">
                        <label className="flex flex-col group cursor-pointer">
                          <div className="flex items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50/30 group-hover:shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">
                                {fileName || 'Joindre un fichier (optionnel)'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {fileName ? 'Cliquez pour changer de fichier' : 'Taille maximale : 10 Mo'}
                              </p>
                            </div>
                          </div>
                          <input 
                            type="file" 
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                if (file.size > 10 * 1024 * 1024) {
                                  alert('Le fichier est trop volumineux. Taille maximale : 10 Mo');
                                  return;
                                }
                                setFileName(file.name);
                                setFormData(prev => ({
                                  ...prev,
                                  file: file
                                }));
                              }
                            }}
                          />
                        </label>
                        <p className="text-xs text-gray-500 mt-2">
                          Formats acceptés : .pdf, .doc, .docx, .jpg, .png (max 10 Mo)
                        </p>
                      </motion.div>
                      
                      {/*--------Urgence---------- */}
                      <motion.div 
                        variants={item}
                        className="mt-6 p-6 bg-blue-50/70 rounded-xl border border-blue-100 shadow-sm"
                      >
                        <label className="flex items-center group cursor-pointer">
                          <div className="relative">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={formData.isUrgent || false}
                              onChange={(e) => setFormData(prev => ({
                                ...prev,
                                isUrgent: e.target.checked
                              }))}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:bg-red-500"></div>
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-200 flex items-center">
                            <span className="mr-2">Service urgent</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                              Urgent
                            </span>
                          </span>
                        </label>
                        <p className="ml-10 mt-1 text-xs text-gray-500">
                          Cochez cette case si vous avez besoin d&apos;une réponse en urgence (réponse sous 24h)
                        </p>
                      </motion.div>
                      
                      {/* Widget Turnstile CAPTCHA */}
                      <motion.div 
                        variants={item}
                        className="flex justify-center"
                      >
                        <TurnstileWidget />
                      </motion.div>

                      {/* Affichage des erreurs */}
                      {error && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 border border-red-200 rounded-xl"
                        >
                          <p className="text-red-600 text-sm flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {error}
                          </p>
                        </motion.div>
                      )}
                      
                      <motion.div 
                        variants={item}
                        className="pt-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.button
                          type="submit"
                          disabled={isSubmitting || !isTurnstileValid}
                          className={`group relative w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg ${
                            isSubmitting || !isTurnstileValid 
                              ? 'opacity-60 cursor-not-allowed' 
                              : 'hover:shadow-2xl hover:shadow-green-200/50 hover:scale-[1.02] active:scale-[0.98]'
                          }`}
                          whileTap={{ scale: isSubmitting || !isTurnstileValid ? 1 : 0.98 }}
                          style={{
                            backgroundSize: '200% 100%',
                            animation: isSubmitting ? 'pulse 2s infinite' : 'none'
                          }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative flex items-center z-10">
                            {isSubmitting ? (
                              <>
                                <motion.svg 
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </motion.svg>
                                <span className="font-medium">Envoi en cours...</span>
                              </>
                            ) : (
                              <>
                                <motion.div
                                  animate={{ x: formProgress === 100 ? [0, 5, 0] : 0 }}
                                  transition={{ duration: 0.5, repeat: formProgress === 100 ? Infinity : 0, repeatDelay: 2 }}
                                >
                                  <Send className="w-5 h-5 mr-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                </motion.div>
                                <span className="relative overflow-hidden font-medium">
                                  <motion.span 
                                    className="block transition-transform duration-300 group-hover:-translate-y-6"
                                    animate={{ y: formProgress === 100 ? [0, -2, 0] : 0 }}
                                    transition={{ duration: 0.3, repeat: formProgress === 100 ? Infinity : 0, repeatDelay: 3 }}
                                  >
                                    Envoyer le message
                                  </motion.span>
                                  <span className="absolute left-0 top-full w-full text-center transition-transform duration-300 group-hover:-translate-y-6 font-medium">
                                    C&apos;est parti ! 🚀
                                  </span>
                                </span>
                              </>
                            )}
                          </span>
                          
                          {/* Indicateur de progression sur le bouton */}
                          <motion.div 
                            className="absolute bottom-0 left-0 h-1 bg-white/30"
                            initial={{ width: 0 }}
                            animate={{ width: `${formProgress}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </motion.button>
                      </motion.div>
                      
                      <motion.p variants={item} className="text-xs text-gray-500 text-center mt-6">
                        En soumettant ce formulaire, vous acceptez notre <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a>.
                      </motion.p>
                    </form>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h3>
                  
                  <div className="space-y-8 p-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">Adresse</h4>
                        <p className="text-white">Rond Point CC<br />Douala, Cameroun<br />(Entre Ndogkotti et Le Commissariat 8<sup>ème</sup>)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Email</h3>
                        <p className="mt-1 text-white">
                          <a href="mailto:info@srs.cm" className="hover:underline transition-colors">info@srs.cm</a><br />
                          Réponse sous 24h
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Téléphone</h3>
                        <p className="mt-1 text-white">
                          <a href="tel:+237694522255" className="hover:underline transition-colors block">+237 694 522 255</a>
                          <a href="tel:+237675993229" className="hover:underline transition-colors">+237 675 993 229</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">Horaires</h3>
                        <p className="text-white">Lun - Ven: 8h - 19h<br />Sam: 9h - 17h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-blue-500/20">
                    <h4 className="font-semibold text-white mb-4">Suivez-nous</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  <div className="h-48 bg-gray-100 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8102811448354!2d9.72972231573686!3d4.042097996991337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDIjMzEuNSJOIDnCsDQ0JzAwLjgiRQ!5e0!3m2!1sfr!2scm!4v1634567890123!5m2!1sfr!2scm"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0"
                      title="Localisation SRS - Rond Point CC, Douala"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Notre agence</h3>
                    <p className="text-gray-600 mb-4">Venez nous rencontrer dans nos locaux pour discuter de votre projet.</p>
                    <a 
                      href="https://goo.gl/maps/example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Voir sur la carte
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Besoin d&apos;aide ?</h3>
                  <p className="mb-6">Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.</p>
                  <a 
                    href="tel:+33123456789" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-medium rounded-full hover:bg-gray-100 transition-colors w-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler maintenant
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">Voici les réponses aux questions que vous nous posez le plus souvent.</p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {[
              {
                question: "Quels sont vos horaires d'ouverture ?",
                answer: "Nos bureaux sont ouverts du lundi au vendredi de 8h à 19h et le samedi de 9h à 17h. Notre équipe est également disponible en dehors de ces horaires sur rendez-vous."
              },
              {
                question: "Quel est le délai de réponse à une demande de contact ?",
                answer: "Nous nous engageons à vous répondre dans les 24 à 48 heures ouvrables suivant votre demande. Pour les urgences, nous vous invitons à nous appeler directement au +237 694 522 255"
              },
              {
                question: "Proposez-vous des devis gratuits ?",
                answer: "Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous vous proposerons une étude personnalisée de votre projet et un devis détaillé sous 48h."
              },
              {
                question: "Quelles sont les zones d'intervention ?",
                answer: "Nous intervenons principalement en Île-de-France, mais nous pouvons également nous déplacer dans toute la France pour les grands projets. N'hésitez pas à nous contacter pour plus d'informations."
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "Nous acceptons les paiements par carte bancaire, virement, chèque et espèces. Des facilités de paiement peuvent être proposées pour les montants importants."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <div className="ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-500 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg className="w-6 h-6 text-blue-600 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 -mt-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Prêt à concrétiser votre projet ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer des solutions sur mesure.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors flex-shrink-0 text-center"
              >
                Prendre rendez-vous
              </a>
              <a 
                href="tel:+237694522255" 
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                +237 694 522 255
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      <Footer />
      
      {/* Popup de succès moderne */}
      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => {
            setIsSubmitted(false);
            resetTurnstile();
          }}
        >
          {/* Éléments décoratifs animés */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-2xl animate-ping"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.6
            }}
            className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl border border-white/20 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lueur autour du popup */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 via-blue-400 to-amber-400 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 text-center">
              {/* Cercle de succès animé */}
              <motion.div 
                className="relative inline-flex items-center justify-center w-24 h-24 mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.2
                }}
              >
                {/* Cercles extérieurs animés */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Icône centrale */}
                <motion.div
                  className="relative bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.4
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </motion.div>
              </motion.div>

              {/* Texte avec animation */}
              <motion.h3 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Message envoyé !
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
              </motion.p>

              {/* Boutons d'action */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false);
                    resetTurnstile();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Super ! 🎉
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false);
                    // Réinitialiser le formulaire
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                      file: null,
                      isUrgent: false
                    });
                    setFileName('');
                    resetTurnstile();
                  }}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nouveau message
                </motion.button>
              </motion.div>

              {/* Indicateur de temps restant */}
              <motion.div
                className="mt-6 flex items-center justify-center text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Fermeture automatique dans 10 secondes
              </motion.div>
            </div>

            {/* Particules de confettis */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'][i],
                  left: `${20 + i * 12}%`,
                  top: '10%',
                }}
                initial={{ 
                  y: 0, 
                  rotate: 0,
                  scale: 0
                }}
                animate={{
                  y: [0, 100, 200],
                  rotate: [0, 180, 360],
                  scale: [0, 1, 0.5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
