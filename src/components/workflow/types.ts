
import { ReactNode } from 'react';

// Define the node data type to ensure consistency
export interface NodeData {
  label: string;
  type: string;
  icon?: ReactNode;
  description?: string;
  modelType?: string;
  [key: string]: unknown;
}

export interface DragItemProps {
  type: string;
  icon: ReactNode;
  label: string;
  data?: Record<string, any>;
}
