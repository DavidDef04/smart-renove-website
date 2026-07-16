'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE } from '../lib/site';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) setServicesOpen(false);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: SITE.routes.about },
    { name: 'Rénovation', href: SITE.routes.renovationComplete },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        {
          name: 'Rénovation clé en main',
          href: SITE.routes.renovationComplete,
          className: 'text-[var(--color-accent)] font-semibold',
        },
        { name: 'Menuiserie aluminium', href: '/services/menuiserie-aluminium' },
        { name: 'Baies coulissantes', href: '/services/baies-coulissantes' },
        {
          name: 'Formations pro',
          href: '/formations',
          className: 'border-t border-gray-100 mt-2 pt-2',
        },
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
        <div className="flex items-center justify-between">
          <Logo size="md" />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="group relative"
                {...(link.submenu ? { 'aria-haspopup': 'true' as const } : {})}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    link.isContact
                      ? 'sr-btn sr-btn--primary !ml-2 !px-4 !py-2 !text-xs'
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
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-56 border-2 border-[var(--color-night)] bg-white py-1 shadow-[4px_4px_0_var(--color-night)]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-[var(--color-surface-soft)] ${sub.className || ''}`}
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
            className={`rounded-lg p-2 lg:hidden ${onDarkHero ? 'text-white' : 'text-ink'}`}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.nav
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="-mx-4 mt-3 border-t border-[var(--color-border)] bg-white px-4 pb-5 pt-3 shadow-[inset_0_8px_16px_-12px_rgb(6_8_15/0.12)]"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25 }}
                  >
                    {link.submenu ? (
                      <div>
                        <div className="flex items-center">
                          <Link
                            href={link.href}
                            className="flex-1 py-2.5 px-3 font-semibold text-ink hover:text-[var(--color-accent)]"
                            onClick={closeMenu}
                          >
                            {link.name}
                          </Link>
                          <button
                            type="button"
                            className="p-2 text-[var(--color-ink-muted)]"
                            aria-label={
                              servicesOpen
                                ? 'Fermer le sous-menu Services'
                                : 'Ouvrir le sous-menu Services'
                            }
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen((open) => !open)}
                          >
                            <motion.span
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              className="block"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.span>
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {servicesOpen ? (
                            <motion.div
                              key="services-submenu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-1 pl-2">
                                {link.submenu.map((sub, subIndex) => (
                                  <motion.div
                                    key={sub.name}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.03 * subIndex, duration: 0.2 }}
                                  >
                                    <Link
                                      href={sub.href}
                                      className={`block py-2 pl-4 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] ${sub.className || ''}`}
                                      onClick={closeMenu}
                                    >
                                      {sub.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-2.5 px-3 font-semibold ${
                          link.isContact
                            ? 'sr-btn sr-btn--primary mt-2 !justify-center'
                            : 'text-ink hover:text-[var(--color-accent)]'
                        }`}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
