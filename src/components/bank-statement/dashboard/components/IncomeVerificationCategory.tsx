
import React from "react";
import { DollarSign } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface IncomeVerificationCategoryProps {
  incomeData: any;
}

const IncomeVerificationCategory: React.FC<IncomeVerificationCategoryProps> = ({ incomeData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Income Verification
          <FeatureInfoTooltip 
            title={featureDescriptions.income.title} 
            description={featureDescriptions.income.description} 
          />
        </div>
      }
      icon={<DollarSign className="h-5 w-5 text-green-600" />}
      description="Analysis of income sources, frequency, and consistency to verify declared income against bank statement transactions."
      data={[
        { 
          name: "Monthly Average", 
          value: incomeData.monthlyAverage, 
          status: "Good",
          description: featureDescriptions.income.features.monthlyAverage
        },
        { 
          name: "Consistency", 
          value: incomeData.consistency, 
          status: "Good",
          description: featureDescriptions.income.features.consistency
        },
        { 
          name: "Verification Status", 
          value: incomeData.verificationStatus, 
          status: "Verified",
          description: featureDescriptions.income.features.verificationStatus
        },
        ...incomeData.sources.map((source: any) => ({
          name: `Source: ${source.name}`,
          value: source.amount,
          status: "Verified",
          description: featureDescriptions.income.features.sources
        }))
      ]}
    />
  );
};

export default IncomeVerificationCategory;
