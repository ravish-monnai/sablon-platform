
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import EmailBasicInfo from "./email-analysis/EmailBasicInfo";
import RiskIndicators from "./email-analysis/RiskIndicators";
import DigitalCategories from "./email-analysis/DigitalCategories";
import BreachHistory from "./email-analysis/BreachHistory";
import { getStatusIcon, mockEmailData, mockDigitalCategories } from "./email-analysis/utils";

interface EmailAnalysisResultsProps {
  email: string;
}

const EmailAnalysisResults: React.FC<EmailAnalysisResultsProps> = ({ email }) => {
  // Using mock data from utils
  const emailBasic = mockEmailData;
  const digitalCategories = mockDigitalCategories;

  // Risk indicators based on email data
  const riskFlags = [
    emailBasic.breach.isBreached ? {
      id: "E101",
      description: `Email found in ${emailBasic.breach.breachCount} data breaches`,
      status: "warning",
      icon: AlertTriangle
    } : null,
    emailBasic.domainDetails.freeProvider ? {
      id: "E102",
      description: "Email uses free provider domain",
      status: "info",
      icon: AlertCircle
    } : null,
    emailBasic.tenure.years > 5 ? {
      id: "E103",
      description: `Email has ${emailBasic.tenure.years.toFixed(1)} years of history`,
      status: "success",
      icon: CheckCircle
    } : null,
    emailBasic.deliverable ? {
      id: "E104",
      description: "Email is deliverable",
      status: "success",
      icon: CheckCircle
    } : null
  ].filter(Boolean);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-base">Digital Footprint</CardTitle>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {emailBasic.classification.type} ({emailBasic.classification.confidence}%)
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Email Domain Information */}
          <EmailBasicInfo emailBasic={emailBasic} />
          
          {/* Risk Indicators */}
          <RiskIndicators riskFlags={riskFlags} getStatusIcon={getStatusIcon} />

          {/* Digital Footprint Categories */}
          <DigitalCategories digitalCategories={digitalCategories} />
          
          {/* Data Breach Information */}
          <BreachHistory breach={emailBasic.breach} />
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailAnalysisResults;
