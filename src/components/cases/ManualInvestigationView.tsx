
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InvestigationTabs from "./investigation/InvestigationTabs";

const ManualInvestigationView = () => {
  const [activeTab, setActiveTab] = useState<string>("customer-check");
  
  const handleStartInvestigation = (type: string) => {
    console.log(`Starting ${type} investigation`);
    // In a real application, this would navigate to a details page or open a form
  };
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent>
        <InvestigationTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onStartInvestigation={handleStartInvestigation}
        />
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
