'use client';

import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../lib/site';

type Variant = 'light' | 'dark' | 'footer';

const iconClass = {
  light: 'text-white/90 hover:text-white',
  dark: 'text-ink/70 hover:text-[var(--color-accent)]',
  footer: 'text-white',
};

type SocialLinksProps = {
  variant?: Variant;
  size?: number;
  className?: string;
  showYoutube?: boolean;
  showWhatsapp?: boolean;
};

export default function SocialLinks({
  variant = 'light',
  size = 16,
  className = '',
  showYoutube = true,
  showWhatsapp = false,
}: SocialLinksProps) {
  const base =
    'inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110';
  const wrap =
    variant === 'footer'
      ? `${base} w-10 h-10 bg-white/10 hover:bg-[var(--color-accent)] hover:shadow-lg hover:shadow-orange-500/30`
      : `${base} p-1.5 hover:opacity-100 opacity-80`;

  const links = [
    { href: SITE.social.facebook, label: 'Facebook Smart Rénov', Icon: FaFacebook },
    { href: SITE.social.linkedin, label: 'LinkedIn Smart Rénov', Icon: FaLinkedin },
    { href: SITE.social.tiktok, label: 'TikTok Smart Rénov', Icon: FaTiktok },
    ...(showYoutube
      ? [{ href: SITE.social.youtube, label: 'YouTube Smart Rénov', Icon: FaYoutube }]
      : []),
    ...(showWhatsapp
      ? [{ href: SITE.whatsapp, label: 'WhatsApp Smart Rénov', Icon: FaWhatsapp }]
      : []),
  ];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`} role="list">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${wrap} ${iconClass[variant]}`}
          aria-label={label}
          title={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
