
// Feature data structure for Indian Bank Statement Analyzer

export interface FeatureDetail {
  feature: string;
  description: string;
  enabled: boolean;
}

export interface FeatureSubcategory {
  name: string;
  features: FeatureDetail[];
}

export interface FeatureCategory {
  name: string;
  subcategories: FeatureSubcategory[];
}

export const bankStatementFeatures: FeatureCategory[] = [
  {
    name: "Income Verification",
    subcategories: [
      {
        name: "Regular Income Identification",
        features: [
          { feature: "Recurring deposit pattern detection", description: "Detects regular deposit patterns that may indicate salary or income", enabled: true },
          { feature: "Payroll source identification", description: "Identifies deposits from known payroll processors and employers", enabled: true },
          { feature: "Income frequency analysis", description: "Analyzes if income follows weekly, bi-weekly, or monthly patterns", enabled: true },
          { feature: "Income consistency scoring", description: "Scores the consistency of income deposits over time", enabled: true }
        ]
      },
      {
        name: "Income Amount Validation",
        features: [
          { feature: "Average income calculation", description: "Calculates average income across multiple periods", enabled: true },
          { feature: "Median income calculation", description: "Determines median income to account for outliers", enabled: true },
          { feature: "Income trend analysis", description: "Analyzes if income is increasing, stable, or decreasing", enabled: true },
          { feature: "Income volatility measurement", description: "Measures variations in income amounts over time", enabled: true }
        ]
      },
      {
        name: "Multiple Income Stream Analysis",
        features: [
          { feature: "Secondary income source identification", description: "Identifies multiple potential income sources", enabled: true },
          { feature: "Gig/freelance income detection", description: "Detects irregular income patterns common with gig workers", enabled: true },
          { feature: "Passive income identification", description: "Identifies potential dividend, interest, or rental income", enabled: true },
          { feature: "Income source diversification score", description: "Scores how diversified income sources are", enabled: true }
        ]
      },
      {
        name: "Income Stability Metrics",
        features: [
          { feature: "Income longevity assessment", description: "Assesses how long current income patterns have been maintained", enabled: true },
          { feature: "Gap analysis between income deposits", description: "Analyzes gaps between expected income deposit dates", enabled: true },
          { feature: "Seasonal income pattern detection", description: "Detects if income follows seasonal patterns", enabled: true },
          { feature: "Income interruption frequency", description: "Measures frequency of interruptions in expected income", enabled: true }
        ]
      },
      {
        name: "Income Verification Flags",
        features: [
          { feature: "Large unusual deposits identification", description: "Flags unusually large deposits that don't match income patterns", enabled: true },
          { feature: "Round-sum deposit detection", description: "Detects round-sum deposits which may not be regular income", enabled: true },
          { feature: "Transfer vs. genuine income differentiation", description: "Differentiates between internal transfers and genuine income", enabled: true },
          { feature: "Income source credibility scoring", description: "Scores the credibility of income sources", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Cash Flow Assessment",
    subcategories: [
      {
        name: "Net Cash Flow Metrics",
        features: [
          { feature: "Monthly net cash flow calculation", description: "Calculates net cash flow on a monthly basis", enabled: true },
          { feature: "Rolling average cash flow", description: "Computes rolling average cash flow over multiple periods", enabled: true },
          { feature: "Cash flow trend analysis", description: "Analyzes trends in cash flow over time", enabled: true },
          { feature: "Minimum/maximum cash flow periods", description: "Identifies periods with minimum and maximum cash flow", enabled: true }
        ]
      },
      {
        name: "Expense Analysis",
        features: [
          { feature: "Fixed vs. variable expense ratio", description: "Calculates the ratio between fixed and variable expenses", enabled: true },
          { feature: "Essential vs. discretionary spending breakdown", description: "Breaks down spending into essential and discretionary categories", enabled: true },
          { feature: "Expense growth rate", description: "Measures the growth rate of expenses over time", enabled: true },
          { feature: "Expense-to-income ratio", description: "Calculates the ratio of expenses to income", enabled: true }
        ]
      },
      {
        name: "Balance Management",
        features: [
          { feature: "Average daily balance calculation", description: "Calculates average daily account balance", enabled: true },
          { feature: "Balance volatility measurement", description: "Measures volatility in account balance", enabled: true },
          { feature: "Minimum balance maintenance", description: "Analyzes how well minimum balance is maintained", enabled: true },
          { feature: "Balance trend analysis", description: "Analyzes trends in account balance over time", enabled: true }
        ]
      },
      {
        name: "Liquidity Indicators",
        features: [
          { feature: "Days of cash buffer calculation", description: "Calculates how many days expenses could be covered by current balance", enabled: true },
          { feature: "Quick liquidity ratio", description: "Calculates ratio of liquid assets to short-term obligations", enabled: true },
          { feature: "Cash reserve adequacy", description: "Assesses adequacy of cash reserves for emergencies", enabled: true },
          { feature: "Emergency fund assessment", description: "Evaluates if emergency fund exists and its adequacy", enabled: true }
        ]
      },
      {
        name: "Cash Flow Stability",
        features: [
          { feature: "Cash flow consistency score", description: "Scores the consistency of cash flow over time", enabled: true },
          { feature: "Seasonal cash flow pattern detection", description: "Detects seasonal patterns in cash flow", enabled: true },
          { feature: "Cash flow stress periods identification", description: "Identifies periods of cash flow stress", enabled: true },
          { feature: "Cash flow projection accuracy", description: "Assesses accuracy of previous cash flow projections", enabled: false }
        ]
      }
    ]
  },
  {
    name: "Debt Service Coverage",
    subcategories: [
      {
        name: "Existing Debt Payment Analysis",
        features: [
          { feature: "Automatic debt payment identification", description: "Identifies recurring payments that may be debt-related", enabled: true },
          { feature: "Debt payment-to-income ratio", description: "Calculates ratio of debt payments to income", enabled: true },
          { feature: "Debt payment consistency score", description: "Scores consistency of debt payments", enabled: true },
          { feature: "Debt payment trend analysis", description: "Analyzes trends in debt payments over time", enabled: true }
        ]
      },
      {
        name: "Debt Capacity Assessment",
        features: [
          { feature: "Residual income after debt service", description: "Calculates income remaining after debt payments", enabled: true },
          { feature: "Debt service coverage ratio", description: "Calculates ratio of income to total debt service", enabled: true },
          { feature: "Maximum sustainable debt calculation", description: "Estimates maximum sustainable debt based on income", enabled: false },
          { feature: "Debt capacity stress testing", description: "Tests debt capacity under various stress scenarios", enabled: false }
        ]
      },
      {
        name: "Payment Behavior Patterns",
        features: [
          { feature: "On-time payment frequency", description: "Analyzes frequency of on-time payments", enabled: true },
          { feature: "Late payment pattern detection", description: "Detects patterns of late payments", enabled: true },
          { feature: "Minimum payment behavior analysis", description: "Analyzes if only minimum payments are being made", enabled: true },
          { feature: "Payment prioritization assessment", description: "Assesses which payments are prioritized when funds are limited", enabled: false }
        ]
      },
      {
        name: "Debt Structure Analysis",
        features: [
          { feature: "Debt type identification", description: "Identifies different types of debt (revolving, installment)", enabled: true },
          { feature: "Debt consolidation opportunities", description: "Identifies potential opportunities for debt consolidation", enabled: false },
          { feature: "High-interest debt burden", description: "Assesses burden of high-interest debt", enabled: true },
          { feature: "Debt maturity timeline", description: "Creates timeline of debt maturities", enabled: false }
        ]
      },
      {
        name: "Debt Stress Indicators",
        features: [
          { feature: "Increasing reliance on credit", description: "Detects increasing reliance on credit over time", enabled: true },
          { feature: "Cash advances or payday loans", description: "Identifies potential cash advances or payday loans", enabled: true },
          { feature: "Debt shuffling behavior", description: "Detects potential debt shuffling between accounts", enabled: true },
          { feature: "Debt-induced cash flow constraints", description: "Identifies cash flow constraints caused by debt", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Risk Profiling",
    subcategories: [
      {
        name: "Financial Distress Signals",
        features: [
          { feature: "Overdraft frequency and severity", description: "Analyzes frequency and severity of overdrafts", enabled: true },
          { feature: "NSF/returned item incidents", description: "Tracks non-sufficient funds or returned item incidents", enabled: true },
          { feature: "Declined transaction patterns", description: "Analyzes patterns of declined transactions", enabled: true },
          { feature: "Account balance depletion speed", description: "Measures how quickly account balance is depleted after deposits", enabled: true }
        ]
      },
      {
        name: "High-Risk Transaction Patterns",
        features: [
          { feature: "Gambling-related transactions", description: "Identifies transactions related to gambling", enabled: true },
          { feature: "Luxury discretionary spending", description: "Identifies high levels of luxury or discretionary spending", enabled: true },
          { feature: "High-risk merchant category codes", description: "Flags transactions with high-risk merchant category codes", enabled: true },
          { feature: "Rapid fund depletion patterns", description: "Identifies patterns of rapid fund depletion", enabled: true }
        ]
      },
      {
        name: "Financial Management Discipline",
        features: [
          { feature: "Savings behavior assessment", description: "Assesses regular savings behavior", enabled: false },
          { feature: "Budget adherence indicators", description: "Analyzes adherence to apparent budget constraints", enabled: false },
          { feature: "Financial planning evidence", description: "Identifies evidence of financial planning", enabled: false },
          { feature: "Financial cushion maintenance", description: "Assesses maintenance of financial cushion", enabled: false }
        ]
      },
      {
        name: "Behavioral Risk Indicators",
        features: [
          { feature: "Spending impulsivity measurement", description: "Measures potential impulsivity in spending", enabled: true },
          { feature: "Financial decision consistency", description: "Analyzes consistency in financial decisions", enabled: false },
          { feature: "Risk-taking transaction patterns", description: "Identifies transaction patterns that may indicate risk-taking", enabled: true },
          { feature: "Financial stress reaction signals", description: "Detects potential reactions to financial stress", enabled: true }
        ]
      },
      {
        name: "Account Usage Patterns",
        features: [
          { feature: "Account dormancy periods", description: "Identifies periods of account dormancy", enabled: true },
          { feature: "Transaction frequency changes", description: "Analyzes changes in transaction frequency", enabled: true },
          { feature: "Unusual hour transaction activity", description: "Identifies transactions occurring at unusual hours", enabled: true },
          { feature: "Geographic transaction spread", description: "Analyzes geographic spread of transaction locations", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Alternative Credit Assessment",
    subcategories: [
      {
        name: "Payment Consistency Metrics",
        features: [
          { feature: "Rent payment consistency", description: "Analyzes consistency of rent or housing payments", enabled: true },
          { feature: "Utility payment regularity", description: "Tracks regularity of utility payments", enabled: true },
          { feature: "Subscription service payment history", description: "Analyzes history of subscription service payments", enabled: true },
          { feature: "Informal credit arrangement handling", description: "Assesses handling of informal credit arrangements", enabled: false }
        ]
      },
      {
        name: "Financial Responsibility Indicators",
        features: [
          { feature: "Consistent savings behavior", description: "Identifies consistent savings behavior", enabled: false },
          { feature: "Precautionary financial planning", description: "Detects evidence of precautionary financial planning", enabled: false },
          { feature: "Long-term financial commitment handling", description: "Assesses handling of long-term financial commitments", enabled: false },
          { feature: "Financial goal progress tracking", description: "Tracks progress toward apparent financial goals", enabled: false }
        ]
      },
      {
        name: "Cash-Based Credit Alternatives",
        features: [
          { feature: "Cash flow-based creditworthiness", description: "Assesses creditworthiness based on cash flow", enabled: true },
          { feature: "Transaction history depth and consistency", description: "Analyzes depth and consistency of transaction history", enabled: true },
          { feature: "Income-to-spending stability", description: "Measures stability of income-to-spending ratio", enabled: true },
          { feature: "Financial behavior pattern scoring", description: "Scores patterns of financial behavior", enabled: true }
        ]
      },
      {
        name: "Thin-File Supplementary Data",
        features: [
          { feature: "Digital financial footprint analysis", description: "Analyzes digital financial footprint", enabled: false },
          { feature: "Alternative data source integration", description: "Integrates data from alternative sources", enabled: false },
          { feature: "Non-traditional credit relationship evidence", description: "Identifies evidence of non-traditional credit relationships", enabled: false },
          { feature: "Financial inclusion scoring models", description: "Uses models designed for financial inclusion", enabled: false }
        ]
      },
      {
        name: "Proprietary Credit Algorithms",
        features: [
          { feature: "Transaction pattern-based scoring", description: "Scores based on transaction patterns", enabled: true },
          { feature: "Behavioral finance metrics", description: "Uses behavioral finance metrics in assessment", enabled: true },
          { feature: "Cash flow stability weighting", description: "Weights cash flow stability in credit assessment", enabled: true },
          { feature: "Financial resilience scoring", description: "Scores financial resilience based on account activity", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Fraud Detection",
    subcategories: [
      {
        name: "Identity Verification Signals",
        features: [
          { feature: "Name matching on deposits", description: "Verifies if deposit sources match account name", enabled: true },
          { feature: "Address consistency with transactions", description: "Checks if transaction locations are consistent with address", enabled: true },
          { feature: "Employment verification through deposits", description: "Verifies employment through deposit sources", enabled: true },
          { feature: "Digital footprint consistency", description: "Checks consistency of digital transaction footprint", enabled: true }
        ]
      },
      {
        name: "Suspicious Transaction Patterns",
        features: [
          { feature: "Unusual transaction timing or frequency", description: "Identifies transactions with unusual timing or frequency", enabled: true },
          { feature: "Out-of-pattern transaction amounts", description: "Flags transaction amounts that deviate from patterns", enabled: true },
          { feature: "Atypical merchant category spending", description: "Identifies spending in atypical merchant categories", enabled: true },
          { feature: "Velocity checks on deposits/withdrawals", description: "Performs velocity checks on deposits and withdrawals", enabled: true }
        ]
      },
      {
        name: "Business Verification Elements",
        features: [
          { feature: "Business-related transaction patterns", description: "Identifies patterns consistent with business activity", enabled: true },
          { feature: "Business expense categorization", description: "Categorizes potential business expenses", enabled: true },
          { feature: "Business income seasonality verification", description: "Verifies seasonality in business income", enabled: true },
          { feature: "Business client/vendor relationship evidence", description: "Identifies evidence of business relationships", enabled: true }
        ]
      },
      {
        name: "Synthetic Identity Flags",
        features: [
          { feature: "Account usage pattern anomalies", description: "Flags anomalies in account usage patterns", enabled: true },
          { feature: "Cross-border transaction anomalies", description: "Identifies unusual cross-border transaction patterns", enabled: true },
          { feature: "Structured transaction patterns", description: "Detects potentially structured transactions", enabled: true },
          { feature: "Digital behavior inconsistencies", description: "Identifies inconsistencies in digital behavior", enabled: true }
        ]
      },
      {
        name: "Application Consistency Checks",
        features: [
          { feature: "Stated vs. actual income comparison", description: "Compares stated income with observed deposits", enabled: true },
          { feature: "Declared debt vs. observed payments", description: "Compares declared debt with observed payments", enabled: true },
          { feature: "Reported expenses vs. transaction reality", description: "Compares reported expenses with transaction data", enabled: true },
          { feature: "Lifestyle consistency with stated profile", description: "Checks if spending patterns match stated profile", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Automated Underwriting",
    subcategories: [
      {
        name: "Decision Acceleration Metrics",
        features: [
          { feature: "Automated verification completion rate", description: "Tracks rate of automated verification completion", enabled: false },
          { feature: "Data sufficiency scoring", description: "Scores sufficiency of data for automated decisions", enabled: true },
          { feature: "Exception flagging precision", description: "Measures precision of exception flagging", enabled: true },
          { feature: "Decision confidence scoring", description: "Scores confidence level in automated decisions", enabled: true }
        ]
      },
      {
        name: "Standardized Evaluation Criteria",
        features: [
          { feature: "Income stability index", description: "Provides standardized index of income stability", enabled: true },
          { feature: "Expense management score", description: "Scores expense management practices", enabled: true },
          { feature: "Debt handling rating", description: "Rates handling of existing debt", enabled: true },
          { feature: "Financial stress resilience metric", description: "Measures resilience to financial stress", enabled: true }
        ]
      },
      {
        name: "Manual Review Triggers",
        features: [
          { feature: "Anomaly detection thresholds", description: "Sets thresholds for anomaly detection and manual review", enabled: true },
          { feature: "Verification gap identification", description: "Identifies gaps requiring manual verification", enabled: true },
          { feature: "Conflicting information flags", description: "Flags conflicting information for review", enabled: true },
          { feature: "High-risk pattern alerts", description: "Alerts on high-risk patterns requiring review", enabled: true }
        ]
      },
      {
        name: "Approval Pathway Optimization",
        features: [
          { feature: "Fast-track eligibility scoring", description: "Scores eligibility for fast-track approval", enabled: false },
          { feature: "Documentation requirement minimization", description: "Minimizes documentation requirements where possible", enabled: false },
          { feature: "Risk-based verification depth", description: "Varies verification depth based on risk", enabled: true },
          { feature: "Conditional approval criteria", description: "Sets criteria for conditional approvals", enabled: false }
        ]
      },
      {
        name: "Machine Learning Enhancement",
        features: [
          { feature: "Pattern recognition refinement", description: "Continuously refines pattern recognition", enabled: true },
          { feature: "False positive reduction", description: "Works to reduce false positives", enabled: true },
          { feature: "Decision consistency improvement", description: "Improves consistency in decision-making", enabled: true },
          { feature: "Continuous learning implementation", description: "Implements continuous learning from outcomes", enabled: true }
        ]
      }
    ]
  },
  {
    name: "Regulatory Compliance",
    subcategories: [
      {
        name: "KYC Verification Components",
        features: [
          { feature: "Identity confirmation signals", description: "Identifies signals confirming identity", enabled: true },
          { feature: "Activity pattern consistency", description: "Checks consistency of activity patterns", enabled: true },
          { feature: "Expected vs. actual usage patterns", description: "Compares expected with actual usage patterns", enabled: true },
          { feature: "Customer profile validation", description: "Validates consistency of customer profile", enabled: true }
        ]
      },
      {
        name: "AML Monitoring Metrics",
        features: [
          { feature: "Unusual transaction pattern detection", description: "Detects unusual transaction patterns", enabled: true },
          { feature: "High-risk jurisdiction transactions", description: "Flags transactions with high-risk jurisdictions", enabled: true },
          { feature: "Structured transaction identification", description: "Identifies potentially structured transactions", enabled: true },
          { feature: "Source of funds verification", description: "Assists in verifying source of funds", enabled: true }
        ]
      },
      {
        name: "Responsible Lending Indicators",
        features: [
          { feature: "Affordability assessment metrics", description: "Provides metrics for affordability assessment", enabled: true },
          { feature: "Vulnerability detection signals", description: "Detects signals of potential vulnerability", enabled: true },
          { feature: "Over-indebtedness risk scoring", description: "Scores risk of over-indebtedness", enabled: true },
          { feature: "Financial capability assessment", description: "Assesses financial capability of customer", enabled: true }
        ]
      },
      {
        name: "Documentation and Audit Trail",
        features: [
          { feature: "Verification timestamp logging", description: "Logs timestamps for all verifications", enabled: true },
          { feature: "Decision factor weighting records", description: "Records weighting of decision factors", enabled: true },
          { feature: "Override justification tracking", description: "Tracks justifications for manual overrides", enabled: true },
          { feature: "Compliance checklist completion", description: "Tracks completion of compliance checklists", enabled: true }
        ]
      },
      {
        name: "Regulatory Reporting Elements",
        features: [
          { feature: "Required disclosure compilation", description: "Compiles information for required disclosures", enabled: true },
          { feature: "Regulatory threshold monitoring", description: "Monitors regulatory thresholds", enabled: true },
          { feature: "Compliance attestation components", description: "Provides components for compliance attestation", enabled: true },
          { feature: "Examination readiness metrics", description: "Tracks readiness for regulatory examinations", enabled: true }
        ]
      }
    ]
  }
];
