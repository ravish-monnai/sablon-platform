
import { NodeData, JourneyWorkflowConfigurations } from './types';
import { onboardingFraudDetection } from './onboarding-fraud-detection';
import { bankStatementAnalyzer } from './bank-statement-analyzer';

// Combine all journey workflow configurations into a single object
export const journeyWorkflowConfigurations: JourneyWorkflowConfigurations = {
  "onboarding-fraud-detection": onboardingFraudDetection,
  "bank-statement-analyzer": bankStatementAnalyzer
};

// Re-export the NodeData type for use in other modules
export type { NodeData };
