
import AIAgentsContent from "@/components/agents/AIAgentsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { AgentType } from "@/components/agents/AgentCard";
import AgentCard from "@/components/agents/AgentCard";
import { getCustomerAgents, getMonnaiAgents } from "@/components/agents/AgentListData";
import { useMarket } from "@/contexts/MarketContext";
import JourneyAgentAssistant from "@/components/workflow/JourneyAgentAssistant";

const AIAgents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab") || "builder";
  const { selectedMarket } = useMarket();
  
  const handleTabChange = (value: string) => {
    searchParams.set("tab", value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  // Get agents for live view - only care about showing agent status
  const getLiveAgents = () => {
    const customerAgents = getCustomerAgents(
      () => {}, // placeholder for setIsEditingFraudAgent
      () => {}, // placeholder for setIsEditingKYCAgent
      () => {}, // placeholder for setIsEditingUnderwriterAgent
      () => {}, // placeholder for setIsEditingCollectionAgent
      () => {}  // placeholder for setIsEditingBankStatementAgent
    );
    
    const monnaiAgents = getMonnaiAgents(
      () => {}, // placeholder for setIsEditingDataAnalysisAgent
      () => {}, // placeholder for setIsEditingPOCAgent
      () => {}, // placeholder for setIsEditingBillingAgent
      () => {}, // placeholder for setIsEditingFeatureEngineeringAgent
      () => {}, // placeholder for setIsEditingModelManagementAgent
      () => {}  // placeholder for setIsEditingObservabilityAgent
    );
    
    // Filter agents based on selected market if not Global
    const filterAgentsByMarket = (agents: AgentType[]) => {
      if (selectedMarket === 'Global') {
        return agents;
      }
      
      // For demo purposes, filter to show 1-2 agents per market
      return agents.filter((_, index) => {
        switch(selectedMarket) {
          case 'US': return index % 6 === 0;
          case 'India': return index % 6 === 1;
          case 'Indonesia': return index % 6 === 2;
          case 'Philippines': return index % 6 === 3;
          case 'Mexico': return index % 6 === 4;
          case 'Brazil': return index % 6 === 5;
          default: return true;
        }
      });
    };
    
    const viewMode = searchParams.get("viewMode") === "internal" ? "internal" : "customer";
    const agentsToDisplay = viewMode === "internal" 
      ? filterAgentsByMarket(monnaiAgents)
      : filterAgentsByMarket(customerAgents);
      
    return agentsToDisplay;
  };

  // Handler for creating an agent template from the assistant
  const handleCreateTemplate = (templateType: string, description: string) => {
    console.log(`Creating ${templateType} template: ${description}`);
    // Switch to builder tab when a template is requested
    if (tab !== "builder") {
      handleTabChange("builder");
    }
  };

  return (
    <>
      <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="builder">Agent Builder</TabsTrigger>
          <TabsTrigger value="live">Live Agents</TabsTrigger>
        </TabsList>
        <TabsContent value="builder">
          <AIAgentsContent />
        </TabsContent>
        <TabsContent value="live">
          <div className="w-full">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Live Agents</h1>
              <p className="text-muted-foreground">View the status of agents currently in production</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getLiveAgents().map((agent, index) => (
                <AgentCard 
                  key={index} 
                  agent={agent} 
                  viewMode={searchParams.get("viewMode") === "internal" ? "internal" : "customer"} 
                  isViewOnly={true}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <JourneyAgentAssistant type="agent" onCreateTemplate={handleCreateTemplate} />
    </>
  );
};

export default AIAgents;
