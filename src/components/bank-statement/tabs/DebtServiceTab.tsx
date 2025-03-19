
import React from "react";
import { 
  CreditCard, Search, Percent, CheckCircle, 
  TrendingUp, Calculator, ListCheck, Clock,
  ArrowLeftRight, AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const DebtServiceTab: React.FC = () => {
  return (
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
  );
};

export default DebtServiceTab;
