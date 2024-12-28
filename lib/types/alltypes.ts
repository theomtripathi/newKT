
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface User {

    userId : string,  
    displayName : string, 
    role : string, 
    email : string, 

}

export interface QuizType {
    id: string;
    title: string;
    description: string;
    forGender: 'female' | 'male';
    icon: string;
    questions: number;
    timeToComplete: string;
  }
  
  export interface TestimonialType {
    id: string;
    quote: string;
    author: string;
    quizType: string;
    rating: number;
  }

  export interface UserQuiz  {
    userId : string, 
    timestamp : number, 
    quizId : string, 
    result : any 

}