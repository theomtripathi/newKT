import React from 'react';
import { Users, Heart, Trophy } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '100K+',
    label: 'Happy Users'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: '85%',
    label: 'Success Rate'
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: '50K+',
    label: 'Relationships Improved'
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="flex justify-center text-amber-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}