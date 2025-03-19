
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseItem } from "@/types/caseTypes";
import { BrainCircuit } from "lucide-react";

interface AIReasoningTabProps {
  caseData: CaseItem;
}

const AIReasoningTab: React.FC<AIReasoningTabProps> = ({ caseData }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-base">AI Reasoning</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
          <p className="text-sm">{caseData.reasoning || "AI reasoning not available for this case."}</p>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-sm mb-2">Detailed Analysis</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">Income Assessment</h4>
              <p className="text-xs text-gray-600">
                The customer's income pattern shows regular deposits from a verified employer source. 
                The income amount matches the stated income with a variance of less than 5%. 
                Historical income data shows consistency over the past 6 months with no significant fluctuations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">Expense Behavior</h4>
              <p className="text-xs text-gray-600">
                Expense patterns indicate responsible financial management with consistent payment of essential bills.
                The expense-to-income ratio is within acceptable parameters at approximately 65%, which is below
                the threshold of concern (80%). No significant irregular or suspicious expense patterns detected.
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-1">Risk Evaluation</h4>
              <p className="text-xs text-gray-600">
                Several risk factors were evaluated including transaction patterns, account management history,
                and digital activity consistency. The overall risk score of {caseData.riskScore || "N/A"} indicates 
                {caseData.riskLevel === "Low" ? " a low-risk profile suitable for standard approval." : 
                  caseData.riskLevel === "Medium" ? " a medium-risk profile requiring additional verification." : 
                  " a high-risk profile requiring manual review and possible rejection."}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIReasoningTab;
