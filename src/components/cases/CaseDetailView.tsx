
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseHeaderActions from "./detail/CaseHeaderActions";
import AIOverviewTab from "./detail/tabs/AIOverviewTab";
import TransactionsTab from "./detail/tabs/TransactionsTab";
import BankStatementFeatures from "../bank-statement/BankStatementFeatures";

interface CaseDetailViewProps {
  caseData: any;
  onClose: () => void;
}

const CaseDetailView: React.FC<CaseDetailViewProps> = ({ caseData, onClose }) => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("income-verification");
  
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
          <Tabs value={activeFeatureTab} onValueChange={setActiveFeatureTab}>
            <TabsList className="flex flex-wrap h-auto py-2 overflow-auto mb-4">
              <TabsTrigger value="income-verification">Income Verification</TabsTrigger>
              <TabsTrigger value="cash-flow">Cash Flow Assessment</TabsTrigger>
              <TabsTrigger value="debt-service">Debt Service Coverage</TabsTrigger>
              <TabsTrigger value="risk-profiling">Risk Profiling</TabsTrigger>
              <TabsTrigger value="alternative-credit">Alternative Credit</TabsTrigger>
              <TabsTrigger value="fraud-detection">Fraud Detection</TabsTrigger>
              <TabsTrigger value="automated-underwriting">Automated Underwriting</TabsTrigger>
              <TabsTrigger value="regulatory">Regulatory Compliance</TabsTrigger>
            </TabsList>
            
            <BankStatementFeatures activeTab={activeFeatureTab} caseData={caseData} />
          </Tabs>
        </TabsContent>

        <TabsContent value="transactions">
          <TransactionsTab caseData={caseData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaseDetailView;
