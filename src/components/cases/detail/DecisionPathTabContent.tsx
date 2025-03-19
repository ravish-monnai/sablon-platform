
import React from "react";
import { CheckCircle, AlertTriangle, ArrowUp } from "lucide-react";

const DecisionPathTabContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">AI-Guided Decision Path</h3>
      <div className="p-4 space-y-6 border rounded-md">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-8">
            <div className="relative ml-12">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                <span className="text-blue-600 font-medium">1</span>
              </div>
              <h4 className="text-sm font-medium mb-2">Review Case Details</h4>
              <p className="text-xs text-muted-foreground">
                Carefully review all customer information, transaction patterns, and flagged anomalies.
              </p>
            </div>
            
            <div className="relative ml-12">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                <span className="text-blue-600 font-medium">2</span>
              </div>
              <h4 className="text-sm font-medium mb-2">Analyze Risk Indicators</h4>
              <p className="text-xs text-muted-foreground">
                Consider the risk score, specific alerts, and any anomalies detected in the bank statement.
              </p>
            </div>
            
            <div className="relative ml-12">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                <span className="text-blue-600 font-medium">3</span>
              </div>
              <h4 className="text-sm font-medium mb-2">Determine Next Steps</h4>
              <p className="text-xs text-muted-foreground">
                Based on your analysis, choose one of the following actions:
              </p>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="p-3 border rounded-md bg-green-50 border-green-200">
                  <p className="text-sm font-medium text-green-700 flex items-center mb-1">
                    <CheckCircle className="h-4 w-4 mr-1" /> Approve (No Fraud)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Low risk patterns, no anomalies, or explainable discrepancies.
                  </p>
                </div>
                <div className="p-3 border rounded-md bg-red-50 border-red-200">
                  <p className="text-sm font-medium text-red-700 flex items-center mb-1">
                    <AlertTriangle className="h-4 w-4 mr-1" /> Reject (Fraud)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Clear evidence of fraudulent activity or severe unexplained discrepancies.
                  </p>
                </div>
                <div className="p-3 border rounded-md bg-amber-50 border-amber-200">
                  <p className="text-sm font-medium text-amber-700 flex items-center mb-1">
                    <ArrowUp className="h-4 w-4 mr-1" /> Escalate
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Unclear risk profile, needs additional investigation or expert review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionPathTabContent;
