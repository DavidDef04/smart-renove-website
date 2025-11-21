'use client';

import { Wrench, Ruler, Key, ShieldCheck, Building2, Home, Settings, Layout, Thermometer, Hammer, HardHat } from 'lucide-react';
import Image from 'next/image';
import { servicesData } from '../data/servicesData';

// Mapper les icônes Lucide
const iconComponents = {
  Wrench,
  Ruler,
  Key,
  ShieldCheck,
  Building2,
  Home,
  Settings,
  Layout,
  Thermometer,
  Hammer,
  HardHat
};

// Fonction pour obtenir le composant d'icône
const getIconComponent = (iconName: string) => {
  return iconComponents[iconName as keyof typeof iconComponents] || Wrench;
};

// Mapper les données des services avec les composants d'icônes
const services = servicesData.map(service => ({
  ...service,
  icon: getIconComponent(service.icon)
}));

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-blue)]/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[var(--color-orange)]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-[var(--color-orange)] to-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            NOS SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des Solutions <span className="bg-gradient-to-r from-[var(--color-blue)] to-blue-600 bg-clip-text text-transparent">Innovantes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Découvrez notre gamme complète de services en menuiserie aluminium, alliant esthétique, performance et durabilité pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent relative"
            >
              {/* Decorative Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.bgGradient}`}></div>
              
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => console.error(`Erreur de chargement de l'image: ${service.image}`, e)}
                    onLoad={() => console.log(`Image chargée: ${service.image}`)}
                    priority={service.id <= 3} // Priorité pour les premières images
                  />
                </div>
                
                {/* Icon Badge */}
                <div className={`absolute -bottom-6 right-6 w-14 h-14 rounded-xl flex items-center justify-center z-20 shadow-lg bg-gradient-to-br ${service.bgGradient} ${service.textColor}`}>
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[var(--color-blue)] group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <a 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-medium group-hover:text-[var(--color-orange)] transition-colors duration-300"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a 
            href="/services" 
            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-[var(--color-blue)] to-blue-600 rounded-full group hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-4">
              Voir tous nos services
            </span>
          </a>
          
          <a 
            href="/contact" 
            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-[var(--color-orange)] to-amber-500 rounded-full group hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </span>
            <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-4">
              Demander un devis
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
