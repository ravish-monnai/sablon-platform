
import React from "react";
import { 
  DollarSign, Wallet, CreditCard, ShieldAlert, 
  ThumbsUp, AlertCircle, Smartphone, FileText, Bot,
  Info
} from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import SummaryDashboard from "./dashboard/SummaryDashboard";
import FeatureCategoryTable from "./dashboard/FeatureCategoryTable";
import { generateFeatureValues } from "./dashboard/utils";
import { FeatureValues } from "./dashboard/FeatureValueTypes";

interface BankStatementFeaturesProps {
  activeTab?: string;
  caseData?: any;
}

// Feature descriptions for hover tooltips
const featureDescriptions = {
  income: {
    title: "Income Verification",
    description: "Comprehensive analysis of income patterns from bank statements to verify declared income.",
    features: {
      monthlyAverage: "Average monthly income calculated across the statement period.",
      consistency: "Measure of how regular and predictable the income deposits are.",
      verificationStatus: "Overall verification status of the applicant's declared income.",
      sources: "Identification and verification of different income sources."
    }
  },
  cashFlow: {
    title: "Cash Flow Assessment",
    description: "Analysis of money movement patterns to evaluate financial health and stability.",
    features: {
      averageBalance: "Average account balance maintained throughout the statement period.",
      monthlyInflow: "Total money coming into the account each month.",
      monthlyOutflow: "Total money going out of the account each month.",
      volatility: "Measure of how much the account balance fluctuates."
    }
  },
  upi: {
    title: "UPI Payments Analysis",
    description: "Detailed analysis of Unified Payments Interface transactions for Indian accounts.",
    features: {
      totalTransactions: "Total number of UPI transactions in the statement period.",
      monthlySpend: "Average monthly spending through UPI platforms.",
      topApp: "Most frequently used UPI application.",
      merchantReliability: "Assessment of merchants where UPI payments are made.",
      suspiciousActivity: "Detection of any unusual or suspicious UPI activity."
    }
  },
  debtService: {
    title: "Debt Service Coverage",
    description: "Assessment of ability to meet debt obligations based on income and existing debts.",
    features: {
      ratio: "Ratio of income to debt service obligations.",
      existingDebt: "Current monthly debt obligations identified in the statements.",
      proposedDebt: "New debt obligations being applied for.",
      riskAssessment: "Overall risk assessment of the applicant's debt service ability."
    }
  },
  riskProfile: {
    title: "Risk Profiling",
    description: "Evaluation of financial behavior patterns that indicate potential risk.",
    features: {
      score: "Numerical score representing overall risk level.",
      overdrafts: "Frequency and severity of account overdrafts.",
      irregularActivity: "Detection of unusual or concerning transaction patterns.",
      trend: "Direction of risk profile over time (improving/worsening)."
    }
  },
  alternativeCredit: {
    title: "Alternative Credit Assessment",
    description: "Evaluation of creditworthiness using non-traditional indicators in bank statements.",
    features: {
      paymentConsistency: "Analysis of regularity in bill and subscription payments.",
      savingBehavior: "Patterns of saving money and maintaining reserves.",
      financialResponsibility: "Indicators of responsible financial management.",
      investmentActivity: "Detection and analysis of investment-related transactions."
    }
  },
  fraudDetection: {
    title: "Fraud Detection",
    description: "Analysis of statement data for indicators of potential fraudulent activity.",
    features: {
      identityVerification: "Verification of account holder identity through transaction patterns.",
      addressConsistency: "Consistency of location-based transactions with declared address.",
      transactionPatterns: "Analysis of unusual or suspicious transaction patterns.",
      incomeManipulation: "Detection of potential artificial inflation of income."
    }
  },
  regulatoryCompliance: {
    title: "Regulatory Compliance",
    description: "Features ensuring compliance with financial regulations and standards.",
    features: {
      kycVerification: "Know Your Customer verification components.",
      amlMonitoring: "Anti-Money Laundering monitoring metrics.",
      sourceOfFunds: "Verification of legitimate sources of funds.",
      highRiskActivity: "Detection of potentially high-risk transaction activity."
    }
  },
  automatedUnderwriting: {
    title: "Automated Underwriting",
    description: "Standardized metrics for automated credit decision-making.",
    features: {
      accelerationMetrics: "Metrics for accelerating the decision process.",
      standardizedCriteria: "Standardized evaluation criteria for consistent assessments.",
      decisionConfidence: "Confidence level of automated decisions.",
      exceptionHandling: "Identification and handling of exceptions to standard criteria."
    }
  }
};

const FeatureInfoTooltip = ({ title, description }: { title: string, description: string }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <div className="inline-flex items-center cursor-help">
        <Info className="h-4 w-4 text-muted-foreground ml-1" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ caseData }) => {
  // Generate feature values for the dashboard
  const featureValues: FeatureValues = generateFeatureValues(caseData);
  
  // Check if this is an Indian case to show UPI analysis
  const isIndianCase = caseData?.market === "India";
  
  return (
    <>
      {/* Dashboard overview */}
      <SummaryDashboard featureValues={featureValues} />
      
      {/* Tabulated feature results by category */}
      <div className="space-y-6">
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Income Verification
              <FeatureInfoTooltip 
                title={featureDescriptions.income.title} 
                description={featureDescriptions.income.description} 
              />
            </div>
          }
          icon={<DollarSign className="h-5 w-5 text-green-600" />}
          description="Analysis of income sources, frequency, and consistency to verify declared income against bank statement transactions."
          data={[
            { 
              name: "Monthly Average", 
              value: featureValues.income.monthlyAverage, 
              status: "Good",
              description: featureDescriptions.income.features.monthlyAverage
            },
            { 
              name: "Consistency", 
              value: featureValues.income.consistency, 
              status: "Good",
              description: featureDescriptions.income.features.consistency
            },
            { 
              name: "Verification Status", 
              value: featureValues.income.verificationStatus, 
              status: "Verified",
              description: featureDescriptions.income.features.verificationStatus
            },
            ...featureValues.income.sources.map(source => ({
              name: `Source: ${source.name}`,
              value: source.amount,
              status: "Verified",
              description: featureDescriptions.income.features.sources
            }))
          ]}
        />
        
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Cash Flow Assessment
              <FeatureInfoTooltip 
                title={featureDescriptions.cashFlow.title} 
                description={featureDescriptions.cashFlow.description} 
              />
            </div>
          }
          icon={<Wallet className="h-5 w-5 text-blue-600" />}
          description="Comprehensive evaluation of money movement patterns, balance trends, and financial stability indicators."
          data={[
            { 
              name: "Average Balance", 
              value: featureValues.cashFlow.averageBalance, 
              status: "Good",
              description: featureDescriptions.cashFlow.features.averageBalance
            },
            { 
              name: "Monthly Inflow", 
              value: featureValues.cashFlow.monthlyInflow, 
              status: "Good",
              description: featureDescriptions.cashFlow.features.monthlyInflow
            },
            { 
              name: "Monthly Outflow", 
              value: featureValues.cashFlow.monthlyOutflow, 
              status: "Good",
              description: featureDescriptions.cashFlow.features.monthlyOutflow
            },
            { 
              name: "Volatility", 
              value: featureValues.cashFlow.volatility, 
              status: "Low Risk",
              description: featureDescriptions.cashFlow.features.volatility
            }
          ]}
        />
        
        {/* UPI Payment Analysis for Indian Cases Only */}
        {isIndianCase && (
          <FeatureCategoryTable 
            title={
              <div className="flex items-center">
                UPI Payments Analysis
                <FeatureInfoTooltip 
                  title={featureDescriptions.upi.title} 
                  description={featureDescriptions.upi.description} 
                />
              </div>
            }
            icon={<Smartphone className="h-5 w-5 text-indigo-600" />}
            description="Analysis of Unified Payments Interface (UPI) transactions including spending patterns, merchant reliability, and suspicious activity detection."
            data={[
              { 
                name: "Total UPI Transactions", 
                value: "47", 
                status: "Good",
                description: featureDescriptions.upi.features.totalTransactions
              },
              { 
                name: "Monthly UPI Spend", 
                value: "₹24,850", 
                status: "Medium Risk",
                description: featureDescriptions.upi.features.monthlySpend
              },
              { 
                name: "Top UPI App", 
                value: "Google Pay (68%)", 
                status: "Good",
                description: featureDescriptions.upi.features.topApp
              },
              { 
                name: "UPI Merchant Reliability", 
                value: "92%", 
                status: "Good",
                description: featureDescriptions.upi.features.merchantReliability
              },
              { 
                name: "Suspicious UPI Activity", 
                value: "None Detected", 
                status: "Low Risk",
                description: featureDescriptions.upi.features.suspiciousActivity
              }
            ]}
          />
        )}
        
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Debt Service Coverage
              <FeatureInfoTooltip 
                title={featureDescriptions.debtService.title} 
                description={featureDescriptions.debtService.description} 
              />
            </div>
          }
          icon={<CreditCard className="h-5 w-5 text-purple-600" />}
          description="Assessment of ability to service existing and proposed debt obligations based on income and outgoing payments."
          data={[
            { 
              name: "Debt Service Ratio", 
              value: featureValues.debtService.ratio, 
              status: "Medium Risk",
              description: featureDescriptions.debtService.features.ratio
            },
            { 
              name: "Existing Monthly Debt", 
              value: featureValues.debtService.existingDebt, 
              status: "Medium Risk",
              description: featureDescriptions.debtService.features.existingDebt
            },
            { 
              name: "Proposed Monthly Debt", 
              value: featureValues.debtService.proposedDebt, 
              status: "Medium Risk",
              description: featureDescriptions.debtService.features.proposedDebt
            },
            { 
              name: "Risk Assessment", 
              value: featureValues.debtService.riskAssessment, 
              status: "Medium Risk",
              description: featureDescriptions.debtService.features.riskAssessment
            }
          ]}
        />
        
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Risk Profiling
              <FeatureInfoTooltip 
                title={featureDescriptions.riskProfile.title} 
                description={featureDescriptions.riskProfile.description} 
              />
            </div>
          }
          icon={<AlertCircle className="h-5 w-5 text-red-600" />}
          description="Evaluation of financial risk behaviors including overdrafts, irregular activity, and overall risk trends."
          data={[
            { 
              name: "Risk Score", 
              value: featureValues.riskProfile.score, 
              status: "Medium Risk",
              description: featureDescriptions.riskProfile.features.score
            },
            { 
              name: "Overdrafts (Last 3 Months)", 
              value: featureValues.riskProfile.overdrafts, 
              status: "Medium Risk",
              description: featureDescriptions.riskProfile.features.overdrafts
            },
            { 
              name: "Irregular Activity", 
              value: featureValues.riskProfile.irregularActivity, 
              status: "Low Risk",
              description: featureDescriptions.riskProfile.features.irregularActivity
            },
            { 
              name: "Trend", 
              value: featureValues.riskProfile.trend, 
              status: "Improving",
              description: featureDescriptions.riskProfile.features.trend
            }
          ]}
        />
        
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Alternative Credit Assessment
              <FeatureInfoTooltip 
                title={featureDescriptions.alternativeCredit.title} 
                description={featureDescriptions.alternativeCredit.description} 
              />
            </div>
          }
          icon={<ThumbsUp className="h-5 w-5 text-green-600" />}
          description="Non-traditional credit assessment using payment consistency, financial responsibility indicators, and saving behavior."
          data={[
            ...featureValues.alternativeCredit.metrics.map(metric => ({
              ...metric,
              description: featureDescriptions.alternativeCredit.features.paymentConsistency
            })),
            ...featureValues.alternativeCredit.indicators.map(indicator => ({
              ...indicator,
              description: featureDescriptions.alternativeCredit.features.financialResponsibility
            }))
          ]}
        />
        
        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Fraud Detection
              <FeatureInfoTooltip 
                title={featureDescriptions.fraudDetection.title} 
                description={featureDescriptions.fraudDetection.description} 
              />
            </div>
          }
          icon={<ShieldAlert className="h-5 w-5 text-amber-600" />}
          description="Analysis of potential fraudulent activities including identity verification signals and income manipulation detection."
          data={[
            ...featureValues.fraudDetection.verificationSignals.map(signal => ({
              ...signal,
              description: featureDescriptions.fraudDetection.features.identityVerification
            })),
            ...featureValues.fraudDetection.incomeManipulation.map(item => ({
              ...item,
              description: featureDescriptions.fraudDetection.features.incomeManipulation
            }))
          ]}
        />

        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Regulatory Compliance
              <FeatureInfoTooltip 
                title={featureDescriptions.regulatoryCompliance.title} 
                description={featureDescriptions.regulatoryCompliance.description} 
              />
            </div>
          }
          icon={<FileText className="h-5 w-5 text-blue-600" />}
          description="Assessment of compliance with KYC regulations, AML monitoring metrics, and transaction verification requirements."
          data={[
            ...featureValues.regulatoryCompliance.kycVerification.map(item => ({
              ...item,
              description: featureDescriptions.regulatoryCompliance.features.kycVerification
            })),
            ...featureValues.regulatoryCompliance.amlMonitoring.map(item => ({
              ...item,
              description: featureDescriptions.regulatoryCompliance.features.amlMonitoring
            }))
          ]}
        />

        <FeatureCategoryTable 
          title={
            <div className="flex items-center">
              Automated Underwriting
              <FeatureInfoTooltip 
                title={featureDescriptions.automatedUnderwriting.title} 
                description={featureDescriptions.automatedUnderwriting.description} 
              />
            </div>
          }
          icon={<Bot className="h-5 w-5 text-purple-600" />}
          description="Standardized metrics and scoring for automated credit decision-making and exception handling."
          data={[
            ...featureValues.automatedUnderwriting.accelerationMetrics.map(metric => ({
              ...metric,
              description: featureDescriptions.automatedUnderwriting.features.accelerationMetrics
            })),
            ...featureValues.automatedUnderwriting.standardizedCriteria.map(criteria => ({
              ...criteria,
              description: featureDescriptions.automatedUnderwriting.features.standardizedCriteria
            }))
          ]}
        />
      </div>
    </>
  );
};

export default BankStatementFeatures;
