'use client';

import {
  Wrench,
  Home,
  Layout,
  Zap,
  Grid3x3,
  Paintbrush,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './ui/SectionHeader';
import { servicesData } from '../data/servicesData';
import { SITE, SITE_MESSAGING } from '../lib/site';

const iconComponents = { Wrench, Home, Layout, Zap, Grid3x3, Paintbrush };

const services = servicesData.map((service) => ({
  ...service,
  icon: iconComponents[service.icon as keyof typeof iconComponents] ?? Wrench,
}));

export default function Services() {
  return (
    <section className="sr-section sr-section--white sr-grid-bg">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="04"
          kicker="Métiers"
          title={
            <>
              Tous les corps de <em>métier</em>
            </>
          }
          description={SITE_MESSAGING.servicesIntro}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="sr-card group flex flex-col"
            >
              <div className="sr-card__media">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={service.id <= 2}
                />
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center bg-[var(--color-night)] text-white">
                  <service.icon className="h-4 w-4" aria-hidden />
                </div>
              </div>
              <div className="sr-card__body flex flex-col flex-1">
                <h3 className="sr-card__title">{service.title}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mb-4 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={'href' in service && service.href ? service.href : `/services/${service.slug}`}
                  className="sr-link"
                >
                  Explorer
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-12">
          <Link href={SITE.routes.services} className="sr-btn sr-btn--blue">
            Tous les services
          </Link>
          <Link href={SITE.routes.contact} className="sr-btn sr-btn--ghost">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
