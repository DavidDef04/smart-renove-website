import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Répertoire du site (évite que Turbopack prenne le parent `Mes_Projets` à cause d’un autre package-lock) */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      { source: '/pages/realisations', destination: '/realisations', permanent: true },
      { source: '/pages/about', destination: '/about', permanent: true },
      { source: '/pages/contact', destination: '/contact', permanent: true },
      { source: '/services/renovation', destination: '/renovation-complete', permanent: true },
      { source: '/services/isolation-thermique', destination: '/services', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
