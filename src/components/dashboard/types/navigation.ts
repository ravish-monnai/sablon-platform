
import { ReactNode } from "react";

export interface SubItem {
  label: string;
  path: string;
  icon?: React.FC<{ className?: string }>;
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  subItems?: SubItem[];
}

export type ViewMode = "customer" | "internal";
