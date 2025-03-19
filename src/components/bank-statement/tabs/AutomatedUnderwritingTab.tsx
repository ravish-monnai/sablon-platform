
import React from "react";
import { 
  Bot, CheckCircle, FileText, AlertTriangle, 
  TrendingUp, Wallet, CreditCard, ShieldAlert
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const AutomatedUnderwritingTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
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
      </CardContent>
    </Card>
  );
};

export default AutomatedUnderwritingTab;
