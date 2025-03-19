
import React from "react";
import { AlertTriangle, AlertCircle } from "lucide-react";
import { CaseItem } from "@/types/cases";

interface AnomalyTabContentProps {
  caseData: CaseItem;
}

const AnomalyTabContent: React.FC<AnomalyTabContentProps> = ({ caseData }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Detected Anomalies</h3>
      <div className="space-y-3 p-3 border rounded-md">
        {caseData.status === "High Risk" && (
          <>
            <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-md">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Irregular Cash Deposits</p>
                <p className="text-xs text-muted-foreground">Multiple large cash deposits detected that don't match declared income.</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-md">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Structured Transactions</p>
                <p className="text-xs text-muted-foreground">Series of transactions just below reporting thresholds detected.</p>
              </div>
            </div>
          </>
        )}
        {caseData.status === "Medium Risk" && (
          <div className="flex items-start gap-2 p-2 bg-amber-50 border border-amber-200 rounded-md">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Income Inconsistency</p>
              <p className="text-xs text-muted-foreground">Declared income doesn't match transaction patterns in statement.</p>
            </div>
          </div>
        )}
        {caseData.status === "Low Risk" && (
          <div className="flex items-center justify-center p-4">
            <p className="text-sm text-muted-foreground">No significant anomalies detected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnomalyTabContent;
