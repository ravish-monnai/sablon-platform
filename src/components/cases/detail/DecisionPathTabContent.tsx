
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BrainCircuit } from "lucide-react";

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
          <p className="text-sm">AI analysis is processing the case data. The detailed reasoning for case #{caseId} will appear here.</p>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-sm mb-2">Decision Steps</h3>
          <div className="space-y-4">
            {/* Placeholder content */}
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">Initial Data Verification</h4>
              <p className="text-xs text-gray-600">
                Customer data verification in progress. Our AI is analyzing identity and document consistency.
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">Risk Analysis</h4>
              <p className="text-xs text-gray-600">
                Risk factor calculations in progress. The AI is evaluating customer profile and transaction patterns.
              </p>
            </div>
            
            <Separator className="my-4" />
            
            <p className="text-xs text-muted-foreground">
              Full decision path details will be available once analysis is complete.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecisionPathTabContent;
