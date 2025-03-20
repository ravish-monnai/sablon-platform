
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

export interface DragItemProps {
  type: string;
  icon: ReactNode;
  label: string;
  data?: Record<string, any>;
}

// Export properly typed versions of WorkflowNode for use with ReactFlow
export type WorkflowNode = Node<NodeData>;
