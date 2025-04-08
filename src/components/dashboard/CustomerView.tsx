
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import RiskDistributionCard from "./cards/RiskDistributionCard";
import QuickAnalyticsCard from "./cards/QuickAnalyticsCard";
import GetStartedCard from "./cards/GetStartedCard";

const CustomerView: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">AI Risk Decisioning Platform</h1>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RiskDistributionCard />
        <QuickAnalyticsCard />
        <GetStartedCard />
      </div>
    </div>
  );
};

export default CustomerView;
