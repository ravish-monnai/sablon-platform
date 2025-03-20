
import { CaseItem } from "../caseTypes";

export const philippinesBankStatementCases: CaseItem[] = [
  {
    id: "CASE-PH-701",
    customer: "Manuel Santos",
    customerId: "CUS-PH-701",
    type: "Bank Statement Analysis",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-10-11",
    source: "Philippines Bank Statement Analyzer Journey",
    alert: "None",
    market: "Philippines",
    bank: "BDO Unibank",
    journey: "Bank Statement Analysis",
    riskLevel: "Low",
    riskScore: 20,
    date: "2023-10-11",
    agentAssigned: "AI Agent",
    email: "manuel.santos@example.com",
    phone: "+63 917 123 4567",
    location: "Manila, Philippines",
    currency: "₱ (PHP)",
    reasoning: "The customer demonstrates stable income with regular salary credits from a verified employer. The spending pattern shows consistent bill payments through InstaPay and PESONet transfers for utilities and normal household expenses. GCash and Maya digital wallet transactions match expected spending patterns. The account shows good financial management with appropriate reserves and no questionable transactions.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 92,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 90,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 93,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 94,
        weight: 0.15
      }
    ],
    paymentMethods: ["InstaPay", "PESONet", "GCash", "Maya", "QR Ph"],
    anomalyFlags: [],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "BDO_Statement_Sep2023.pdf",
        date: "2023-09-30"
      }
    ]
  },
  {
    id: "CASE-PH-702",
    customer: "Maria Reyes",
    customerId: "CUS-PH-702",
    type: "Bank Statement Analysis",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-10-12",
    source: "Philippines Bank Statement Analyzer Journey",
    alert: "Overseas Remittances",
    market: "Philippines",
    bank: "Bank of the Philippine Islands",
    journey: "Bank Statement Analysis",
    riskLevel: "Medium",
    riskScore: 58,
    date: "2023-10-12",
    agentAssigned: "Juan Dela Cruz",
    email: "maria.reyes@example.com",
    phone: "+63 919 876 5432",
    location: "Cebu, Philippines",
    currency: "₱ (PHP)",
    reasoning: "The customer receives regular overseas remittances which form a significant portion of their income. Frequent GCash cash-in and cash-out transactions of varying amounts. While remittances are common in the Philippines, the amounts and frequency require verification against the customer's profile. Most expenses appear normal but there are occasional large withdrawals and multiple transfers between e-wallets like GCash and Maya that need explanation.",
    decisionFactors: [
      {
        factor: "Income Verification",
        score: 68,
        weight: 0.35
      },
      {
        factor: "Expense Analysis",
        score: 72,
        weight: 0.25
      },
      {
        factor: "Cash Flow Stability",
        score: 65,
        weight: 0.25
      },
      {
        factor: "Risk Indicators",
        score: 60,
        weight: 0.15
      }
    ],
    paymentMethods: ["InstaPay", "GCash", "Maya", "Western Union", "Cash Withdrawals"],
    anomalyFlags: [
      "Regular overseas remittances requiring verification",
      "Occasional large cash withdrawals",
      "Multiple conversion transactions",
      "Frequent e-wallet transfers between GCash and Maya accounts"
    ],
    documents: [
      {
        type: "Bank Statement",
        verified: true,
        name: "BPI_Statement_Sep2023.pdf",
        date: "2023-09-28"
      }
    ]
  }
];
