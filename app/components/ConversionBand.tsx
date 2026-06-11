'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE } from '../lib/site';

export default function ConversionBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-night)] py-20 md:py-24">
      <div className="absolute inset-0 mesh-dark noise-overlay" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#06080f]/95 via-[#0a0e18]/90 to-[#06080f]/95"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl rounded-sm border border-white/15 bg-white/[0.06] px-6 py-12 text-center shadow-[0_24px_80px_rgb(0_0_0/0.35)] backdrop-blur-md md:px-12 md:py-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-pill mb-6 mx-auto border-white/25 bg-white/10 text-white">
            Prêt à démarrer ?
          </p>
          <h2 className="font-display mb-5 text-3xl leading-tight text-white drop-shadow-sm md:text-5xl">
            Parlons de votre projet{' '}
            <span className="text-[var(--color-accent)]">dès aujourd&apos;hui</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Devis gratuit, visite sur site à Douala et accompagnement clé en main. Réponse rapide par
            téléphone ou WhatsApp.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary group">
              Demander un devis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sr-btn inline-flex items-center gap-2 border-2 border-white bg-white text-[var(--color-night)] hover:bg-white/90"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp direct
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
