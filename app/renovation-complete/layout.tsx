import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Rénovation complète clé en main — maison et commerce',
  description:
    'Rénovation complète à Douala : électricité, plomberie, carrelage, peinture, menuiserie aluminium. Maison ou local commercial, un seul interlocuteur — devis gratuit.',
  path: '/renovation-complete',
  keywords: [
    'rénovation complète Douala',
    'rénovation maison Cameroun',
    'rénovation local commercial',
    'clé en main Douala',
  ],
});

export default function RenovationCompleteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
