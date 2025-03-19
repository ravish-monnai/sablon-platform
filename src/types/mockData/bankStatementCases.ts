
import { CaseItem } from "../caseTypes";

export const bankStatementCases: CaseItem[] = [
  {
    id: "CASE-245",
    customer: "John Smith",
    customerId: "C10045",
    type: "Bank Statement",
    status: "High Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "Suspicious cash deposits",
    market: "India",
    bank: "HDFC Bank",
    riskScore: 87,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-243",
    customer: "Ravi Patel",
    customerId: "C10032",
    type: "Bank Statement",
    status: "High Risk",
    created: "May 14, 2023",
    source: "Bank Statement Analyzer",
    alert: "Income inconsistency",
    market: "India",
    bank: "SBI",
    riskScore: 92,
    agentAssigned: "Priya K."
  },
  {
    id: "CASE-241",
    customer: "Maria Rodriguez",
    customerId: "C10028",
    type: "Bank Statement",
    status: "Low Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "None",
    market: "Mexico",
    bank: "Bank of Mexico",
    riskScore: 12,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-240",
    customer: "Lee Wong",
    customerId: "C10022",
    type: "Bank Statement",
    status: "Medium Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "Unusual account activity",
    market: "Philippines",
    bank: "BPI",
    riskScore: 54,
    agentAssigned: "Mark T."
  },
  {
    id: "CASE-238",
    customer: "Aisha Khan",
    customerId: "C10018",
    type: "Bank Statement",
    status: "Low Risk",
    created: "May 14, 2023",
    source: "Bank Statement Analyzer",
    alert: "None",
    market: "Malaysia",
    bank: "Maybank",
    riskScore: 8,
    agentAssigned: "Unassigned"
  },
];
