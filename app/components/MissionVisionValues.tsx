'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Sparkles,
  Clock,
  Leaf,
  Headphones,
  Target,
  Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import {
  COMPANY_MISSION,
  COMPANY_VISION,
  COMPANY_VALUES,
} from '../data/companyIdentity';

const VALUE_ICONS: Record<number, LucideIcon> = {
  1: Award,
  2: Shield,
  3: Sparkles,
  4: Clock,
  5: Leaf,
  6: Headphones,
};

type MissionVisionValuesProps = {
  /** Affiche uniquement mission + vision (accueil) */
  compact?: boolean;
};

export default function MissionVisionValues({ compact = false }: MissionVisionValuesProps) {
  return (
    <section className="sr-section sr-section--white sr-grid-bg">
      <div className="container mx-auto px-4">
        <SectionHeader
          index={compact ? '01' : '03'}
          kicker="Notre identité"
          title={
            <>
              Mission, vision & <em>valeurs</em>
            </>
          }
          description="Ce qui guide chaque chantier Smart Rénov — de la première visite à la livraison clé en main."
        />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          <motion.article
            className="sr-card border-l-4 border-l-[var(--color-accent)] p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-[var(--color-night)] text-[var(--color-accent)]">
                <Target className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-bold">Mission</h3>
            </div>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">{COMPANY_MISSION}</p>
          </motion.article>

          <motion.article
            className="sr-card border-l-4 border-l-[var(--color-blue)] p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-[var(--color-night)] text-[var(--color-blue-bright)]">
                <Eye className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-bold">Vision</h3>
            </div>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">{COMPANY_VISION}</p>
          </motion.article>
        </div>

        {!compact ? (
          <div className="mt-14">
            <h3 className="sr-heading mb-8 text-center text-2xl md:text-3xl">
              Nos <em>valeurs</em>
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {COMPANY_VALUES.map((value, index) => {
                const Icon = VALUE_ICONS[value.id] ?? Award;
                return (
                  <motion.article
                    key={value.id}
                    className="sr-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="sr-header__index !text-xs">{String(value.id).padStart(2, '0')}</span>
                      <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden />
                    </div>
                    <h4 className="sr-card__title mb-2">{value.title}</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                      {value.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
