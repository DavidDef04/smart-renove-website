'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE } from '../lib/site';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const onDarkHero = isHome && !scrolled && !isOpen;
  const solidHeader = scrolled || !isHome || isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: SITE.routes.about },
    { name: 'Rénovation', href: SITE.routes.renovationComplete },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Rénovation clé en main', href: SITE.routes.renovationComplete, className: 'text-[var(--color-accent)] font-semibold' },
        { name: 'Menuiserie aluminium', href: '/services/menuiserie-aluminium' },
        { name: 'Baies coulissantes', href: '/services/baies-coulissantes' },
        { name: 'Formations pro', href: '/formations', className: 'border-t border-gray-100 mt-2 pt-2' },
        { name: 'Tous les services →', href: '/services', className: 'font-bold' },
      ],
    },
    { name: 'Réalisations', href: SITE.routes.realisations },
    { name: 'Contact', href: SITE.routes.contact, isContact: true },
  ];

  const linkClass = onDarkHero
    ? 'text-white/85 hover:text-white'
    : 'text-ink hover:text-[var(--color-accent)]';

  const headerSurface = solidHeader
    ? 'bg-white border-b border-[var(--color-border)] shadow-[0_4px_24px_rgb(6_8_15/0.08)] py-2 sm:py-3'
    : 'bg-[var(--color-night)]/96 backdrop-blur-xl border-b border-white/10 py-3';

  return (
    <header className={`w-full transition-all duration-300 ${headerSurface}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                {...(link.submenu ? { 'aria-haspopup': 'true' as const } : {})}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    link.isContact
                      ? 'sr-btn sr-btn--primary !py-2 !px-4 !text-xs ml-2'
                      : linkClass
                  }`}
                >
                  {link.name}
                  {link.submenu ? (
                    <ChevronDown
                      className="h-4 w-4 shrink-0 opacity-75 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  ) : null}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-56 bg-white py-1 shadow-[4px_4px_0_var(--color-night)] border-2 border-[var(--color-night)]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-sm text-ink hover:bg-[var(--color-surface-soft)] transition-colors ${sub.className || ''}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg ${onDarkHero ? 'text-white' : 'text-ink'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-3 -mx-4 border-t border-[var(--color-border)] bg-white px-4 pb-5 pt-3 shadow-[inset_0_8px_16px_-12px_rgb(6_8_15/0.12)]">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between py-2.5 px-3 font-semibold ${
                    link.isContact ? 'sr-btn sr-btn--primary !justify-center mt-2' : 'text-ink hover:text-[var(--color-accent)]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.submenu ? (
                    <ChevronDown className="h-4 w-4 shrink-0 text-[var(--color-ink-muted)]" aria-hidden />
                  ) : null}
                </Link>
                {link.submenu?.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="block py-2 pl-6 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
