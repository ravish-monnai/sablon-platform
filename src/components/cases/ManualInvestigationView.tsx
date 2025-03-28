
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InvestigationTabs from "./manual-investigation/InvestigationTabs";
import InvestigationContent from "./manual-investigation/InvestigationContent";
import { InvestigationProvider } from "./manual-investigation/InvestigationProvider";

const ManualInvestigationView = () => {
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <InvestigationProvider>
          <InvestigationTabs />
          <InvestigationContent />
        </InvestigationProvider>
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
