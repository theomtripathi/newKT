"use client"


// Create sty
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Download } from "lucide-react"
import { PDFReport } from "@/components/PDFReport"
export default function Test(){

    const handleClick = ()=>{

        console.log("Handling something")

    }




    return(<>

        <div> This is a page


        <PDFDownloadLink
          document={<PDFReport/>}
          fileName="results.pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
        
            <Download className="w-5 h-5 mr-2" />
            Download PDF Report
            
        </PDFDownloadLink>
            
            
            
            
         </div>
        
    
    
    
    
    </>)
}


