import StructuredData from '@/app/components/StructuredData';
import { serviceBreadcrumbJsonLd } from '@/app/lib/seo';

type Props = {
  serviceName: string;
  slug: string;
};

export function ServiceBreadcrumbLd({ serviceName, slug }: Props) {
  return <StructuredData data={serviceBreadcrumbJsonLd(serviceName, slug)} />;
}
