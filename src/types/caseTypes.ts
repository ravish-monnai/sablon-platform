
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
  
  // Contact information
  email?: string;
  phone?: string;
  location?: string;
  
  // Currency and payment information
  currency?: string;
  paymentMethods?: string[];
  
  // AI analysis information
  reasoning?: string;
  decisionFactors?: Array<{
    factor: string;
    score: number;
    weight: number;
  }>;
  
  // Anomaly information
  anomalyFlags?: string[];
  
  // Document information
  documents?: Array<{
    type: string;
    verified: boolean;
    name: string;
    date?: string;
  }>;
  
  // Digital footprint
  deviceId?: string;
  ipAddress?: string;
  digitalFootprint?: {
    platforms?: Array<{
      id: string;
      name: string;
      active: boolean;
      usage: number;
      lastActive: string;
    }>;
  };
}
