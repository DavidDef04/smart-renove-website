'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { SITE_IMAGES } from '../data/siteImages';
import { SITE } from '../lib/site';

const slides = [
  {
    id: 0,
    tag: 'Clé en main',
    title: 'Votre maison',
    highlight: 'transformée.',
    description:
      "Rénovation complète à Douala : un seul interlocuteur pour l'électricité, la plomberie, le carrelage, la peinture et la menuiserie.",
    image: SITE_IMAGES.hero.slide1,
    imageAlt: 'Rénovation complète de maison à Douala — Smart Rénov Cameroun',
    cta: '/renovation-complete',
  },
  {
    id: 1,
    tag: 'Second œuvre',
    title: 'Des espaces',
    highlight: 'qui inspirent.',
    description:
      'Finitions soignées, réseaux conformes et délais tenus — pour particuliers et professionnels au Cameroun.',
    image: SITE_IMAGES.hero.slide2,
    imageAlt: 'Travaux de second œuvre et finitions intérieures à Douala',
    cta: '/renovation-complete',
  },
  {
    id: 2,
    tag: 'Menuiserie',
    title: 'Ouvertures',
    highlight: 'sur mesure.',
    description:
      "Fenêtres, baies coulissantes et façades aluminium : l'expertise Smart Rénov pour sublimer votre bien.",
    image: SITE_IMAGES.hero.slide3,
    imageAlt: 'Baies coulissantes et menuiserie aluminium sur mesure à Douala',
    cta: '/services/menuiserie-aluminium',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active] ?? slides[0];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[EffectFade, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          className="h-full w-full"
          onSlideChange={(s) => setActive(s.realIndex)}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative h-[100svh] w-full">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  priority={s.id === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06080f]/92 via-[#06080f]/70 to-[#06080f]/45" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/20 to-transparent" aria-hidden />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-20 flex min-h-[100svh] flex-col pointer-events-none">
        <div className="flex flex-1 items-center px-4 pb-12 pt-[var(--site-header-h)] pointer-events-auto">
          <div className="container mx-auto w-full">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
              <motion.div
                key={slide.id}
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="label-pill glass mb-5 inline-flex text-white/90 border-white/20">
                  <span className="h-2 w-2 bg-[var(--color-accent)] animate-pulse" />
                  {slide.tag} · Douala
                </span>

                <h1 className="font-display !text-white mb-5 max-w-2xl text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05]">
                  {slide.title}
                  <br />
                  <span className="text-[var(--color-accent)]">{slide.highlight}</span>
                </h1>

                <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">{slide.description}</p>

                <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={SITE.routes.contact} className="sr-btn sr-btn--primary group">
                    Devis gratuit
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href={slide.cta} className="sr-btn sr-btn--ghost-light">
                    Découvrir l&apos;offre
                  </Link>
                </div>

                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-3 text-white transition-colors hover:bg-white/10"
                  style={{ borderRadius: 'var(--sr-radius)' }}
                >
                  <span className="flex h-10 w-10 items-center justify-center bg-[var(--color-accent)]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/60">Appelez</span>
                    <span className="text-lg font-bold">{SITE.phoneDisplay}</span>
                  </span>
                </a>
              </motion.div>

              <motion.div
                className="hidden lg:col-span-5 lg:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="glass p-6 space-y-2" style={{ borderRadius: 'var(--sr-radius-lg)' }}>
                  {[
                    { icon: Shield, label: 'Chantier garanti', sub: 'Suivi de A à Z' },
                    { icon: Clock, label: 'Devis sous 48h', sub: 'Réponse rapide' },
                    { icon: MapPin, label: 'Basé à Douala', sub: 'Tout le Cameroun' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center gap-4 border border-white/10 bg-white/5 p-4"
                      style={{ borderRadius: 'var(--sr-radius)' }}
                    >
                      <row.icon className="h-7 w-7 shrink-0 text-[var(--color-accent)]" />
                      <div>
                        <p className="font-bold text-white text-sm">{row.label}</p>
                        <p className="text-xs text-white/55">{row.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
