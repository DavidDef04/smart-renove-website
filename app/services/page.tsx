'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  Ruler,
  Key,
  ShieldCheck,
  Building2,
  Home,
  Settings,
  Layout,
  Hammer,
  HardHat,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import Testimonials from '../components/Testimonials';
import PageHero from '../components/ui/PageHero';
import { SITE } from '../lib/site';
import { getServiceHref } from '../lib/serviceRoutes';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE_MESSAGING } from '../lib/site';

const { services: svc, gallery } = SITE_IMAGES;

const services = [
  {
    id: 1,
    title: 'Menuiserie aluminium',
    description:
      'Fenêtres, portes et façades en aluminium sur mesure — esthétique moderne et performance durable.',
    icon: Wrench,
    image: svc.menuiserie,
    slug: 'menuiserie',
  },
  {
    id: 2,
    title: 'Baies coulissantes',
    description:
      'Grandes ouvertures pour relier intérieur et extérieur — lumière, confort et finitions premium.',
    icon: Layout,
    image: svc.baies,
    slug: 'baies-coulissantes',
  },
  {
    id: 3,
    title: 'Solutions sur mesure',
    description:
      'Créations uniques adaptées à votre bien — de la conception à la pose par nos équipes.',
    icon: Ruler,
    image: gallery.menuiserie[0],
    slug: 'sur-mesure',
  },
  {
    id: 4,
    title: 'Projets commerciaux',
    description:
      'Vitrines, façades et aménagements pour locaux professionnels — image de marque soignée.',
    icon: Building2,
    image: SITE_IMAGES.hero.slide2,
    slug: 'projets-commerciaux',
  },
  {
    id: 5,
    title: 'Rénovation complète',
    description:
      'Transformation clé en main de votre maison ou local — tous corps de métier coordonnés.',
    icon: Home,
    image: svc.renovation,
    slug: 'renovation',
  },
  {
    id: 6,
    title: 'Sécurité renforcée',
    description:
      'Portes, vitrages et systèmes de verrouillage pour protéger votre bien sans sacrifier le design.',
    icon: ShieldCheck,
    image: svc.securite,
    slug: 'securite',
  },
  {
    id: 8,
    title: 'Fourniture et pose',
    description:
      'Menuiseries aluminium vitrées fournies et posées par nos équipes qualifiées.',
    icon: Hammer,
    image: gallery.menuiserie[1],
    slug: 'fourniture-pose',
  },
  {
    id: 9,
    title: 'Serrurerie',
    description:
      'Dépannage, changement de serrures et blindage — sécurité adaptée à chaque ouverture.',
    icon: Key,
    image: gallery.menuiserie[2],
    slug: 'serrurerie',
  },
  {
    id: 10,
    title: 'Agencements intérieurs',
    description:
      'Cloisons vitrées et séparations sur mesure pour optimiser lumière et circulation.',
    icon: Settings,
    image: svc.agencement,
    slug: 'agencements',
  },
  {
    id: 11,
    title: 'Maintenance & SAV',
    description:
      'Entretien préventif et dépannage rapide pour prolonger la vie de vos installations.',
    icon: HardHat,
    image: svc.maintenance,
    slug: 'maintenance',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <PageHero
          index="03"
          kicker="Services · Douala"
          image={svc.heroServices}
          imageAlt="Rénovation et travaux Smart Rénov"
          title={
            <>
              Rénovation complète <em className="text-[var(--color-accent)] not-italic">de A à Z</em>
            </>
          }
          description="Électricité, plomberie, carrelage, peinture, menuiserie et coordination de chantier — un interlocuteur unique pour chaque projet."
          align="left"
        >
          <a href="#services" className="sr-btn sr-btn--primary">
            Nos métiers
          </a>
          <Link href={SITE.routes.contact} className="sr-btn sr-btn--ghost-light">
            Demander un devis
          </Link>
        </PageHero>

        <section id="services" className="sr-section sr-section--white sr-grid-bg">
          <div className="container mx-auto px-4">
            <SectionHeader
              index="03"
              kicker="Métiers"
              title={
                <>
                  Tous nos <em>services</em>
                </>
              }
              description={SITE_MESSAGING.servicesIntro}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => (
                <motion.article
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="sr-card group flex flex-col scroll-mt-28"
                >
                  <div className="sr-card__media">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={service.id <= 3}
                    />
                    <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center bg-[var(--color-night)] text-white">
                      <service.icon className="h-4 w-4" aria-hidden />
                    </div>
                  </div>
                  <div className="sr-card__body flex flex-col flex-1">
                    <h2 className="sr-card__title">{service.title}</h2>
                    <p className="text-sm text-[var(--color-ink-muted)] mb-4 flex-1 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={getServiceHref(service.slug, service.title)}
                      className="sr-link"
                    >
                      En savoir plus
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="sr-heading text-2xl mb-3">Un projet en tête ?</h2>
              <p className="sr-lead mb-6 max-w-xl mx-auto">
                Notre équipe vous accompagne de l&apos;étude à la livraison — devis gratuit sous 48h.
              </p>
              <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary">
                Nous contacter
              </Link>
            </div>

            <div className="mt-20">
              <Testimonials />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
