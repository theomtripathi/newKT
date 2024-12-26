import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";


interface UserQuiz  {
    userId : string, 
    timestamp : number, 
    quizId : string, 
    result : any 

}

// this is a post request that writes the quizData into the page 
export async function POST(req : NextRequest){

    const reqData = await req.json() ; 

    const userId  = reqData.userId ; 
    const quizId = reqData.quizId 
    const result = reqData.result ; 

    const timestamp = new Date().getTime() ; 

    const docData : UserQuiz = {
        userId : userId, 
        timestamp : timestamp, 
        quizId : quizId, 
        result : result 
    }

    console.log("This is doc data ", docData)

    try{

        const docRef = await addDoc(collection(db,"userquiz"), docData)
        console.log("document written in userquiz with Id", docRef.id)



    }
    catch(error)
    {
        console.log("There is error at writing the data in firebase", error)
    }


    return NextResponse.json({
        message : "The document is written"
    })

    




}