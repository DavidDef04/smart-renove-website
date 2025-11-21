'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[var(--color-blue)] to-blue-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[var(--color-orange)]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Image 
                  src="/favicon.png" 
                  alt="Logo Smart Renov" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Smart Renov</span>
            </div>
            <p className="text-blue-100">
              Votre partenaire de confiance pour des solutions de menuiserie aluminium sur mesure, alliant qualité, durabilité et design innovant.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="group relative bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-orange)]/20">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="group relative bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-orange)]/20">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="group relative bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-orange)]/20">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="group relative bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-orange)]/20">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--color-orange)]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'À Propos', href: '/pages/about' },
                { name: 'Projets', href: '/pages/realisations' },
                { name: 'Contact', href: '/pages/contact' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="relative text-blue-100 hover:text-white transition-all duration-300 flex items-center group overflow-hidden py-1"
                  >
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-4"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-orange)] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></span>
                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Nos Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--color-orange)]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Menuiserie Aluminium', href: '/services/menuiserie-aluminium' },
                { name: 'Baies Coulissantes', href: '/services/baies-coulissantes' },
                { name: 'Portes d\'Entrée', href: '/services/portes-entree' },
                { name: 'Nos Formations', href: '/formations', className: 'text-[var(--color-orange)] font-medium' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="relative text-blue-100 hover:text-white transition-all duration-300 group overflow-hidden inline-block py-0.5"
                  >
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-2 border-t border-blue-700">
                <Link 
                  href="/services" 
                  className="group relative font-semibold text-white hover:text-[var(--color-orange)] transition-colors duration-300 inline-flex items-center py-1"
                >
                  <span className="relative">
                    Voir tous les services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Contactez-nous
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[var(--color-orange)]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-[var(--color-orange)]" />
                <address className="ml-3 text-blue-100 not-italic">
                  Rond Point CC<br />
                  Douala, Cameroun<br />
                  <span className="text-sm opacity-90">(Entre Ndogkoti et Le Commissariat 8<sup>ème</sup>)</span>
                </address>
              </li>
              <li className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[var(--color-orange)] flex-shrink-0" />
                  <div className="ml-3 space-y-2">
                    <a href="tel:+237694522355" className="group relative text-blue-100 hover:text-white transition-all duration-300 block">
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
                      <span className="relative group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        +237 694 522 355
                      </span>
                    </a>
                    <a href="tel:+237675993229" className="group relative text-blue-100 hover:text-white transition-all duration-300 block">
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
                      <span className="relative group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        +237 675 993 229
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[var(--color-orange)]" />
                <a href="mailto:info@srs.cm" className="group relative ml-3 text-blue-100 hover:text-white transition-all duration-300">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
                <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                    info@srs.cm
                </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Smart Renov. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="/pages/politique-confidentialite" className="group relative text-blue-200 hover:text-white text-sm transition-all duration-300 px-1">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                Politique de confidentialité
              </span>
            </a>
            <a href="/pages/conditions-utilisation" className="group relative text-blue-200 hover:text-white text-sm transition-all duration-300 px-1">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                Conditions d'utilisation
              </span>
            </a>
            <a href="/pages/mentions-legales" className="group relative text-blue-200 hover:text-white text-sm transition-all duration-300 px-1">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                Mentions légales
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
