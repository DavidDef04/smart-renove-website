/** Liens des cartes services vers les pages existantes */
const SERVICE_HREFS: Record<string, string> = {
  menuiserie: '/services/menuiserie-aluminium',
  'baies-coulissantes': '/services/baies-coulissantes',
  renovation: '/renovation-complete',
  securite: '/services/securite',
  agencements: '/services/agencements',
  maintenance: '/services/maintenance',
  'sur-mesure': '/services/menuiserie-aluminium',
  'projets-commerciaux': '/services/facades-vitrees',
  'fourniture-pose': '/services/menuiserie-aluminium',
  serrurerie: '/services/portes-entree',
  'isolation-sonore': '/services/isolation-sonore',
  percolat: '/services/percolat',
};

export function getServiceHref(slug: string, title?: string): string {
  if (SERVICE_HREFS[slug]) return SERVICE_HREFS[slug];
  if (title) {
    return `/contact?service=${encodeURIComponent(title)}`;
  }
  return '/contact';
}
