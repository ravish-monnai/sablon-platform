
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
  [key: string]: unknown;
}

export interface DragItemProps {
  type: string;
  icon: ReactNode;
  label: string;
  data?: Record<string, any>;
}

// Export properly typed versions of WorkflowNode for use with ReactFlow
export type WorkflowNode = Node<NodeData>;
