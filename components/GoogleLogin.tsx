"use client"
import { auth, db } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { Loader } from "../components/Loader"
import { useRouter } from "next/navigation";

export default function GoogleLogin(){
    const [isLoading, setIsLoading] = useState<boolean>(false) ; 
    const router = useRouter()

    

    const handleLoginApi = async(userId : string, displayName : string | null , email : string | null)=>{

        const docRef = doc(db,"users", userId) ; 
        const docSnap = await getDoc(docRef) ; 

        if(docSnap.exists())
        {
            console.log("The user already exists in database") ; 
        }
        else
        {
            console.log("The user don't exists in database")
        }
        const sendData = {userId : userId, displayName : displayName, email : email}

        const response = await fetch('/api/v1/login', {method : "POST", headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(sendData)})
        const repData = await response.json() 
        console.log("The data fetched from the api ", repData)

    }

    const handleLogin = async()=>{

        const provider = new GoogleAuthProvider(); 

        try{

            const result = await signInWithPopup(auth, provider)
            setIsLoading(true)
            const user = result.user 
            const userId = user.uid 
            const displayName = user.displayName
            const email = user.email 

            await handleLoginApi(userId, displayName, email)

            router.push("/dashboard")
            setIsLoading(true)



           
            


        }
        catch(error)
        {
            if(error instanceof Error)
            {
                console.log("there is a error at handleLogin", error.message)
            }
            else
            {
                console.log("There is an unkown error at handleLogin")
            }
        }
        


    }

    if(isLoading)
    {
        return <Loader/>
    }


    
    return(<>

    <div>
        <button onClick={handleLogin} className="bg-black text-white"> Login with google </button>
        
    </div>

        
    
    
    
    
    </>)
}