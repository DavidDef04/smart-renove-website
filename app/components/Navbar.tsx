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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/favicon.png" 
              alt="Smart Renov Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="hidden sm:block text-2xl font-bold text-color-black">
              Smart_<span className="text-[var(--color-orange)]">Renov</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={`${link.isContact ? 'bg-[var(--color-blue)] text-white px-4 py-2 rounded-md hover:bg-opacity-90' : 'text-color-black hover:text-[var(--color-orange)]'} transition-colors font-medium font-semibold`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-color-black hover:bg-[var(--color-orange)] hover:text-white transition-colors font-semibold"
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
            className="md:hidden p-2 text-color-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    href={link.href}
                    className={`block py-2 px-4 rounded-md ${link.isContact ? 'bg-[var(--color-blue)] text-white hover:bg-opacity-90' : 'text-color-black hover:text-[var(--color-orange)]'} transition-colors font-medium font-semibold`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && isOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-color-black hover:text-[var(--color-orange)] transition-colors text-sm font-semibold"
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
