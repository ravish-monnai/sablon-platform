
import React from "react";
import { 
  ShieldAlert, AlertTriangle, XCircle, BadgeDollarSign, 
  Calculator, Calendar, ArrowLeftRight, Search, Wallet
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Feature from "../components/Feature";
import FeatureCategory from "../components/FeatureCategory";

const RiskProfilingTab: React.FC = () => {
  return (
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
  );
};

export default RiskProfilingTab;
