"use client";

import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Gift } from "lucide-react";
// import Navbar from "./Navbar";
import { BsFillBellFill, BsStars } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { QuizSection } from "./quiz/QuizSection";

export function DashboardComponent() {
  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error at signing out from dashboard ", error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-50">
      {/* Sidebar */}
      {/* <Navbar /> */}

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto md:ml-24 md:w-4/5">
        <header className="flex flex-row md:flex-row justify-between items-center mb-4 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 font-playfair mb-4 md:mb-0">
            Dashboard
          </h1>
          <button className="p-2 rounded-full bg-white shadow-md text-blue-600">
            <BsFillBellFill className="text-blue-900" size={20} />
          </button>
          <button className="bg-black text-white" onClick={handleLogout}>Log out </button>
          {/* <button
            className="text-blue-900 border-2 border-neutral-200 bg-white  px-4 py-2 rounded-sm hover:bg-neutral-500"
            onClick={() => {
              handleLogout();
            }}
          >
            {" "}
            Log Out{" "}
          </button> */}
        </header>

        {/* Krishna Score */}
        {/* <Card className="mb-4 md:mb-8">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2 md:mb-4 w-fit mx-auto">
              <MdOutlineStarBorderPurple500 className="text-[#F7B754] text-xl md:text-4xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 font-playfair">
                Krishna Score
              </h2>
            </div>

            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2 md:mb-4 font-playfair text-center md:text-left">
              Start your Self-Awareness Journey
            </h3>

            <p className="text-[#3858b1] text-sm md:text-xl mb-2 md:mb-4 text-center md:text-left">
              Take the first test to begin understanding your awareness level
            </p>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white flex items-center w-full md:w-auto justify-center">
              <CiCirclePlus className="mr-2 text-white text-xl font-bold" />{" "}
              Take your first test
            </Button>
          </CardContent>
        </Card> */}

        <QuizSection/>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Getting started */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-900">
            <h2 className="text-lg md:text-2xl font-semibold text-blue-900 mb-2 md:mb-4 flex justify-center items-center font-playfair">
              <BsStars className="text-[#F7B754] mr-1 md:mr-2 text-lg md:text-2xl" />
              Getting started
            </h2>
            <div className="space-y-2 md:space-y-4 flex flex-col items-center w-full">
              {[
                "Take your first awareness test",
                "Reflect on your initial results",
                "Set personal growth goals",
                "Explore daily exercises",
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full py-2 px-3 md:px-4 bg-blue-50 text-blue-600 rounded-md flex justify-center"
                >
                  <p className="text-xs md:text-base text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action */}
          <Card className="bg-white p-2 md:p-4 rounded-lg shadow border border-blue-900">
            <CardHeader>
              <CardTitle className="text-base md:text-xl font-semibold text-blue-900 mb-1 md:mb-3 flex justify-center items-center font-playfair">
                <HiLightningBolt className="text-[#F7B754] mr-1 md:mr-2 text-lg md:text-2xl" />{" "}
                Quick Action
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 md:space-y-3 flex flex-col items-center">
              <div className="w-full mx-auto py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-between border border-blue-900">
                <IoDocumentTextOutline className="text-blue-600 text-xs sm:text-sm md:text-base" />
                <p className="text-xs sm:text-sm md:text-base mr-2">
                  Create A quiz
                </p>
                <ChevronRight
                  size={12}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 sm:block"
                />
              </div>
              <div className="w-full mx-auto py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4 bg-blue-50 text-blue-600 rounded-md flex items-center justify-between border border-blue-900">
                <HiUsers className="text-blue-600 text-xs sm:text-sm md:text-base" />
                <p className="text-xs sm:text-sm md:text-base mr-2">
                  Invite Friends
                </p>
                <ChevronRight
                  size={12}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 sm:block"
                />
              </div>
            </CardContent>
          </Card>

          {/* Discover yourself */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-900">
            <h2 className="text-lg md:text-2xl font-semibold text-blue-900 mb-2 md:mb-4 flex justify-center items-center font-playfair">
              <FiFileText className="text-[#F7B754] mr-1 md:mr-2 text-lg md:text-2xl" />
              Discover yourself
            </h2>
            <div className="space-y-2 md:space-y-4 flex flex-col items-center w-full">
              {[
                "Gain insights into your -",
                "Personality",
                "Strengths",
                "Areas of growth",
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full py-2 px-3 md:px-4 bg-blue-50 text-blue-600 rounded-md flex justify-center"
                >
                  <p className="text-xs md:text-base text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Share the Gift */}
        <div className="mt-8 p-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-[#2F2AA7] to-[#4A66EE] mb-20 md:mb-3 sm:p-5 md:p-6 rounded-lg text-white w-full sm:mb-16 md:ml-0">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 font-playfair text-center sm:text-left tracking-wider">
            Share the Gift of Self-Awareness
          </h2>
          <p className="mb-4 text-xs sm:text-sm md:text-base text-center sm:text-left">
            Invite a friend and gift the Krishna test to get 20% off
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-gray-100 text-blue-600 rounded-md flex items-center justify-center transition-colors duration-300">
              <User size={14} className="mr-2" />{" "}
              <span className="text-xs sm:text-sm md:text-base">
                Invite Friends
              </span>
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-[#2F2AA7] hover:bg-[#3A35B2] text-white border border-white rounded-md flex items-center justify-center transition-colors duration-300">
              <Gift size={14} className="mr-2" />{" "}
              <span className="text-xs sm:text-sm md:text-base">
                Gift a test
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
