
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
}
