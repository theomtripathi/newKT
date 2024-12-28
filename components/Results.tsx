"use client"
import { useSearchParams } from "next/navigation";

// import {UserQuiz} from "@/lib/types/alltypes"
import { useState, useEffect } from "react";


export default function Results() {

    const searchParams = useSearchParams() ; 
    const userquizId = searchParams.get('userquizId') ; 
    const [results, setResults] = useState<any>()
    const [isLoading, setIsLoading] = useState(true) ; 

    const fetchResults = async()=>{


   
        try{

            const response = await fetch(`/api/v1/results?userquizId=${userquizId}`, {method : "GET", headers : {'Content-Type' : 'application/json'}})
            const repData = await response.json()
            const userQuiz = repData.data ; 
            // console.log("This is the stateless value of userquiz", userQuiz)
            // console.log("This is the value of results ", userQuiz.data.result)
            setResults(userQuiz.data.result)
            
    
        }
        catch(error)
        {
    
            console.log("There is an error at fetching /api/results", error)
    
        }

   
  

    
    
}

useEffect(()=>{

    const simpleFunc = async()=>{

        await fetchResults()

    }

    simpleFunc()

    

},[])

useEffect(()=>{
    console.log("This is the value of results", results) ; 
    if(results)
    {

        setIsLoading(false) ; 

    }
}, [results])

if(isLoading)
{
    return <div>....is loading </div>
}
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Krishna Score Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Krishna Score </h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{results.KrishnaScore}</p>
                </div>
                <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800">Krishna Score Description</h3>
                    <p className="text-gray-600 mt-2">
                        {results.KrishnaScoreDescription}
                    </p>
                </div>
            </div>

            {/* Issues and Quick Actions Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Issues Identified</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {results.issuesIdentified.map((issue : string)=>{
                            return(<li key={issue}> {issue}</li>)
                        })}
                       
                    </ul>
                </div>
                <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">

                        {results.quickActions.map((action : any)=>{
                            return(
                                <li key={action.text} className="flex gap-2"> <div className="font-semibold italic"> {action.type}</div> <div>{action.text}</div> </li>
                            )
                        })}

                        
                    </ul>
                </div>
            </div>

            <div className="flex justify-center my-3">
                <button
                    
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
                >
                    Download Results PDF
                </button>
            </div>
        </div>
    );
}
