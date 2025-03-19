
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileText, MapPin, X } from "lucide-react";
import { toast } from "sonner";
import BankStatementTestResults from "./BankStatementTestResults";

interface BankStatementTestDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
}

const BankStatementTestDialog: React.FC<BankStatementTestDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedMarket,
  setSelectedMarket,
}) => {
  const [testResult, setTestResult] = useState<any>(null);
  const [isTestInProgress, setIsTestInProgress] = useState(false);
  
  const markets = [
    { name: "India", code: "IN" },
    { name: "Mexico", code: "MX" },
    { name: "Indonesia", code: "ID" },
    { name: "Philippines", code: "PH" },
    { name: "Malaysia", code: "MY" }
  ];
  
  const runTestWithSample = () => {
    setIsTestInProgress(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const sampleResult = {
        market: selectedMarket,
        riskScore: {
          score: 35,
          level: "Low Risk",
          factors: [
            { name: "Stable Income", impact: "Positive" },
            { name: "Positive Cash Flow", impact: "Positive" },
            { name: "Large Irregular Transaction", impact: "Negative" }
          ]
        },
        incomeVerification: {
          status: "success",
          totalIncome: 5250.00,
          recurringIncome: [
            { source: "ACME Corp", amount: 4500.00, frequency: "Monthly" },
            { source: "Side Gig LLC", amount: 750.00, frequency: "Monthly" }
          ]
        },
        expenseCategories: {
          status: "success",
          categories: [
            { name: "Housing", total: 1800.00, percentage: 38 },
            { name: "Utilities", total: 450.00, percentage: 9 },
            { name: "Food", total: 750.00, percentage: 16 },
            { name: "Transportation", total: 350.00, percentage: 7 },
            { name: "Entertainment", total: 500.00, percentage: 11 },
            { name: "Misc", total: 900.00, percentage: 19 }
          ]
        },
        recurringPayments: {
          status: "success",
          identified: [
            { name: "Netflix", amount: 14.99, category: "Entertainment" },
            { name: "Gym Membership", amount: 49.99, category: "Health" },
            { name: "Phone Bill", amount: 95.00, category: "Utilities" },
            { name: "Car Insurance", amount: 120.00, category: "Insurance" }
          ]
        },
        cashFlowAnalysis: {
          status: "success",
          netCashFlow: 1200.00,
          savingsRate: 22.8,
          volatility: "Low"
        },
        abnormalTransactions: {
          status: "success",
          identified: [
            { date: "2023-10-15", amount: 1200.00, description: "Unusual large withdrawal", risk: "Medium" }
          ]
        }
      };
      
      setTestResult(sampleResult);
      setIsTestInProgress(false);
      toast.success(`Bank statement analysis for ${selectedMarket} completed successfully`);
    }, 2500);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Bank Statement Analyzer Test</DialogTitle>
          <DialogDescription>
            Test your bank statement analyzer configuration with a sample statement
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {!testResult && !isTestInProgress && (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <FileText className="h-16 w-16 text-muted-foreground" />
              <p className="text-center text-muted-foreground">
                Run a test to see how your bank statement analyzer would process a real customer statement.
                <br />
                This will process a pre-defined sample bank statement with your current configuration.
              </p>
              
              <div className="w-full max-w-xs mt-4">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                  <Label htmlFor="market-selection">Select Market</Label>
                </div>
                <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                  <SelectTrigger id="market-selection" className="w-full">
                    <SelectValue placeholder="Select a market" />
                  </SelectTrigger>
                  <SelectContent>
                    {markets.map((market) => (
                      <SelectItem key={market.code} value={market.name}>
                        <div className="flex items-center">
                          <span>{market.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={runTestWithSample} className="mt-4">
                Run Test Analysis
              </Button>
            </div>
          )}
          
          {isTestInProgress && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
              <p className="text-center">Analyzing sample bank statement for {selectedMarket}...</p>
            </div>
          )}
          
          {testResult && (
            <BankStatementTestResults 
              testResult={testResult}
              selectedMarket={selectedMarket}
              setTestResult={setTestResult}
            />
          )}
        </div>
        
        <DialogFooter>
          {testResult && (
            <Button variant="outline" onClick={() => setTestResult(null)} className="mr-auto">
              <X className="h-4 w-4 mr-2" />
              Clear Results
            </Button>
          )}
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BankStatementTestDialog;
