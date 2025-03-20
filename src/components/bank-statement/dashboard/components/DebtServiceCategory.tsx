
import React from "react";
import { CreditCard } from "lucide-react";
import FeatureCategoryTable from "../FeatureCategoryTable";
import FeatureInfoTooltip from "./FeatureInfoTooltip";
import { featureDescriptions } from "../constants/featureDescriptions";

interface DebtServiceCategoryProps {
  debtServiceData: any;
}

const DebtServiceCategory: React.FC<DebtServiceCategoryProps> = ({ debtServiceData }) => {
  return (
    <FeatureCategoryTable 
      title={
        <div className="flex items-center">
          Debt Service Coverage
          <FeatureInfoTooltip 
            title={featureDescriptions.debtService.title} 
            description={featureDescriptions.debtService.description} 
          />
        </div>
      }
      icon={<CreditCard className="h-5 w-5 text-purple-600" />}
      description="Assessment of ability to service existing and proposed debt obligations based on income and outgoing payments."
      data={[
        { 
          name: "Debt Service Ratio", 
          value: debtServiceData.ratio, 
          status: "Medium Risk",
          description: featureDescriptions.debtService.features.ratio
        },
        { 
          name: "Existing Monthly Debt", 
          value: debtServiceData.existingDebt, 
          status: "Medium Risk",
          description: featureDescriptions.debtService.features.existingDebt
        },
        { 
          name: "Proposed Monthly Debt", 
          value: debtServiceData.proposedDebt, 
          status: "Medium Risk",
          description: featureDescriptions.debtService.features.proposedDebt
        },
        { 
          name: "Risk Assessment", 
          value: debtServiceData.riskAssessment, 
          status: "Medium Risk",
          description: featureDescriptions.debtService.features.riskAssessment
        }
      ]}
    />
  );
};

export default DebtServiceCategory;
