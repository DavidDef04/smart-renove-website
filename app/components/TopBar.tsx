'use client';

import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaWhatsapp, FaEnvelope, FaChevronDown, FaGlobe } from 'react-icons/fa';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('Fr');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Gestion du clic en dehors du menu déroulant
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
    // Ici, vous pourriez ajouter la logique pour changer la langue de l'application
  };

  return (
    <div className="w-full text-white text-sm">
      <div className="flex">
        {/* Partie bleue */}
        <div className="bg-[var(--color-blue)] flex-1">
          <div className="container mx-auto px-4">
            <div className="flex justify-end items-center h-8 sm:h-10 space-x-2 sm:space-x-6">
              {/* Language Selector */}
              <div className="relative z-[9999]" ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 hover:bg-white/20 px-2 sm:px-3 py-1.5 rounded transition-colors"
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  aria-label={`Langue actuelle: ${language === 'Fr' ? 'Français' : 'English'}`}
                >
                  <FaGlobe className="text-xs sm:text-sm" />
                  <span className="uppercase text-xs font-medium mx-1 hidden sm:inline">{language}</span>
                  <FaChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div 
                    className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-[9999] -left-2 sm:left-auto"
                    role="listbox"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => changeLanguage('Fr')}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center ${language === 'Fr' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                        role="option"
                        aria-selected={language === 'Fr'}
                      >
                        <span className="mr-2">🇫🇷</span>
                        <span className="text-sm">Français</span>
                        {language === 'Fr' && <span className="ml-auto text-blue-500">✓</span>}
                      </button>
                      <button
                        onClick={() => changeLanguage('En')}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center ${language === 'En' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                        role="option"
                        aria-selected={language === 'En'}
                      >
                        <span className="mr-2">🇬🇧</span>
                        <span className="text-sm">English</span>
                        {language === 'En' && <span className="ml-auto text-blue-500">✓</span>}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Divider - caché sur mobile */}
              <div className="h-5 w-px bg-white/30 hidden sm:block"></div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <a 
                  href="https://www.facebook.com/people/Smart-renov-service/100083125284788" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors p-1 sm:p-0"
                  aria-label="Page Facebook Smart Rénov"
                  title="Visitez notre page Facebook"
                >
                  <FaFacebook size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@smartrenov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors p-1 sm:p-0"
                  aria-label="Chaîne YouTube Smart Rénov"
                  title="Visitez notre chaîne YouTube"
                >
                  <FaYoutube size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="https://wa.me/237694522355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors p-1 sm:p-0"
                  aria-label="Contactez-nous sur WhatsApp"
                  title="Contactez-nous sur WhatsApp"
                >
                  <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a 
                  href="mailto:info@srs.cm" 
                  className="hover:text-gray-200 transition-colors p-1 sm:p-0"
                  aria-label="Envoyez-nous un email"
                  title="Envoyez-nous un email"
                >
                  <FaEnvelope size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partie orange - responsive */}
        <div className="bg-[var(--color-orange)] w-20 sm:w-32 flex items-center justify-center">
          {/* Vous pouvez ajouter du contenu ici si nécessaire */}
        </div>
      </div>
    </div>
  );
}
