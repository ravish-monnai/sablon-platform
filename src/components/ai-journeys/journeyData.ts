
import { Journey } from "./JourneyCard";

// Sample data for live journeys by market
export const journeysByMarket: Record<string, Journey[]> = {
  'Global': [
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analyzer",
      description: "Analyzes bank statements for fraud risk and creates cases for high-risk transactions.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 58,
      alerts: 12,
      fraudCases: 5,
    },
    {
      id: "transaction-monitoring",
      name: "Transaction Monitoring",
      description: "Monitors transactions in real-time for suspicious patterns.",
      status: "active",
      lastRun: "5 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 432,
      alerts: 18,
      fraudCases: 3,
    },
    {
      id: "kyc-verification",
      name: "KYC Verification",
      description: "Automates KYC verification processes.",
      status: "paused",
      lastRun: "2 hours ago",
      apiIntegration: "GraphQL API",
      totalAnalyzed: 126,
      alerts: 8,
      fraudCases: 2,
    }
  ],
  'US': [
    {
      id: "us-fraud-detection",
      name: "US Fraud Detection",
      description: "Analyzes transactions in the US market for fraud patterns.",
      status: "active",
      lastRun: "30 seconds ago",
      apiIntegration: "REST API",
      totalAnalyzed: 284,
      alerts: 7,
      fraudCases: 2,
    },
    {
      id: "us-transaction-monitoring",
      name: "US Transaction Monitoring",
      description: "Real-time monitoring of US transactions.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 856,
      alerts: 14,
      fraudCases: 3,
    }
  ],
  'India': [
    {
      id: "india-kyc",
      name: "India KYC Verification",
      description: "KYC verification using Aadhaar for Indian customers.",
      status: "active",
      lastRun: "1 minute ago",
      apiIntegration: "REST API",
      totalAnalyzed: 203,
      alerts: 9,
      fraudCases: 2,
    },
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analyzer",
      description: "Analyzes Indian bank statements for fraud detection.",
      status: "active",
      lastRun: "5 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 42,
      alerts: 8,
      fraudCases: 3,
    }
  ],
  'Indonesia': [
    {
      id: "indonesia-loan-assessment",
      name: "Indonesia Loan Assessment",
      description: "Analyzes loan applications for Indonesian market.",
      status: "active",
      lastRun: "10 minutes ago",
      apiIntegration: "GraphQL API",
      totalAnalyzed: 68,
      alerts: 12,
      fraudCases: 4,
    }
  ],
  'Philippines': [
    {
      id: "philippines-remittance",
      name: "Philippines Remittance Verification",
      description: "Verifies remittance transactions in Philippines.",
      status: "active",
      lastRun: "15 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 134,
      alerts: 5,
      fraudCases: 1,
    }
  ],
  'Mexico': [
    {
      id: "mexico-transaction-monitoring",
      name: "Mexico Transaction Monitoring",
      description: "Monitors Mexican payment transactions for fraud.",
      status: "paused",
      lastRun: "1 hour ago",
      apiIntegration: "REST API",
      totalAnalyzed: 89,
      alerts: 7,
      fraudCases: 2,
    }
  ],
  'Brazil': [
    {
      id: "brazil-pix-monitoring",
      name: "Brazil PIX Monitoring",
      description: "Real-time monitoring of PIX transactions in Brazil.",
      status: "active",
      lastRun: "3 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 156,
      alerts: 3,
      fraudCases: 0,
    }
  ]
};
