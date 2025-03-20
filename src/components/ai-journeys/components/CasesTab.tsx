
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import CaseList from "./cases/CaseList";
import CaseDetail from "./cases/CaseDetail";
import { CaseItem } from "./cases/types";

// Sample case data specifically for bank statement analysis
const bankStatementCases: CaseItem[] = [
  {
    id: "CASE-245",
    customer: "John Smith",
    bank: "ICICI Bank",
    date: "2023-09-15",
    amount: "$12,500",
    status: "success",
    details: "Bank statement analysis completed with no critical issues.",
    risk: "Low Risk",
    decision: "Approved",
    decisionReason: "All verification checks passed"
  },
  {
    id: "CASE-246",
    customer: "Mary Johnson",
    bank: "HDFC Bank",
    date: "2023-09-14",
    amount: "$7,200",
    status: "failure",
    details: "Multiple inconsistencies detected in bank statement.",
    risk: "High Risk",
    decision: "Rejected",
    decisionReason: "Suspicious transaction patterns detected"
  },
  {
    id: "CASE-247",
    customer: "David Miller",
    bank: "Axis Bank",
    date: "2023-09-12",
    amount: "$9,800",
    status: "success",
    details: "Income verification completed with minor flags.",
    risk: "Medium Risk",
    decision: "Pending Review",
    decisionReason: "Manual review required for inconsistent income patterns"
  },
  {
    id: "CASE-248",
    customer: "Sarah Wilson",
    bank: "SBI Bank",
    date: "2023-09-10",
    amount: "$15,300",
    status: "success",
    details: "Statement analysis completed successfully.",
    risk: "Low Risk",
    decision: "Approved",
    decisionReason: "Consistent income pattern and no suspicious transactions"
  }
];

const CasesTab: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  
  const selectedCase = selectedCaseId 
    ? bankStatementCases.find(c => c.id === selectedCaseId) || null
    : null;
  
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
  };
  
  const handleBackToList = () => {
    setSelectedCaseId(null);
  };
  
  return (
    <div className="p-4">
      {selectedCase ? (
        <CaseDetail 
          selectedCase={selectedCase} 
          onBackToList={handleBackToList} 
        />
      ) : (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Bank Statement Analysis Cases</CardTitle>
            <CardDescription>
              Cases processed by bank statement analysis AI agents
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <CaseList cases={bankStatementCases} onSelectCase={handleSelectCase} />
          </CardContent>
          <div className="p-4 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              View All Cases <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CasesTab;
