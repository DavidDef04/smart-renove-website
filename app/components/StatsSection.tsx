'use client';

import { Briefcase, Users, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: '250+',
    label: 'Projets réalisés',
    icon: Briefcase,
  },
  {
    id: 2,
    value: '180+',
    label: 'Clients satisfaits',
    icon: Users,
  },
  {
    id: 3,
    value: '7+',
    label: 'Années d\'expérience',
    icon: Award,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[var(--color-blue)] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-orange)]/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[var(--color-orange)]" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
