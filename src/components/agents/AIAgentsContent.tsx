
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, EyeIcon } from "lucide-react"
import { useLocation } from "react-router-dom"
import AgentCard from "@/components/agents/AgentCard"
import AgentEditors from "@/components/agents/AgentEditors"
import { getCustomerAgents, getMonnaiAgents } from "@/components/agents/AgentListData"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import AgentBuilder from "@/components/agents/AgentBuilder"
import { useMarket } from "@/contexts/MarketContext"
import { Badge } from "@/components/ui/badge"

const AIAgentsContent = () => {
  const { selectedMarket } = useMarket();
  // Customer agent editing states
  const [isEditingFraudAgent, setIsEditingFraudAgent] = useState(false)
  const [isEditingBankStatementAgent, setIsEditingBankStatementAgent] = useState(false)
  
  // Monnai agent editing states
  const [isEditingDataAnalysisAgent, setIsEditingDataAnalysisAgent] = useState(false)
  const [isEditingPOCAgent, setIsEditingPOCAgent] = useState(false)
  const [isEditingBillingAgent, setIsEditingBillingAgent] = useState(false)
  const [isEditingFeatureEngineeringAgent, setIsEditingFeatureEngineeringAgent] = useState(false)
  const [isEditingModelManagementAgent, setIsEditingModelManagementAgent] = useState(false)
  const [isEditingObservabilityAgent, setIsEditingObservabilityAgent] = useState(false)
  
  // Read view mode from URL params set by DashboardLayout
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const viewMode = searchParams.get("viewMode") === "internal" ? "internal" : "customer"
  
  // Get tab from URL 
  const tab = searchParams.get("tab") || "builder"
  const isLiveTab = tab === "live"
  
  const customerAgents = getCustomerAgents(
    setIsEditingFraudAgent, 
    () => {}, // placeholder for setIsEditingKYCAgent that we no longer use
    () => {}, // placeholder for setIsEditingUnderwriterAgent 
    () => {}, // placeholder for setIsEditingCollectionAgent
    setIsEditingBankStatementAgent
  )
  
  const monnaiAgents = getMonnaiAgents(
    setIsEditingDataAnalysisAgent,
    setIsEditingPOCAgent,
    setIsEditingBillingAgent,
    setIsEditingFeatureEngineeringAgent,
    setIsEditingModelManagementAgent,
    setIsEditingObservabilityAgent
  )
  
  // Filter agents based on selected market if not Global
  const filterAgentsByMarket = (agents) => {
    if (selectedMarket === 'Global') {
      return agents;
    }
    
    // For demo purposes, filter to show 1-2 agents per market (this is simplified)
    // In a real app, agents would have market property
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
  
  const filteredCustomerAgents = filterAgentsByMarket(customerAgents);
  const filteredMonnaiAgents = filterAgentsByMarket(monnaiAgents);
  
  const agentsToDisplay = viewMode === "internal" ? filteredMonnaiAgents : filteredCustomerAgents;
  
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [builderAgentType, setBuilderAgentType] = useState("");
  
  const handleCreateAgent = () => {
    setBuilderAgentType("new");
    setIsBuilderOpen(true);
  };
  
  const handleSaveAgent = (config: any) => {
    // Here we would handle saving the agent configuration
    console.log("Saving agent configuration:", config);
    setIsBuilderOpen(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">AI Agents</h1>
          <p className="text-muted-foreground">
            {selectedMarket === 'Global' 
              ? 'Intelligent agents to automate workflows'
              : `Intelligent agents for ${selectedMarket} market`}
          </p>
        </div>
        <div className="flex gap-4">
          {isLiveTab ? (
            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
              <EyeIcon className="h-4 w-4" />
              View Only
            </Badge>
          ) : (
            <Button onClick={handleCreateAgent}>
              <Plus className="mr-2 h-4 w-4" /> Create Agent
            </Button>
          )}
        </div>
      </div>
      
      <Separator className="my-6" />
      
      {agentsToDisplay.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No agents configured for {selectedMarket} market yet.</p>
          {!isLiveTab && (
            <Button onClick={handleCreateAgent} className="mt-4">
              <Plus className="mr-2 h-4 w-4" /> Create Agent for {selectedMarket}
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsToDisplay.map((agent, index) => (
            <AgentCard 
              key={index} 
              agent={agent} 
              viewMode={viewMode} 
              isViewOnly={isLiveTab}
            />
          ))}
        </div>
      )}

      {!isLiveTab && (
        <AgentEditors 
          // Customer agent editing states
          isEditingFraudAgent={isEditingFraudAgent}
          isEditingKYCAgent={false}
          isEditingBankStatementAgent={isEditingBankStatementAgent}
          isEditingUnderwriterAgent={false}
          isEditingCollectionAgent={false}
          setIsEditingFraudAgent={setIsEditingFraudAgent}
          setIsEditingKYCAgent={() => {}}
          setIsEditingBankStatementAgent={setIsEditingBankStatementAgent}
          setIsEditingUnderwriterAgent={() => {}}
          setIsEditingCollectionAgent={() => {}}
          
          // Monnai agent editing states
          isEditingDataAnalysisAgent={isEditingDataAnalysisAgent}
          isEditingPOCAgent={isEditingPOCAgent}
          isEditingBillingAgent={isEditingBillingAgent}
          isEditingFeatureEngineeringAgent={isEditingFeatureEngineeringAgent}
          isEditingModelManagementAgent={isEditingModelManagementAgent}
          isEditingObservabilityAgent={isEditingObservabilityAgent}
          setIsEditingDataAnalysisAgent={setIsEditingDataAnalysisAgent}
          setIsEditingPOCAgent={setIsEditingPOCAgent}
          setIsEditingBillingAgent={setIsEditingBillingAgent}
          setIsEditingFeatureEngineeringAgent={setIsEditingFeatureEngineeringAgent}
          setIsEditingModelManagementAgent={setIsEditingModelManagementAgent}
          setIsEditingObservabilityAgent={setIsEditingObservabilityAgent}
        />
      )}
      
      {!isLiveTab && (
        <Dialog open={isBuilderOpen} onOpenChange={setIsBuilderOpen}>
          <DialogContent className="max-w-6xl">
            <AgentBuilder 
              agentType={builderAgentType}
              onSave={handleSaveAgent}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AIAgentsContent;
