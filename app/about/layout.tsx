import type { Metadata } from 'next';
import { COMPANY_MISSION } from '@/app/data/companyIdentity';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'À propos — Entreprise de rénovation à Douala',
  description: `${COMPANY_MISSION} Découvrez notre vision, nos valeurs et notre équipe à Douala.`,
  path: '/about',
  keywords: ['entreprise rénovation Douala', 'qui sommes-nous Smart Rénov'],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
