
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseItem } from "@/types/caseTypes";
import DetailTabContent from "./DetailTabContent";
import AnomalyTabContent from "./AnomalyTabContent";
import DecisionPathTabContent from "./DecisionPathTabContent";

interface CaseTabsProps {
  caseData: CaseItem;
}

const CaseTabs: React.FC<CaseTabsProps> = ({ caseData }) => {
  return (
    <Tabs defaultValue="ai-decision">
      <TabsList className="mb-4">
        <TabsTrigger value="ai-decision">AI Reasoning</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
      </TabsList>
      
      <TabsContent value="ai-decision">
        <DecisionPathTabContent />
      </TabsContent>
      
      <TabsContent value="details">
        <DetailTabContent caseData={caseData} />
      </TabsContent>
      
      <TabsContent value="anomalies">
        <AnomalyTabContent caseData={caseData} />
      </TabsContent>
    </Tabs>
  );
};

export default CaseTabs;
