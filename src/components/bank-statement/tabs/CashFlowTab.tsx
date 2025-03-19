
import React from "react";
import { 
  Wallet, Calculator, ChartLine, TrendingUp, 
  ArrowLeftRight, Percent, ShieldAlert, AlertTriangle,
  Search, CheckCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const CashFlowTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-primary" />
          <CardTitle>Cash Flow Assessment Features</CardTitle>
        </div>
        <CardDescription>
          Features to analyze cash flow patterns, expenses, and balance management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FeatureCategory title="Net Cash Flow Metrics">
          <Feature 
            title="Monthly net cash flow calculation"
            description="Calculate net income minus expenses by month"
            icon={<Calculator className="h-5 w-5 text-green-600" />}
          />
          <Feature 
            title="Rolling average cash flow"
            description="Calculate rolling average cash flow over periods"
            icon={<ChartLine className="h-5 w-5 text-green-600" />}
          />
          <Feature 
            title="Cash flow trend analysis"
            description="Analyze cash flow trends over time"
            icon={<TrendingUp className="h-5 w-5 text-green-600" />}
          />
          <Feature 
            title="Minimum/maximum cash flow periods"
            description="Identify periods with lowest and highest cash flow"
            icon={<ArrowLeftRight className="h-5 w-5 text-green-600" />}
          />
        </FeatureCategory>
        
        <Separator />
        
        <FeatureCategory title="Expense Analysis">
          <Feature 
            title="Fixed vs. variable expense ratio"
            description="Analyze the ratio of fixed to variable expenses"
            icon={<Calculator className="h-5 w-5 text-blue-600" />}
          />
          <Feature 
            title="Essential vs. discretionary spending breakdown"
            description="Categorize spending as essential or discretionary"
            icon={<Wallet className="h-5 w-5 text-blue-600" />}
          />
          <Feature 
            title="Expense growth rate"
            description="Measure the rate of expense growth over time"
            icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
          />
          <Feature 
            title="Expense-to-income ratio"
            description="Calculate what percentage of income goes to expenses"
            icon={<Percent className="h-5 w-5 text-blue-600" />}
          />
        </FeatureCategory>
        
        <Separator />
        
        <FeatureCategory title="Balance Management">
          <Feature 
            title="Average daily balance calculation"
            description="Calculate average daily account balance"
            icon={<Calculator className="h-5 w-5 text-purple-600" />}
          />
          <Feature 
            title="Balance volatility measurement"
            description="Measure how much balance fluctuates"
            icon={<ChartLine className="h-5 w-5 text-purple-600" />}
          />
          <Feature 
            title="Minimum balance maintenance"
            description="Analyze ability to maintain minimum balances"
            icon={<Wallet className="h-5 w-5 text-purple-600" />}
          />
          <Feature 
            title="Balance trend analysis"
            description="Analyze balance trends over time"
            icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
          />
        </FeatureCategory>
        
        <Separator />
        
        <FeatureCategory title="Liquidity Indicators">
          <Feature 
            title="Days of cash buffer calculation"
            description="Calculate how many days expenses could be covered"
            icon={<Calculator className="h-5 w-5 text-amber-600" />}
          />
          <Feature 
            title="Quick liquidity ratio"
            description="Measure immediate access to liquid funds"
            icon={<Percent className="h-5 w-5 text-amber-600" />}
          />
          <Feature 
            title="Cash reserve adequacy"
            description="Assess if cash reserves are adequate for needs"
            icon={<ShieldAlert className="h-5 w-5 text-amber-600" />}
          />
          <Feature 
            title="Emergency fund assessment"
            description="Evaluate emergency fund sufficiency"
            icon={<Wallet className="h-5 w-5 text-amber-600" />}
          />
        </FeatureCategory>
        
        <Separator />
        
        <FeatureCategory title="Cash Flow Stability">
          <Feature 
            title="Cash flow consistency score"
            description="Score how consistent cash flow is over time"
            icon={<CheckCircle className="h-5 w-5 text-indigo-600" />}
          />
          <Feature 
            title="Seasonal cash flow pattern detection"
            description="Detect seasonal variations in cash flow"
            icon={<Search className="h-5 w-5 text-indigo-600" />}
          />
          <Feature 
            title="Cash flow stress periods identification"
            description="Identify periods of cash flow stress"
            icon={<AlertTriangle className="h-5 w-5 text-indigo-600" />}
          />
          <Feature 
            title="Cash flow projection accuracy"
            description="Assess accuracy of cash flow projections"
            icon={<Calculator className="h-5 w-5 text-indigo-600" />}
          />
        </FeatureCategory>
      </CardContent>
    </Card>
  );
};

export default CashFlowTab;
