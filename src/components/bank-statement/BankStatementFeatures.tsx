
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Banknote, ChartLine, CreditCard, AlertTriangle, 
  Calculator, ShieldAlert, Briefcase, FileText 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BankStatementFeaturesProps {
  enabledFeatures?: Record<string, boolean>;
  handleToggleFeature?: (feature: string) => void;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ 
  enabledFeatures = {}, 
  handleToggleFeature 
}) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <FileText className="mr-2 h-5 w-5 text-amber-500" />
            Indian Bank Statement Analyzer Features
          </CardTitle>
          <CardDescription>
            Configure which features to enable for the bank statement analyzer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-6">
              <TabsTrigger value="summary">Feature Summary</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <h3 className="text-sm font-medium flex items-center text-amber-800 mb-2">
                    <Banknote className="mr-2 h-4 w-4" /> Income Verification
                  </h3>
                  <ul className="text-xs space-y-1 text-amber-700">
                    <li>• Regular Income Identification</li>
                    <li>• Income Amount Validation</li>
                    <li>• Multiple Income Stream Analysis</li>
                    <li>• Income Stability Metrics</li>
                    <li>• Income Verification Flags</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                  <h3 className="text-sm font-medium flex items-center text-blue-800 mb-2">
                    <ChartLine className="mr-2 h-4 w-4" /> Cash Flow Assessment
                  </h3>
                  <ul className="text-xs space-y-1 text-blue-700">
                    <li>• Net Cash Flow Metrics</li>
                    <li>• Expense Analysis</li>
                    <li>• Balance Management</li>
                    <li>• Liquidity Indicators</li>
                    <li>• Cash Flow Stability</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
                  <h3 className="text-sm font-medium flex items-center text-purple-800 mb-2">
                    <CreditCard className="mr-2 h-4 w-4" /> Debt Service Coverage
                  </h3>
                  <ul className="text-xs space-y-1 text-purple-700">
                    <li>• Existing Debt Payment Analysis</li>
                    <li>• Debt Capacity Assessment</li>
                    <li>• Payment Behavior Patterns</li>
                    <li>• Debt Structure Analysis</li>
                    <li>• Debt Stress Indicators</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-md border border-red-200">
                  <h3 className="text-sm font-medium flex items-center text-red-800 mb-2">
                    <ShieldAlert className="mr-2 h-4 w-4" /> Fraud Detection
                  </h3>
                  <ul className="text-xs space-y-1 text-red-700">
                    <li>• Identity Verification Signals</li>
                    <li>• Suspicious Transaction Patterns</li>
                    <li>• Business Verification Elements</li>
                    <li>• Synthetic Identity Flags</li>
                    <li>• Application Consistency Checks</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
                  <h3 className="text-sm font-medium flex items-center text-orange-800 mb-2">
                    <AlertTriangle className="mr-2 h-4 w-4" /> Risk Profiling
                  </h3>
                  <ul className="text-xs space-y-1 text-orange-700">
                    <li>• Financial Distress Signals</li>
                    <li>• High-Risk Transaction Patterns</li>
                    <li>• Financial Management Discipline</li>
                    <li>• Behavioral Risk Indicators</li>
                    <li>• Account Usage Patterns</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md border border-green-200">
                  <h3 className="text-sm font-medium flex items-center text-green-800 mb-2">
                    <Calculator className="mr-2 h-4 w-4" /> Alternative Credit Assessment
                  </h3>
                  <ul className="text-xs space-y-1 text-green-700">
                    <li>• Payment Consistency Metrics</li>
                    <li>• Financial Responsibility Indicators</li>
                    <li>• Cash-Based Credit Alternatives</li>
                    <li>• Thin-File Supplementary Data</li>
                    <li>• Proprietary Credit Algorithms</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="configuration">
              <p className="text-sm text-center text-muted-foreground mb-4">
                To view or modify detailed feature configuration, open the Feature Engineering tab.
              </p>
              <div className="flex justify-center">
                <Button variant="outline">Go to Feature Engineering</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankStatementFeatures;
