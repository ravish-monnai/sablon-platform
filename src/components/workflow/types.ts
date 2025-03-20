import { ReactNode } from 'react';
import { Node } from '@xyflow/react';

// Define the node data type to ensure consistency
export interface NodeData {
  label: string;
  type: string;
  icon?: ReactNode;
  description?: string;
  modelType?: string;
  color?: string;
  status?: string;
  rules?: AnalysisRule[];
  apiSpecs?: ApiSpecification;
  featureExtraction?: FeatureExtractionConfig;
  riskAssessment?: RiskAssessmentConfig;
  caseConfiguration?: CaseConfiguration;
  // New fields for enhanced configuration
  inputs?: string[];
  outputs?: string[];
  mappings?: Record<string, string>;
  decisions?: {
    condition: string;
    outcome: string;
    nextNode?: string;
  }[];
  featureTag?: 'new' | 'beta' | 'updated' | 'ai' | 'premium';
  [key: string]: unknown;
}

export interface AnalysisRule {
  id: string;
  condition: string;
  operator: string;
  value: string;
  action: string;
  priority?: 'low' | 'medium' | 'high';
  notes?: string;
  ruleType?: 'simple' | 'compound' | 'temporal';
}

export interface ApiSpecification {
  endpoint?: string;
  method?: string;
  authType?: string;
  requiredFields?: string[];
  optionalFields?: string[];
  responseFormat?: string;
  s3Config?: {
    bucketName?: string;
    region?: string;
    accessKeyRequired?: boolean;
    allowedFileTypes?: string[];
    maxFileSize?: string;
  };
}

export interface FeatureExtractionConfig {
  features?: string[];
  models?: string[];
  confidenceThreshold?: number;
  processingTime?: string;
}

export interface RiskAssessmentConfig {
  thresholds?: {
    highRisk?: number;
    mediumRisk?: number;
    lowRisk?: number;
  };
  factors?: string[];
  modelType?: string;
  autoDecision?: boolean;
}

export interface CaseConfiguration {
  caseType?: string;
  priority?: string;
  assignedTeam?: string;
  slaHours?: number;
  autoNotify?: boolean;
  requiredDocuments?: string[];
}

export interface DragItemProps {
  type: string;
  icon: ReactNode;
  label: string;
  data?: Record<string, any>;
}

// Export properly typed versions of WorkflowNode for use with ReactFlow
export type WorkflowNode = Node<NodeData>;
