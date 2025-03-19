
// Define TypeScript interfaces for the feature values
export interface IncomeDetails {
  monthlyAverage: string;
  consistency: string;
  verificationStatus: string;
  sources: Array<{
    name: string;
    amount: string;
    frequency: string;
  }>;
  monthlyData: Array<{
    month: string;
    amount: number;
  }>;
  anomalies: any[];
  exceptions: string[];
}

export interface CashFlowDetails {
  averageBalance: string;
  monthlyInflow: string;
  monthlyOutflow: string;
  volatility: string;
  balanceTrend: Array<{
    month: string;
    balance: number;
  }>;
  inOutFlow: Array<{
    month: string;
    inflow: number;
    outflow: number;
  }>;
  exceptions: string[];
}

export interface DebtServiceDetails {
  ratio: string;
  existingDebt: string;
  proposedDebt: string;
  riskAssessment: string;
  debtComposition: Array<{
    name: string;
    value: number;
  }>;
  exceptions: string[];
}

export interface RiskProfileDetails {
  score: string;
  overdrafts: string;
  irregularActivity: string;
  trend: string;
  riskFactors: Array<{
    factor: string;
    score: number;
  }>;
  exceptions: string[];
}

export interface AlternativeCreditDetails {
  metrics: Array<{
    name: string;
    value: string;
    status: string;
  }>;
  indicators: Array<{
    name: string;
    value: string;
    status: string;
  }>;
}

export interface FraudDetectionDetails {
  verificationSignals: Array<{
    name: string;
    value: string;
    status: string;
  }>;
  incomeManipulation: Array<{
    name: string;
    value: string;
    status: string;
  }>;
}

export interface AutomatedUnderwritingDetails {
  accelerationMetrics: Array<{
    name: string;
    value: string;
    status: string;
  }>;
  standardizedCriteria: Array<{
    name: string;
    value: string;
    status: string;
  }>;
}

export interface RegulatoryComplianceDetails {
  kycVerification: Array<{
    name: string;
    value: string;
    status: string;
  }>;
  amlMonitoring: Array<{
    name: string;
    value: string;
    status: string;
  }>;
}

export interface FeatureValues {
  income: IncomeDetails;
  cashFlow: CashFlowDetails;
  debtService: DebtServiceDetails;
  riskProfile: RiskProfileDetails;
  alternativeCredit: AlternativeCreditDetails;
  fraudDetection: FraudDetectionDetails;
  automatedUnderwriting: AutomatedUnderwritingDetails;
  regulatoryCompliance: RegulatoryComplianceDetails;
}
