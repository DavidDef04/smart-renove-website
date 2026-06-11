import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Réalisations rénovation et menuiserie — Douala',
  description:
    'Photos et projets Smart Rénov : rénovation complète, menuiserie aluminium, chantiers résidentiels et commerciaux à Douala et au Cameroun.',
  path: '/realisations',
  keywords: ['réalisations rénovation Douala', 'chantier menuiserie Cameroun', 'portfolio Smart Rénov'],
});

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
