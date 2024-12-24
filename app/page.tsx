"use client"
import { Footer } from "@/components/footer/Footer";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import Navbar from "@/components/navbar/Navbar";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
 
  const router = useRouter()

  const handlePage = ()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        router.push('/dashboard')
        
      }
    })
    
  }

  useEffect(()=>{
    handlePage()
  },[])


  return (
   <>

   <Navbar/>

   
   <Hero/>
   <HowItWorks/>
   <StatsSection/>
   <Features/>
   <Testimonials/>
   <Footer/>


   
   </>
  );
}
