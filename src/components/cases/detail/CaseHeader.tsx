import React from "react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { CaseItem } from "@/types/caseTypes";

interface CaseHeaderProps {
  caseData: CaseItem;
}

const CaseHeader: React.FC<CaseHeaderProps> = ({ caseData }) => {
  return (
    <div className="flex justify-between items-center pb-2">
      <div>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          Case #{caseData.id}
        </CardTitle>
        <CardDescription>Bank Statement Analysis</CardDescription>
      </div>
      <Badge
        variant={
          caseData.status === "High Risk"
            ? "destructive"
            : caseData.status === "Medium Risk"
            ? "secondary"
            : "outline"
        }
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
