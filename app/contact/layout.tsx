import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact et devis gratuit — Douala',
  description:
    'Contactez Smart Rénov pour un devis rénovation ou menuiserie aluminium à Douala. Téléphone, WhatsApp, e-mail — réponse rapide.',
  path: '/contact',
  keywords: ['devis rénovation Douala', 'contact Smart Rénov', 'WhatsApp rénovation Cameroun'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
