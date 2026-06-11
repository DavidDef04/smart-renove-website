import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Nos services de rénovation et menuiserie — Douala',
  description:
    'Rénovation complète, menuiserie aluminium, baies coulissantes, électricité, carrelage et peinture à Douala. Un interlocuteur unique — Smart Rénov Cameroun.',
  path: '/services',
  keywords: [
    'services rénovation Douala',
    'menuiserie aluminium Cameroun',
    'travaux second œuvre',
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
