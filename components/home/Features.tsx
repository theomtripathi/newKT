import React from 'react';
import { Target, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    emoji: '🎯',
    title: 'Actionable Advice',
    description: 'Get practical tips tailored to your relationship dynamics'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    emoji: '🌟',
    title: 'Personalized Insights',
    description: 'Understand your unique relationship patterns and strengths'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    emoji: '📈',
    title: 'Track Your Progress',
    description: 'Monitor your relationship growth over time'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What Makes Us Different? 💡
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our quizzes are designed to help you uncover insights about your relationship in a fun, non-judgmental way.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                {feature.emoji} {feature.title}
              </h3>
              <p className="text-slate-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}