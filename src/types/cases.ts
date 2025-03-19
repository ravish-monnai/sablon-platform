
export interface CaseItem {
  id: string;
  customer: string;
  customerId: string;
  type: string;
  status: string;
  statusColor?: string;
  created: string;
  source: string;
  alert: string;
  market?: string;
  bank?: string;
  journey?: string;
  riskLevel?: string;
  riskScore?: number;
  date?: string;
  agentAssigned: string;
}

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

export const allCases: CaseItem[] = [
  ...bankStatementCases,
  ...indianBankStatementCases,
  ...otherCases
];
