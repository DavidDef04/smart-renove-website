'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SITE } from '../lib/site';

interface FormationCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  className?: string;
}

function formationWhatsAppUrl(title: string) {
  const message = `Bonjour Smart Rénov, je souhaite des informations sur la formation : ${title}.`;
  return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function FormationCard({
  title,
  description,
  duration,
  imageUrl,
  className = '',
}: FormationCardProps) {
  return (
    <motion.article
      className={`sr-card flex flex-col h-full ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="sr-card__media">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="sr-card__body flex flex-col flex-1 text-[var(--color-ink)]">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--color-blue)]">
            Formation
          </span>
          <span className="text-xs font-medium text-[var(--color-ink-muted)]">{duration}</span>
        </div>
        <h3 className="sr-card__title">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-5 flex-1">
          {description}
        </p>
        <a
          href={formationWhatsAppUrl(title)}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-link text-[var(--color-blue)] hover:text-[var(--color-accent)]"
        >
          Nous contacter
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.article>
  );
}
