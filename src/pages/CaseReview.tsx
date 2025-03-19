
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CaseDetailView from "@/components/cases/CaseDetailView";
import CaseNotFound from "@/components/case-review/CaseNotFound";
import { addDigitalFootprint } from "@/components/case-review/utils/digitalFootprintGenerator";
import { generateCases } from "@/utils/caseDataGenerator";

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
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    // Log the caseId and sample of available case IDs for debugging
    console.log("Looking for case ID:", caseId);
    console.log("Sample available IDs:", allCases.slice(0, 5).map(c => c.id));
    
    setTimeout(() => {
      // Try to find the case by exact ID first
      let foundCase = allCases.find(c => c.id === caseId);
      
      // If not found, try case-insensitive comparison
      if (!foundCase) {
        foundCase = allCases.find(c => 
          c.id.toLowerCase() === caseId?.toLowerCase()
        );
      }
      
      // If still not found but ID looks like CASE-XXX, try to map to our format
      if (!foundCase && caseId?.startsWith('CASE-')) {
        const caseNumber = parseInt(caseId.split('-')[1]);
        if (!isNaN(caseNumber)) {
          foundCase = allCases.find(c => c.id === `FR-2023-${1000 + caseNumber}`);
        }
      }
      
      if (foundCase) {
        // Add digital footprint data if it doesn't exist
        const enhancedCase = addDigitalFootprint(foundCase);
        setCaseData(enhancedCase);
      }
      setLoading(false);
    }, 500); // Short timeout to simulate loading
  }, [caseId]);

  const handleBackToList = () => {
    navigate('/cases');
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
