
import { QuizType } from './types/alltypes';

export const quizTypes: QuizType[] = [
  {
    id: 'is-he-the-one',
    title: 'Is He "The One"? 💍',
    description: 'Discover if your relationship has true long-term potential through our scientifically backed assessment.',
    forGender: 'female',
    icon: '💑',
    questions: 15,
    timeToComplete: '8 mins'
  },
  {
    id: 'where-is-it-going',
    title: 'Where Is This Going? 🎯',
    description: 'Understand the direction of your relationship and get clarity on your future together.',
    forGender: 'female',
    icon: '🗺️',
    questions: 15,
    timeToComplete: '8 mins'
  },
  {
    id: 'friend-zone-depth',
    title: 'How Deep Is The Friend Zone? 🤔',
    description: 'Analyze your current situation and understand where you stand in your relationship.',
    forGender: 'male',
    icon: '🤝',
    questions: 15,
    timeToComplete: '8 mins'
  },
  {
    id: 'chance-calculator',
    title: 'Do I Have a Chance? ✨',
    description: 'Calculate your compatibility and potential for a romantic relationship.',
    forGender: 'male',
    icon: '🎲',
    questions: 15,
    timeToComplete: '8 mins'
  }
];