
import React from "react";
import SummaryDashboard from "./dashboard/SummaryDashboard";
import { generateFeatureValues } from "./dashboard/utils/featureGenerator";
import { FeatureValues } from "./dashboard/FeatureValueTypes";
import IncomeVerificationCategory from "./dashboard/components/IncomeVerificationCategory";
import CashFlowCategory from "./dashboard/components/CashFlowCategory";
import UPICategory from "./dashboard/components/UPICategory";
import DebtServiceCategory from "./dashboard/components/DebtServiceCategory";
import RiskProfileCategory from "./dashboard/components/RiskProfileCategory";
import AlternativeCreditCategory from "./dashboard/components/AlternativeCreditCategory";
import FraudDetectionCategory from "./dashboard/components/FraudDetectionCategory";

interface BankStatementFeaturesProps {
  activeTab?: string;
  caseData?: any;
}

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ caseData }) => {
  // Generate feature values for the dashboard
  const featureValues: FeatureValues = generateFeatureValues(caseData);
  
  // Check if this is an Indian case to show UPI analysis
  const isIndianCase = caseData?.market === "India";
  
  return (
    <>
      {/* Dashboard overview */}
      <SummaryDashboard featureValues={featureValues} />
      
      {/* Tabulated feature results by category */}
      <div className="space-y-6">
        {/* Income Verification */}
        <IncomeVerificationCategory incomeData={featureValues.income} />
        
        {/* Cash Flow Assessment */}
        <CashFlowCategory cashFlowData={featureValues.cashFlow} />
        
        {/* UPI Payment Analysis for Indian Cases Only */}
        {isIndianCase && featureValues.upi && <UPICategory upiData={featureValues.upi} />}
        
        {/* Debt Service Coverage */}
        <DebtServiceCategory debtServiceData={featureValues.debtService} />
        
        {/* Risk Profile */}
        <RiskProfileCategory riskProfileData={featureValues.riskProfile} />
        
        {/* Alternative Credit Assessment */}
        <AlternativeCreditCategory alternativeCreditData={featureValues.alternativeCredit} />
        
        {/* Fraud Detection */}
        <FraudDetectionCategory fraudDetectionData={featureValues.fraudDetection} />
      </div>
    </>
  );
};

export default BankStatementFeatures;
