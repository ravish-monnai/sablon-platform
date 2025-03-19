
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Banknote, CreditCard, ArrowUpDown, AreaChart, FileText, 
  Building, PlusCircle
} from "lucide-react";

interface BankStatementFeaturesProps {
  enabledFeatures: {
    incomeVerification: boolean;
    expenseCategories: boolean;
    recurringPayments: boolean;
    cashFlowAnalysis: boolean;
    abnormalTransactions: boolean;
    overdraftDetection: boolean;
    paymentSchedules: boolean;
    accountBalancePrediction: boolean;
  };
  handleToggleFeature: (feature: string) => void;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({
  enabledFeatures,
  handleToggleFeature,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Banknote className="mr-2 h-5 w-5 text-green-500" />
                <Label htmlFor="income-verification">Income Verification</Label>
              </div>
              <Switch 
                id="income-verification" 
                checked={enabledFeatures.incomeVerification}
                onCheckedChange={() => handleToggleFeature('incomeVerification')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Identify and verify recurring income sources from bank statements.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-purple-500" />
                <Label htmlFor="expense-categories">Expense Categorization</Label>
              </div>
              <Switch 
                id="expense-categories" 
                checked={enabledFeatures.expenseCategories}
                onCheckedChange={() => handleToggleFeature('expenseCategories')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Categorize expenses into groups like housing, utilities, food, etc.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ArrowUpDown className="mr-2 h-5 w-5 text-blue-500" />
                <Label htmlFor="recurring-payments">Recurring Payments</Label>
              </div>
              <Switch 
                id="recurring-payments" 
                checked={enabledFeatures.recurringPayments}
                onCheckedChange={() => handleToggleFeature('recurringPayments')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Detect and flag subscription services and recurring bills.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AreaChart className="mr-2 h-5 w-5 text-amber-500" />
                <Label htmlFor="cash-flow">Cash Flow Analysis</Label>
              </div>
              <Switch 
                id="cash-flow" 
                checked={enabledFeatures.cashFlowAnalysis}
                onCheckedChange={() => handleToggleFeature('cashFlowAnalysis')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Analyze cash flow patterns and identify fluctuations.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-red-500" />
                <Label htmlFor="abnormal-transactions">Abnormal Transactions</Label>
              </div>
              <Switch 
                id="abnormal-transactions" 
                checked={enabledFeatures.abnormalTransactions}
                onCheckedChange={() => handleToggleFeature('abnormalTransactions')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Flag unusual or abnormal transactions that deviate from patterns.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-indigo-500" />
                <Label htmlFor="overdraft-detection">Overdraft Detection</Label>
              </div>
              <Switch 
                id="overdraft-detection" 
                checked={enabledFeatures.overdraftDetection}
                onCheckedChange={() => handleToggleFeature('overdraftDetection')}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Detect and analyze overdraft instances and recovery patterns.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex items-center gap-2">
        <PlusCircle className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Add custom feature</span>
      </div>
    </div>
  );
};

export default BankStatementFeatures;
