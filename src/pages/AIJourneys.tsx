
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";
import LiveJourneys from "@/components/ai-journeys/LiveJourneys";
import BankStatementJourney from "@/components/ai-journeys/BankStatementJourney";

const AIJourneys = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Get selected tab from URL or default to "workflow"
  const defaultTab = searchParams.get("tab") || "workflow";
  const journeyId = searchParams.get("journeyId");
  
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    searchParams.set("tab", value);
    
    if (value !== "journey-details") {
      searchParams.delete("journeyId");
    }
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };
  
  // If journey-details is selected but no journeyId, default to "live" tab
  React.useEffect(() => {
    if (selectedTab === "journey-details" && !journeyId) {
      handleTabChange("live");
    }
  }, [selectedTab, journeyId]);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Journeys</h1>
      
      <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="workflow">Journey Builder</TabsTrigger>
          <TabsTrigger value="live">Live Journeys</TabsTrigger>
          <TabsTrigger value="journey-details" disabled={!journeyId}>
            Journey Details
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="workflow" className="mt-6">
          <div className="h-[80vh]">
            <WorkflowEditor />
          </div>
        </TabsContent>
        
        <TabsContent value="live" className="mt-6">
          <LiveJourneys />
        </TabsContent>
        
        <TabsContent value="journey-details" className="mt-6">
          {journeyId === "bank-statement-analyzer" && <BankStatementJourney />}
          {journeyId !== "bank-statement-analyzer" && (
            <div className="text-center p-6">
              <p>Journey details not available</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIJourneys;
