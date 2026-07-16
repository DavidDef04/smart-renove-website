'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/app/components/Footer';
import ConversionBand from '@/app/components/ConversionBand';
import { SITE } from '@/app/lib/site';

type LegalPageShellProps = {
  index: string;
  kicker: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  updatedNote?: string;
};

export default function LegalPageShell({
  index,
  kicker,
  title,
  description,
  children,
  updatedNote,
}: LegalPageShellProps) {
  const updated =
    updatedNote ??
    `Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-soft)]">
      <section className="relative isolate overflow-hidden bg-[var(--color-night)]">
        <div className="absolute inset-0 mesh-dark noise-overlay" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#06080f]/90 via-[#06080f]/55 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[48svh] flex-col justify-center px-4 pb-14 pt-[calc(var(--site-header-h)+1.5rem)] sm:pb-16">
          <div className="container mx-auto w-full max-w-3xl">
            <motion.div
              className="sr-header__meta mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="sr-header__index border-white/30 text-[var(--color-accent)]">
                {index}
              </span>
              <span className="label-pill glass inline-flex border-white/20 text-white/90">
                {kicker}
              </span>
            </motion.div>
            <motion.h1
              className="font-display mb-4 max-w-3xl !text-white text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary">
                Nous contacter
              </Link>
              <Link href={SITE.routes.home} className="sr-btn sr-btn--ghost-light">
                Retour à l&apos;accueil
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-3xl space-y-10 md:space-y-12">{children}</div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-[var(--color-ink-muted)]">
            {updated}
          </p>
        </div>
      </main>

      <ConversionBand />
      <Footer />
    </div>
  );
}

type LegalSectionProps = {
  title: string;
  children: ReactNode;
  dark?: boolean;
};

export function LegalSection({ title, children, dark = false }: LegalSectionProps) {
  return (
    <section
      className={
        dark
          ? 'border border-white/10 bg-[var(--color-night)] p-6 text-white sm:p-8'
          : 'border border-[var(--color-border)] bg-white p-6 sm:p-8'
      }
      style={{ borderRadius: 'var(--sr-radius-lg)' }}
    >
      <h2
        className={`font-display mb-5 text-2xl font-bold sm:text-3xl ${
          dark ? 'text-white' : 'text-[var(--color-ink)]'
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

type LegalInfoRow = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export function LegalInfoRow({ icon, label, value }: LegalInfoProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">{icon}</span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--color-ink)]">{label}</p>
        <p className="text-[var(--color-ink-muted)]">{value}</p>
      </div>
    </div>
  );
}

type LegalFactProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function LegalFact({ icon, title, description }: LegalFactProps) {
  return (
    <div
      className="border border-[var(--color-border)] bg-white p-5"
      style={{ borderRadius: 'var(--sr-radius)' }}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center bg-[var(--color-night)] text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="mb-1.5 font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{description}</p>
    </div>
  );
}
