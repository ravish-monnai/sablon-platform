
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { CaseItem } from "@/types/caseTypes";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import CaseHeader from "./detail/CaseHeader";
import CaseTabs from "./detail/CaseTabs";
import CaseActions from "./detail/CaseActions";

interface BankStatementCaseDetailProps {
  caseData: CaseItem;
  onClose: () => void;
}

const BankStatementCaseDetail: React.FC<BankStatementCaseDetailProps> = ({ caseData, onClose }) => {
  const [actionDialogOpen, setActionDialogOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<"approve" | "reject" | "escalate" | undefined>(undefined);

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
      <CardFooter>
        <CaseActions onClose={onClose} onAction={handleActionClick} />
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
