
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
    currency: "$ (USD)",
    reasoning: "The customer shows consistent direct deposits from a verified employer with stable monthly income. All expenses are well categorized with regular bill payments via ACH transfers and no suspicious transactions. Zelle transfers are limited to known contacts. The account maintains healthy reserves and shows responsible financial behavior with consistent credit card payments.",
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
    paymentMethods: ["ACH", "Credit Card", "Debit Card", "Zelle", "Check"],
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
    currency: "$ (USD)",
    reasoning: "The customer has normal income patterns but several large wire transfers and Zelle payments to external accounts require verification. While most expenses appear regular with typical ACH payments for bills, the recent large outflows need explanation. Venmo transfers to multiple recipients in short timeframes raise questions. The overall account is in good standing but the destination of large transfers should be confirmed.",
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
    paymentMethods: ["ACH", "Zelle", "Venmo", "Wire Transfer", "Credit Card"],
    anomalyFlags: [
      "Multiple large transfers to external accounts",
      "Unusual pattern in fund movement",
      "Recent change in transaction behavior",
      "High volume of Zelle/Venmo transfers"
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
