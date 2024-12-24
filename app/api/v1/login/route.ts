
import {  NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "@/lib/types/alltypes";



// arguments 

export async function POST(req : NextRequest){

    // const data = await req.json() 

    const data = await req.json() ; 
    const userId = data.userId ; 
    const displayName = data.displayName ; 
    const email = data.email ; 

    try
    {

        const docRef = doc(db, "users", userId) 
        const docSnap = await getDoc(docRef)
        const newUser : User  = {

            userId : userId, 
            displayName : displayName, 
            email : email, 
            role : "normal"


        }
        
        if(!docSnap.exists())
        {

            await setDoc(doc(db, "users", userId), newUser)
            console.log("A new user created with the id ", userId)

            
        }
        

    }
    catch(error)
    {
        if(error instanceof Error)
        {
            console.log("There is error at /api/v1/login", error.message)
        }
        else
        {
            console.log("There is an unkown error at /api/v1/login")
        }
    }


    



    

  

    return NextResponse.json({
        message : "This is working"
    })







}