
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import AgentCard from "@/components/agents/AgentCard"
import AgentEditors from "@/components/agents/AgentEditors"
import ViewToggle from "@/components/agents/ViewToggle"
import { getCustomerAgents, getMonnaiAgents } from "@/components/agents/AgentListData"

const AIAgents = () => {
  const [isEditingFraudAgent, setIsEditingFraudAgent] = useState(false)
  const [isEditingKYCAgent, setIsEditingKYCAgent] = useState(false)
  const [isEditingUnderwriterAgent, setIsEditingUnderwriterAgent] = useState(false)
  const [isEditingCollectionAgent, setIsEditingCollectionAgent] = useState(false)
  const [viewMode, setViewMode] = useState<"customer" | "internal">("customer")
  
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const viewModeParam = searchParams.get("viewMode")
  
  useEffect(() => {
    const mode = viewModeParam === "internal" ? "internal" : "customer"
    setViewMode(mode)
  }, [viewModeParam])
  
  const handleViewModeChange = (value: string) => {
    if (value) {
      const newMode = value as "customer" | "internal"
      setViewMode(newMode)
      
      const params = new URLSearchParams(location.search)
      params.set("viewMode", newMode)
      navigate({ search: params.toString() })
    }
  }
  
  const customerAgents = getCustomerAgents(
    setIsEditingFraudAgent, 
    setIsEditingKYCAgent, 
    setIsEditingUnderwriterAgent, 
    setIsEditingCollectionAgent
  )
  
  const monnaiAgents = getMonnaiAgents()
  
  const agentsToDisplay = viewMode === "internal" ? monnaiAgents : customerAgents
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Agents</h1>
        <div className="flex gap-4">
          <ViewToggle viewMode={viewMode} onViewModeChange={handleViewModeChange} />
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
        isEditingFraudAgent={isEditingFraudAgent}
        isEditingKYCAgent={isEditingKYCAgent}
        isEditingUnderwriterAgent={isEditingUnderwriterAgent}
        isEditingCollectionAgent={isEditingCollectionAgent}
        setIsEditingFraudAgent={setIsEditingFraudAgent}
        setIsEditingKYCAgent={setIsEditingKYCAgent}
        setIsEditingUnderwriterAgent={setIsEditingUnderwriterAgent}
        setIsEditingCollectionAgent={setIsEditingCollectionAgent}
      />
    </div>
  )
}

export default AIAgents
