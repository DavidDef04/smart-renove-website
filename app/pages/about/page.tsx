import { redirect } from 'next/navigation';
import { SITE } from '@/app/lib/site';

export default function LegacyAboutPage() {
  redirect(SITE.routes.about);
}
