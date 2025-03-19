
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Bot } from "lucide-react";
import IndianBankStatementJourney from "./IndianBankStatementJourney";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyStepsTab from "./components/JourneyStepsTab";
import ExecutionHistoryTab from "./components/ExecutionHistoryTab";
import { FileText } from "lucide-react";
import OverviewTab from "./components/OverviewTab";

// Import journey steps data for the bank statement analyzer journey
import { getBankStatementJourneySteps } from "./data/journeyStepsData";

interface JourneyDetailProps {
  selectedJourney: string;
  onBackToList: () => void;
  isViewOnly?: boolean;
}

const JourneyDetail: React.FC<JourneyDetailProps> = ({ 
  selectedJourney, 
  onBackToList,
  isViewOnly = false
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Get journey steps based on the selected journey
  const journeySteps = getBankStatementJourneySteps();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="ghost" 
          className="pl-0" 
          onClick={onBackToList}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Journeys
        </Button>
      </div>
      
      {(selectedJourney === "bank-statement-analyzer" || selectedJourney === "india-bank-statement-analyzer") && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bot className="text-monnai-blue h-6 w-6" />
            <h2 className="text-2xl font-semibold">Bank Statement Analyzer Journey</h2>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="steps">Journey Steps</TabsTrigger>
              <TabsTrigger value="execution-history">Execution History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            
            <TabsContent value="steps">
              <JourneyStepsTab steps={journeySteps} />
            </TabsContent>
            
            <TabsContent value="execution-history">
              <ExecutionHistoryTab />
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {selectedJourney === "onboarding-fraud-detection" && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bot className="text-monnai-blue h-6 w-6" />
            <h2 className="text-2xl font-semibold">Onboarding Fraud Detection Journey</h2>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="steps">Journey Steps</TabsTrigger>
              <TabsTrigger value="execution-history">Execution History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            
            <TabsContent value="steps">
              <JourneyStepsTab steps={journeySteps} />
            </TabsContent>
            
            <TabsContent value="execution-history">
              <ExecutionHistoryTab />
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {!["bank-statement-analyzer", "india-bank-statement-analyzer", "onboarding-fraud-detection"].includes(selectedJourney) && (
        <div className="text-center p-6">
          <p>Journey details for {selectedJourney} are not available yet</p>
        </div>
      )}
    </div>
  );
};

export default JourneyDetail;
