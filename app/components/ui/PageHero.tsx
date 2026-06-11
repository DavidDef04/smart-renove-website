'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PageHeroProps = {
  kicker?: string;
  index?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};

export default function PageHero({
  kicker,
  index,
  title,
  description,
  image,
  imageAlt = '',
  children,
  align = 'left',
  className = '',
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <section className={`relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-night)] ${className}`}>
      <div className="absolute inset-0 z-0">
        {image ? (
          <>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#06080f]/92 via-[#06080f]/70 to-[#06080f]/45"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/20 to-transparent"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 mesh-dark noise-overlay" aria-hidden />
        )}
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 items-center px-4 pb-12 pt-[var(--site-header-h)]">
          <div
            className={`container mx-auto w-full ${centered ? 'text-center' : 'text-left'}`}
          >
            {(index || kicker) && (
              <motion.div
                className={`sr-header__meta mb-4 ${centered ? 'justify-center' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                {index ? (
                  <span className="sr-header__index border-white/30 text-[var(--color-accent)]">
                    {index}
                  </span>
                ) : null}
                {kicker ? (
                  <span className="label-pill glass inline-flex text-white/90 border-white/20">
                    {kicker}
                  </span>
                ) : null}
              </motion.div>
            )}

            <motion.h1
              className={`font-display !text-white mb-5 max-w-3xl text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05] ${centered ? 'mx-auto' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {title}
            </motion.h1>

            {description ? (
              <motion.p
                className={`mb-8 max-w-xl text-lg leading-relaxed text-white/80 ${centered ? 'mx-auto' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {description}
              </motion.p>
            ) : null}

            {children ? (
              <motion.div
                className={`flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {children}
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
