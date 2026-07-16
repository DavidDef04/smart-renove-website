'use client';

import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Cookie,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import LegalPageShell, {
  LegalSection,
  LegalFact,
} from '@/app/components/ui/LegalPageShell';
import { SITE } from '@/app/lib/site';

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageShell
      index="10"
      kicker="Protection des données"
      title={
        <>
          Politique de <em>confidentialité</em>
        </>
      }
      description="Comment Smart Rénov collecte, utilise et protège vos données personnelles lors de vos demandes de devis et projets."
    >
      <LegalSection title="Notre engagement">
        <p className="mb-4 leading-relaxed text-[var(--color-ink-muted)]">
          Chez <span className="font-semibold text-[var(--color-ink)]">Smart Rénov</span> (
          {SITE.legalName}
          ), nous nous engageons à protéger votre vie privée. Cette politique explique comment nous
          traitons vos données lors de vos demandes de rénovation et de l&apos;utilisation de nos
          services.
        </p>
        <p className="leading-relaxed text-[var(--color-ink-muted)]">
          Entreprise camerounaise spécialisée dans la rénovation complète, nous respectons les
          réglementations en vigueur en matière de protection des données.
        </p>
      </LegalSection>

      <div>
        <h2 className="font-display mb-5 text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          Données collectées
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <LegalFact
            icon={<UserCheck className="h-5 w-5" />}
            title="Identification"
            description="Nom, prénom, email, téléphone, adresse"
          />
          <LegalFact
            icon={<MapPin className="h-5 w-5" />}
            title="Localisation"
            description="Adresse de chantier, zone d'intervention"
          />
          <LegalFact
            icon={<FileText className="h-5 w-5" />}
            title="Projet"
            description="Devis, plans, photos, caractéristiques techniques"
          />
          <LegalFact
            icon={<Cookie className="h-5 w-5" />}
            title="Cookies"
            description="Navigation sur le site, préférences utilisateur"
          />
          <LegalFact
            icon={<Phone className="h-5 w-5" />}
            title="Communications"
            description="Appels, emails, messages liés à votre projet"
          />
          <LegalFact
            icon={<Database className="h-5 w-5" />}
            title="Données techniques"
            description="Logs système, métriques d'utilisation"
          />
        </div>
      </div>

      <LegalSection title="Utilisation de vos données" dark>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Fournir nos services de rénovation et travaux associés',
            'Établir des devis personnalisés et précis',
            'Coordonner les interventions sur vos chantiers',
            'Améliorer nos produits et services',
            'Communiquer avec vous sur vos projets',
            'Respecter nos obligations légales',
          ].map((usage) => (
            <li key={usage} className="flex items-start gap-3 text-white/80">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              <span>{usage}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Vos droits">
        <div className="space-y-4">
          {[
            {
              title: "Droit d'accès",
              description:
                'Vous pouvez demander une copie de toutes vos données personnelles que nous détenons.',
            },
            {
              title: 'Droit de rectification',
              description:
                'Vous pouvez nous demander de corriger toute information inexacte vous concernant.',
            },
            {
              title: 'Droit de suppression',
              description:
                'Vous pouvez demander la suppression de vos données personnelles sous certaines conditions.',
            },
            {
              title: 'Droit de limitation',
              description:
                "Vous pouvez limiter l'utilisation de vos données à des finalités spécifiques.",
            },
            {
              title: 'Droit de portabilité',
              description:
                'Vous pouvez récupérer vos données dans un format structuré et lisible.',
            },
            {
              title: "Droit d'opposition",
              description:
                'Vous pouvez vous opposer à certains traitements de vos données personnelles.',
            },
          ].map((right, index) => (
            <div key={right.title} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[var(--color-accent)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)]">{right.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {right.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Mesures de sécurité" dark>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Techniques
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-[var(--color-accent)]" />
                Chiffrement SSL/TLS
              </li>
              <li className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-[var(--color-accent)]" />
                Contrôle d&apos;accès strict
              </li>
              <li className="flex items-center gap-3">
                <Database className="h-5 w-5 text-[var(--color-accent)]" />
                Sauvegardes sécurisées
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Organisationnelles
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-[var(--color-accent)]" />
                Formation du personnel
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-[var(--color-accent)]" />
                Politiques internes
              </li>
              <li className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[var(--color-accent)]" />
                Audit régulier
              </li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="Nous contacter">
        <p className="mb-6 leading-relaxed text-[var(--color-ink-muted)]">
          Pour toute question sur cette politique ou l&apos;exercice de vos droits, contactez-nous.
        </p>
        <div className="flex flex-col gap-3 text-sm text-[var(--color-ink)] sm:flex-row sm:flex-wrap sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-[var(--color-accent)]" />
            {SITE.phoneDisplay}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-[var(--color-accent)]" />
            {SITE.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
            Douala, Cameroun
          </span>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}
