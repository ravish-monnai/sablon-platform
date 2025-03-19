
import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { CaseItem } from "./types";

interface AnomaliesContentProps {
  selectedCase: CaseItem;
}

const AnomaliesContent: React.FC<AnomaliesContentProps> = ({ selectedCase }) => {
  if (selectedCase.status === "success") {
    return (
      <div className="bg-green-50 border border-green-100 rounded-md p-4 text-center">
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <h3 className="font-medium text-sm mb-1">No Anomalies Detected</h3>
        <p className="text-xs text-muted-foreground">
          All transaction patterns normal. No suspicious activities identified.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Large cash withdrawals</p>
          <p className="text-xs text-muted-foreground">
            Multiple large cash withdrawals detected in a short timeframe
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Income inconsistency</p>
          <p className="text-xs text-muted-foreground">
            Declared income doesn't match deposit patterns
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-100">
        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Suspicious transaction pattern</p>
          <p className="text-xs text-muted-foreground">
            Round-tripping transactions detected between multiple accounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnomaliesContent;
