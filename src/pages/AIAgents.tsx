
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useLocation } from "react-router-dom"
import AgentCard from "@/components/agents/AgentCard"
import AgentEditors from "@/components/agents/AgentEditors"
import { getCustomerAgents, getMonnaiAgents } from "@/components/agents/AgentListData"

const AIAgents = () => {
  // Customer agent editing states
  const [isEditingFraudAgent, setIsEditingFraudAgent] = useState(false)
  const [isEditingKYCAgent, setIsEditingKYCAgent] = useState(false)
  const [isEditingUnderwriterAgent, setIsEditingUnderwriterAgent] = useState(false)
  const [isEditingCollectionAgent, setIsEditingCollectionAgent] = useState(false)
  
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
  
  const customerAgents = getCustomerAgents(
    setIsEditingFraudAgent, 
    setIsEditingKYCAgent, 
    setIsEditingUnderwriterAgent, 
    setIsEditingCollectionAgent
  )
  
  const monnaiAgents = getMonnaiAgents(
    setIsEditingDataAnalysisAgent,
    setIsEditingPOCAgent,
    setIsEditingBillingAgent,
    setIsEditingFeatureEngineeringAgent,
    setIsEditingModelManagementAgent,
    setIsEditingObservabilityAgent
  )
  
  const agentsToDisplay = viewMode === "internal" ? monnaiAgents : customerAgents
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Agents</h1>
        <div className="flex gap-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Deploy Agent
          </Button>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsToDisplay.map((agent, index) => (
          <AgentCard key={index} agent={agent} viewMode={viewMode} />
        ))}
      </div>

      <AgentEditors 
        // Customer agent editing states
        isEditingFraudAgent={isEditingFraudAgent}
        isEditingKYCAgent={isEditingKYCAgent}
        isEditingUnderwriterAgent={isEditingUnderwriterAgent}
        isEditingCollectionAgent={isEditingCollectionAgent}
        setIsEditingFraudAgent={setIsEditingFraudAgent}
        setIsEditingKYCAgent={setIsEditingKYCAgent}
        setIsEditingUnderwriterAgent={setIsEditingUnderwriterAgent}
        setIsEditingCollectionAgent={setIsEditingCollectionAgent}
        
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
    </div>
  )
}

export default AIAgents
