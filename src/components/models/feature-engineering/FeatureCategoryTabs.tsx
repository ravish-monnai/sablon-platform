
import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Banknote, ChartLine, CreditCard, AlertTriangle,
  Calculator, ShieldAlert, Briefcase
} from "lucide-react";

interface FeatureCategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FeatureCategoryTabs: React.FC<FeatureCategoryTabsProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <TabsList className="grid grid-cols-7 w-full">
      <TabsTrigger value="income-verification" className="text-xs">
        <Banknote className="h-4 w-4 mr-1" /> Income
      </TabsTrigger>
      <TabsTrigger value="cash-flow" className="text-xs">
        <ChartLine className="h-4 w-4 mr-1" /> Cash Flow
      </TabsTrigger>
      <TabsTrigger value="debt-service" className="text-xs">
        <CreditCard className="h-4 w-4 mr-1" /> Debt
      </TabsTrigger>
      <TabsTrigger value="risk-profiling" className="text-xs">
        <AlertTriangle className="h-4 w-4 mr-1" /> Risk
      </TabsTrigger>
      <TabsTrigger value="alternative-credit" className="text-xs">
        <Calculator className="h-4 w-4 mr-1" /> Alt Credit
      </TabsTrigger>
      <TabsTrigger value="fraud-detection" className="text-xs">
        <ShieldAlert className="h-4 w-4 mr-1" /> Fraud
      </TabsTrigger>
      <TabsTrigger value="automated-underwriting" className="text-xs">
        <Briefcase className="h-4 w-4 mr-1" /> Auto UW
      </TabsTrigger>
    </TabsList>
  );
};

export default FeatureCategoryTabs;
