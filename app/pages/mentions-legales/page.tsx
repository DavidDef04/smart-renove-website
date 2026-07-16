'use client';

import {
  Building,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
  Shield,
  FileCheck,
  Globe,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import LegalPageShell, {
  LegalSection,
  LegalInfoRow,
  LegalFact,
} from '@/app/components/ui/LegalPageShell';
import { SITE } from '@/app/lib/site';

export default function MentionsLegales() {
  const author = SITE.siteAuthor;

  return (
    <LegalPageShell
      index="09"
      kicker="Informations légales"
      title={
        <>
          Mentions <em>légales</em>
        </>
      }
      description={`Identification et informations légales de ${SITE.legalName}, établissement de rénovation à Douala.`}
    >
      <LegalSection title="Identification de l'entreprise">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-blue)]">
              Informations générales
            </h3>
            <div className="space-y-4">
              <LegalInfoRow
                icon={<Building className="h-5 w-5" />}
                label="Raison sociale"
                value={SITE.legalName}
              />
              <LegalInfoRow
                icon={<Briefcase className="h-5 w-5" />}
                label="Forme juridique"
                value={SITE.legalForm}
              />
              <LegalInfoRow
                icon={<Globe className="h-5 w-5" />}
                label="Activité principale"
                value="Rénovation complète et menuiserie"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-blue)]">
              Coordonnées
            </h3>
            <div className="space-y-4">
              <LegalInfoRow
                icon={<MapPin className="h-5 w-5" />}
                label="Siège social"
                value={`${SITE.address.line1}, ${SITE.address.line2}`}
              />
              <LegalInfoRow
                icon={<Phone className="h-5 w-5" />}
                label="Téléphone"
                value={
                  <>
                    {SITE.phoneDisplay}
                    <br />
                    {SITE.phoneSecondaryDisplay}
                  </>
                }
              />
              <LegalInfoRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={SITE.email}
              />
            </div>
          </div>
        </div>
      </LegalSection>

      <div className="grid gap-4 sm:grid-cols-2">
        <LegalFact
          icon={<FileCheck className="h-5 w-5" />}
          title="Immatriculation"
          description={`N° RCCM : ${SITE.rccm}`}
        />
        <LegalFact
          icon={<Shield className="h-5 w-5" />}
          title="N° Contribuable"
          description={SITE.taxId}
        />
        <LegalFact
          icon={<User className="h-5 w-5" />}
          title="Directeur général"
          description="M. PEUKONG JORDAN"
        />
        <LegalFact
          icon={<Calendar className="h-5 w-5" />}
          title="Date de création"
          description={SITE.foundedOn}
        />
        <LegalFact
          icon={<Globe className="h-5 w-5" />}
          title="Capital social"
          description={SITE.capital}
        />
      </div>

      <LegalSection title="Hébergement du site" dark>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Hébergeur web
            </h3>
            <div className="space-y-3 text-white/75">
              <p>
                <span className="block text-sm font-semibold text-white">Nom</span>
                Hostinger
              </p>
              <p>
                <span className="block text-sm font-semibold text-white">Site</span>
                smartrenov237.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Propriété intellectuelle
            </h3>
            <div className="space-y-3 text-white/75">
              <p>
                <span className="block text-sm font-semibold text-white">Droits d&apos;auteur</span>
                © {new Date().getFullYear()} {SITE.legalName}
              </p>
              <p>
                <span className="block text-sm font-semibold text-white">Tous droits réservés</span>
                Reproduction interdite sans autorisation
              </p>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="Avis légal">
        <div className="space-y-5">
          {[
            {
              title: 'Responsabilité',
              body: `${SITE.legalName} s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne garantissons pas l'exhaustivité ou l'exactitude des informations et déclinons toute responsabilité pour les erreurs ou omissions.`,
            },
            {
              title: 'Liens externes',
              body: "Ce site peut contenir des liens vers des sites tiers. Smart Rénov n'est pas responsable du contenu de ces sites externes et n'exprime aucune opinion sur leur contenu.",
            },
            {
              title: 'Litiges',
              body: "Tout litige relatif à l'utilisation de ce site sera soumis à la compétence des tribunaux compétents du ressort de Douala, Cameroun.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5"
              style={{ borderRadius: 'var(--sr-radius)' }}
            >
              <h3 className="mb-2 font-bold text-[var(--color-ink)]">{item.title}</h3>
              <p className="leading-relaxed text-[var(--color-ink-muted)]">{item.body}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <section
        className="border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 py-5 sm:px-6"
        style={{ borderRadius: 'var(--sr-radius)' }}
      >
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--color-ink-muted)]">
          Conception du site
        </p>
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Site conçu et développé par{' '}
          <span className="font-semibold text-[var(--color-ink)]">{author.name}</span>
          {' — '}
          {author.role}.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--color-ink-muted)]">
          <a
            href={author.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[var(--color-accent)]"
          >
            Portfolio
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[var(--color-accent)]"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
          <a href={`mailto:${author.email}`} className="hover:text-[var(--color-accent)]">
            {author.email}
          </a>
          <a
            href={author.whatsappPrimary}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            WhatsApp {author.whatsappDisplay}
          </a>
          <a
            href={author.whatsappSecondary}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            {author.whatsappSecondaryDisplay}
          </a>
        </div>
      </section>
    </LegalPageShell>
  );
}
