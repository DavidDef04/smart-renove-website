import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'À propos — Entreprise de rénovation à Douala',
  description:
    'Découvrez Smart Rénov : équipe locale, rénovation clé en main et menuiserie aluminium à Douala. Expérience, qualité et suivi de chantier au Cameroun.',
  path: '/about',
  keywords: ['entreprise rénovation Douala', 'qui sommes-nous Smart Rénov'],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
