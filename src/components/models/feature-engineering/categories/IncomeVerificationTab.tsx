
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import FeatureCategory from "../FeatureCategory";

const IncomeVerificationTab: React.FC = () => {
  return (
    <TabsContent value="income-verification" className="space-y-4 pt-4">
      <Accordion type="single" collapsible className="w-full">
        <FeatureCategory
          value="regular-income"
          title="Regular Income Identification"
          features={[
            {
              name: "Recurring deposit pattern detection",
              description: "Identify recurring deposits that follow a regular pattern"
            },
            {
              name: "Payroll source identification",
              description: "Identify transactions that are likely from payroll sources"
            },
            {
              name: "Income frequency analysis",
              description: "Analyze frequency patterns (weekly, bi-weekly, monthly)"
            },
            {
              name: "Income consistency scoring",
              description: "Score how consistent income deposits are over time"
            }
          ]}
        />
        
        <FeatureCategory
          value="income-amount"
          title="Income Amount Validation"
          features={[
            {
              name: "Average income calculation",
              description: "Calculate average income over the statement period"
            },
            {
              name: "Median income calculation",
              description: "Calculate median income to reduce impact of outliers"
            },
            {
              name: "Income trend analysis",
              description: "Analyze if income is increasing, stable, or decreasing"
            },
            {
              name: "Income volatility measurement",
              description: "Measure how much income varies between periods"
            }
          ]}
        />
        
        <FeatureCategory
          value="multiple-income"
          title="Multiple Income Stream Analysis"
          features={[
            {
              name: "Secondary income source identification",
              description: "Identify additional sources of regular income"
            },
            {
              name: "Gig/freelance income detection",
              description: "Detect irregular income consistent with gig work"
            },
            {
              name: "Passive income identification",
              description: "Identify dividend, interest, or rental income"
            },
            {
              name: "Income source diversification score",
              description: "Score how diversified income sources are"
            }
          ]}
        />
        
        <FeatureCategory
          value="income-stability"
          title="Income Stability Metrics"
          features={[
            {
              name: "Income longevity assessment",
              description: "Assess how long current income sources have been active"
            },
            {
              name: "Gap analysis between income deposits",
              description: "Analyze gaps or interruptions in income"
            },
            {
              name: "Seasonal income pattern detection",
              description: "Detect seasonal variations in income"
            },
            {
              name: "Income interruption frequency",
              description: "Measure how often income streams are interrupted"
            }
          ]}
        />
        
        <FeatureCategory
          value="income-flags"
          title="Income Verification Flags"
          features={[
            {
              name: "Large unusual deposits identification",
              description: "Flag deposits that don't match normal patterns"
            },
            {
              name: "Round-sum deposit detection",
              description: "Detect suspiciously round deposits"
            },
            {
              name: "Transfer vs. genuine income differentiation",
              description: "Distinguish between transfers and actual income"
            },
            {
              name: "Income source credibility scoring",
              description: "Score the credibility of income sources"
            }
          ]}
        />
      </Accordion>
    </TabsContent>
  );
};

export default IncomeVerificationTab;
