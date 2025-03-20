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

export const generateFeatureValues = (caseData: any) => {
  // Determine market for currency formatting
  const market = caseData?.market || "India";
  
  return {
    income: {
      monthlyAverage: formatCurrency(42500, market),
      consistency: "High (92%)",
      verificationStatus: "Verified",
      sources: [
        { name: "Primary Employer", amount: formatCurrency(40000, market) },
        { name: "Secondary Income", amount: formatCurrency(2500, market) }
      ]
    },
    cashFlow: {
      averageBalance: formatCurrency(35000, market),
      monthlyInflow: formatCurrency(45000, market),
      monthlyOutflow: formatCurrency(32000, market),
      volatility: "12%"
    },
    debtService: {
      ratio: "32%",
      existingDebt: formatCurrency(12500, market),
      proposedDebt: formatCurrency(18000, market),
      riskAssessment: "Medium"
    },
    riskProfile: {
      score: "65/100",
      overdrafts: "2",
      irregularActivity: "None detected",
      trend: "Stable"
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
    }
  };
};
