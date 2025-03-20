
import { ReactNode } from 'react';
import { NodeData as WorkflowNodeData } from '@/components/workflow/types';

// Re-export the node data type from workflow types
export type NodeData = WorkflowNodeData;

// Configuration type for a complete journey workflow
export interface JourneyWorkflowConfig {
  name: string;
  description: string;
  status: string;
  lastModified: string;
  nodeCount: number;
  edgeCount: number;
  nodes: any[];
  edges: any[];
}

// Type for the complete collection of journey workflow configurations
export interface JourneyWorkflowConfigurations {
  [key: string]: JourneyWorkflowConfig;
}
