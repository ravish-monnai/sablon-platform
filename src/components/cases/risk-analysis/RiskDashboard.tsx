
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertTriangle, CheckCircle, Clock, AlertCircle } from "lucide-react";
import CustomerDetailsCard from "./CustomerDetailsCard";
import RiskScoreGauge from "./RiskScoreGauge";
import PhoneAnalysisResults from "./PhoneAnalysisResults";
import EmailAnalysisResults from "./EmailAnalysisResults";
import ActivityTimeline from "./ActivityTimeline";
import DigitalFootprintTab from "./DigitalFootprintTab";
import BreachHistoryTab from "./BreachHistoryTab";

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface RiskDashboardProps {
  customerData: CustomerData;
  riskScore: number;
  riskLevel: string;
  recommendation: string;
}

const RiskDashboard: React.FC<RiskDashboardProps> = ({
  customerData,
  riskScore,
  riskLevel,
  recommendation
}) => {
  const [activeTab, setActiveTab] = useState("phone");

  // Determine the colors and indicators based on risk level
  const getRiskIndicator = () => {
    if (riskLevel.includes("LOW")) {
      return {
        bgColor: "bg-green-100",
        textColor: "text-green-700",
        borderColor: "border-green-200",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      };
    } else if (riskLevel.includes("MEDIUM")) {
      return {
        bgColor: "bg-amber-100",
        textColor: "text-amber-700",
        borderColor: "border-amber-200",
        icon: <Clock className="h-5 w-5 text-amber-500" />
      };
    } else {
      return {
        bgColor: "bg-red-100",
        textColor: "text-red-700",
        borderColor: "border-red-200",
        icon: <AlertTriangle className="h-5 w-5 text-red-500" />
      };
    }
  };

  const riskIndicator = getRiskIndicator();

  return (
    <div className="space-y-6">
      {/* Risk Summary and Recommendation */}
      <div className={`p-4 rounded-md border ${riskIndicator.borderColor} ${riskIndicator.bgColor}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {riskIndicator.icon}
            <span className={`ml-2 font-medium text-lg ${riskIndicator.textColor}`}>{riskLevel}</span>
          </div>
          <Badge variant={riskLevel.includes("LOW") ? "outline" : "secondary"} className="uppercase">
            Recommendation: {recommendation}
          </Badge>
        </div>
        <p className={`text-sm ${riskIndicator.textColor}`}>
          {riskLevel.includes("LOW") 
            ? "This profile shows low risk indicators with consistent digital footprint and good verification signals."
            : riskLevel.includes("MEDIUM")
            ? "This profile has some risk indicators that require review. Consider additional verification."
            : "This profile shows significant risk factors with multiple anomalies. Rejection is recommended."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customer Details Card */}
        <CustomerDetailsCard customerData={customerData} />

        {/* Risk Score Gauge */}
        <div className="md:col-span-2">
          <RiskScoreGauge score={riskScore} />
        </div>
      </div>

      {/* Analysis Tabs */}
      <Tabs defaultValue="phone" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="phone">Phone Analysis</TabsTrigger>
          <TabsTrigger value="email">Email Analysis</TabsTrigger>
          <TabsTrigger value="digital">Digital Footprint</TabsTrigger>
          <TabsTrigger value="breach">Breach History</TabsTrigger>
          <TabsTrigger value="timeline">Activity Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="phone" className="mt-0">
          <PhoneAnalysisResults phoneNumber={customerData.phone} />
        </TabsContent>
        
        <TabsContent value="email" className="mt-0">
          <EmailAnalysisResults email={customerData.email} />
        </TabsContent>
        
        <TabsContent value="digital" className="mt-0">
          <DigitalFootprintTab email={customerData.email} />
        </TabsContent>
        
        <TabsContent value="breach" className="mt-0">
          <BreachHistoryTab email={customerData.email} />
        </TabsContent>
        
        <TabsContent value="timeline" className="mt-0">
          <ActivityTimeline email={customerData.email} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RiskDashboard;
