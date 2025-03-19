
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IncomeVerificationTab from "./tabs/IncomeVerificationTab";
import CashFlowTab from "./tabs/CashFlowTab";
import DebtServiceTab from "./tabs/DebtServiceTab";
import RiskProfilingTab from "./tabs/RiskProfilingTab";
import AlternativeCreditTab from "./tabs/AlternativeCreditTab";
import FraudDetectionTab from "./tabs/FraudDetectionTab";
import AutomatedUnderwritingTab from "./tabs/AutomatedUnderwritingTab";
import RegulatoryComplianceTab from "./tabs/RegulatoryComplianceTab";

interface BankStatementFeaturesProps {
  activeTab?: string;
  caseData?: any;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ activeTab, caseData }) => {
  // Mock feature values for demonstration
  const featureValues = {
    income: {
      monthlyAverage: caseData?.incomeDetails?.monthlyAverage || "$4,250",
      consistency: caseData?.incomeDetails?.consistency || "92%",
      verificationStatus: caseData?.incomeDetails?.verificationStatus || "Verified",
      sources: caseData?.incomeDetails?.sources || [
        { name: "Primary Employment", amount: "$3,900", frequency: "Monthly" },
        { name: "Side Business", amount: "$350", frequency: "Monthly" }
      ]
    },
    cashFlow: {
      averageBalance: caseData?.cashFlowDetails?.averageBalance || "$2,850",
      monthlyInflow: caseData?.cashFlowDetails?.monthlyInflow || "$5,320",
      monthlyOutflow: caseData?.cashFlowDetails?.monthlyOutflow || "$4,780",
      volatility: caseData?.cashFlowDetails?.volatility || "Low"
    },
    debtService: {
      ratio: caseData?.debtServiceDetails?.ratio || "34%",
      existingDebt: caseData?.debtServiceDetails?.existingDebt || "$1,450",
      proposedDebt: caseData?.debtServiceDetails?.proposedDebt || "$650",
      riskAssessment: caseData?.debtServiceDetails?.riskAssessment || "Medium"
    },
    riskProfile: {
      score: caseData?.riskProfile?.score || "68/100",
      overdrafts: caseData?.riskProfile?.overdrafts || "2 instances",
      irregularActivity: caseData?.riskProfile?.irregularActivity || "Minimal",
      trend: caseData?.riskProfile?.trend || "Improving"
    }
  };

  return (
    <>
      <TabsContent value="income-verification" className="space-y-6">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Income Verification Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Average</p>
                <p className="font-medium text-lg">{featureValues.income.monthlyAverage}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Consistency</p>
                <p className="font-medium text-lg">{featureValues.income.consistency}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Verification Status</p>
                <Badge variant="outline" className="font-medium">
                  {featureValues.income.verificationStatus}
                </Badge>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Income Sources</p>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-2 text-sm font-medium">Source</th>
                      <th className="text-left p-2 text-sm font-medium">Amount</th>
                      <th className="text-left p-2 text-sm font-medium">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureValues.income.sources.map((source, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2 text-sm">{source.name}</td>
                        <td className="p-2 text-sm">{source.amount}</td>
                        <td className="p-2 text-sm">{source.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
        <IncomeVerificationTab />
      </TabsContent>
      
      <TabsContent value="cash-flow" className="space-y-6">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Cash Flow Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Average Balance</p>
                <p className="font-medium text-lg">{featureValues.cashFlow.averageBalance}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Inflow</p>
                <p className="font-medium text-lg">{featureValues.cashFlow.monthlyInflow}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Outflow</p>
                <p className="font-medium text-lg">{featureValues.cashFlow.monthlyOutflow}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Volatility</p>
                <Badge variant={featureValues.cashFlow.volatility === "Low" ? "outline" : "secondary"} className="font-medium">
                  {featureValues.cashFlow.volatility}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <CashFlowTab />
      </TabsContent>
      
      <TabsContent value="debt-service" className="space-y-6">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Debt Service Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Debt Service Ratio</p>
                <p className="font-medium text-lg">{featureValues.debtService.ratio}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Existing Monthly Debt</p>
                <p className="font-medium text-lg">{featureValues.debtService.existingDebt}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proposed Monthly Debt</p>
                <p className="font-medium text-lg">{featureValues.debtService.proposedDebt}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Risk Assessment</p>
                <Badge 
                  variant={
                    featureValues.debtService.riskAssessment === "Low" ? "outline" : 
                    featureValues.debtService.riskAssessment === "Medium" ? "secondary" : 
                    "destructive"
                  } 
                  className="font-medium"
                >
                  {featureValues.debtService.riskAssessment}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <DebtServiceTab />
      </TabsContent>
      
      <TabsContent value="risk-profiling" className="space-y-6">
        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Risk Profile Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Risk Score</p>
                <p className="font-medium text-lg">{featureValues.riskProfile.score}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overdrafts (Last 3 Months)</p>
                <p className="font-medium text-lg">{featureValues.riskProfile.overdrafts}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Irregular Activity</p>
                <p className="font-medium text-lg">{featureValues.riskProfile.irregularActivity}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trend</p>
                <Badge 
                  variant={
                    featureValues.riskProfile.trend === "Improving" ? "outline" : 
                    featureValues.riskProfile.trend === "Stable" ? "secondary" : 
                    "destructive"
                  } 
                  className="font-medium"
                >
                  {featureValues.riskProfile.trend}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
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
