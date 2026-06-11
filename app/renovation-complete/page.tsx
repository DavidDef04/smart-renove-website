'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  MoveRight,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Footer from '../components/Footer';
import PageHero from '../components/ui/PageHero';
import {
  RENOVATION_FAQS,
  RENOVATION_PROCESS,
  RENOVATION_TRADES,
} from '../data/renovationTrades';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE } from '../lib/site';

export default function RenovationCompletePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        index="01"
        kicker="Rénovation clé en main"
        image={SITE_IMAGES.services.renovation}
        imageAlt="Rénovation complète Smart Rénov"
        title={
          <>
            Maison & local <em>transformés</em>
          </>
        }
        description="Un seul interlocuteur pour coordonner électricité, plomberie, carrelage, peinture et menuiserie — devis à livraison."
        align="left"
      >
        <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary">
          Devis gratuit
        </Link>
        <a href={`tel:${SITE.phone}`} className="sr-btn sr-btn--ghost-light">
          <Phone className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>
      </PageHero>

      <section className="sr-section sr-section--white container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tout ce qu&apos;il faut pour{' '}
            <span className="text-[var(--color-orange)]">rénover un bien de A à Z</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Que vous réhabilitiez une maison, un appartement ou un local commercial, Smart Rénov
            mobilise ses équipes et ses partenaires pour livrer un projet cohérent : finitions,
            conformité, délais et suivi chantier inclus.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            {
              icon: Users,
              title: 'Un interlocuteur unique',
              text: 'Coordination de tous les corps de métier sans stress pour vous.',
            },
            {
              icon: Hammer,
              title: 'Savoir-faire multi-métiers',
              text: 'Menuiserie, second œuvre et finitions maîtrisées par nos équipes.',
            },
            {
              icon: Shield,
              title: 'Qualité & garantie',
              text: 'Matériaux sélectionnés et contrôle à chaque étape du chantier.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm"
            >
              <motion.div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center text-[var(--color-blue)]">
                <item.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-14">
            <span className="text-[var(--color-blue)] font-semibold uppercase tracking-wide text-sm">
              Nos métiers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Une offre complète pour chaque pièce
            </h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-orange)] mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENOVATION_TRADES.map((trade, index) => (
              <motion.article
                key={trade.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-amber-500 flex items-center justify-center text-white mb-4"
                  whileHover={{ rotate: 5 }}
                >
                  <trade.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{trade.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{trade.description}</p>
                <ul className="space-y-1.5">
                  {trade.highlights.map((h) => (
                    <li key={h} className="flex items-start text-xs text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <motion.div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre méthode en 5 étapes
          </h2>
          <ul className="space-y-0">
            {RENOVATION_PROCESS.map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative flex gap-4 pb-10"
              >
                {index < RENOVATION_PROCESS.length - 1 && (
                  <span className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-200" aria-hidden />
                )}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-orange)] text-white font-bold flex items-center justify-center text-sm z-10">
                  {index + 1}
                </span>
                <p className="text-gray-800 pt-1">{step}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50">
        <motion.div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Questions fréquentes</h2>
          <dl className="space-y-4">
            {RENOVATION_FAQS.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[var(--color-blue)] to-blue-700 text-white p-10 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à lancer votre rénovation ?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Décrivez-nous votre projet : nous vous proposons un devis détaillé et un planning
            adapté à votre budget et vos délais.
          </p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`${SITE.routes.contact}?subject=${encodeURIComponent('Rénovation complète (maison)')}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-blue)] font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              Obtenir mon devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href={SITE.routes.realisations}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
