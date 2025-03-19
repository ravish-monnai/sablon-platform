
import React from "react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, AlertCircle, FileText, BrainCircuit } from "lucide-react";
import { CaseItem } from "@/types/caseTypes";

interface CaseHeaderProps {
  caseData: CaseItem;
}

const CaseHeader: React.FC<CaseHeaderProps> = ({ caseData }) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <div>
        <CardTitle className="flex items-center gap-2">
          <div className="p-1.5 bg-[#9b87f5]/10 rounded-md">
            <BrainCircuit className="h-5 w-5 text-[#9b87f5]" />
          </div>
          <span>Case #{caseData.id}</span>
        </CardTitle>
        <CardDescription className="mt-1 flex items-center gap-2">
          <FileText className="h-3.5 w-3.5" />
          {caseData.type || "Bank Statement Analysis"}
          {caseData.market && (
            <>
              <span className="mx-1">•</span>
              <span>{caseData.market}</span>
            </>
          )}
          {caseData.bank && (
            <>
              <span className="mx-1">•</span>
              <span>{caseData.bank}</span>
            </>
          )}
        </CardDescription>
      </div>
      <Badge
        variant={
          caseData.status === "High Risk"
            ? "destructive"
            : caseData.status === "Medium Risk"
            ? "secondary"
            : "outline"
        }
        className="px-3 py-1"
      >
        {caseData.status === "High Risk" && (
          <AlertTriangle className="mr-1 h-3 w-3" />
        )}
        {caseData.status === "Medium Risk" && (
          <AlertCircle className="mr-1 h-3 w-3" />
        )}
        {caseData.status === "Low Risk" && (
          <CheckCircle className="mr-1 h-3 w-3" />
        )}
        {caseData.status}
      </Badge>
    </div>
  );
};

export default CaseHeader;
