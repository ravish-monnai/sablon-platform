
import React from "react";
import { 
  Banknote, TrendingUp, FileText, Search, 
  BadgeDollarSign, ChartLine, CheckCircle, 
  Calculator, ArrowLeftRight, AlertTriangle, 
  ShieldAlert, Coins
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const IncomeVerificationTab: React.FC = () => {
  return (
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
  );
};

export default IncomeVerificationTab;
