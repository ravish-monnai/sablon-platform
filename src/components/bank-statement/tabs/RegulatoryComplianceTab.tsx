
import React from "react";
import { 
  FileText, UserCheck, Search, ChartLine, 
  AlertTriangle, ShieldAlert, CheckCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const RegulatoryComplianceTab: React.FC = () => {
  return (
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
  );
};

export default RegulatoryComplianceTab;
