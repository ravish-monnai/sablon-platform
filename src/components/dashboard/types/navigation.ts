
import { LucideIcon } from "lucide-react";
import { FC } from "react";

export interface SubItem {
  label: string;
  path: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon | FC;
  subItems?: SubItem[];
}
