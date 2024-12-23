import React from 'react';
import { ClipboardCheck, Brain, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Take the Quiz',
    description: 'Answer carefully crafted questions about your relationship dynamics'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Get Insights',
    description: 'Receive detailed analysis of your relationship situation'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Take Action',
    description: 'Follow personalized recommendations to improve your relationship'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          How It Works 🎯
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-blue-100" />
              )}
              <div className="relative bg-blue-50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-900 text-white rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}