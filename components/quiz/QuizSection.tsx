import { useState } from 'react';
import { quizTypes } from '@/lib/data';
import { QuizCard } from './QuizCard';

export function QuizSection() {
  const [selectedGender, setSelectedGender] = useState<'female' | 'male'>('female');

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Choose Your Quiz 📝
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedGender('female')}
              className={`px-6 py-2 rounded-full ${
                selectedGender === 'female'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-slate-600'
              }`}
            >
              For Her 👩
            </button>
            <button
              onClick={() => setSelectedGender('male')}
              className={`px-6 py-2 rounded-full ${
                selectedGender === 'male'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600'
              }`}
            >
              For Him 👨
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {quizTypes
            .filter((quiz) => quiz.forGender === selectedGender)
            .map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
        </div>
      </div>
    </section>
  );
}