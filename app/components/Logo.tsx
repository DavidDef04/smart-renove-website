import Link from 'next/link';
import { LOGO_BRAND } from '@/app/lib/logoBrand';

export { LOGO_BRAND };

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  linked?: boolean;
};

const heights = { sm: 36, md: 44, lg: 54 } as const;

/** Logo SmArt RENOV — SVG vectoriel, fond transparent */
export function SmartRenovLogoMark({
  height = 44,
  className = '',
}: {
  height?: number;
  className?: string;
}) {
  const width = Math.round(height * (210 / 64));
  const { blue, orange } = LOGO_BRAND;

  return (
    <svg
      viewBox="0 0 210 64"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`block shrink-0 ${className}`}
      role="img"
      aria-label="SmArt RENOV"
    >
      <rect x="34" y="2" width="6.5" height="6.5" fill={orange} />
      <rect x="42.5" y="2" width="6.5" height="6.5" fill={orange} />
      <rect x="51" y="2" width="6.5" height="6.5" fill={orange} />

      <text
        x="0"
        y="44"
        fill={blue}
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="36"
      >
        Sm
      </text>

      <path
        d="M 1 47.5 H 54 L 70 47.5 L 84 11"
        stroke={blue}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 62 47.5 L 76 11"
        stroke={blue}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <path d="M 78 47.5 L 90 11 L 98 47.5 Z" fill={orange} />

      <text
        x="100"
        y="44"
        fill={blue}
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="36"
      >
        rt
      </text>

      <text
        x="100"
        y="60"
        fill={orange}
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="14"
        letterSpacing="2.8"
      >
        RENOV
      </text>
    </svg>
  );
}

export default function Logo({
  size = 'md',
  className = '',
  linked = true,
}: LogoProps) {
  const height = heights[size];
  const mark = <SmartRenovLogoMark height={height} />;

  if (!linked) {
    return <span className={`inline-flex items-center ${className}`}>{mark}</span>;
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center z-10 ${className}`}
      aria-label="Smart Rénov — Accueil"
    >
      {mark}
    </Link>
  );
}
