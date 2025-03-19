
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import IncomeVerificationTab from "./tabs/IncomeVerificationTab";
import CashFlowTab from "./tabs/CashFlowTab";
import DebtServiceTab from "./tabs/DebtServiceTab";
import RiskProfilingTab from "./tabs/RiskProfilingTab";
import AlternativeCreditTab from "./tabs/AlternativeCreditTab";
import FraudDetectionTab from "./tabs/FraudDetectionTab";
import AutomatedUnderwritingTab from "./tabs/AutomatedUnderwritingTab";
import RegulatoryComplianceTab from "./tabs/RegulatoryComplianceTab";

const BankStatementFeatureExplorer: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Bank Statement Analysis Features</h1>
          <p className="text-muted-foreground">
            Explore all available features for bank statement analysis
          </p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" /> Configure Features
        </Button>
      </div>
      
      <Tabs defaultValue="income-verification" className="w-full">
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
      </Tabs>
    </div>
  );
};

export default BankStatementFeatureExplorer;
