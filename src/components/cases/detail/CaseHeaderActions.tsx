
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CaseItem } from "@/types/caseTypes";

interface CaseHeaderActionsProps {
  caseData: CaseItem;
  onClose: () => void;
}

const CaseHeaderActions: React.FC<CaseHeaderActionsProps> = ({ caseData, onClose }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" onClick={onClose}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        <h1 className="text-xl font-bold">{caseData.id}</h1>
        <Badge variant={
          caseData.riskLevel === "Critical" || caseData.riskLevel === "High" 
            ? "destructive" 
            : caseData.riskLevel === "Medium" 
              ? "secondary" 
              : "success"
        }>
          {caseData.riskLevel === "Low" && <CheckCircle className="h-3 w-3 mr-1" />}
          {(caseData.riskLevel === "Critical" || caseData.riskLevel === "High") && 
            <AlertTriangle className="h-3 w-3 mr-1" />}
          {caseData.riskLevel === "Medium" && <Clock className="h-3 w-3 mr-1" />}
          {caseData.riskLevel || "Unknown"} Risk
        </Badge>
      </div>
      <div className="flex gap-2">
        {caseData.status === "Pending Review" && (
          <>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              <CheckCircle className="h-4 w-4 mr-1" /> Approve
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-red-500 text-red-600 hover:bg-red-50"
            >
              <AlertTriangle className="h-4 w-4 mr-1" /> Reject
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CaseHeaderActions;
