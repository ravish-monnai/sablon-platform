
import { CaseItem } from "../caseTypes";

export const indonesiaBankStatementCases: CaseItem[] = [
  {
    id: "CASE-ID-601",
    customer: "Budi Santoso",
    customerId: "CUS-ID-601",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-10-09",
    source: "Indonesia Bank Statement Analyzer Journey",
    alert: "None",
    market: "Indonesia",
    bank: "Bank Central Asia",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 25,
    date: "2023-10-09",
    agentAssigned: "AI Agent",
    email: "budi.santoso@example.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    reasoning: "The customer shows consistent salary deposits from a verified technology company. The spending patterns align with the customer profile and include regular payments for utilities, loans, and household expenses. The account maintains appropriate balances with no unusual transaction activity.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 88,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 85,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 90,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 92,
        weight: 0.15
      }
    ],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "BCA_Statement_Sep2023.pdf",
        date: "2023-09-30"
      }
    ]
  },
  {
    id: "CASE-ID-602",
    customer: "Siti Rahayu",
    customerId: "CUS-ID-602",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-10-10",
    source: "Indonesia Bank Statement Analyzer Journey",
    alert: "Multiple Income Sources",
    market: "Indonesia",
    bank: "Bank Mandiri",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 60,
    date: "2023-10-10",
    agentAssigned: "Dewi Kusuma",
    email: "siti.rahayu@example.com",
    phone: "+62 857 1234 5678",
    location: "Surabaya, Indonesia",
    reasoning: "The customer has multiple income sources with both regular salary deposits and frequent business-related income from various sources. While the overall cash flow appears healthy, the diverse income sources require verification to ensure they align with the customer's declared business activities.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 65,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 75,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 68,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 62,
        weight: 0.15
      }
    ],
    anomalyFlags: [
      "Multiple income sources requiring verification",
      "Business-related deposits from diverse sources",
      "Mixed personal and business transactions"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "Mandiri_Statement_Sep2023.pdf",
        date: "2023-09-28"
      }
    ]
  }
];
