"use client"
import { Clock, Users } from 'lucide-react';

import { QuizType } from '@/lib/types/alltypes';
import { Button } from '../common/Button';
import { useRouter } from 'next/navigation';

interface QuizCardProps {
  quiz: QuizType;
}

export function QuizCard({ quiz }: QuizCardProps) {

  const router = useRouter()


  const handleQuizClick = ()=>{

    // console.log("This button is clicked")

    // console.log(`/quiz?category=${quiz.id}`)

    router.push(`/quiz?category=${quiz.id}`)

  }
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4 text-center">{quiz.icon}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{quiz.title}</h3>
      <p className="text-slate-600 mb-4">{quiz.description}</p>
      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {quiz.timeToComplete}
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {quiz.questions} questions
        </div>
      </div>
      <Button variant="primary" icon onClick={handleQuizClick}>
        Take Quiz
      </Button>
    </div>
  );
}