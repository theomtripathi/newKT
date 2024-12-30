"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { PDFReport } from "@/components/PDFReport";

export default function Test() {
  // Mock data for the report
  const results = {
    KrishnaScore: 85,
    KrishnaScoreDescription: "You have a high Krishna score, indicating strong performance.",
    issuesIdentified: [
      "Lack of focus in certain areas.",
      "Inconsistent follow-ups on tasks.",
    ],
    quickActions: [
      { text: "Focus on time management." },
      { text: "Improve task prioritization." },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">This is a page</h1>
      <PDFDownloadLink
        document={<PDFReport results={results} />}
        fileName="results.pdf"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-5 h-5 mr-2" />
        Download PDF Report
      </PDFDownloadLink>
    </div>
  );
}
