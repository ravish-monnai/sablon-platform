
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";
import LiveJourneys from "@/components/ai-journeys/LiveJourneys";
import { MarketProvider } from "@/contexts/MarketContext";
import MarketFilter from "@/components/common/MarketFilter";

const AIJourneys = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  // Get selected tab from URL or default to "workflow"
  const defaultTab = searchParams.get("tab") || "workflow";
  
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    searchParams.set("tab", value);
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };
  
  // Update the selectedTab state if the URL search params change
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") || "workflow";
    if (tabFromUrl !== selectedTab) {
      setSelectedTab(tabFromUrl);
    }
  }, [location.search]);
  
  return (
    <MarketProvider>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">AI Journeys</h1>
        
        <MarketFilter />
        
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="workflow">Journey Builder</TabsTrigger>
            <TabsTrigger value="live">Live Journeys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workflow" className="mt-6">
            <div className="h-[80vh]">
              <WorkflowEditor />
            </div>
          </TabsContent>
          
          <TabsContent value="live" className="mt-6">
            <LiveJourneys />
          </TabsContent>
        </Tabs>
      </div>
    </MarketProvider>
  );
};

export default AIJourneys;
