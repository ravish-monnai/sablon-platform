
import { CaseItem } from "../caseTypes";

export const usaBankStatementCases: CaseItem[] = [
  {
    id: "CASE-US-401",
    customer: "James Wilson",
    customerId: "CUS-US-401",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-10-05",
    source: "US Bank Statement Analyzer Journey",
    alert: "None",
    market: "US",
    bank: "Chase Bank",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 18,
    date: "2023-10-05",
    agentAssigned: "AI Agent",
    email: "james.wilson@example.com",
    phone: "+1 (415) 555-3892",
    location: "San Francisco, USA",
    reasoning: "The customer shows consistent direct deposits from a verified employer with stable monthly income. All expenses are well categorized with regular bill payments and no suspicious transactions. The account maintains healthy reserves and shows responsible financial behavior.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 95,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 92,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 94,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 96,
        weight: 0.15
      }
    ],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "Chase_Statement_Sep2023.pdf",
        date: "2023-09-30"
      }
    ]
  },
  {
    id: "CASE-US-402",
    customer: "Jennifer Martinez",
    customerId: "CUS-US-402",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-10-06",
    source: "US Bank Statement Analyzer Journey",
    alert: "Large Transfers",
    market: "US",
    bank: "Wells Fargo",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 54,
    date: "2023-10-06",
    agentAssigned: "Thomas Brown",
    email: "jennifer.m@example.com",
    phone: "+1 (312) 555-7261",
    location: "Chicago, USA",
    reasoning: "The customer has normal income patterns but several large transfers to external accounts require verification. While most expenses appear regular, the recent large outflows need explanation. The overall account is in good standing but the destination of large transfers should be confirmed.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 85,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 60,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 72,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 55,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Multiple large transfers to external accounts",
      "Unusual pattern in fund movement",
      "Recent change in transaction behavior"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "WellsFargo_Statement_Sep2023.pdf",
        date: "2023-09-28"
      }
    ]
  }
];
