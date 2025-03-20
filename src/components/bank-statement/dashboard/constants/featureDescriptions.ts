
// Feature descriptions for hover tooltips
export const featureDescriptions = {
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
  }
};
