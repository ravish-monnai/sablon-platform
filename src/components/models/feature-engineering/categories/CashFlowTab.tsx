
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import FeatureCategory from "../FeatureCategory";

const CashFlowTab: React.FC = () => {
  return (
    <TabsContent value="cash-flow" className="space-y-4 pt-4">
      <Accordion type="single" collapsible className="w-full">
        <FeatureCategory
          value="net-cash-flow"
          title="Net Cash Flow Metrics"
          features={[
            {
              name: "Monthly net cash flow calculation",
              description: "Calculate net cash flow on a monthly basis"
            },
            {
              name: "Rolling average cash flow",
              description: "Calculate rolling average of cash flow over time periods"
            },
            {
              name: "Cash flow trend analysis",
              description: "Analyze trends in cash flow over statement period"
            },
            {
              name: "Minimum/maximum cash flow periods",
              description: "Identify periods of lowest and highest cash flow"
            }
          ]}
        />
        
        <FeatureCategory
          value="expense-analysis"
          title="Expense Analysis"
          features={[
            {
              name: "Fixed vs. variable expense ratio",
              description: "Calculate ratio between fixed and variable expenses"
            },
            {
              name: "Essential vs. discretionary spending breakdown",
              description: "Categorize and analyze essential vs discretionary spending"
            },
            {
              name: "Expense growth rate",
              description: "Calculate the rate at which expenses are growing"
            },
            {
              name: "Expense-to-income ratio",
              description: "Calculate ratio of expenses to income over periods"
            }
          ]}
        />
        
        <FeatureCategory
          value="balance-management"
          title="Balance Management"
          features={[
            {
              name: "Average daily balance calculation",
              description: "Calculate average daily balance across statement period"
            },
            {
              name: "Balance volatility measurement",
              description: "Measure the volatility of account balance"
            },
            {
              name: "Minimum balance maintenance",
              description: "Analyze ability to maintain minimum balance levels"
            },
            {
              name: "Balance trend analysis",
              description: "Analyze trends in account balance over time"
            }
          ]}
        />
        
        <FeatureCategory
          value="liquidity-indicators"
          title="Liquidity Indicators"
          features={[
            {
              name: "Days of cash buffer calculation",
              description: "Calculate how many days expenses can be covered"
            },
            {
              name: "Quick liquidity ratio",
              description: "Calculate ratio of liquid assets to short-term obligations"
            },
            {
              name: "Cash reserve adequacy",
              description: "Assess adequacy of cash reserves relative to expenses"
            },
            {
              name: "Emergency fund assessment",
              description: "Evaluate presence and adequacy of emergency funds"
            }
          ]}
        />
        
        <FeatureCategory
          value="cash-flow-stability"
          title="Cash Flow Stability"
          features={[
            {
              name: "Cash flow consistency score",
              description: "Score overall consistency of cash flow patterns"
            },
            {
              name: "Seasonal cash flow pattern detection",
              description: "Detect and analyze seasonal patterns in cash flow"
            },
            {
              name: "Cash flow stress periods identification",
              description: "Identify periods of cash flow stress or constraints"
            },
            {
              name: "Cash flow projection accuracy",
              description: "Measure accuracy of projected vs actual cash flow"
            }
          ]}
        />
      </Accordion>
    </TabsContent>
  );
};

export default CashFlowTab;
