
import React from "react";
import { 
  ShieldAlert, UserCheck, Search, MapPin, 
  Fingerprint, AlertTriangle, TrendingUp, 
  ArrowLeftRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const FraudDetectionTab: React.FC = () => {
  return (
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
      </CardContent>
    </Card>
  );
};

export default FraudDetectionTab;
