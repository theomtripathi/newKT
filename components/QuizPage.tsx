"use client"
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
// import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { div } from "framer-motion/client";


interface Question  {
    id : number, 
    question : string, 
    options : string[]
}

interface newQuestion { 
    id : number, 
    question : string, 
    answer : string,
    score : number 

}

const quizQuestions: Record<string, Question[]> = {
    "How Deep Is The Friend Zone? ": [
        {
            id: 1,
            question: "Does she often call or text you first?",
            options: [
                "Almost always",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 2,
            question: "Does she share personal details about her life with you?",
            options: [
                "Deep, personal stuff regularly",
                "Sometimes, when prompted",
                "Rarely, surface-level only",
                "Never shares anything meaningful"
            ]
        },
        {
            id: 3,
            question: "Does she bring up inside jokes or past memories?",
            options: [
                "All the time",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 4,
            question: "Does she initiate plans to hang out one-on-one?",
            options: [
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 5,
            question: "Does she seem genuinely excited to see or talk to you?",
            options: [
                "Always shows enthusiasm",
                "Sometimes seems happy",
                "Rarely, feels neutral",
                "Never shows excitement"
            ]
        },
        {
            id: 6,
            question: "Does she compliment your personality, looks, or achievements?",
            options: [
                "Regularly and sincerely",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 7,
            question: "Does she tease or joke with you in a playful way?",
            options: [
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 8,
            question: "Does she show jealousy when you mention other women?",
            options: [
                "Clearly, every time",
                "Sometimes, subtly",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 9,
            question: "Does she open up about things she wouldn't tell others?",
            options: [
                "Regularly confides in me",
                "Occasionally opens up",
                "Rarely, only basic stuff",
                "Never shares anything personal"
            ]
        },
        {
            id: 10,
            question: "Does she post pictures or updates of the two of you on social media?",
            options: [
                "Frequently",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 11,
            question: "Does she lean on you for emotional support when upset?",
            options: [
                "Always turns to me",
                "Sometimes, when she needs it",
                "Rarely, prefers others",
                "Never asks for my support"
            ]
        },
        {
            id: 12,
            question: "Does she ask for your advice or input on decisions?",
            options: [
                "Regularly and values my opinion",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 13,
            question: "Does she touch you casually (e.g., pat on the back, shoulder tap)?",
            options: [
                "Frequently and naturally",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 14,
            question: "Does she stay close to you when you're in a group setting?",
            options: [
                "Always by my side",
                "Sometimes gravitates towards me",
                "Rarely sticks around",
                "Never"
            ]
        },
        {
            id: 15,
            question: "Does she laugh at your jokes, even when they're not that funny?",
            options: [
                "Always, even the bad ones",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        }
    ],
    "Do I Have a Chance? ": [
        {
            id: 1,
            question: "Does she discuss her future plans with you?",
            options: [
                "Regularly and openly",
                "Occasionally, when prompted",
                "Rarely, vague mentions",
                "Never"
            ]
        },
        {
            id: 2,
            question: "Does she make an effort to spend quality time with you?",
            options: [
                "Often plans things herself",
                "Sometimes goes along with my plans",
                "Rarely makes time",
                "Never"
            ]
        },
        {
            id: 3,
            question: "Does she share her goals, dreams, or insecurities with you?",
            options: [
                "Deeply and frequently",
                "Sometimes, when comfortable",
                "Rarely, only surface-level",
                "Never"
            ]
        },
        {
            id: 4,
            question: "Does she show interest in your hobbies or passions?",
            options: [
                "Actively engages and supports",
                "Occasionally asks or tries",
                "Rarely pays attention",
                "Never"
            ]
        },
        {
            id: 5,
            question: "Does she make you feel appreciated for things you do for her?",
            options: [
                "Always and genuinely",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 6,
            question: "Does she introduce you to her close friends or family?",
            options: [
                "Yes, frequently",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 7,
            question: "Does she seek your company during important moments of her life?",
            options: [
                "Always invites me",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 8,
            question: "Does she send good morning or goodnight texts?",
            options: [
                "Every day",
                "Often",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 9,
            question: "Does she express excitement or curiosity about your personal life?",
            options: [
                "Very often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 10,
            question: "Does she seem genuinely interested in knowing about your past relationships?",
            options: [
                "Always asks with curiosity",
                "Sometimes brings it up",
                "Rarely mentions it",
                "Never"
            ]
        },
        {
            id: 11,
            question: "Does she compliment you in front of other people?",
            options: [
                "Frequently and enthusiastically",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 12,
            question: "Does she prioritize spending time with you over other plans?",
            options: [
                "Always makes me her priority",
                "Sometimes balances between plans",
                "Rarely changes her schedule",
                "Never"
            ]
        },
        {
            id: 13,
            question: "Does she remember small details about your likes and dislikes?",
            options: [
                "Always recalls and surprises me",
                "Sometimes remembers",
                "Rarely notices",
                "Never"
            ]
        },
        {
            id: 14,
            question: "Does she ask hypothetical questions like, \"What would we do if…?\"",
            options: [
                "Often and creatively",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 15,
            question: "Does she trust you enough to talk about her fears or weaknesses?",
            options: [
                "Regularly opens up",
                "Sometimes shares",
                "Rarely trusts me",
                "Never talks about them"
            ]
        }
    ],
    "Is He The One ": [

        {
            id: 1,
            question: "Does he listen to you without distractions (e.g., phone, TV)?",
            options: [
                "Always",
                "Usually",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 2,
            question: "Does he make you feel safe and secure in the relationship?",
            options: [
                "Always",
                "Most of the time",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 3,
            question: "Does he take the initiative to solve conflicts between you?",
            options: [
                "Always",
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 4,
            question: "Has he introduced you to his close friends or family?",
            options: [
                "Yes, multiple times",
                "Once or twice",
                "Mentioned plans but hasn't yet",
                "No"
            ]
        },
        {
            id: 5,
            question: "Do you feel prioritized in his life, above hobbies or other commitments?",
            options: [
                "Always",
                "Usually",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 6,
            question: "Does he communicate openly and honestly with you?",
            options: [
                "Always",
                "Often",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 7,
            question: "Does he make you feel beautiful and appreciated?",
            options: [
                "Always",
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 8,
            question: "Does he share his dreams or goals with you?",
            options: [
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 9,
            question: "When you're stressed, does he offer support or solutions?",
            options: [
                "Always",
                "Often",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 10,
            question: "Does he take responsibility for his actions and decisions?",
            options: [
                "Always",
                "Often",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 11,
            question: "Does he respect your boundaries and personal space when needed?",
            options: [
                "Always",
                "Often",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 12,
            question: "Does he plan special moments or surprises for you?",
            options: [
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 13,
            question: "Does he discuss long-term plans like marriage, family, or living together?",
            options: [
                "Often",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 14,
            question: "Do you feel like his actions match his words consistently?",
            options: [
                "Always",
                "Often",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 15,
            question: "When you're with him, do you feel genuinely happy and at peace?",
            options: [
                "Always",
                "Most of the time",
                "Occasionally",
                "Rarely",
                "Never"
            ]
        }
    ],
    "Where Is This Going? ": [
        {
            id: 1,
            question: "Does he talk about plans for the future with you?",
            options: [
                "Regularly and in detail",
                "Occasionally",
                "Rarely and vaguely",
                "Never"
            ]
        },
        {
            id: 2,
            question: "Does he introduce you to his family or close friends?",
            options: [
                "Yes, often and warmly",
                "Sometimes",
                "Rarely",
                "Never"
            ]
        },
        {
            id: 3,
            question: "Does he bring you into conversations about big life decisions?",
            options: [
                "Always considers my opinion",
                "Occasionally includes me",
                "Rarely mentions it",
                "Never involves me"
            ]
        },
        {
            id: 4,
            question: "Does he prioritize spending time with you over other commitments?",
            options: [
                "Always makes me his priority",
                "Balances between me and others",
                "Rarely makes time",
                "Never"
            ]
        },
        {
            id: 5,
            question: "Does he openly discuss what he wants in a relationship?",
            options: [
                "Yes, very clearly",
                "Sometimes, but not often",
                "Rarely shares his thoughts",
                "Never talks about it"
            ]
        },
        {
            id: 6,
            question: "Does he make an effort to know your family or friends?",
            options: [
                "Actively tries to connect with them",
                "Occasionally asks or meets them",
                "Rarely shows interest",
                "Never"
            ]
        },
        {
            id: 7,
            question: "Does he support your personal or career goals?",
            options: [
                "Fully supports and encourages",
                "Sometimes acknowledges them",
                "Rarely mentions them",
                "Never"
            ]
        },
        {
            id: 8,
            question: "Does he talk about \"us\" as a team or partnership?",
            options: [
                "Always includes \"us\" in discussions",
                "Sometimes mentions it",
                "Rarely uses \"us\"",
                "Never"
            ]
        },
        {
            id: 9,
            question: "Does he communicate openly about his feelings for you?",
            options: [
                "Always shares openly",
                "Sometimes shares his feelings",
                "Rarely talks about emotions",
                "Never"
            ]
        },
        {
            id: 10,
            question: "Does he make you feel secure about the relationship?",
            options: [
                "Always reassures me",
                "Sometimes but not consistently",
                "Rarely makes me feel secure",
                "Never"
            ]
        },
        {
            id: 11,
            question: "Does he bring up topics like marriage, kids, or long-term plans?",
            options: [
                "Often and seriously",
                "Occasionally, in passing",
                "Rarely and vaguely",
                "Never"
            ]
        },
        {
            id: 12,
            question: "Does he share financial or personal challenges with you?",
            options: [
                "Always trusts me with them",
                "Sometimes talks about it",
                "Rarely shares anything",
                "Never"
            ]
        },
        {
            id: 13,
            question: "Does he plan thoughtful dates or gestures for you?",
            options: [
                "Regularly and meaningfully",
                "Occasionally but not often",
                "Rarely puts in effort",
                "Never"
            ]
        },
        {
            id: 14,
            question: "Does he include you in decisions about his daily life?",
            options: [
                "Always considers my input",
                "Sometimes includes me",
                "Rarely mentions it",
                "Never"
            ]
        },
        {
            id: 15,
            question: "Does he make an effort to resolve conflicts when they arise?",
            options: [
                "Always and constructively",
                "Sometimes tries to work things out",
                "Rarely puts in effort",
                "Never"
            ]
        }
    ]
};


export function QuizPage(){

    const searchParams = useSearchParams() ; 
    const category = searchParams.get('category') || ''
    const questions = quizQuestions[category] || []
    // console.log("This the specific category questions", questions)


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [warning, setWarning] = useState(false); 
    
    // const router = useRouter() ; 

    const copyQuiz = (questions :  Question[])=>{
        

        const  newQuestions : newQuestion[] = []

        questions.map((ques)=>{
            const newQues = {
                id : ques.id ,
                question : ques.question,
                answer : "default",
                score : 0
            }

            newQuestions.push(newQues)
        })

        return newQuestions


       

    }

    const initialQuestions = copyQuiz(questions) ; 

    const [newQuestions, setNewQuestions] = useState<newQuestion[]>(initialQuestions)
    

    


    const handleNext = ()=>{
        if(currentQuestion < questions.length - 1)
        {
            setCurrentQuestion(currentQuestion + 1)
        }

    }

    const handlePrevious = ()=>{
        if(currentQuestion > 0)
        {
            setCurrentQuestion(currentQuestion - 1)
        }
    }


    const handleOptionUpdate = (option : string, question : Question, optionIndex : number)=>{

        const tempQuestions = newQuestions ; 

        tempQuestions.map((ques)=>{
            
            if(ques.id === question.id)
            {
                ques.answer = option 
                ques.score = 4 - optionIndex
                
            }
        })

        setNewQuestions(tempQuestions)
        
        
    }

    const handleAnswer = (optionIndex : number) => { 
        setAnswers(prev => ({
            ...prev, 
            [currentQuestion] : optionIndex 
        }))
    }

    const handleSubmit = (newQuestions : newQuestion[])=>{
        console.log("The feature is in build. Ideally, you should be navigated")

        let flag : boolean = true ; 

        const tempQuestions = newQuestions 

        tempQuestions.map((ques)=>{
            if(ques.score === 0)
            {
                flag = false 
                

            }
        })

        if(flag)
        {
            console.log("You will be redirected to the next page")
        }
        else
        {
            console.log("You will be not redirected to the next page ")
            setWarning(true)
        }


    }

    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white py-20">
            {/* <div>
                {JSON.stringify(newQuestions)}
            </div> */}
            <div className="max-w-3xl mx-auto px-4">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl p-8 shadow-xl"
                >
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="h-2 bg-blue-100 rounded-full">
                            <div
                                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                        <p className="text-center mt-2 text-blue-900/60">
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                    </div>

                    { warning && <div className="text-red-600 text-center italic font-semibold text-base"> Please answer all the questions to submit </div>}

                    {/* Question */}
                    <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                        {questions[currentQuestion]?.question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-4 mb-8">
                        {questions[currentQuestion]?.options.map((option, index) => (
                            <motion.button
                                key={index}
                                className={`w-full p-4 rounded-xl text-left transition-all ${answers[currentQuestion] === index
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { handleOptionUpdate(option, questions[currentQuestion], index) ;  handleAnswer(index)}}
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all
                    ${currentQuestion === 0
                                    ? 'bg-gray-100 text-gray-400'
                                    : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                                }`}
                        >
                            <ArrowLeft size={20} />
                            Previous
                        </button>

                        {currentQuestion === questions.length - 1 ? (
                            <button
                                onClick={()=>{handleSubmit(newQuestions)}}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition-all"
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition-all"
                            >
                                Next
                                <ArrowRight size={20} />
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}