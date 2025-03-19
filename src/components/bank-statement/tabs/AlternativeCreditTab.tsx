
import React from "react";
import { 
  ThumbsUp, CheckCircle, Wallet, 
  TrendingUp, Search 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const AlternativeCreditTab: React.FC = () => {
  return (
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
      </CardContent>
    </Card>
  );
};

export default AlternativeCreditTab;
