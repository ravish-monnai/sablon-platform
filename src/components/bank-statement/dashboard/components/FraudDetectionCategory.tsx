
import React from "react";
import { ShieldAlert } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface FraudDetectionCategoryProps {
  fraudDetectionData: any;
}

const FraudDetectionCategory: React.FC<FraudDetectionCategoryProps> = ({ fraudDetectionData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Fraud Detection
          <FeatureInfoTooltip 
            title={featureDescriptions.fraudDetection.title} 
            description={featureDescriptions.fraudDetection.description} 
          />
        </div>
      }
      icon={<ShieldAlert className="h-5 w-5 text-amber-600" />}
      description="Analysis of potential fraudulent activities including identity verification signals and income manipulation detection."
      data={[
        ...fraudDetectionData.verificationSignals.map((signal: any) => ({
          ...signal,
          description: featureDescriptions.fraudDetection.features.identityVerification
        })),
        ...fraudDetectionData.incomeManipulation.map((item: any) => ({
          ...item,
          description: featureDescriptions.fraudDetection.features.incomeManipulation
        }))
      ]}
    />
  );
};

export default FraudDetectionCategory;
