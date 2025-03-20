
import { CaseItem } from "../caseTypes";

export const mexicoBankStatementCases: CaseItem[] = [
  {
    id: "CASE-MX-501",
    customer: "Carlos Fernandez",
    customerId: "CUS-MX-501",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-10-07",
    source: "Mexico Bank Statement Analyzer Journey",
    alert: "None",
    market: "Mexico",
    bank: "BBVA",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 22,
    date: "2023-10-07",
    agentAssigned: "AI Agent",
    email: "carlos.fernandez@example.com",
    phone: "+52 55 1234 5678",
    location: "Mexico City, Mexico",
    reasoning: "The customer demonstrates consistent income with regular deposits from an established employer. Transactions show normal spending patterns with predictable bill payments and household expenses. The customer maintains adequate account balances and has no concerning transaction patterns.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 90,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 88,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 91,
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
        name: "BBVA_Estado_Sep2023.pdf",
        date: "2023-09-30"
      }
    ]
  },
  {
    id: "CASE-MX-502",
    customer: "Sofia Ramirez",
    customerId: "CUS-MX-502",
    type: "Bank Statement Analysis",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-800",
    created: "2023-10-08",
    source: "Mexico Bank Statement Analyzer Journey",
    alert: "Suspected Structuring",
    market: "Mexico",
    bank: "Banorte",
    journey: "Bank Statement Analysis",
    riskLevel: "High",
    riskScore: 79,
    date: "2023-10-08",
    agentAssigned: "Miguel Rodriguez",
    email: "sofia.ramirez@example.com",
    phone: "+52 55 8765 4321",
    location: "Guadalajara, Mexico",
    reasoning: "The customer's account shows multiple deposits just below reporting thresholds, indicating potential structuring behavior. There are frequent cash deposits with unclear sources and several international transfers without supporting documentation. The transaction patterns are inconsistent with the stated income source.",
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
        score: 38,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 82,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Multiple deposits below reporting thresholds",
      "Frequent cash transactions without clear source",
      "International transfers without documentation",
      "Transaction patterns inconsistent with stated income",
      "Rapid fund movement through account"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "Banorte_Estado_Sep2023.pdf",
        date: "2023-09-28"
      }
    ]
  }
];
