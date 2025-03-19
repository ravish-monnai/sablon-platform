
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaseItem } from "@/types/caseTypes";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import CaseHeader from "./detail/CaseHeader";
import CaseTabs from "./detail/CaseTabs";
import { ThumbsUp, ThumbsDown, AlertCircle } from "lucide-react";

interface BankStatementCaseDetailProps {
  caseData: CaseItem;
  onClose: () => void;
}

const BankStatementCaseDetail: React.FC<BankStatementCaseDetailProps> = ({ caseData, onClose }) => {
  const [actionDialogOpen, setActionDialogOpen] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject" | "escalate" | undefined>(undefined);

  const handleActionClick = (type: "approve" | "reject" | "escalate") => {
    setActionType(type);
    setActionDialogOpen(true);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CaseHeader caseData={caseData} />
      </CardHeader>
      <CardContent>
        <CaseTabs caseData={caseData} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="outline" onClick={onClose}>
          Back to List
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
            onClick={() => handleActionClick("approve")}
          >
            <ThumbsUp className="h-4 w-4" />
            Approve
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"
            onClick={() => handleActionClick("escalate")}
          >
            <AlertCircle className="h-4 w-4" />
            Escalate
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
            onClick={() => handleActionClick("reject")}
          >
            <ThumbsDown className="h-4 w-4" />
            Reject
          </Button>
        </div>
      </CardFooter>
      
      <CaseActionDialog 
        isOpen={actionDialogOpen} 
        onOpenChange={setActionDialogOpen}
        caseId={caseData.id}
        actionType={actionType}
      />
    </Card>
  );
};

export default BankStatementCaseDetail;
