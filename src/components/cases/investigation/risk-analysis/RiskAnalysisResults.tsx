
import React from "react";
import RiskDashboard from "../../risk-analysis/RiskDashboard";
import EmailAnalysisResults from "../../risk-analysis/EmailAnalysisResults";

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
    <div className="space-y-6">
      <RiskDashboard
        customerData={customerData}
        riskScore={260}
        riskLevel="MEDIUM RISK"
        recommendation="ADDITIONAL VERIFICATION"
      />
      
      <EmailAnalysisResults email={customerData.email} />
    </div>
  );
};

export default RiskAnalysisResults;
