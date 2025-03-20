import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseHeaderActions from "./detail/CaseHeaderActions";
import AIOverviewTab from "./detail/tabs/AIOverviewTab";
import TransactionsTab from "./detail/tabs/TransactionsTab";
import BankStatementFeatures from "../bank-statement/BankStatementFeatures";
import BankStatementCaseDetail from "./BankStatementCaseDetail";

interface CaseDetailViewProps {
  caseData: any;
  onClose: () => void;
}

const CaseDetailView: React.FC<CaseDetailViewProps> = ({ caseData, onClose }) => {
  // Check if this is a bank statement analysis case
  const isBankStatementCase = caseData?.type === "Bank Statement Analysis" || 
                               caseData?.journey === "Bank Statement Analysis";

  // If it's a bank statement case, render the specialized view
  if (isBankStatementCase) {
    return <BankStatementCaseDetail caseData={caseData} onClose={onClose} />;
  }
  
  // Otherwise, render the default case view
  return (
    <div className="space-y-6">
      <CaseHeaderActions caseData={caseData} onClose={onClose} />

      <Tabs defaultValue="ai-overview" className="w-full">
        <TabsList className="flex flex-wrap h-auto py-2 overflow-auto mb-4">
          <TabsTrigger value="ai-overview">AI Overview</TabsTrigger>
          <TabsTrigger value="bank-features">Bank Statement Analysis</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-overview">
          <AIOverviewTab caseData={caseData} />
        </TabsContent>

        <TabsContent value="bank-features">
          <BankStatementFeatures caseData={caseData} />
        </TabsContent>

        <TabsContent value="transactions">
          <TransactionsTab caseData={caseData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaseDetailView;
