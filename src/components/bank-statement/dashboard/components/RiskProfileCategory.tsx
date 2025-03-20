
import React from "react";
import { AlertCircle } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface RiskProfileCategoryProps {
  riskProfileData: any;
}

const RiskProfileCategory: React.FC<RiskProfileCategoryProps> = ({ riskProfileData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Risk Profiling
          <FeatureInfoTooltip 
            title={featureDescriptions.riskProfile.title} 
            description={featureDescriptions.riskProfile.description} 
          />
        </div>
      }
      icon={<AlertCircle className="h-5 w-5 text-red-600" />}
      description="Evaluation of financial risk behaviors including overdrafts, irregular activity, and overall risk trends."
      data={[
        { 
          name: "Risk Score", 
          value: riskProfileData.score, 
          status: "Medium Risk",
          description: featureDescriptions.riskProfile.features.score
        },
        { 
          name: "Overdrafts (Last 3 Months)", 
          value: riskProfileData.overdrafts, 
          status: "Medium Risk",
          description: featureDescriptions.riskProfile.features.overdrafts
        },
        { 
          name: "Irregular Activity", 
          value: riskProfileData.irregularActivity, 
          status: "Low Risk",
          description: featureDescriptions.riskProfile.features.irregularActivity
        },
        { 
          name: "Trend", 
          value: riskProfileData.trend, 
          status: "Improving",
          description: featureDescriptions.riskProfile.features.trend
        }
      ]}
    />
  );
};

export default RiskProfileCategory;
