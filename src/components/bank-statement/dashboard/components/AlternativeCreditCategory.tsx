
import React from "react";
import { ThumbsUp } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface AlternativeCreditCategoryProps {
  alternativeCreditData: any;
}

const AlternativeCreditCategory: React.FC<AlternativeCreditCategoryProps> = ({ alternativeCreditData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Alternative Credit Assessment
          <FeatureInfoTooltip 
            title={featureDescriptions.alternativeCredit.title} 
            description={featureDescriptions.alternativeCredit.description} 
          />
        </div>
      }
      icon={<ThumbsUp className="h-5 w-5 text-green-600" />}
      description="Non-traditional credit assessment using payment consistency, financial responsibility indicators, and saving behavior."
      data={[
        ...alternativeCreditData.metrics.map((metric: any) => ({
          ...metric,
          description: featureDescriptions.alternativeCredit.features.paymentConsistency
        })),
        ...alternativeCreditData.indicators.map((indicator: any) => ({
          ...indicator,
          description: featureDescriptions.alternativeCredit.features.financialResponsibility
        }))
      ]}
    />
  );
};

export default AlternativeCreditCategory;
