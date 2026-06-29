'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { REALISATIONS } from '../data/realisationsData';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE } from '../lib/site';
import Footer from './Footer';
import PageHero from './ui/PageHero';

export default function RealisationsGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[var(--color-surface-soft)]"
    >
      <PageHero
        index="07"
        kicker="Portfolio"
        image={SITE_IMAGES.realisations[0].image}
        imageAlt="Pose carrelage Smart Rénov"
        title={
          <>
            Nos <em>réalisations</em>
          </>
        }
        description="Rénovation complète, menuiserie aluminium et second œuvre — projets livrés au Cameroun avec suivi chantier rigoureux."
        align="left"
      >
        <a href="#nos-projets" className="sr-btn sr-btn--primary">
          Voir nos projets
        </a>
        <Link href={SITE.routes.contact} className="sr-btn sr-btn--ghost-light">
          Parler de votre projet
        </Link>
      </PageHero>

      <section id="nos-projets" className="sr-section sr-section--white px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projets récents</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection de chantiers résidentiels et professionnels réalisés par notre équipe.
            </p>
            <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REALISATIONS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-1"
              >
                <motion.div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-soft)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-[var(--color-blue)]/90 backdrop-blur-sm rounded-full">
                    {project.category}
                  </span>
                </motion.div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 text-[var(--color-orange)]" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Link
                    href={SITE.routes.contact}
                    className="inline-flex items-center text-[var(--color-blue)] font-semibold hover:text-[var(--color-orange)] transition-colors"
                  >
                    Projet similaire
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-20 text-center rounded-3xl bg-gradient-to-br from-[var(--color-blue)] to-blue-800 p-10 md:p-14 text-white shadow-xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Votre projet mérite le même niveau d&apos;exigence</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Devis gratuit, visite sur site à Douala et accompagnement clé en main pour particuliers
              et professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SITE.routes.contact}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-orange)] hover:bg-orange-500 font-semibold rounded-full transition-all hover:scale-[1.02]"
              >
                Demander un devis
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-full backdrop-blur-sm transition-all"
              >
                WhatsApp direct
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
