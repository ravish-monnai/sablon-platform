
import React from "react";
import { 
  DollarSign, Wallet, CreditCard, ShieldAlert, 
  ThumbsUp, AlertCircle, Smartphone
} from "lucide-react";
import SummaryDashboard from "./dashboard/SummaryDashboard";
import FeatureCategoryTable from "./dashboard/FeatureCategoryTable";
import { generateFeatureValues } from "./dashboard/utils";
import { FeatureValues } from "./dashboard/FeatureValueTypes";

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
        <FeatureCategoryTable 
          title="Income Verification" 
          icon={<DollarSign className="h-5 w-5 text-green-600" />}
          data={[
            { name: "Monthly Average", value: featureValues.income.monthlyAverage, status: "Good" },
            { name: "Consistency", value: featureValues.income.consistency, status: "Good" },
            { name: "Verification Status", value: featureValues.income.verificationStatus, status: "Verified" },
            ...featureValues.income.sources.map(source => ({
              name: `Source: ${source.name}`,
              value: source.amount,
              status: "Verified"
            }))
          ]}
        />
        
        <FeatureCategoryTable 
          title="Cash Flow Assessment" 
          icon={<Wallet className="h-5 w-5 text-blue-600" />}
          data={[
            { name: "Average Balance", value: featureValues.cashFlow.averageBalance, status: "Good" },
            { name: "Monthly Inflow", value: featureValues.cashFlow.monthlyInflow, status: "Good" },
            { name: "Monthly Outflow", value: featureValues.cashFlow.monthlyOutflow, status: "Good" },
            { name: "Volatility", value: featureValues.cashFlow.volatility, status: "Low Risk" }
          ]}
        />
        
        {/* UPI Payment Analysis for Indian Cases Only */}
        {isIndianCase && (
          <FeatureCategoryTable 
            title="UPI Payments Analysis" 
            icon={<Smartphone className="h-5 w-5 text-indigo-600" />}
            data={[
              { name: "Total UPI Transactions", value: "47", status: "Good" },
              { name: "Monthly UPI Spend", value: "₹24,850", status: "Medium Risk" },
              { name: "Top UPI App", value: "Google Pay (68%)", status: "Good" },
              { name: "UPI Merchant Reliability", value: "92%", status: "Good" },
              { name: "Suspicious UPI Activity", value: "None Detected", status: "Low Risk" }
            ]}
          />
        )}
        
        <FeatureCategoryTable 
          title="Debt Service Coverage" 
          icon={<CreditCard className="h-5 w-5 text-purple-600" />}
          data={[
            { name: "Debt Service Ratio", value: featureValues.debtService.ratio, status: "Medium Risk" },
            { name: "Existing Monthly Debt", value: featureValues.debtService.existingDebt, status: "Medium Risk" },
            { name: "Proposed Monthly Debt", value: featureValues.debtService.proposedDebt, status: "Medium Risk" },
            { name: "Risk Assessment", value: featureValues.debtService.riskAssessment, status: "Medium Risk" }
          ]}
        />
        
        <FeatureCategoryTable 
          title="Risk Profiling" 
          icon={<AlertCircle className="h-5 w-5 text-red-600" />}
          data={[
            { name: "Risk Score", value: featureValues.riskProfile.score, status: "Medium Risk" },
            { name: "Overdrafts (Last 3 Months)", value: featureValues.riskProfile.overdrafts, status: "Medium Risk" },
            { name: "Irregular Activity", value: featureValues.riskProfile.irregularActivity, status: "Low Risk" },
            { name: "Trend", value: featureValues.riskProfile.trend, status: "Improving" }
          ]}
        />
        
        <FeatureCategoryTable 
          title="Alternative Credit Assessment" 
          icon={<ThumbsUp className="h-5 w-5 text-green-600" />}
          data={[
            ...featureValues.alternativeCredit.metrics,
            ...featureValues.alternativeCredit.indicators
          ]}
        />
        
        <FeatureCategoryTable 
          title="Fraud Detection" 
          icon={<ShieldAlert className="h-5 w-5 text-amber-600" />}
          data={[
            ...featureValues.fraudDetection.verificationSignals,
            ...featureValues.fraudDetection.incomeManipulation
          ]}
        />
      </div>
    </>
  );
};

export default BankStatementFeatures;
