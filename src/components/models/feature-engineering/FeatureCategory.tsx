
import React from "react";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import FeatureItem from "./FeatureItem";

interface FeatureCategoryProps {
  value: string;
  title: string;
  features: Array<{ name: string; description: string; enabled?: boolean }>;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ value, title, features }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-base font-medium text-left">
        {title}
      </AccordionTrigger>
      <AccordionContent className="space-y-3 pt-2">
        {features.map((feature, index) => (
          <FeatureItem
            key={`${value}-${index}`}
            feature={feature.name}
            description={feature.description}
            enabled={feature.enabled !== undefined ? feature.enabled : true}
            showSeparator={index < features.length - 1}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FeatureCategory;
