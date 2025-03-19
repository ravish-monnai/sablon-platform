
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Banknote, TrendingUp, FileText, Search, 
  Wallet, ArrowLeftRight, ChartLine, Coins,
  CreditCard, FileMinus, Percent, Calculator,
  ShieldAlert, AlertTriangle, Eye, UserX,
  ThumbsUp, ThumbsDown, ListCheck, UserCheck,
  XCircle, ScanFace, Fingerprint, BadgeDollarSign,
  CheckCircle, Robot, Zap, Settings, ChevronDown,
  Calendar, Clock, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  enabled?: boolean;
  onToggle?: () => void;
}

const Feature: React.FC<FeatureProps> = ({ 
  title, 
  description, 
  icon, 
  enabled = false,
  onToggle 
}) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border bg-card">
      <div className="mt-0.5 bg-primary/10 p-2 rounded-md">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          {onToggle && (
            <Switch checked={enabled} onCheckedChange={onToggle} />
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

interface FeatureCategoryProps {
  title: string;
  children: React.ReactNode;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="space-y-3 mb-6">
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <ChevronDown 
          className={cn("ml-2 h-5 w-5 transition-transform", 
            isExpanded ? "transform rotate-180" : "")} 
        />
      </div>
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
      )}
    </div>
  );
};

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
        
        {/* Income Verification Features */}
        <TabsContent value="income-verification" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary" />
                <CardTitle>Income Verification Features</CardTitle>
              </div>
              <CardDescription>
                Features to identify, validate, and analyze income sources and patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Regular Income Identification">
                <Feature 
                  title="Recurring deposit pattern detection"
                  description="Identify recurring deposits that follow a regular pattern"
                  icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Payroll source identification"
                  description="Identify transactions that are likely from payroll sources"
                  icon={<BadgeDollarSign className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Income frequency analysis"
                  description="Analyze frequency patterns (weekly, bi-weekly, monthly)"
                  icon={<ChartLine className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Income consistency scoring"
                  description="Score how consistent income deposits are over time"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Income Amount Validation">
                <Feature 
                  title="Average income calculation"
                  description="Calculate average income over the statement period"
                  icon={<Calculator className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Median income calculation"
                  description="Calculate median income to reduce impact of outliers"
                  icon={<Calculator className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Income trend analysis"
                  description="Analyze if income is increasing, stable, or decreasing"
                  icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Income volatility measurement"
                  description="Measure how much income varies between periods"
                  icon={<ChartLine className="h-5 w-5 text-blue-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Multiple Income Stream Analysis">
                <Feature 
                  title="Secondary income source identification"
                  description="Identify additional sources of regular income"
                  icon={<BadgeDollarSign className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Gig/freelance income detection"
                  description="Detect irregular income consistent with gig work"
                  icon={<Search className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Passive income identification"
                  description="Identify dividend, interest, or rental income"
                  icon={<Coins className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Income source diversification score"
                  description="Score how diversified income sources are"
                  icon={<CheckCircle className="h-5 w-5 text-purple-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Income Stability Metrics">
                <Feature 
                  title="Income longevity assessment"
                  description="Assess how long current income sources have been active"
                  icon={<FileText className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Gap analysis between income deposits"
                  description="Analyze gaps or interruptions in income"
                  icon={<Search className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Seasonal income pattern detection"
                  description="Detect seasonal variations in income"
                  icon={<ChartLine className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Income interruption frequency"
                  description="Measure how often income streams are interrupted"
                  icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Income Verification Flags">
                <Feature 
                  title="Large unusual deposits identification"
                  description="Flag deposits that don't match normal patterns"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Round-sum deposit detection"
                  description="Detect suspiciously round deposits"
                  icon={<Search className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Transfer vs. genuine income differentiation"
                  description="Distinguish between transfers and actual income"
                  icon={<ArrowLeftRight className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Income source credibility scoring"
                  description="Score the credibility of income sources"
                  icon={<ShieldAlert className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Cash Flow Assessment Features */}
        <TabsContent value="cash-flow" className="space-y-6">
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
        </TabsContent>
        
        {/* Debt Service Coverage Features */}
        <TabsContent value="debt-service" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <CardTitle>Debt Service Coverage Features</CardTitle>
              </div>
              <CardDescription>
                Features to analyze current debt obligations and debt capacity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Existing Debt Payment Analysis">
                <Feature 
                  title="Automatic debt payment identification"
                  description="Identify recurring payments for loans and debt obligations"
                  icon={<Search className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Debt payment-to-income ratio"
                  description="Calculate what percentage of income goes to debt payments"
                  icon={<Percent className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Debt payment consistency score"
                  description="Score how consistently debt payments are made"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Debt payment trend analysis"
                  description="Analyze trends in debt payment amounts"
                  icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Debt Capacity Assessment">
                <Feature 
                  title="Residual income after existing debt payments"
                  description="Calculate income remaining after debt payments"
                  icon={<Calculator className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Potential debt service capacity"
                  description="Estimate capacity for additional debt payments"
                  icon={<CreditCard className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Debt absorption capability score"
                  description="Score ability to take on additional debt"
                  icon={<CheckCircle className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Maximum sustainable debt calculation"
                  description="Calculate maximum sustainable debt load"
                  icon={<Calculator className="h-5 w-5 text-blue-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              {/* Add more debt service coverage features as needed */}
              <FeatureCategory title="Debt Structure Analysis">
                <Feature 
                  title="Fixed vs. variable debt ratio"
                  description="Analyze ratio of fixed to variable rate debt"
                  icon={<Percent className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Secured vs. unsecured debt breakdown"
                  description="Breakdown debt into secured and unsecured categories"
                  icon={<CreditCard className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Revolving vs. installment debt proportion"
                  description="Analyze proportion of revolving to installment debt"
                  icon={<Percent className="h-5 w-5 text-purple-600" />}
                />
                <Feature 
                  title="Debt diversification assessment"
                  description="Assess how diversified debt obligations are"
                  icon={<CheckCircle className="h-5 w-5 text-purple-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Debt Management Behavior">
                <Feature 
                  title="Minimum payment vs. full payment patterns"
                  description="Analyze whether minimum or full payments are made"
                  icon={<CreditCard className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Early repayment behavior detection"
                  description="Detect patterns of early debt repayment"
                  icon={<Search className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Debt prioritization analysis"
                  description="Analyze which debts are prioritized for payment"
                  icon={<ListCheck className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Debt consolidation attempts identification"
                  description="Identify potential debt consolidation activity"
                  icon={<Search className="h-5 w-5 text-amber-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Debt Stress Indicators">
                <Feature 
                  title="Debt payment timing patterns"
                  description="Analyze when debt payments are made relative to due dates"
                  icon={<Clock className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Debt payment source analysis"
                  description="Analyze sources used to make debt payments"
                  icon={<Search className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Debt payment shuffling detection"
                  description="Detect payments being shuffled between debt accounts"
                  icon={<ArrowLeftRight className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Debt-related fee incidence"
                  description="Analyze incidence of fees related to debt"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Risk Profiling Features */}
        <TabsContent value="risk-profiling" className="space-y-6">
          {/* Similar structure with risk profiling features */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <CardTitle>Risk Profiling Features</CardTitle>
              </div>
              <CardDescription>
                Features to assess financial risk behaviors and patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Account Management Risk">
                <Feature 
                  title="Overdraft frequency and severity"
                  description="Analyze how often and how severely accounts are overdrawn"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="NSF (Non-Sufficient Funds) incident rate"
                  description="Measure rate of NSF incidents"
                  icon={<XCircle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Account fee incidence"
                  description="Analyze incidence of account-related fees"
                  icon={<BadgeDollarSign className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Balance-to-zero frequency"
                  description="Measure how often account balance hits zero"
                  icon={<Calculator className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Payment Risk Indicators">
                <Feature 
                  title="Late payment frequency"
                  description="Measure frequency of late payments"
                  icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Missed payment detection"
                  description="Detect completely missed payments"
                  icon={<XCircle className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Payment rescheduling patterns"
                  description="Analyze patterns of payment rescheduling"
                  icon={<Calendar className="h-5 w-5 text-amber-600" />}
                />
                <Feature 
                  title="Returned payment incidents"
                  description="Track incidents of returned payments"
                  icon={<ArrowLeftRight className="h-5 w-5 text-amber-600" />}
                />
              </FeatureCategory>
              
              {/* Add more risk profiling categories */}
              <Separator />
              
              <FeatureCategory title="High-Risk Transaction Analysis">
                <Feature 
                  title="Gambling transaction identification"
                  description="Identify transactions related to gambling"
                  icon={<Search className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="High-risk merchant category spending"
                  description="Analyze spending in high-risk merchant categories"
                  icon={<Wallet className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Payday loan usage detection"
                  description="Detect usage of payday loan services"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Cash advance frequency"
                  description="Measure frequency of cash advances"
                  icon={<BadgeDollarSign className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Alternative Credit Assessment Features */}
        <TabsContent value="alternative-credit" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <CardTitle>Alternative Credit Assessment Features</CardTitle>
              </div>
              <CardDescription>
                Features to evaluate creditworthiness using non-traditional indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Payment Consistency Metrics">
                <Feature 
                  title="Rent/mortgage payment regularity"
                  description="Analyze consistency of housing payments"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Utility payment consistency"
                  description="Measure consistency of utility payments"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Subscription service payment reliability"
                  description="Analyze reliability of subscription payments"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Informal loan repayment patterns"
                  description="Detect and analyze informal loan repayments"
                  icon={<Search className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Financial Responsibility Indicators">
                <Feature 
                  title="Savings behavior scoring"
                  description="Score savings behavior patterns"
                  icon={<Wallet className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Investment activity detection"
                  description="Detect and analyze investment activity"
                  icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Insurance premium payment consistency"
                  description="Analyze consistency of insurance payments"
                  icon={<CheckCircle className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Financial planning service usage"
                  description="Detect usage of financial planning services"
                  icon={<Search className="h-5 w-5 text-blue-600" />}
                />
              </FeatureCategory>
              
              {/* Add more alternative credit assessment categories */}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Fraud Detection Features */}
        <TabsContent value="fraud-detection" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <CardTitle>Fraud Detection Features</CardTitle>
              </div>
              <CardDescription>
                Features to identify potential fraudulent activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Identity Verification Signals">
                <Feature 
                  title="Name match on deposits"
                  description="Verify deposit names match account holder"
                  icon={<UserCheck className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Address consistency with application"
                  description="Check address-related transactions against application"
                  icon={<Search className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Transaction location patterns"
                  description="Analyze geographic patterns of transactions"
                  icon={<MapPin className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Digital footprint consistency"
                  description="Analyze consistency of digital transaction patterns"
                  icon={<Fingerprint className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Income Manipulation Detection">
                <Feature 
                  title="Unusual deposit timing"
                  description="Detect deposits with unusual timing patterns"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Round-sum deposit patterns"
                  description="Identify suspiciously round deposit amounts"
                  icon={<Search className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Temporary balance inflation"
                  description="Detect temporary inflation of account balances"
                  icon={<TrendingUp className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Deposit-withdrawal cycling"
                  description="Identify cycling of funds through deposits and withdrawals"
                  icon={<ArrowLeftRight className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
              
              {/* Add more fraud detection categories */}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Automated Underwriting Features */}
        <TabsContent value="automated-underwriting" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Robot className="h-5 w-5 text-primary" />
                <CardTitle>Automated Underwriting Features</CardTitle>
              </div>
              <CardDescription>
                Features to streamline and automate the underwriting process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="Decision Acceleration Metrics">
                <Feature 
                  title="Automated verification completion rate"
                  description="Track automated verification completion rate"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Data sufficiency scoring"
                  description="Score sufficiency of data for automated decisions"
                  icon={<FileText className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Exception flagging precision"
                  description="Measure precision of exception flagging"
                  icon={<AlertTriangle className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Decision confidence scoring"
                  description="Score confidence level of automated decisions"
                  icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="Standardized Evaluation Criteria">
                <Feature 
                  title="Income stability index"
                  description="Standardized index for income stability"
                  icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Expense management score"
                  description="Score for expense management behaviors"
                  icon={<Wallet className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Debt handling rating"
                  description="Standardized rating for debt handling"
                  icon={<CreditCard className="h-5 w-5 text-blue-600" />}
                />
                <Feature 
                  title="Financial stress resilience metric"
                  description="Measure resilience to financial stress"
                  icon={<ShieldAlert className="h-5 w-5 text-blue-600" />}
                />
              </FeatureCategory>
              
              {/* Add more automated underwriting categories */}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Regulatory Compliance Features */}
        <TabsContent value="regulatory" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Regulatory Compliance Features</CardTitle>
              </div>
              <CardDescription>
                Features to ensure regulatory compliance in financial analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FeatureCategory title="KYC Verification Components">
                <Feature 
                  title="Identity confirmation signals"
                  description="Signals that help confirm customer identity"
                  icon={<UserCheck className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Activity pattern consistency"
                  description="Analyze consistency of activity patterns"
                  icon={<Search className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Expected vs. actual usage patterns"
                  description="Compare expected account usage to actual patterns"
                  icon={<ChartLine className="h-5 w-5 text-green-600" />}
                />
                <Feature 
                  title="Customer profile validation"
                  description="Validate customer profile against transaction patterns"
                  icon={<UserCheck className="h-5 w-5 text-green-600" />}
                />
              </FeatureCategory>
              
              <Separator />
              
              <FeatureCategory title="AML Monitoring Metrics">
                <Feature 
                  title="Unusual transaction pattern detection"
                  description="Detect unusual transaction patterns"
                  icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="High-risk jurisdiction transactions"
                  description="Flag transactions involving high-risk jurisdictions"
                  icon={<ShieldAlert className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Structured transaction identification"
                  description="Identify potentially structured transactions"
                  icon={<Search className="h-5 w-5 text-red-600" />}
                />
                <Feature 
                  title="Source of funds verification"
                  description="Verify legitimate sources of funds"
                  icon={<CheckCircle className="h-5 w-5 text-red-600" />}
                />
              </FeatureCategory>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BankStatementFeatureExplorer;
