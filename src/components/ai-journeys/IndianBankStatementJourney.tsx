
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyHeader from "./components/JourneyHeader";
import OverviewTab from "./components/OverviewTab";
import ExecutionHistoryTab from "./components/ExecutionHistoryTab";
import { Bot } from "lucide-react";

interface IndianBankStatementJourneyProps {
  isViewOnly?: boolean;
}

const IndianBankStatementJourney: React.FC<IndianBankStatementJourneyProps> = ({ isViewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <JourneyHeader 
          title={
            <div className="flex items-center gap-2">
              <Bot className="text-monnai-blue h-6 w-6" />
              <span>Bank Statement Analyzer Agent</span>
            </div>
          }
          isViewOnly={isViewOnly}
        />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="execution-history">Execution History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="execution-history">
          <ExecutionHistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndianBankStatementJourney;
