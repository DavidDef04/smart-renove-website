import { redirect } from 'next/navigation';
import { SITE } from '@/app/lib/site';

export default function LegacyRealisationsPage() {
  redirect(SITE.routes.realisations);
}
