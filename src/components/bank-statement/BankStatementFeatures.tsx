
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import IncomeVerificationTab from "./tabs/IncomeVerificationTab";
import CashFlowTab from "./tabs/CashFlowTab";
import DebtServiceTab from "./tabs/DebtServiceTab";
import RiskProfilingTab from "./tabs/RiskProfilingTab";
import AlternativeCreditTab from "./tabs/AlternativeCreditTab";
import FraudDetectionTab from "./tabs/FraudDetectionTab";
import AutomatedUnderwritingTab from "./tabs/AutomatedUnderwritingTab";
import RegulatoryComplianceTab from "./tabs/RegulatoryComplianceTab";

interface BankStatementFeaturesProps {
  activeTab: string;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ activeTab }) => {
  return (
    <>
      <TabsContent value="income-verification" className="space-y-6">
        <IncomeVerificationTab />
      </TabsContent>
      
      <TabsContent value="cash-flow" className="space-y-6">
        <CashFlowTab />
      </TabsContent>
      
      <TabsContent value="debt-service" className="space-y-6">
        <DebtServiceTab />
      </TabsContent>
      
      <TabsContent value="risk-profiling" className="space-y-6">
        <RiskProfilingTab />
      </TabsContent>
      
      <TabsContent value="alternative-credit" className="space-y-6">
        <AlternativeCreditTab />
      </TabsContent>
      
      <TabsContent value="fraud-detection" className="space-y-6">
        <FraudDetectionTab />
      </TabsContent>
      
      <TabsContent value="automated-underwriting" className="space-y-6">
        <AutomatedUnderwritingTab />
      </TabsContent>
      
      <TabsContent value="regulatory" className="space-y-6">
        <RegulatoryComplianceTab />
      </TabsContent>
    </>
  );
};

export default BankStatementFeatures;
