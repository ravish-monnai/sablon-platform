
import { CaseItem } from "../caseTypes";

export const indianBankStatementCases: CaseItem[] = [
  {
    id: "CASE-IN-123",
    customer: "Raj Patel",
    customerId: "C20045",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 10, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Multiple UPI transactions",
    market: "India",
    bank: "HDFC Bank",
    riskScore: 89,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-IN-122",
    customer: "Priya Sharma",
    customerId: "C20044",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 9, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Large cash deposits",
    market: "India",
    bank: "SBI",
    riskScore: 91,
    agentAssigned: "Amit K."
  },
  {
    id: "CASE-IN-121",
    customer: "Kiran Mehta",
    customerId: "C20043",
    type: "Bank Statement",
    status: "Medium Risk",
    created: "Aug 8, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Income inconsistency",
    market: "India",
    bank: "ICICI Bank",
    riskScore: 65,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-IN-120",
    customer: "Rahul Verma",
    customerId: "C20042",
    type: "Bank Statement",
    status: "Low Risk",
    created: "Aug 7, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Minor discrepancy",
    market: "India",
    bank: "Axis Bank",
    riskScore: 30,
    agentAssigned: "Neha S."
  },
  {
    id: "CASE-IN-119",
    customer: "Anita Desai",
    customerId: "C20041",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 6, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "UPI fraud pattern",
    market: "India",
    bank: "Yes Bank",
    riskScore: 88,
    agentAssigned: "Unassigned"
  },
];
