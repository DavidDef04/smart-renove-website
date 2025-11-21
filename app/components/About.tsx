'use client';

import { Phone, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
                A PROPOS DE <span className="text-[var(--color-orange)]">SMART RENOV</span>
              </h2>
              <div className="relative w-32 h-1.5 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-blue)] via-white to-[var(--color-orange)] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Forts de plus de 7 ans d'expérience dans la menuiserie aluminium, nous nous engageons à fournir des solutions sur mesure alliant esthétique, performance et durabilité. Notre expertise technique et notre savoir-faire artisanal nous permettent de répondre aux exigences les plus pointues en matière de rénovation et de construction neuve.
              </p>
              <p className="leading-relaxed">
                Chez Smart Rénov, chaque projet est unique et bénéficie de toute notre attention. De la conception à la pose, notre équipe de professionnels passionnés vous accompagne pour concrétiser vos idées et apporter une touche d'élégance à votre habitat ou votre espace professionnel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-[var(--color-blue)] hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition-all flex items-center gap-2 group"
              >
                Contactez-Nous
                <MessageCircle className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Avez-vous des questions ?</p>
                <a 
                  href="tel:+237694522355" 
                  className="text-gray-800 font-medium flex items-center gap-2 hover:text-[var(--color-orange)] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +237 694 522 355
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image Collage */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Large Main Image */}
            <div className="absolute top-0 right-0 w-4/5 h-3/4 rounded-2xl overflow-hidden border-4 border-[var(--color-orange)] shadow-2xl transform rotate-3 z-10 group hover:rotate-0 transition-all duration-500 ease-in-out">
              <div className="absolute inset-0 bg-[var(--color-orange)] mix-blend-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image
                src="/aboutinage1.jpg"
                alt="Projet de menuiserie aluminium"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
            </div>
            
            {/* Small Top Left Image */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 rounded-xl overflow-hidden border-4 border-[var(--color-orange)] shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <Image
                src="/aboutimage2.jpg"
                alt="Détail de menuiserie"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Small Bottom Left Image */}
            <div className="absolute bottom-0 left-10 w-2/5 h-2/5 rounded-xl overflow-hidden border-4 border-[var(--color-orange)] shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-500 ease-in-out group">
              <Image
                src="/aboutimage3.jpg"
                alt="Projet d'installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block">Projet en cours</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
