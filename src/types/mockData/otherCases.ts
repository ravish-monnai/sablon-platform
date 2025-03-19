
import { CaseItem } from "../caseTypes";

export const otherCases: CaseItem[] = [
  {
    id: "CASE-237",
    customer: "Sarah Johnson",
    customerId: "C10012",
    type: "Transaction",
    status: "High Risk",
    created: "May 10, 2023",
    source: "Transaction Monitoring",
    alert: "Multiple rapid transfers",
    market: "US",
    bank: "N/A",
    agentAssigned: "Michael B."
  },
  {
    id: "CASE-236",
    customer: "David Lee",
    customerId: "C10009",
    type: "KYC",
    status: "Medium Risk",
    created: "May 9, 2023",
    source: "KYC Verification",
    alert: "Document inconsistency",
    market: "Global",
    bank: "N/A",
    agentAssigned: "Unassigned"
  }
];
