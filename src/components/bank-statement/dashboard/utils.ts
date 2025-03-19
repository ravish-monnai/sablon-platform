
import { FeatureValues } from "./FeatureValueTypes";

// Function to check if a feature has exceptions
export const hasExceptions = (feature: { exceptions?: string[] }) => {
  return feature.exceptions && feature.exceptions.length > 0;
};

// Function to get the color based on status
export const getStatusColor = (status: string) => {
  if (status === "Good" || status === "Excellent" || status === "Verified" || status === "Compliant" || status === "Low Risk") {
    return "text-green-500";
  } else if (status === "Fair" || status === "Medium Risk") {
    return "text-amber-500";
  } else if (status === "Poor" || status === "High Risk") {
    return "text-red-500";
  }
  return "text-gray-500";
};

// Mock data generator for feature values based on case data
export const generateFeatureValues = (caseData?: any): FeatureValues => {
  // Mock feature values for demonstration
  return {
    income: {
      monthlyAverage: caseData?.incomeDetails?.monthlyAverage || "$4,250",
      consistency: caseData?.incomeDetails?.consistency || "92%",
      verificationStatus: caseData?.incomeDetails?.verificationStatus || "Verified",
      sources: caseData?.incomeDetails?.sources || [
        { name: "Primary Employment", amount: "$3,900", frequency: "Monthly" },
        { name: "Side Business", amount: "$350", frequency: "Monthly" }
      ],
      monthlyData: [
        { month: "Jan", amount: 4100 },
        { month: "Feb", amount: 4200 },
        { month: "Mar", amount: 4150 },
        { month: "Apr", amount: 4300 },
        { month: "May", amount: 4250 },
        { month: "Jun", amount: 4350 },
      ],
      anomalies: [],
      exceptions: []
    },
    cashFlow: {
      averageBalance: caseData?.cashFlowDetails?.averageBalance || "$2,850",
      monthlyInflow: caseData?.cashFlowDetails?.monthlyInflow || "$5,320",
      monthlyOutflow: caseData?.cashFlowDetails?.monthlyOutflow || "$4,780",
      volatility: caseData?.cashFlowDetails?.volatility || "Low",
      balanceTrend: [
        { month: "Jan", balance: 2500 },
        { month: "Feb", balance: 2700 },
        { month: "Mar", balance: 2600 },
        { month: "Apr", balance: 2900 },
        { month: "May", balance: 3000 },
        { month: "Jun", balance: 2850 },
      ],
      inOutFlow: [
        { month: "Jan", inflow: 5000, outflow: 4800 },
        { month: "Feb", inflow: 5100, outflow: 4900 },
        { month: "Mar", inflow: 5200, outflow: 5000 },
        { month: "Apr", inflow: 5300, outflow: 4700 },
        { month: "May", inflow: 5400, outflow: 4800 },
        { month: "Jun", inflow: 5320, outflow: 4780 },
      ],
      exceptions: []
    },
    debtService: {
      ratio: caseData?.debtServiceDetails?.ratio || "34%",
      existingDebt: caseData?.debtServiceDetails?.existingDebt || "$1,450",
      proposedDebt: caseData?.debtServiceDetails?.proposedDebt || "$650",
      riskAssessment: caseData?.debtServiceDetails?.riskAssessment || "Medium",
      debtComposition: [
        { name: "Mortgage", value: 1000 },
        { name: "Car Loan", value: 300 },
        { name: "Credit Card", value: 150 },
      ],
      exceptions: ["Debt service ratio above 30%"]
    },
    riskProfile: {
      score: caseData?.riskProfile?.score || "68/100",
      overdrafts: caseData?.riskProfile?.overdrafts || "2 instances",
      irregularActivity: caseData?.riskProfile?.irregularActivity || "Minimal",
      trend: caseData?.riskProfile?.trend || "Improving",
      riskFactors: [
        { factor: "Payment History", score: 75 },
        { factor: "Cash Flow Stability", score: 82 },
        { factor: "Account Age", score: 90 },
        { factor: "Transaction Patterns", score: 65 },
      ],
      exceptions: ["Two overdraft instances in the last 6 months"]
    },
    alternativeCredit: {
      metrics: [
        { name: "Rent/mortgage payment regularity", value: "98% on-time", status: "Good" },
        { name: "Utility payment consistency", value: "95% on-time", status: "Good" },
        { name: "Subscription service payment reliability", value: "99% on-time", status: "Excellent" },
        { name: "Informal loan repayment patterns", value: "No detection", status: "N/A" }
      ],
      indicators: [
        { name: "Savings behavior scoring", value: "72/100", status: "Good" },
        { name: "Investment activity detection", value: "Minimal", status: "Fair" },
        { name: "Insurance premium payment consistency", value: "100% on-time", status: "Excellent" },
        { name: "Financial planning service usage", value: "None detected", status: "N/A" }
      ]
    },
    fraudDetection: {
      verificationSignals: [
        { name: "Name match on deposits", value: "100% match", status: "Verified" },
        { name: "Address consistency with application", value: "100% match", status: "Verified" },
        { name: "Transaction location patterns", value: "Normal pattern", status: "Low Risk" },
        { name: "Digital footprint consistency", value: "Consistent", status: "Low Risk" }
      ],
      incomeManipulation: [
        { name: "Unusual deposit timing", value: "None detected", status: "Low Risk" },
        { name: "Round-sum deposit patterns", value: "1 instance", status: "Medium Risk" },
        { name: "Temporary balance inflation", value: "None detected", status: "Low Risk" },
        { name: "Deposit-withdrawal cycling", value: "None detected", status: "Low Risk" }
      ]
    },
    automatedUnderwriting: {
      accelerationMetrics: [
        { name: "Automated verification completion rate", value: "95%", status: "High" },
        { name: "Data sufficiency scoring", value: "87/100", status: "Good" },
        { name: "Exception flagging precision", value: "92%", status: "High" },
        { name: "Decision confidence scoring", value: "84/100", status: "Good" }
      ],
      standardizedCriteria: [
        { name: "Income stability index", value: "78/100", status: "Good" },
        { name: "Expense management score", value: "72/100", status: "Good" },
        { name: "Debt handling rating", value: "65/100", status: "Fair" },
        { name: "Financial stress resilience metric", value: "70/100", status: "Good" }
      ]
    },
    regulatoryCompliance: {
      kycVerification: [
        { name: "Identity confirmation signals", value: "All verified", status: "Compliant" },
        { name: "Activity pattern consistency", value: "Consistent", status: "Compliant" },
        { name: "Expected vs. actual usage patterns", value: "Match", status: "Compliant" },
        { name: "Customer profile validation", value: "Validated", status: "Compliant" }
      ],
      amlMonitoring: [
        { name: "Unusual transaction pattern detection", value: "None detected", status: "Low Risk" },
        { name: "High-risk jurisdiction transactions", value: "None detected", status: "Low Risk" },
        { name: "Structured transaction identification", value: "None detected", status: "Low Risk" },
        { name: "Source of funds verification", value: "Verified", status: "Compliant" }
      ]
    }
  };
};
