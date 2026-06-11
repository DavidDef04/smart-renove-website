'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FormationCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  className?: string;
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
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="sr-card__body flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--color-blue)]">
            Formation
          </span>
          <span className="text-xs text-[var(--color-ink-muted)]">{duration}</span>
        </div>
        <h3 className="sr-card__title">{title}</h3>
        <p className="text-sm text-[var(--color-ink-muted)] mb-5 flex-1 line-clamp-3">{description}</p>
        <Link
          href={`/contact?subject=${encodeURIComponent(`Formation: ${title}`)}`}
          className="sr-link"
        >
          Programme
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
