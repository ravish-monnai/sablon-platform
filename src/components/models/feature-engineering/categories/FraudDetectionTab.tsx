
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import FeatureCategory from "../FeatureCategory";

const FraudDetectionTab: React.FC = () => {
  return (
    <TabsContent value="fraud-detection" className="space-y-4 pt-4">
      <Accordion type="single" collapsible className="w-full">
        <FeatureCategory
          value="identity-verification"
          title="Identity Verification Signals"
          features={[
            {
              name: "Name matching on deposits",
              description: "Verify deposit names match account holder"
            },
            {
              name: "Address consistency with transactions",
              description: "Check address-related transactions against application"
            },
            {
              name: "Employment verification through deposits",
              description: "Verify employment through deposit patterns"
            },
            {
              name: "Digital footprint consistency",
              description: "Analyze consistency of digital transaction patterns"
            }
          ]}
        />
        
        <FeatureCategory
          value="suspicious-transactions"
          title="Suspicious Transaction Patterns"
          features={[
            {
              name: "Unusual transaction timing or frequency",
              description: "Detect transactions with unusual timing patterns"
            },
            {
              name: "Out-of-pattern transaction amounts",
              description: "Identify transaction amounts that don't fit user patterns"
            },
            {
              name: "Atypical merchant category spending",
              description: "Detect spending in unusual merchant categories"
            },
            {
              name: "Velocity checks on deposits/withdrawals",
              description: "Monitor speed and frequency of deposits and withdrawals"
            }
          ]}
        />
      </Accordion>
    </TabsContent>
  );
};

export default FraudDetectionTab;
