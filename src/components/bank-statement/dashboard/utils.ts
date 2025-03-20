
// Helper function to get currency symbol based on market
export const getCurrencySymbol = (market?: string) => {
  if (!market) return "₹";
  
  switch (market) {
    case "India":
      return "₹";
    case "US":
      return "$";
    case "Mexico":
      return "$";
    case "Indonesia":
      return "Rp";
    case "Philippines":
      return "₱";
    default:
      return "₹";
  }
};

// Helper function to format currency based on market
export const formatCurrency = (amount: number, market?: string) => {
  if (!market) return `₹${amount.toLocaleString('en-IN')}`;
  
  switch (market) {
    case "India":
      return `₹${amount.toLocaleString('en-IN')}`;
    case "US":
      return `$${amount.toLocaleString('en-US')}`;
    case "Mexico":
      return `$${amount.toLocaleString('es-MX')}`;
    case "Indonesia":
      return `Rp${amount.toLocaleString('id-ID')}`;
    case "Philippines":
      return `₱${amount.toLocaleString('en-PH')}`;
    default:
      return `₹${amount.toLocaleString('en-IN')}`;
  }
};

// Helper function to check if a feature has exceptions
export const hasExceptions = (feature: any): boolean => {
  return feature.exceptions && feature.exceptions.length > 0;
};

// Helper function to get the appropriate CSS color class based on status
export const getStatusColor = (status: string): string => {
  const statusLower = status.toLowerCase();
  if (statusLower.includes('good') || statusLower.includes('verified') || statusLower.includes('excellent')) {
    return 'text-green-600';
  } else if (statusLower.includes('medium')) {
    return 'text-amber-600';
  } else if (statusLower.includes('high') || statusLower.includes('risk') || statusLower.includes('failed')) {
    return 'text-red-600';
  } else {
    return 'text-blue-600';
  }
};

export const generateFeatureValues = (caseData: any) => {
  // Determine market for currency formatting
  const market = caseData?.market || "India";
  
  return {
    income: {
      monthlyAverage: formatCurrency(42500, market),
      consistency: "High (92%)",
      verificationStatus: "Verified",
      sources: [
        { name: "Primary Employer", amount: formatCurrency(40000, market), frequency: "Monthly" },
        { name: "Secondary Income", amount: formatCurrency(2500, market), frequency: "Monthly" }
      ],
      monthlyData: [
        { month: "Jan", amount: 42000 },
        { month: "Feb", amount: 42000 },
        { month: "Mar", amount: 43000 },
        { month: "Apr", amount: 42500 },
        { month: "May", amount: 42500 },
        { month: "Jun", amount: 43000 }
      ],
      anomalies: [],
      exceptions: []
    },
    cashFlow: {
      averageBalance: formatCurrency(35000, market),
      monthlyInflow: formatCurrency(45000, market),
      monthlyOutflow: formatCurrency(32000, market),
      volatility: "12%",
      balanceTrend: [
        { month: "Jan", balance: 32000 },
        { month: "Feb", balance: 34000 },
        { month: "Mar", balance: 35000 },
        { month: "Apr", balance: 36500 },
        { month: "May", balance: 34000 },
        { month: "Jun", balance: 35000 }
      ],
      inOutFlow: [
        { month: "Jan", inflow: 43000, outflow: 32000 },
        { month: "Feb", inflow: 45000, outflow: 31000 },
        { month: "Mar", inflow: 44500, outflow: 33000 },
        { month: "Apr", inflow: 44000, outflow: 32000 },
        { month: "May", inflow: 45500, outflow: 33000 },
        { month: "Jun", inflow: 46000, outflow: 32500 }
      ],
      exceptions: []
    },
    debtService: {
      ratio: "32%",
      existingDebt: formatCurrency(12500, market),
      proposedDebt: formatCurrency(18000, market),
      riskAssessment: "Medium",
      debtComposition: [
        { name: "Housing", value: 40 },
        { name: "Auto", value: 25 },
        { name: "Personal", value: 20 },
        { name: "Credit Card", value: 15 }
      ],
      exceptions: []
    },
    riskProfile: {
      score: "65/100",
      overdrafts: "2",
      irregularActivity: "None detected",
      trend: "Stable",
      riskFactors: [
        { factor: "Debt-to-Income", score: 65 },
        { factor: "Payment History", score: 75 },
        { factor: "Cash Flow Stability", score: 80 },
        { factor: "Income Consistency", score: 85 }
      ],
      exceptions: []
    },
    alternativeCredit: {
      metrics: [
        { name: "Rent Payment Consistency", value: "100%", status: "Excellent" },
        { name: "Utility Payment Timeliness", value: "95%", status: "Good" }
      ],
      indicators: [
        { name: "Savings Behavior", value: formatCurrency(5000, market), status: "Good" },
        { name: "Investment Activity", value: "Detected", status: "Positive" }
      ]
    },
    fraudDetection: {
      verificationSignals: [
        { name: "Name Match on Deposits", value: "Verified", status: "Passed" },
        { name: "Address Consistency", value: "Matched", status: "Passed" }
      ],
      incomeManipulation: [
        { name: "Unusual Deposit Timing", value: "None", status: "Low Risk" },
        { name: "Temporary Balance Inflation", value: "Not Detected", status: "Low Risk" }
      ]
    },
    automatedUnderwriting: {
      accelerationMetrics: [
        { name: "Processing Time", value: "15 seconds", status: "Good" },
        { name: "Decision Confidence", value: "93%", status: "High" }
      ],
      standardizedCriteria: [
        { name: "Income Threshold", value: "Passed", status: "Good" },
        { name: "Debt Ratio Limit", value: "Passed", status: "Good" }
      ]
    },
    regulatoryCompliance: {
      kycVerification: [
        { name: "Identity Verification", value: "Completed", status: "Verified" },
        { name: "Document Authentication", value: "Validated", status: "Verified" }
      ],
      amlMonitoring: [
        { name: "Transaction Risk", value: "Low", status: "Good" },
        { name: "Watch List Check", value: "Passed", status: "Good" }
      ]
    }
  };
};
