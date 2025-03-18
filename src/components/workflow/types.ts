
import { ReactNode } from 'react';

// Define the node data type to ensure consistency
export interface NodeData {
  label: string;
  description: string;
  icon?: ReactNode;
  type?: string;
  modelType?: string;
  [key: string]: unknown; // Add index signature to satisfy Record<string, unknown>
}

export interface DragItemProps {
  type: string;
  icon: ReactNode;
  label: string;
  data?: Record<string, any>;
}

