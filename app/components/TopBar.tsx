import SocialLinks from './SocialLinks';

export default function TopBar() {
  return (
    <div className="w-full border-b border-white/5 bg-[var(--color-night)] text-sm text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-9 items-center justify-between gap-4 sm:h-10">
          <p className="truncate text-xs tracking-wide text-white/50">
            Rénovation clé en main · <span className="text-[var(--color-accent)]">Douala</span>
          </p>
          <SocialLinks variant="light" size={14} showYoutube={false} />
        </div>
      </div>
    </div>
  );
}
