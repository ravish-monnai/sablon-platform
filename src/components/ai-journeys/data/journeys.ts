
import { Journey } from "../JourneyCard";

// Sample data for live journeys by market
export const journeysByMarket: Record<string, Journey[]> = {
  'Global': [
    {
      id: "onboarding-fraud-detection",
      name: "Onboarding Fraud Detection",
      description: "Analyzes new user registrations and detects potential fraud patterns during onboarding.",
      status: "active",
      lastRun: "1 minute ago",
      apiIntegration: "REST API",
      totalAnalyzed: 132,
      alerts: 14,
      fraudCases: 5,
    },
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analysis",
      description: "Analyzes bank statements with the Bank Statement Analyzer Agent for fraud detection.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 167,
      alerts: 23,
      fraudCases: 8,
      featureTag: "new"
    },
    {
      id: "onboarding-kyc",
      name: "Customer Onboarding with KYC",
      description: "End-to-end customer onboarding process with comprehensive KYC verification.",
      status: "active",
      lastRun: "3 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 95,
      alerts: 7,
      fraudCases: 2,
      featureTag: "new"
    },
    {
      id: "kyc-verification",
      name: "KYC Verification",
      description: "Standalone KYC verification process with global compliance checks.",
      status: "active",
      lastRun: "4 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 78,
      alerts: 5,
      fraudCases: 1,
      featureTag: "new"
    },
    {
      id: "loan-underwriting",
      name: "Loan Underwriting",
      description: "AI-powered loan underwriting process with credit analysis and risk assessment.",
      status: "active",
      lastRun: "5 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 89,
      alerts: 12,
      fraudCases: 3,
      featureTag: "new"
    }
  ],
  'India': [
    {
      id: "india-bank-statement-analyzer",
      name: "Bank Statement Analysis",
      description: "Specialized analysis for bank statements with UPI transaction support.",
      status: "active",
      lastRun: "30 seconds ago",
      apiIntegration: "REST API",
      totalAnalyzed: 167,
      alerts: 23,
      fraudCases: 8,
      featureTag: "new"
    },
    {
      id: "india-kyc-verification",
      name: "India KYC Verification",
      description: "KYC verification process with India-specific compliance requirements.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 52,
      alerts: 3,
      fraudCases: 1,
      featureTag: "new"
    }
  ]
};

// Re-export the Journey type for use in other files
export type { Journey };
