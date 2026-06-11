'use client';

const ITEMS = [
  'Rénovation clé en main',
  'Douala & Cameroun',
  'Devis gratuit',
  'Menuiserie aluminium',
  'Électricité & plomberie',
  'Carrelage premium',
  'Suivi chantier',
  'Réponse rapide',
];

export default function TrustMarquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[var(--color-night)] py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="mx-8 flex items-center gap-3 text-sm font-semibold tracking-wide text-white/70 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
