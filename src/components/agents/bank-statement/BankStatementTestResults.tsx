
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FileText, ShieldCheck, Banknote, CreditCard, 
  ArrowUpDown, AreaChart, Check, X, Globe, MapPin
} from "lucide-react";

interface BankStatementTestResultsProps {
  testResult: any;
  selectedMarket: string;
  setTestResult: (result: any) => void;
}

const BankStatementTestResults: React.FC<BankStatementTestResultsProps> = ({
  testResult,
  selectedMarket,
  setTestResult,
}) => {
  const getRiskScoreColor = (score: number) => {
    if (score <= 35) return "bg-green-100 text-green-800";
    if (score <= 65) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  if (!testResult) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Globe className="h-5 w-5 text-blue-500 mr-2" />
          <span className="font-medium">Market: {testResult.market}</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => {
            setTestResult(null);
          }}
          className="flex items-center gap-1"
        >
          <MapPin className="h-3.5 w-3.5" />
          Change Market
        </Button>
      </div>
      
      {testResult.riskScore && (
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className={`p-4 ${getRiskScoreColor(testResult.riskScore.score)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                <h3 className="font-medium">Risk Assessment</h3>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-lg mr-2">{testResult.riskScore.score}</span>
                <Badge variant="outline" className={getRiskScoreColor(testResult.riskScore.score)}>
                  {testResult.riskScore.level}
                </Badge>
              </div>
            </div>
          </div>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Contributing Factors</h4>
              <div className="space-y-2">
                {testResult.riskScore.factors.map((factor: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                    <span className="text-sm">{factor.name}</span>
                    <Badge variant={factor.impact === "Positive" ? "success" : "warning"}>
                      {factor.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Banknote className="mr-2 h-5 w-5 text-green-500" />
                <h3 className="font-medium">Income Verification</h3>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Income:</span>
                <span className="font-medium">${testResult.incomeVerification.totalIncome.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Recurring Income:</span>
                {testResult.incomeVerification.recurringIncome.map((income: any, i: number) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{income.source}</span>
                    <span>${income.amount.toFixed(2)} ({income.frequency})</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-purple-500" />
                <h3 className="font-medium">Expense Categories</h3>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
            </div>
            <div className="space-y-2">
              {testResult.expenseCategories.categories.map((category: any, i: number) => (
                <div key={i} className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" style={{ 
                      backgroundColor: ['#10B981', '#8B5CF6', '#F97316', '#FB7185', '#4DA3FF', '#D946EF'][i % 6] 
                    }}></div>
                    <span>{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>${category.total.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground">({category.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ArrowUpDown className="mr-2 h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Recurring Payments</h3>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
            </div>
            <div className="space-y-2">
              {testResult.recurringPayments.identified.map((payment: any, i: number) => (
                <div key={i} className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span>{payment.name}</span>
                    <Badge variant="outline" className="text-xs">{payment.category}</Badge>
                  </div>
                  <span>${payment.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AreaChart className="mr-2 h-5 w-5 text-amber-500" />
                <h3 className="font-medium">Cash Flow Analysis</h3>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Net Cash Flow:</span>
                <span className="font-medium text-green-600">+${testResult.cashFlowAnalysis.netCashFlow.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Savings Rate:</span>
                <span className="font-medium">{testResult.cashFlowAnalysis.savingsRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Volatility:</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {testResult.cashFlowAnalysis.volatility}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {testResult.abnormalTransactions.identified.length > 0 && (
          <Card className="col-span-1 md:col-span-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-red-500" />
                  <h3 className="font-medium">Abnormal Transactions</h3>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  {testResult.abnormalTransactions.identified.length} Found
                </Badge>
              </div>
              <div className="space-y-2">
                {testResult.abnormalTransactions.identified.map((transaction: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{transaction.date}</span>
                        <span className="text-sm">{transaction.description}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>${transaction.amount.toFixed(2)}</span>
                      <Badge variant={
                        transaction.risk === "Low" ? "outline" : 
                        transaction.risk === "Medium" ? "secondary" : "destructive"
                      }>
                        {transaction.risk} Risk
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <div className="pt-4">
        <div className="border rounded-md p-4 bg-muted/30">
          <div className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="font-medium">Analysis Summary</span>
          </div>
          <p className="text-sm text-muted-foreground">
            The applicant shows healthy financial patterns with stable income sources and responsible spending habits.
            Monthly income of $5,250.00 exceeds expenses by $1,200.00, resulting in a positive cash flow and 22.8% savings rate.
            One abnormal transaction was identified but appears to be a one-time event rather than a pattern of concern.
            Overall risk score: {testResult.riskScore?.score || "N/A"} ({testResult.riskScore?.level || "N/A"})
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankStatementTestResults;
