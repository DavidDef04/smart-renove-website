'use client';

import { CheckCircle } from 'lucide-react';

export default function ExpertiseSection() {
  const expertisePoints = [
    {
      title: 'Expertise technique de haut niveau',
      description: 'Des professionnels qualifiés pour des réalisations d\'exception'
    },
    {
      title: 'Équipe passionnée et dévouée',
      description: 'À votre écoute pour concrétiser vos projets les plus ambitieux'
    },
    {
      title: 'Solutions sur mesure & évolutives',
      description: 'Des réponses adaptées à vos besoins spécifiques et évolutifs'
    }
  ];

  return (
    <section className="bg-[var(--color-orange)] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertisePoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="bg-white/20 rounded-full p-2 mb-2">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{point.title}</h3>
              <p className="text-white/90 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
