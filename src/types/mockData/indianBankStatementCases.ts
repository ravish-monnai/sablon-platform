
import { CaseItem } from "../caseTypes";

export const indianBankStatementCases: CaseItem[] = [
  {
    id: "CASE-IN-301",
    customer: "Rajesh Kumar",
    customerId: "CUS-IN-301",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-09-14",
    source: "Indian Bank Statement Analyzer Journey",
    alert: "None",
    market: "India",
    bank: "HDFC Bank",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 20,
    date: "2023-09-14",
    agentAssigned: "AI Agent",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    reasoning: "The customer shows consistent salary credits from a verified IT company employer. Expenses are well-managed with regular payments for utilities, EMIs, and household expenses. The account maintains a healthy balance with good savings patterns. No suspicious transactions detected. Automated approval is recommended based on the stable financial profile.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 94,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 88,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 92,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 95,
        weight: 0.15
      }
    ],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "HDFC_Statement_Aug2023.pdf",
        date: "2023-08-31"
      }
    ]
  },
  {
    id: "CASE-IN-302",
    customer: "Priya Sharma",
    customerId: "CUS-IN-302",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-09-15",
    source: "Indian Bank Statement Analyzer Journey",
    alert: "Irregular Cash Deposits",
    market: "India",
    bank: "ICICI Bank",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 62,
    date: "2023-09-15",
    agentAssigned: "Aditya Patel",
    email: "priya.sharma@example.com",
    phone: "+91 87654 32109",
    location: "Delhi, India",
    reasoning: "The customer has a combination of salary income and business receipts. While the salary component is consistent, there are multiple cash deposits of varying amounts that require verification. The overall cash flow is healthy, but the source of cash deposits needs clarification. Manual review recommended to verify the nature and source of the cash deposits.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 65,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 78,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 70,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 55,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Multiple cash deposits detected",
      "Inconsistent transaction patterns",
      "Mixed business and personal transactions"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "ICICI_Statement_Aug2023.pdf",
        date: "2023-08-28"
      }
    ]
  },
  {
    id: "CASE-IN-303",
    customer: "Amit Patel",
    customerId: "CUS-IN-303",
    type: "Bank Statement Analysis",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-800",
    created: "2023-09-16",
    source: "Indian Bank Statement Analyzer Journey",
    alert: "High Risk Profile",
    market: "India",
    bank: "SBI",
    journey: "Bank Statement Analysis",
    riskLevel: "High",
    riskScore: 85,
    date: "2023-09-16",
    agentAssigned: "AI Agent",
    email: "amit.patel@example.com",
    phone: "+91 76543 21098",
    location: "Bangalore, India",
    reasoning: "The customer's bank statements show multiple risk factors including frequent large cash transactions, minimal digital footprint, and significant unexplained deposits. The account shows irregular activity patterns with several high-value transactions without clear business purpose. Income source verification failed due to inconsistencies. Automatic rejection recommended based on multiple high-risk indicators.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 30,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 45,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 25,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 82,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Large unexplained deposits",
      "Frequent cash transactions exceeding ₹50,000",
      "Minimal digital transaction history",
      "Inconsistent income patterns",
      "High-value round-figure transactions"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "SBI_Statement_Aug2023.pdf",
        date: "2023-08-31"
      }
    ]
  }
];
