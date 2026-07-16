'use client';

import { motion } from 'framer-motion';
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

const FORMATIONS_WHATSAPP_URL = `${SITE.whatsapp}?text=${encodeURIComponent(
  'Bonjour Smart Rénov, je souhaite des informations sur vos formations professionnelles.',
)}`;

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
        description="Formations pratiques aux métiers du bâtiment — résumé sur le site, détails et inscription en conversation avec notre équipe."
        align="left"
      >
        <a href="#formations" className="sr-btn sr-btn--ghost-light">
          Nos formations
        </a>
        <a
          href={FORMATIONS_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-btn sr-btn--primary"
        >
          Nous contacter
        </a>
      </PageHero>

      <main className="container mx-auto px-4 pb-8">
        <div className="max-w-3xl mx-auto text-center mb-12 pt-4">
          <p className="text-[var(--color-ink-muted)] leading-relaxed">
            Chaque formation est présentée en bref ci-dessous. Pour le programme détaillé, les
            dates et l&apos;inscription, contactez-nous directement sur WhatsApp.
          </p>
        </div>

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

        <section className="mb-16 rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
            Modalités de paiement
          </h2>
          <p className="text-center text-[var(--color-ink-muted)] mb-8 max-w-2xl mx-auto">
            Échéances transparentes pour vos travaux et formations — le détail est confirmé sur devis.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { pct: '50 %', label: 'À la commande' },
              { pct: '30 %', label: 'À mi-parcours' },
              { pct: '20 %', label: 'À la réception' },
            ].map((step) => (
              <div
                key={step.pct}
                className="rounded-2xl bg-[var(--color-surface-soft)] px-6 py-5 text-center border border-gray-100"
              >
                <p className="text-3xl font-bold text-[var(--color-accent)]">{step.pct}</p>
                <p className="mt-2 text-sm font-semibold text-gray-800">{step.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-ink-muted)]">
            Paiement possible par virement bancaire, mobile money ou espèces.
          </p>
        </section>

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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Une question sur nos formations ?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Places limitées par session. Écrivez-nous sur WhatsApp pour connaître les prochaines
            dates à Douala et le détail de chaque programme.
          </p>
          <a
            href={FORMATIONS_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors"
          >
            Nous contacter
          </a>
        </motion.div>

      </main>

      <Footer />
    </motion.div>
  );
}
