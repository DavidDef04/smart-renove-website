'use client';

import { CheckCircle2, Award, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

const qualities = [
  {
    id: 1,
    title: "Expertise Technique",
    description: "Une équipe qualifiée avec des années d'expérience dans la menuiserie aluminium.",
    icon: Award,
  },
  {
    id: 2,
    title: "Qualité Premium",
    description: "Des matériaux de haute qualité pour des résultats durables et esthétiques.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Garantie Sérénité",
    description: "Nos produits sont garantis pour une tranquillité d'esprit totale.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Respect des Délais",
    description: "Engagés à respecter les délais convenus pour votre projet.",
    icon: Clock,
  },
];

export default function PourquoiNous() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Collage */}
          <div className="relative h-[500px] w-full">
            {/* Main Image */}
            <div className="absolute inset-0 w-4/5 h-4/5 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image
                src="/pourquoiNous1.jpg"
                alt="Projet de menuiserie aluminium"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[var(--color-orange)] rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[var(--color-blue)] rounded-br-3xl"></div>
            
            {/* Small Image 1 */}
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden z-20">
              <Image
                src="/pourquoiNous3.jpg"
                alt="Détail de menuiserie"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Small Image 2 */}
            <div className="absolute top-10 right-10 w-28 h-28 rounded-2xl border-4 border-white shadow-lg overflow-hidden z-20 transform rotate-6">
              <Image
                src="/pourquoiNous32.jpg"
                alt="Projet d'installation"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[var(--color-orange)] rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[var(--color-blue)] rounded-full opacity-20"></div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 relative">
                POURQUOI CHOISIR <span className="text-[var(--color-blue)]">SMART RENOV</span>
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[var(--color-blue)] via-white to-[var(--color-orange)]"></span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Découvrez pourquoi des centaines de clients nous font confiance pour leurs projets de menuiserie aluminium. Notre engagement envers l'excellence et la satisfaction client fait de nous le partenaire idéal pour concrétiser vos idées.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {qualities.map((quality) => (
                <div key={quality.id} className="group p-6 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[var(--color-blue)]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[var(--color-orange)]/10 rounded-lg text-[var(--color-orange)] group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors">
                      <quality.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-[var(--color-blue)] transition-colors">
                        {quality.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <button className="px-8 py-3 bg-[var(--color-blue)] text-white rounded-full font-medium hover:bg-[var(--color-blue)]/90 transition-colors flex items-center space-x-2 group">
                <span>En savoir plus</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
