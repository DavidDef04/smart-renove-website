import type { Metadata, Viewport } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import FloatingContact from './components/FloatingContact';
import StructuredData from './components/StructuredData';
import { buildRootMetadata, localBusinessJsonLd, servicesItemListJsonLd, webSiteJsonLd } from './lib/seo';

const fontDisplay = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CM" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData data={[localBusinessJsonLd(), webSiteJsonLd(), servicesItemListJsonLd()]} />
        <header className="site-header fixed top-0 left-0 right-0 z-50">
          <TopBar />
          <Navbar />
        </header>
        <main>{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}
