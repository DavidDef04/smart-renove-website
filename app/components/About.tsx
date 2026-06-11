'use client';

import { Phone, MessageCircle, Award, Shield, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './ui/SectionHeader';
import { COMPANY_VALUES } from '../data/companyIdentity';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE, SITE_MESSAGING } from '../lib/site';

const highlightIcons = [Award, Shield, Clock];
const strengths = COMPANY_VALUES.filter((v) => [1, 2, 4].includes(v.id)).map((value, index) => ({
  icon: highlightIcons[index] ?? Award,
  title: value.title,
  description: value.description,
}));

export default function About() {
  return (
    <section id="notre-equipe" className="sr-section sr-section--cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-[calc(var(--site-header-h)+2rem)]">
            <SectionHeader
              index="02"
              kicker="Smart Rénov"
              align="left"
              title={
                <>
                  Rénovation <em>clé en main</em> à Douala
                </>
              }
              description={`${SITE_MESSAGING.mission} Plus de 7 ans d'expérience à Douala au service des particuliers et professionnels.`}
            />

            <div className="space-y-4 mb-8">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-white border border-[var(--color-border)]"
                  style={{ borderRadius: 'var(--sr-radius-lg)' }}
                >
                  <item.icon className="h-5 w-5 shrink-0 text-[var(--color-accent)] mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm tracking-wide uppercase mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={SITE.routes.renovationComplete} className="sr-btn sr-btn--primary">
                Rénovation complète
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link href={SITE.routes.contact} className="sr-btn sr-btn--ghost">
                Contact
              </Link>
            </div>

            <a
              href={`tel:${SITE.phone}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-3">
            <div className="col-span-12 sm:col-span-8 relative aspect-[4/3] overflow-hidden border border-[var(--color-border)]">
              <Image
                src={SITE_IMAGES.about.main}
                alt="Équipe Smart Rénov sur chantier"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute bottom-0 left-0 bg-[var(--color-night)] text-white px-4 py-2 text-xs font-bold tracking-widest uppercase">
                7+ ans
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 relative aspect-square overflow-hidden border border-[var(--color-border)]">
              <Image
                src={SITE_IMAGES.about.secondary}
                alt="Atelier menuiserie aluminium"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="col-span-6 sm:col-span-4 relative aspect-square overflow-hidden border border-[var(--color-border)]">
              <Image
                src={SITE_IMAGES.equipe}
                alt="Équipe Smart Rénov"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="col-span-12 sm:col-span-4 relative aspect-[3/2] overflow-hidden border border-[var(--color-accent)]">
              <Image
                src={SITE_IMAGES.about.tertiary}
                alt="Projet en cours"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/70 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                Chantier livré clé en main
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
