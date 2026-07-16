'use client';

import {
  CheckCircle,
  AlertCircle,
  Users,
  Clock,
  Shield,
  DollarSign,
  Wrench,
} from 'lucide-react';
import LegalPageShell, {
  LegalSection,
  LegalFact,
} from '@/app/components/ui/LegalPageShell';
import { SITE } from '@/app/lib/site';

export default function ConditionsUtilisation() {
  return (
    <LegalPageShell
      index="11"
      kicker="Cadre contractuel"
      title={
        <>
          Conditions d&apos;<em>utilisation</em>
        </>
      }
      description="Les règles qui encadrent nos prestations de rénovation et nos services pour une collaboration transparente."
    >
      <LegalSection title="Notre contrat de service">
        <p className="mb-4 leading-relaxed text-[var(--color-ink-muted)]">
          Bienvenue chez <span className="font-semibold text-[var(--color-ink)]">Smart Rénov</span> (
          {SITE.legalName}
          ). Ces conditions définissent le cadre de notre collaboration pour vos projets de
          rénovation complète ou partielle au Cameroun.
        </p>
        <p className="leading-relaxed text-[var(--color-ink-muted)]">
          En utilisant nos services, vous acceptez ces termes qui visent à assurer une relation
          professionnelle claire et bénéfique pour toutes les parties.
        </p>
      </LegalSection>

      <div>
        <h2 className="font-display mb-5 text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          Points clés
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <LegalFact
            icon={<Wrench className="h-5 w-5" />}
            title="Services proposés"
            description="Rénovation clé en main, électricité, plomberie, carrelage, peinture, menuiserie"
          />
          <LegalFact
            icon={<DollarSign className="h-5 w-5" />}
            title="Tarification"
            description="Devis gratuits, prix transparents, paiement échelonné possible"
          />
          <LegalFact
            icon={<Clock className="h-5 w-5" />}
            title="Délais"
            description="Réponse sous 48h, planning de chantier et respect des délais convenus"
          />
          <LegalFact
            icon={<Shield className="h-5 w-5" />}
            title="Garantie"
            description="Garantie matériaux 10 ans, garantie pose 2 ans, service après-vente"
          />
          <LegalFact
            icon={<Users className="h-5 w-5" />}
            title="Engagement client"
            description="Conseil personnalisé, suivi de projet, satisfaction au centre"
          />
          <LegalFact
            icon={<AlertCircle className="h-5 w-5" />}
            title="Responsabilités"
            description="Limitation aux prestations convenues dans le devis accepté"
          />
        </div>
      </div>

      <LegalSection title="Conditions générales" dark>
        <div className="space-y-4">
          {[
            {
              title: '1. Devis et acceptation',
              content:
                'Tous nos devis sont gratuits et valables 30 jours. Le devis doit être signé et retourné pour confirmation de commande.',
            },
            {
              title: '2. Modalités de paiement',
              content: SITE.paymentSchedule,
            },
            {
              title: "3. Délais d'exécution",
              content:
                'Les délais sont indiqués sur le devis. Nous nous engageons à les respecter sauf cas de force majeure ou retard client.',
            },
            {
              title: '4. Garantie et SAV',
              content:
                'Garantie décennale sur structure, 2 ans sur pose. Service après-vente disponible pour toute urgence.',
            },
            {
              title: '5. Responsabilité',
              content:
                'Notre responsabilité est limitée aux prestations convenues dans le devis accepté.',
            },
          ].map((condition) => (
            <div
              key={condition.title}
              className="border border-white/10 bg-white/5 p-5"
              style={{ borderRadius: 'var(--sr-radius)' }}
            >
              <h3 className="mb-2 font-semibold text-[var(--color-accent)]">{condition.title}</h3>
              <p className="leading-relaxed text-white/80">{condition.content}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Obligations réciproques">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-blue)]">
              Nos engagements
            </h3>
            <ul className="space-y-3">
              {[
                'Respect des normes de qualité',
                'Respect des délais convenus',
                'Proposition de matériaux certifiés',
                'Nettoyage du chantier après travaux',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Vos obligations
            </h3>
            <ul className="space-y-3">
              {[
                'Accès au chantier sécurisé',
                'Respect des échéances de paiement',
                'Validation des étapes de chantier',
                'Communication sur les contraintes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}
