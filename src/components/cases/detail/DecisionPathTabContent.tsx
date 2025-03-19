
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BrainCircuit, Cpu, ArrowRight, AlertCircle } from "lucide-react";

interface DecisionPathTabContentProps {
  caseId: string;
}

const DecisionPathTabContent: React.FC<DecisionPathTabContentProps> = ({ caseId }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-base">AI Decision Path</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
          <p className="text-sm">AI is processing the case data for #{caseId}. The complete reasoning and decision path will be displayed here once analysis is complete.</p>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-sm mb-2">Decision Steps</h3>
          <div className="space-y-4">
            <div className="relative pl-6 pb-6 border-l border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]"></div>
              </div>
              <h4 className="text-sm font-medium mb-1">Initial Data Verification</h4>
              <p className="text-xs text-gray-600">
                Our AI is verifying the customer's identity and document consistency against known databases.
              </p>
            </div>
            
            <div className="relative pl-6 pb-6 border-l border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]"></div>
              </div>
              <h4 className="text-sm font-medium mb-1">Risk Analysis</h4>
              <p className="text-xs text-gray-600">
                The AI is evaluating customer profile data, transaction patterns, and behavioral indicators.
              </p>
            </div>
            
            <div className="relative pl-6 pb-6 border-l border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]"></div>
              </div>
              <h4 className="text-sm font-medium mb-1">Decision Formulation</h4>
              <p className="text-xs text-gray-600">
                Based on aggregated data and risk factors, the AI is determining the appropriate recommendation.
              </p>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                <Cpu className="w-2 h-2 text-gray-500" />
              </div>
              <h4 className="text-sm font-medium mb-1 text-gray-500">Final Decision</h4>
              <p className="text-xs text-gray-400">
                Pending completion of previous steps
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-md p-3">
            <div className="flex items-center mb-1">
              <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
              <h4 className="text-sm font-medium text-amber-800">Processing Status</h4>
            </div>
            <p className="text-xs text-amber-700">
              Analysis is currently in progress. Full decision path will be available shortly. Estimated completion time: 2-3 minutes.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecisionPathTabContent;
