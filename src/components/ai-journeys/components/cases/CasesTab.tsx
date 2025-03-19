import React, { useState } from "react";
import { CaseItem } from "./types";
import CaseList from "./CaseList";
import CaseDetail from "./CaseDetail";

// Sample mock data
const mockCases: CaseItem[] = [
  {
    id: "BSA-2023-10-01",
    customer: "Rahul Sharma",
    bank: "HDFC Bank",
    date: "October 1, 2023",
    amount: "₹4,25,000.00",
    status: "success",
    details: "All verification checks passed",
    risk: "Low Risk"
  },
  {
    id: "BSA-2023-09-15",
    customer: "Priya Patel",
    bank: "SBI Bank",
    date: "September 15, 2023",
    amount: "₹7,85,000.00",
    status: "success",
    details: "Income verification passed",
    risk: "Low Risk"
  },
  {
    id: "BSA-2023-09-12",
    customer: "Vivek Singh",
    bank: "ICICI Bank",
    date: "September 12, 2023",
    amount: "₹6,50,000.00",
    status: "failure",
    details: "Suspicious transaction pattern detected",
    risk: "High Risk"
  },
  {
    id: "BSA-2023-09-08",
    customer: "Ananya Desai",
    bank: "Axis Bank",
    date: "September 8, 2023",
    amount: "₹3,20,000.00",
    status: "failure",
    details: "Income inconsistency detected",
    risk: "High Risk"
  },
  {
    id: "BSA-2023-09-05",
    customer: "Ravi Kumar",
    bank: "Yes Bank",
    date: "September 5, 2023",
    amount: "₹5,15,000.00",
    status: "success",
    details: "All verification checks passed",
    risk: "Low Risk"
  }
];

const CasesTab: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
  };
  
  const handleBackToList = () => {
    setSelectedCaseId(null);
  };
  
  // Find the selected case details
  const selectedCase = selectedCaseId ? mockCases.find(c => c.id === selectedCaseId) : null;
  
  // If a case is selected, show its details
  if (selectedCase) {
    return <CaseDetail selectedCase={selectedCase} onBackToList={handleBackToList} />;
  }
  
  // Otherwise show the list of cases
  return (
    <div className="space-y-6 pt-4">
      <CaseList cases={mockCases} onSelectCase={handleSelectCase} />
    </div>
  );
};

export default CasesTab;
