'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE } from '../lib/site';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-600/40 hover:scale-110 transition-transform pulse-cta"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <Link
        href={`tel:${SITE.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full glass-light text-[var(--color-accent)] shadow-lg hover:scale-105 transition-transform lg:hidden"
        aria-label="Appeler"
      >
        <Phone className="w-5 h-5" />
      </Link>
      <Link
        href={SITE.routes.contact}
        className="btn-primary !py-3 !px-5 text-sm shadow-2xl hidden sm:inline-flex pulse-cta"
      >
        Devis gratuit
      </Link>
    </div>
  );
}
