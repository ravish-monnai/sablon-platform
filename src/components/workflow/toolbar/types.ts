
import { ReactNode } from 'react';

export interface ToolbarItemProps {
  type: string;
  label: string;
  icon: ReactNode;
  data?: Record<string, any>;
}

export interface ToolbarSectionProps {
  title: string;
  icon: ReactNode;
  items: ToolbarItemProps[];
}

export interface WorkflowToolbarProps {
  isPreviewMode: boolean;
  togglePreviewMode: () => void;
}
