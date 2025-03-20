
import { CaseItem } from "../caseTypes";

export const otherCases: CaseItem[] = [
  {
    id: "CASE-KYC-101",
    customer: "Alex Thompson",
    customerId: "CUS-KYC-101",
    type: "KYC Verification",
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
    created: "2023-09-10",
    source: "KYC Verification Journey",
    alert: "None",
    market: "United States",
    journey: "KYC Verification",
    riskLevel: "Low",
    riskScore: 15,
    date: "2023-09-10",
    agentAssigned: "AI Agent",
    email: "alex.thompson@example.com",
    phone: "+1 (555) 111-2222",
    location: "Los Angeles, CA",
    reasoning: "All identity verification checks passed successfully. Documents are authentic and verified against government databases. Biometric verification confirmed identity match.",
    anomalyFlags: [],
    documents: [
      {
        type: "Passport",
        verified: true,
        name: "US_Passport.pdf",
        date: "2023-09-10"
      },
      {
        type: "Proof of Address",
        verified: true,
        name: "Utility_Bill.pdf",
        date: "2023-09-10"
      }
    ]
  },
  {
    id: "CASE-FRAUD-201",
    customer: "Jessica Miller",
    customerId: "CUS-FRAUD-201",
    type: "Fraud Detection",
    status: "Manual Review",
    statusColor: "bg-amber-100 text-amber-800",
    created: "2023-09-12",
    source: "Fraud Detection Journey",
    alert: "Suspicious Activity",
    market: "United Kingdom",
    journey: "Fraud Detection",
    riskLevel: "Medium",
    riskScore: 65,
    date: "2023-09-12",
    agentAssigned: "Thomas Wright",
    email: "j.miller@example.com",
    phone: "+44 7700 900123",
    location: "London, UK",
    reasoning: "Several unusual login attempts from different geographic locations. Transaction pattern shows deviation from historical behavior. Device fingerprint analysis indicates potential spoofing attempt.",
    anomalyFlags: [
      "Multiple login locations",
      "Unusual transaction velocity",
      "Device fingerprint anomalies"
    ],
    documents: []
  }
];
