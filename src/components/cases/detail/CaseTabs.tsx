
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseItem } from "@/types/cases";
import DetailTabContent from "./DetailTabContent";
import AnomalyTabContent from "./AnomalyTabContent";
import DecisionPathTabContent from "./DecisionPathTabContent";

interface CaseTabsProps {
  caseData: CaseItem;
}

const CaseTabs: React.FC<CaseTabsProps> = ({ caseData }) => {
  return (
    <Tabs defaultValue="details">
      <TabsList className="mb-4">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
        <TabsTrigger value="ai-decision">AI Decision Path</TabsTrigger>
      </TabsList>
      
      <TabsContent value="details">
        <DetailTabContent caseData={caseData} />
      </TabsContent>
      
      <TabsContent value="anomalies">
        <AnomalyTabContent caseData={caseData} />
      </TabsContent>
      
      <TabsContent value="ai-decision">
        <DecisionPathTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default CaseTabs;
