import type { ReactNode } from 'react';

type SectionHeaderProps = {
  index?: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

export default function SectionHeader({
  index,
  kicker,
  title,
  description,
  align = 'center',
  tone = 'light',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const toneClass = tone === 'dark' ? 'sr-header--dark' : '';

  return (
    <header className={`sr-header ${alignClass} ${toneClass} ${className}`.trim()}>
      <div className={`sr-header__meta ${align === 'center' ? 'justify-center' : ''}`}>
        {index ? <span className="sr-header__index">{index}</span> : null}
        <span className="sr-kicker">{kicker}</span>
      </div>
      <h2 className="sr-heading">{title}</h2>
      {description ? <p className="sr-lead">{description}</p> : null}
    </header>
  );
}
