import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Formations métiers du bâtiment — Cameroun',
  description:
    'Formations professionnelles Smart Rénov : électricité, plomberie, carrelage, peinture au Cameroun. Montée en compétences pour artisans et équipes.',
  path: '/formations',
  keywords: ['formation bâtiment Cameroun', 'formation rénovation Douala'],
});

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
