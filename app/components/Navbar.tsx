'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/pages/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Menuiserie Aluminium', href: '/services/menuiserie-aluminium' },
        { name: 'Baies Coulissantes', href: '/services/baies-coulissantes' },
        { name: 'Portes d\'Entrée', href: '/services/portes-entree' },
        { name: 'Nos Formations', href: '/formations', className: 'border-t border-gray-200 mt-2 pt-2' },
        { name: 'Voir tous les services', href: '/services', className: 'font-bold' }
      ]
    },
    { 
      name: 'Réalisations', 
      href: '/pages/realisations'
    },
    { 
      name: 'Nous contacter', 
      href: '/contact',
      isContact: true
    },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-3 sm:py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/favicon.png" 
              alt="Smart Renov Logo" 
              width={40} 
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="hidden sm:block text-xl sm:text-2xl font-bold text-color-black">
              Smart_<span className="text-[var(--color-orange)]">Renov</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={`${link.isContact ? 'bg-(--color-blue) text-white px-3 sm:px-4 py-2 rounded-md hover:bg-opacity-90' : 'text-color-black hover:text-(--color-orange)'} transition-colors font-semibold text-sm sm:text-base`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-56 sm:w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 text-color-black hover:bg-(--color-orange) hover:text-white transition-colors font-semibold text-sm ${subItem.className || ''}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={`${link.isContact ? 'bg-(--color-blue) text-white px-3 py-2 rounded-md hover:bg-opacity-90' : 'text-color-black hover:text-(--color-orange)'} transition-colors font-semibold text-sm`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 text-color-black hover:bg-(--color-orange) hover:text-white transition-colors font-semibold text-sm ${subItem.className || ''}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-color-black focus:outline-none hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    href={link.href}
                    className={`block py-2 px-4 rounded-md ${link.isContact ? 'bg-(--color-blue) text-white hover:bg-opacity-90' : 'text-color-black hover:text-(--color-orange)'} transition-colors font-semibold text-sm sm:text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && isOpen && (
                    <div className="ml-4 mt-2 space-y-1 sm:space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-1 px-2 text-color-black hover:text-(--color-orange) transition-colors text-xs sm:text-sm font-semibold ${subItem.className || ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
