
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CasesLinkAnalysis from "@/components/cases/CasesLinkAnalysis";

const NetworkAnalysisView: React.FC = () => {
  return (
    <Card className="h-[80vh] bg-white shadow-sm border-gray-100">
      <CardContent className="p-0">
        <CasesLinkAnalysis />
      </CardContent>
    </Card>
  );
};

export default NetworkAnalysisView;
