'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { SITE } from '@/app/lib/site';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: 'easeOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: 'easeIn' as const } },
};

const panel = {
  hidden: { opacity: 0, scale: 0.86, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 340, damping: 26, mass: 0.85 },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 18,
    transition: { duration: 0.24, ease: 'easeInOut' as const },
  },
};

const content = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 420, damping: 30 },
  },
};

const iconSpring = {
  hidden: { scale: 0, rotate: -24, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 460, damping: 18, delay: 0.08 },
  },
};

type ContactSubmitModalProps = {
  mode: 'loading' | 'success' | null;
  loadingProgress: number;
  whatsappUrl: string;
  onClose: () => void;
};

export default function ContactSubmitModal({
  mode,
  loadingProgress,
  whatsappUrl,
  onClose,
}: ContactSubmitModalProps) {
  const progress = Math.min(loadingProgress, 100);

  return (
    <AnimatePresence mode="wait">
      {mode === 'loading' ? (
        <motion.div
          key="contact-modal-loading"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-loading-title"
          aria-busy="true"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-[var(--color-night)]/80 backdrop-blur-sm"
            variants={backdrop}
          />
          <motion.div
            className="sr-card relative z-10 max-w-md w-full p-8 text-center shadow-[8px_8px_0_var(--color-night)]"
            variants={panel}
          >
            <motion.div variants={content} initial="hidden" animate="visible" exit="exit">
              <motion.div variants={item} className="mx-auto mb-5 flex h-14 w-14 items-center justify-center">
                <motion.div
                  className="h-14 w-14 rounded-full border-4 border-[var(--color-surface-soft)] border-t-[var(--color-blue)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
                  aria-hidden
                />
              </motion.div>
              <motion.h3 id="contact-loading-title" variants={item} className="sr-heading text-xl">
                Envoi en cours…
              </motion.h3>
              <motion.p variants={item} className="sr-lead mt-3 text-left !text-[var(--color-ink-muted)]">
                Nous transmettons votre demande à notre équipe. Merci de patienter quelques instants.
              </motion.p>
              <motion.div variants={item} className="sr-form-progress mt-6 overflow-hidden">
                <motion.div
                  className="sr-form-progress__bar"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                />
              </motion.div>
              <motion.p variants={item} className="mt-3 text-xs text-[var(--color-ink-muted)]">
                {Math.round(progress)} %
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}

      {mode === 'success' ? (
        <motion.div
          key="contact-modal-success"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-[var(--color-night)]/80 backdrop-blur-sm"
            variants={backdrop}
          />
          <motion.div
            className="sr-card relative z-10 max-w-md w-full p-8 text-center shadow-[8px_8px_0_var(--color-night)]"
            variants={panel}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div variants={content} initial="hidden" animate="visible" exit="exit">
              <motion.div
                variants={iconSpring}
                initial="hidden"
                animate="visible"
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
              >
                <CheckCircle className="h-7 w-7" />
              </motion.div>
              <motion.h3
                id="contact-success-title"
                variants={item}
                className="sr-heading text-2xl text-emerald-700"
              >
                Demande envoyée !
              </motion.h3>
              <motion.p variants={item} className="sr-lead mt-3 text-left !text-[var(--color-ink-muted)]">
                Toutes les informations du formulaire ont été transmises à notre équipe par e-mail.
                Pour une réponse encore plus rapide, vous pouvez aussi confirmer sur WhatsApp.
              </motion.p>
              <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl || SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sr-btn sr-btn--primary flex-1"
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirmer sur WhatsApp
                </a>
                <button type="button" onClick={onClose} className="sr-btn sr-btn--ghost flex-1">
                  Fermer
                </button>
              </motion.div>
              <motion.p variants={item} className="mt-4 text-xs text-[var(--color-ink-muted)]">
                Fermeture automatique dans 12 secondes
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
