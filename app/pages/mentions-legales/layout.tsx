import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site Smart Rénov — entreprise de rénovation et menuiserie à Douala, Cameroun.',
  path: '/pages/mentions-legales',
  index: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
