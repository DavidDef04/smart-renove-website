'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { RENOVATION_TRADES } from '../data/renovationTrades';
import { SITE } from '../lib/site';

export default function RenovationCompleteSection() {
  return (
    <section className="sr-section sr-section--white sr-slice-top">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="01"
          kicker="Rénovation clé en main"
          title={
            <>
              Un seul interlocuteur, <em>tout le chantier</em>
            </>
          }
          description="Smart Rénov coordonne électricité, plomberie, carrelage, peinture et menuiserie pour maisons et locaux commerciaux à Douala."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {RENOVATION_TRADES.map((trade, index) => (
            <motion.div
              key={trade.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="bg-white p-6 group hover:bg-[var(--color-surface-soft)] transition-colors"
            >
              <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--color-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <trade.icon className="h-6 w-6 text-[var(--color-blue)] mt-3 mb-3" />
              <h3 className="font-display font-bold text-base mb-2">{trade.title}</h3>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{trade.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Link href={SITE.routes.renovationComplete} className="sr-btn sr-btn--blue group">
            Rénovation complète
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href={`${SITE.routes.contact}?subject=${encodeURIComponent('Rénovation complète')}`}
            className="sr-btn sr-btn--ghost"
          >
            Devis global
          </Link>
        </div>
      </div>
    </section>
  );
}
