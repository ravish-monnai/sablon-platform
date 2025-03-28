
import { LucideIcon } from "lucide-react";

export interface SubItem {
  label: string;
  path: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  subItems?: SubItem[];
}
