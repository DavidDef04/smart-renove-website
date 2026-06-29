'use client';

import FormationCard from './FormationCard';
import SectionHeader from './ui/SectionHeader';
import { FORMATIONS } from '../data/formationsData';

export default function FormationsSection() {
  return (
    <section className="sr-section sr-section--night mesh-dark">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="05"
          kicker="Formation"
          tone="dark"
          title={
            <>
              Métiers <em>terrain</em>
            </>
          }
          description="Menuiserie, carrelage, électricité et peinture — les compétences les plus recherchées sur les chantiers au Cameroun."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FORMATIONS.map((formation) => (
            <FormationCard
              key={formation.id}
              id={formation.id}
              title={formation.title}
              description={formation.description}
              duration={formation.duration}
              imageUrl={formation.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
