
import { ReactNode } from "react";

export interface JourneyStep {
  id: number | string;
  title: string;
  description: string;
  icon: ReactNode;
  status: "completed" | "active" | "upcoming";
  color?: string;
  statsData?: {
    processed: number;
    passed: number;
    exceptions: number;
  };
  branches?: Omit<JourneyStep, "status" | "branches">[];
}
