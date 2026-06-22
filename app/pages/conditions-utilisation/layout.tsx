import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Conditions d\'utilisation',
  description: 'Conditions générales d\'utilisation du site Smart Rénov (smartrenov237.com) — rénovation et menuiserie à Douala.',
  path: '/pages/conditions-utilisation',
  index: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
