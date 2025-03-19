
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseItem } from "@/types/caseTypes";
import DetailTabContent from "./DetailTabContent";
import AnomalyTabContent from "./AnomalyTabContent";
import DecisionPathTabContent from "./DecisionPathTabContent";
import { BrainCircuit, AlertTriangle, FileText, Loader2 } from "lucide-react";

interface CaseTabsProps {
  caseData: CaseItem;
}

const CaseTabs: React.FC<CaseTabsProps> = ({ caseData }) => {
  const [activeTab, setActiveTab] = useState("ai-decision");
  
  // Add safety check to make sure caseData is properly loaded
  if (!caseData) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-50 rounded-md border">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 text-muted-foreground animate-spin mb-2" />
          <p className="text-muted-foreground">Loading case data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <Tabs 
      defaultValue="ai-decision" 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="w-full"
    >
      <TabsList className="mb-4 grid grid-cols-3 w-full lg:w-auto">
        <TabsTrigger value="ai-decision" className="flex items-center">
          <BrainCircuit className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">AI Reasoning</span>
          <span className="sm:hidden">AI</span>
        </TabsTrigger>
        <TabsTrigger value="details" className="flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Case Details</span>
          <span className="sm:hidden">Details</span>
        </TabsTrigger>
        <TabsTrigger value="anomalies" className="flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Anomalies</span>
          <span className="sm:hidden">Alerts</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="ai-decision">
        <DecisionPathTabContent caseId={caseData.id} />
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
