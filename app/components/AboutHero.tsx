'use client';

import Link from 'next/link';
import PageHero from './ui/PageHero';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE } from '../lib/site';

export default function AboutHero() {
  return (
    <PageHero
      index="00"
      kicker="À propos"
      image={SITE_IMAGES.about.main}
      imageAlt="Équipe Smart Rénov à Douala"
      title={
        <>
          L&apos;expertise <em>rénovation</em> au Cameroun
        </>
      }
      description="Plus de 7 ans à transformer maisons et locaux commerciaux à Douala — rénovation clé en main, menuiserie aluminium et coordination de chantier."
    >
      <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary">
        Demander un devis
      </Link>
      <a href="#notre-equipe" className="sr-btn sr-btn--ghost-light">
        Notre équipe
      </a>
    </PageHero>
  );
}
