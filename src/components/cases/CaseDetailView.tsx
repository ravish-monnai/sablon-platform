
import React from "react";
import { Button } from "@/components/ui/button";
import { CaseItem } from "@/types/cases";
import BankStatementCaseDetail from "@/components/cases/BankStatementCaseDetail";

interface CaseDetailViewProps {
  selectedCase: CaseItem;
  onBackToList: () => void;
}

const CaseDetailView: React.FC<CaseDetailViewProps> = ({ 
  selectedCase, 
  onBackToList 
}) => {
  return (
    <div className="space-y-4">
      <Button variant="outline" onClick={onBackToList} className="mb-4">
        ← Back to Case List
      </Button>
      <BankStatementCaseDetail 
        caseData={selectedCase} 
        onClose={onBackToList} 
      />
    </div>
  );
};

export default CaseDetailView;
