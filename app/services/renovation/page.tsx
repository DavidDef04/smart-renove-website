import { redirect } from 'next/navigation';
import { SITE } from '@/app/lib/site';

export default function LegacyRenovationServicePage() {
  redirect(SITE.routes.renovationComplete);
}
