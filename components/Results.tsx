"use client";

import { Suspense, use } from "react";
import { useSearchParams } from "next/navigation";
import { PDFReport } from "./PDFReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";

// Define types for results
interface QuickAction {
  type: string;
  text: string;
}

interface Results {
  KrishnaScore: number;
  KrishnaScoreDescription: string;
  issuesIdentified: string[];
  quickActions: QuickAction[];
}

// Fetch results function with proper type
async function fetchResults(userquizId: string | null): Promise<Results> {
  if (!userquizId) {
    throw new Error("User quiz ID is missing.");
  }

  const response = await fetch(`/api/v1/results?userquizId=${userquizId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch results.");
  }

  const data = await response.json();
  return data?.data?.result as Results;
}

// Component to display results content
function ResultsContent({ results }: { results: Results }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Krishna Score Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-800">Krishna Score</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">{results.KrishnaScore}</p>
        </div>
        <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800">Krishna Score Description</h3>
          <p className="text-gray-600 mt-2">{results.KrishnaScoreDescription}</p>
        </div>
      </div>

      {/* Issues and Quick Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Issues Identified</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {results.issuesIdentified.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
        <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {results.quickActions.map((action, index) => (
              <li key={index} className="flex gap-2">
                <div className="font-semibold italic">{action.type}</div>
                <div>{action.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PDF Download Section */}
      <div className="flex justify-center my-3">
        <PDFDownloadLink document={<PDFReport results={results} />} fileName="results.pdf">
          <button className="flex gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105">
            <Download className="w-5 h-5 mr-2" /> Download Results PDF
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
}

// Wrapper component for fetching and displaying results
function ResultsWrapper({ userquizId }: { userquizId: string | null }) {
  const results = use(fetchResults(userquizId));
  return <ResultsContent results={results} />;
}

// Main Results component
export default function Results() {
  const searchParams = useSearchParams();
  const userquizId = searchParams.get("userquizId");

  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsWrapper userquizId={userquizId} />
    </Suspense>
  );
}
