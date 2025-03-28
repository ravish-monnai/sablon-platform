
import React from "react";
import RiskDashboard from "../../risk-analysis/RiskDashboard";

interface RiskAnalysisResultsProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}

const RiskAnalysisResults: React.FC<RiskAnalysisResultsProps> = ({ customerData }) => {
  return (
    <RiskDashboard
      customerData={customerData}
      riskScore={260}
      riskLevel="MEDIUM RISK"
      recommendation="ADDITIONAL VERIFICATION"
    />
  );
};

export default RiskAnalysisResults;
