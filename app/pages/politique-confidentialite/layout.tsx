import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité Smart Rénov : traitement des données personnelles sur smartrenov237.com, formulaire contact et droits des utilisateurs.',
  path: '/pages/politique-confidentialite',
  index: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
