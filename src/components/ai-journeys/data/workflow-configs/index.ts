
import { JourneyWorkflowConfigurations, NodeData } from './types';
import { onboardingFraudDetection } from './onboarding-fraud-detection';
import { bankStatementAnalyzer } from './bank-statement-analyzer';
import { onboardingKycWorkflow } from './onboarding-kyc';
import { kycVerificationWorkflow } from './kyc-verification';

// Combine all journey workflow configurations into a single object
export const journeyWorkflowConfigurations: JourneyWorkflowConfigurations = {
  "onboarding-fraud-detection": onboardingFraudDetection,
  "bank-statement-analyzer": bankStatementAnalyzer,
  "onboarding-kyc": onboardingKycWorkflow,
  "kyc-verification": kycVerificationWorkflow
};

// Re-export the NodeData type for use in other modules
export type { NodeData };
