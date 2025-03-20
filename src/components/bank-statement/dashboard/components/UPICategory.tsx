
import React from "react";
import { Smartphone } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface UPICategoryProps {
  upiData: any;
}

const UPICategory: React.FC<UPICategoryProps> = ({ upiData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          UPI Payments Analysis
          <FeatureInfoTooltip 
            title={featureDescriptions.upi.title} 
            description={featureDescriptions.upi.description} 
          />
        </div>
      }
      icon={<Smartphone className="h-5 w-5 text-indigo-600" />}
      description="Analysis of Unified Payments Interface (UPI) transactions including spending patterns, merchant reliability, and suspicious activity detection."
      data={[
        { 
          name: "Total UPI Transactions", 
          value: "47", 
          status: "Good",
          description: featureDescriptions.upi.features.totalTransactions
        },
        { 
          name: "Monthly UPI Spend", 
          value: "₹24,850", 
          status: "Medium Risk",
          description: featureDescriptions.upi.features.monthlySpend
        },
        { 
          name: "Top UPI App", 
          value: "Google Pay (68%)", 
          status: "Good",
          description: featureDescriptions.upi.features.topApp
        },
        { 
          name: "UPI Merchant Reliability", 
          value: "92%", 
          status: "Good",
          description: featureDescriptions.upi.features.merchantReliability
        },
        { 
          name: "Suspicious UPI Activity", 
          value: "None Detected", 
          status: "Low Risk",
          description: featureDescriptions.upi.features.suspiciousActivity
        }
      ]}
    />
  );
};

export default UPICategory;
