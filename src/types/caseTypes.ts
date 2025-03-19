
export interface CaseItem {
  id: string;
  customer: string;
  customerId: string;
  type: string;
  status: string;
  statusColor?: string;
  created: string;
  source: string;
  alert: string;
  market?: string;
  bank?: string;
  journey?: string;
  riskLevel?: string;
  riskScore?: number;
  date?: string;
  agentAssigned: string;
  
  // Additional properties that might be needed by CaseDetailView
  email?: string;
  phone?: string;
  location?: string;
  reasoning?: string;
  decisionFactors?: Array<{
    factor: string;
    score: number;
    weight: number;
  }>;
  anomalyFlags?: string[];
  documents?: Array<{
    type: string;
    verified: boolean;
    name: string;
    date?: string;
  }>;
}
