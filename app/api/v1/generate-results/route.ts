import { NextRequest, NextResponse } from "next/server";
import { generateObject } from "ai";
import {google} from "@ai-sdk/google"
import {z} from 'zod'


// this api's creates the results 


export async function POST(req : NextRequest){

    const data = await req.json()
    const quizData = data.quizData ; 
    console.log("This is quizData", quizData)

    const addPrompt =
    "Krishna Score Calculation: Compute the Krishna Score as the sum of points across all 15 questions, scaled out of 100. Provide a brief description of how the score reflects alignment between A and B. Quiz Breakdown: Summarize the quiz results in 6 points, with each point being a concise analysis of the alignment or disconnect between A and B across the quiz. Each summary must not exceed 15 words. Recommendations: Based on the alignment between A and B’s answers, generate 5 personalized recommendations to improve alignment or address areas of disagreement. Indicate whether each recommendation is actionable, reflective, or awareness-building.";
  const prompt = `${JSON.stringify(
    quizData
  )} Can you analyze the above data based on the below prompt ${addPrompt}`;


  console.log("This is prompt")

  const {object} = await generateObject({
    model: google("models/gemini-1.5-pro-latest"),
    prompt: prompt,
    schema: z.object({
      KrishnaScore: z.number(),
      KrishnaScoreDescription: z.string(),
      issuesIdentified: z.array(z.string().max(100)),
      quickActions: z.array(
        z.object({
          text: z.string(),
          type: z.enum(["actionable", "reflective", "awareness-building"]),
        })
      ),
    }),
  });

    return NextResponse.json({
        result : object 
    })

    


    


   

}

