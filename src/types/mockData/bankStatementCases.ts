
import { CaseItem } from "../caseTypes";

export const bankStatementCases: CaseItem[] = [
  {
    id: "CASE-245",
    customer: "John Davis",
    customerId: "CUS-10245",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-09-15",
    source: "Bank Statement Analyzer Journey",
    alert: "None",
    market: "United States",
    bank: "Chase Bank",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 25,
    date: "2023-09-15",
    agentAssigned: "AI Agent",
    email: "john.davis@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    reasoning: "The customer has consistent income patterns with regular deposits from verified employers. All expenses are within normal ranges and there are no suspicious transactions. The account shows healthy cash flow with minimal risk indicators. Automated approval is recommended based on the strong financial profile shown in the bank statements.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 92,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 88,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 95,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 90,
        weight: 0.15
      }
    ],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "Chase_Statement_Aug2023.pdf",
        date: "2023-08-30"
      }
    ]
  },
  {
    id: "CASE-246",
    customer: "Sarah Johnson",
    customerId: "CUS-10246",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-09-16",
    source: "Bank Statement Analyzer Journey",
    alert: "Inconsistent Income",
    market: "United States",
    bank: "Wells Fargo",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 58,
    date: "2023-09-16",
    agentAssigned: "Maria Rodriguez",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    location: "Chicago, IL",
    reasoning: "The customer has irregular income patterns with significant variations between monthly deposits. While most expenses appear normal, there are several large unexplained transactions that require verification. The account shows adequate cash flow overall, but the inconsistency in income sources suggests medium risk. Manual review is recommended to verify the nature of the irregular income and large transactions.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 65,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 72,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 60,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 45,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Irregular income pattern detected",
      "Large unexplained transactions found",
      "Income source variation above threshold"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "WellsFargo_Statement_Aug2023.pdf",
        date: "2023-08-28"
      }
    ]
  },
  {
    id: "CASE-247",
    customer: "Michael Chen",
    customerId: "CUS-10247",
    type: "Bank Statement Analysis",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-800",
    created: "2023-09-17",
    source: "Bank Statement Analyzer Journey",
    alert: "High Risk Profile",
    market: "United States",
    bank: "Bank of America",
    journey: "Bank Statement Analysis",
    riskLevel: "High",
    riskScore: 82,
    date: "2023-09-17",
    agentAssigned: "AI Agent",
    email: "m.chen@example.com",
    phone: "+1 (555) 456-7890",
    location: "San Francisco, CA",
    reasoning: "The customer's bank statements show multiple high-risk indicators including frequent cash withdrawals, irregular deposit patterns, and several overdrafts. The account has numerous large transactions without clear purposes, and the income verification failed due to inconsistent sources. The overall cash flow appears unstable with net negative trends over the analysis period. Automatic rejection recommended based on multiple risk factors exceeding thresholds.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 35,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 42,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 28,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 85,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Multiple overdrafts detected",
      "Frequent large cash withdrawals",
      "Income verification failed",
      "Negative cash flow trend",
      "High-risk transaction patterns"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "BofA_Statement_Aug2023.pdf",
        date: "2023-08-31"
      }
    ]
  },
  {
    id: "CASE-248",
    customer: "Emily Rodriguez",
    customerId: "CUS-10248",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-09-18",
    source: "Bank Statement Analyzer Journey",
    alert: "None",
    market: "United States",
    bank: "Citibank",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 22,
    date: "2023-09-18",
    agentAssigned: "AI Agent",
    email: "e.rodriguez@example.com",
    phone: "+1 (555) 234-5678",
    location: "Miami, FL",
    reasoning: "The customer demonstrates excellent financial management with consistent income from a verified employer. Expenses are well-managed with a healthy savings pattern visible. The account maintains a strong positive balance with steady growth over the analysis period. No suspicious transactions or anomalies detected. Automated approval is recommended based on the exemplary financial behavior shown in the statements.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 95,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 90,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 97,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 93,
        weight: 0.15
      }
    ],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "Citibank_Statement_Aug2023.pdf",
        date: "2023-08-29"
      }
    ]
  },
  {
    id: "CASE-249",
    customer: "David Wilson",
    customerId: "CUS-10249",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-09-19",
    source: "Bank Statement Analyzer Journey",
    alert: "Recent Account Changes",
    market: "United States",
    bank: "TD Bank",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 55,
    date: "2023-09-19",
    agentAssigned: "James Thompson",
    email: "d.wilson@example.com",
    phone: "+1 (555) 876-5432",
    location: "Boston, MA",
    reasoning: "The customer has generally stable income but recent months show a change in the employer source. While most expenses appear normal, there was a significant change in spending patterns in the last month. The account has adequate cash flow but the recent changes merit verification. Manual review recommended to confirm the nature of the employment change and new spending patterns.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 68,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 62,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 75,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 48,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Recent employer change detected",
      "Significant shift in spending patterns",
      "New recurring payment destinations"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "TDBank_Statement_Aug2023.pdf",
        date: "2023-08-31"
      }
    ]
  }
];
