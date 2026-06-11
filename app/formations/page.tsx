'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FormationCard from '../components/FormationCard';
import Footer from '../components/Footer';
import PageHero from '../components/ui/PageHero';
import { FORMATIONS } from '../data/formationsData';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE } from '../lib/site';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jean-Paul N.',
    role: 'Poseur menuiserie · Douala',
    content:
      'La formation menuiserie m’a permis de monter en qualité sur les chantiers villas. Contenu concret, adapté au terrain camerounais.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Aïcha M.',
    role: 'Artisan carreleur',
    content:
      'Carrelage et finitions salle de bain : j’ai gagné en précision et en confiance face aux clients. Très utile pour se professionnaliser.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Samuel K.',
    role: 'Électricien indépendant',
    content:
      'Formation électricité claire, avec les bonnes pratiques de sécurité. Je recommande à tout artisan qui veut évoluer.',
    rating: 5,
  },
];

export default function FormationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
    >
      <PageHero
        index="08"
        kicker="Formation · Douala"
        image={SITE_IMAGES.formations.equipe}
        imageAlt="Formation terrain Smart Rénov"
        title={
          <>
            4 formations <em>professionnelles</em>
          </>
        }
        description="Les métiers les plus recherchés sur les chantiers : pratique terrain, cas réels et suivi personnalisé."
        align="left"
      >
        <a href="#formations" className="sr-btn sr-btn--primary">
          Voir le programme
        </a>
        <Link href={SITE.routes.contact} className="sr-btn sr-btn--ghost-light">
          S&apos;inscrire
        </Link>
      </PageHero>

      <main className="container mx-auto px-4 pb-8">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          id="formations"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {FORMATIONS.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <FormationCard
                id={formation.id}
                title={formation.title}
                description={formation.description}
                duration={formation.duration}
                imageUrl={formation.imageUrl}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils ont suivi nos formations
            </h2>
            <motion.div className="w-20 h-1 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{t.content}&rdquo;</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-blue-600">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[var(--color-blue)] to-blue-800 p-10 md:p-12 text-center text-white mb-16"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à vous former ?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Places limitées par session. Contactez-nous pour les prochaines dates à Douala.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={SITE.routes.contact}
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              S&apos;inscrire
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/40 rounded-full hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

      </main>

      <Footer />
    </motion.div>
  );
}
