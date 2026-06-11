'use client';

import { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { SITE } from '../lib/site';
import SocialLinks from './SocialLinks';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('Fr');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full text-white text-sm bg-[var(--color-night)] border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-9 sm:h-10">
          <p className="hidden sm:block text-xs text-white/50 tracking-wide">
            Rénovation clé en main · <span className="text-[var(--color-accent)]">Douala</span>
          </p>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-white/70 hover:text-white text-xs"
                aria-expanded={isOpen}
              >
                <FaGlobe className="text-xs" />
                <span className="uppercase font-medium">{language}</span>
                <FaChevronDown className={`w-2 h-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-xl z-[9999] overflow-hidden">
                  {(['Fr', 'En'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm ${
                        language === lang ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang === 'Fr' ? 'Français' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="h-4 w-px bg-white/15 hidden sm:block" />

            <SocialLinks variant="light" size={14} showYoutube />

            <a
              href={`mailto:${SITE.email}`}
              className="text-white/70 hover:text-white hidden md:block"
              aria-label="Email"
            >
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
