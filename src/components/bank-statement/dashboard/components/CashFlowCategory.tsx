
import React from "react";
import { Wallet } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface CashFlowCategoryProps {
  cashFlowData: any;
}

const CashFlowCategory: React.FC<CashFlowCategoryProps> = ({ cashFlowData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Cash Flow Assessment
          <FeatureInfoTooltip 
            title={featureDescriptions.cashFlow.title} 
            description={featureDescriptions.cashFlow.description} 
          />
        </div>
      }
      icon={<Wallet className="h-5 w-5 text-blue-600" />}
      description="Comprehensive evaluation of money movement patterns, balance trends, and financial stability indicators."
      data={[
        { 
          name: "Average Balance", 
          value: cashFlowData.averageBalance, 
          status: "Good",
          description: featureDescriptions.cashFlow.features.averageBalance
        },
        { 
          name: "Monthly Inflow", 
          value: cashFlowData.monthlyInflow, 
          status: "Good",
          description: featureDescriptions.cashFlow.features.monthlyInflow
        },
        { 
          name: "Monthly Outflow", 
          value: cashFlowData.monthlyOutflow, 
          status: "Good",
          description: featureDescriptions.cashFlow.features.monthlyOutflow
        },
        { 
          name: "Volatility", 
          value: cashFlowData.volatility, 
          status: "Low Risk",
          description: featureDescriptions.cashFlow.features.volatility
        }
      ]}
    />
  );
};

export default CashFlowCategory;
