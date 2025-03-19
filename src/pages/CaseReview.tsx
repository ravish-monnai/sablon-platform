
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CaseDetailView from "@/components/cases/CaseDetailView";
import CaseNotFound from "@/components/case-review/CaseNotFound";
import { generateCases } from "@/utils/caseDataGenerator";
import { addDigitalFootprint } from "@/components/case-review/utils/digitalFootprintGenerator";

// Journey types used for case generation
export const journeys = [
  "Account Opening", 
  "Transaction Monitoring", 
  "Identity Verification", 
  "Risk Assessment",
  "Fraud Detection",
  "Bank Statement Analysis"
];

// Generate all cases once for the application
const allCases = generateCases();

const CaseReview = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [caseData, setCaseData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      const foundCase = allCases.find(c => c.id === caseId);
      if (foundCase) {
        // Add digital footprint data if it doesn't exist
        const enhancedCase = addDigitalFootprint(foundCase);
        setCaseData(enhancedCase);
      }
      setLoading(false);
    }, 500); // Short timeout to simulate loading
  }, [caseId]);

  const handleBackToList = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center h-64">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading case details...</p>
        </div>
      </div>
    );
  }

  if (!caseData) {
    return <CaseNotFound />;
  }

  return (
    <div className="container mx-auto p-6">
      <CaseDetailView caseData={caseData} onClose={handleBackToList} />
    </div>
  );
};

export default CaseReview;
