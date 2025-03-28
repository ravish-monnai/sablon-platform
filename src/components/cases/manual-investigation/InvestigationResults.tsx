
import React from "react";
import { useInvestigation } from "./InvestigationProvider";
import RiskAnalysisResults from "../investigation/risk-analysis/RiskAnalysisResults";
import IdentityVerificationResults from "../investigation/IdentityVerificationResults";
import ReachabilityResults from "../investigation/ReachabilityResults";
import { sampleKycData, sampleReachabilityData, sampleCustomerData } from "../investigation/utils/sampleData";

const InvestigationResults: React.FC = () => {
  const { showResults, isAnalyzing, investigationType } = useInvestigation();

  if (!showResults || isAnalyzing) return null;

  // Render the appropriate results component based on investigation type
  switch (investigationType) {
    case "risk-analysis":
      return <RiskAnalysisResults customerData={sampleCustomerData} />;
    
    case "identity-verification":
      return <IdentityVerificationResults data={sampleKycData.data} />;
    
    case "reachability":
      return <ReachabilityResults data={sampleReachabilityData} />;
    
    default:
      return null;
  }
};

export default InvestigationResults;
