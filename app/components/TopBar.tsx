'use client';

import { useState } from 'react';
import { FaFacebook, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function TopBar() {
  const [language, setLanguage] = useState('Fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'Fr' ? 'En' : 'Fr');
  };

  return (
    <div className="w-full text-white text-sm">
      <div className="flex">
        {/* Partie bleue */}
        <div className="bg-[var(--color-blue)] flex-1">
          <div className="container mx-auto px-4">
            <div className="flex justify-end items-center h-10 space-x-6">
              {/* Language Selector */}
              <div className="flex items-center">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                  aria-label="Changer de langue"
                >
                  <span className="uppercase text-xs font-medium">{language}</span>
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
              </div>
              
              {/* Divider */}
              <div className="h-5 w-px bg-white/30"></div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.facebook.com/people/Smart-renov-service/100083125284788" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors"
                  aria-label="Page Facebook Smart Rénov"
                  title="Visitez notre page Facebook"
                >
                  <FaFacebook size={16} />
                </a>
                <a 
                  href="https://www.youtube.com/@smartrenov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors"
                  aria-label="Chaîne YouTube Smart Rénov"
                  title="Visitez notre chaîne YouTube"
                >
                  <FaYoutube size={16} />
                </a>
                <a 
                  href="https://wa.me/237694522355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors"
                  aria-label="Contactez-nous sur WhatsApp"
                  title="Contactez-nous sur WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a 
                  href="mailto:info@srs.cm" 
                  className="hover:text-gray-200 transition-colors"
                  aria-label="Envoyez-nous un email"
                  title="Envoyez-nous un email"
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partie orange */}
        <div className="bg-[var(--color-orange)] w-32 flex items-center justify-center">
          {/* Vous pouvez ajouter du contenu ici si nécessaire */}
        </div>
      </div>
    </div>
  );
}
