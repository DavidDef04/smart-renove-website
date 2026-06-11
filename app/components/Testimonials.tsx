'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './ui/SectionHeader';
import { SITE_IMAGES } from '../data/siteImages';
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: 'Awa Mballa',
    role: 'Propriétaire · Douala',
    content:
      'Rénovation complète à Bonapriso : électricité, carrelage, peinture et menuiseries. Une équipe coordonnée du début à la fin.',
    rating: 5,
    image: SITE_IMAGES.about.main,
  },
  {
    id: 2,
    name: 'Jean-Baptiste Nkoulou',
    role: 'Gérant d\'hôtel · Yaoundé',
    content:
      'Travaux soignés et délais respectés sur la rénovation de nos chambres. Rare et précieux au Cameroun.',
    rating: 5,
    image: SITE_IMAGES.about.tertiary,
  },
  {
    id: 3,
    name: 'Fatimatou Ousmanou',
    role: 'Commerçante · Garoua',
    content:
      'Vitrines installées avec professionnalisme. Finitions impeccables et SAV réactif.',
    rating: 5,
    image: SITE_IMAGES.about.bureau,
  },
  {
    id: 4,
    name: 'Arsène Mbarga',
    role: 'Entrepreneur · Bafoussam',
    content:
      'Rénovation de mon bureau livrée dans les délais. Équipe sérieuse, je recommande.',
    rating: 5,
    image: SITE_IMAGES.about.chantier,
  },
];

export default function Testimonials() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="sr-section sr-section--cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            index="06"
            kicker="Clients"
            align="left"
            className="mb-0"
            title={
              <>
                Ils nous ont fait <em>confiance</em>
              </>
            }
            description="Retours de particuliers et professionnels après rénovation complète ou menuiserie."
          />
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              disabled={isBeginning}
              className="sr-btn sr-btn--ghost !p-3 disabled:opacity-30"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.swiper.slideNext()}
              disabled={isEnd}
              className="sr-btn sr-btn--ghost !p-3 disabled:opacity-30"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="h-full bg-white border border-[var(--color-border)] p-6 flex flex-col" style={{ borderRadius: 'var(--sr-radius-lg)' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  ))}
                </div>
                <blockquote className="text-[var(--color-ink-muted)] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                  <div className="relative h-10 w-10 overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">{t.role}</p>
                  </div>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
