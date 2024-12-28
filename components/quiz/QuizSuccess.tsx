"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

function QuizSuccessContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const userquizId = searchParams.get('userquizId');

    const handleResults = () => {
        if (userquizId) {
            router.push(`/results?userquizId=${userquizId}`);
        } else {
            console.log("Attention: Please pass a valid userquizId in params");
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-white">
            <main className="relative z-10 flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16">
                <div className="w-full max-w-4xl space-y-8">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
                            Quiz Successfully Completed
                        </h2>
                        <button
                            className="px-6 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-lg border border-pink-300 rounded-lg shadow-md hover:bg-white/30 hover:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
                            onClick={handleResults}
                        >
                            See the results of your quiz
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function QuizSuccess() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuizSuccessContent />
        </Suspense>
    );
}
