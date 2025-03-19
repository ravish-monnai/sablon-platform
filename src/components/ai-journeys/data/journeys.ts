
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
    }
  ]
};
