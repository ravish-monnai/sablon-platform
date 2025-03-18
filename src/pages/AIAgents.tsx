
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Plus, Edit2, Shield, Users, CreditCard, BrainCircuit, UserCheck,
  Search, Flag, Wallet, Sliders, Layers, Activity 
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import FraudAgentEditor from "@/components/agents/FraudAgentEditor"
import KYCAgentEditor from "@/components/agents/KYCAgentEditor"
import UnderwriterAgentEditor from "@/components/agents/UnderwriterAgentEditor"
import CollectionAgentEditor from "@/components/agents/CollectionAgentEditor"
import { useLocation } from "react-router-dom"

const AIAgents = () => {
  const [isEditingFraudAgent, setIsEditingFraudAgent] = useState(false)
  const [isEditingKYCAgent, setIsEditingKYCAgent] = useState(false)
  const [isEditingUnderwriterAgent, setIsEditingUnderwriterAgent] = useState(false)
  const [isEditingCollectionAgent, setIsEditingCollectionAgent] = useState(false)
  const [viewMode, setViewMode] = useState<"customer" | "internal">("customer")
  
  // Get the current view mode from URL search params
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const viewModeParam = searchParams.get("viewMode")
  
  // If viewModeParam is 'internal', set viewMode to 'internal', otherwise default to 'customer'
  const currentViewMode = viewModeParam === "internal" ? "internal" : "customer"
  
  // Define the Monnai internal agents
  const monnaiAgents = [
    {
      title: "Data Analysis Agent",
      description: "Analyzes large datasets to extract insights and patterns",
      icon: <Search className="mr-2 h-5 w-5 text-[#4DA3FF]" />,
      status: "Running",
      casesPerDay: 92,
      resolutionTime: "2.8 mins",
      model: "Claude 3 Opus"
    },
    {
      title: "POC Agent",
      description: "Helps create and validate proof of concepts quickly",
      icon: <Flag className="mr-2 h-5 w-5 text-[#F97316]" />,
      status: "Running",
      casesPerDay: 18,
      resolutionTime: "15.3 mins",
      model: "GPT-4o"
    },
    {
      title: "Billing Agent",
      description: "Manages customer billing and payment processes",
      icon: <Wallet className="mr-2 h-5 w-5 text-[#10B981]" />,
      status: "Running",
      casesPerDay: 156,
      resolutionTime: "1.2 mins",
      model: "Llama 3.1 70B"
    },
    {
      title: "Feature Engineering Agent",
      description: "Creates and optimizes features for machine learning models",
      icon: <Sliders className="mr-2 h-5 w-5 text-[#8B5CF6]" />,
      status: "Idle",
      casesPerDay: 34,
      resolutionTime: "7.5 mins",
      model: "GPT-4o"
    },
    {
      title: "Model Management Agent",
      description: "Oversees model deployment, versioning, and maintenance",
      icon: <Layers className="mr-2 h-5 w-5 text-[#EC4899]" />,
      status: "Running",
      casesPerDay: 43,
      resolutionTime: "4.8 mins",
      model: "Claude 3 Sonnet"
    },
    {
      title: "Observability & Monitoring",
      description: "Tracks system performance and alerts on anomalies",
      icon: <Activity className="mr-2 h-5 w-5 text-[#FB7185]" />,
      status: "Running",
      casesPerDay: 217,
      resolutionTime: "0.8 mins",
      model: "Llama 3.1 405B"
    }
  ];
  
  // Define the customer agents (existing)
  const customerAgents = [
    {
      title: "Fraud Review Agent",
      description: "Reviews suspicious transactions and identifies potential fraud",
      icon: <Shield className="mr-2 h-5 w-5 text-[#9b87f5]" />,
      status: "Running",
      casesPerDay: 78,
      resolutionTime: "3.2 mins",
      model: "GPT-4o",
      onEdit: () => setIsEditingFraudAgent(true)
    },
    {
      title: "KYC Compliance Agent",
      description: "Automated identity verification and compliance",
      icon: <UserCheck className="mr-2 h-5 w-5 text-[#D946EF]" />,
      status: "Running",
      casesPerDay: 124,
      resolutionTime: "2.5 mins",
      model: "Claude 3 Opus",
      onEdit: () => setIsEditingKYCAgent(true)
    },
    {
      title: "Underwriter",
      description: "Evaluates and assesses credit risk",
      icon: <CreditCard className="mr-2 h-5 w-5 text-[#F97316]" />,
      status: "Idle",
      casesPerDay: 45,
      resolutionTime: "5.7 mins",
      model: "Llama 3.1 70B",
      onEdit: () => setIsEditingUnderwriterAgent(true)
    },
    {
      title: "Collection Agent",
      description: "Manages past-due accounts and recovery",
      icon: <Users className="mr-2 h-5 w-5 text-[#D946EF]" />,
      status: "Running",
      casesPerDay: 63,
      resolutionTime: "8.4 mins",
      model: "GPT-4o Mini",
      onEdit: () => setIsEditingCollectionAgent(true)
    }
  ];
  
  // Determine which agents to display based on view mode from localStorage
  const viewModeFromStorage = localStorage.getItem('viewMode');
  const displayViewMode = viewModeFromStorage === "internal" ? "internal" : "customer";
  const agentsToDisplay = displayViewMode === "internal" ? monnaiAgents : customerAgents;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Agents</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Agent
        </Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsToDisplay.map((agent, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center">
                {agent.icon}
                <CardTitle>{agent.title}</CardTitle>
              </div>
              <CardDescription>{agent.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-2">
                <span>Status:</span>
                <span className={`font-medium ${agent.status === 'Running' ? 'text-green-600' : 'text-amber-600'}`}>{agent.status}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Cases/day:</span>
                <span className="font-medium">{agent.casesPerDay}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Avg. resolution time:</span>
                <span className="font-medium">{agent.resolutionTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Model:</span>
                <span className="font-medium flex items-center">
                  <BrainCircuit className="h-3 w-3 mr-1 text-[#9b87f5]" />
                  {agent.model}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" size="sm" onClick={() => displayViewMode === "customer" && agent.onEdit && agent.onEdit()}>
                <Edit2 className="mr-2 h-4 w-4" /> Configure
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Fraud Agent Editor Sheet */}
      <Sheet open={isEditingFraudAgent} onOpenChange={setIsEditingFraudAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure Fraud Review Agent</SheetTitle>
            <SheetDescription>
              Customize the data sources, verification methods, and decision options for your fraud review agent.
            </SheetDescription>
          </SheetHeader>
          <FraudAgentEditor onClose={() => setIsEditingFraudAgent(false)} />
        </SheetContent>
      </Sheet>

      {/* KYC Agent Editor Sheet */}
      <Sheet open={isEditingKYCAgent} onOpenChange={setIsEditingKYCAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure KYC Compliance Agent</SheetTitle>
            <SheetDescription>
              Customize identity verification, compliance checks, and document processing for your KYC agent.
            </SheetDescription>
          </SheetHeader>
          <KYCAgentEditor onClose={() => setIsEditingKYCAgent(false)} />
        </SheetContent>
      </Sheet>

      {/* Underwriter Agent Editor Sheet */}
      <Sheet open={isEditingUnderwriterAgent} onOpenChange={setIsEditingUnderwriterAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure Underwriter Agent</SheetTitle>
            <SheetDescription>
              Customize risk assessment, credit evaluation, and approval criteria for your underwriting agent.
            </SheetDescription>
          </SheetHeader>
          <UnderwriterAgentEditor onClose={() => setIsEditingUnderwriterAgent(false)} />
        </SheetContent>
      </Sheet>

      {/* Collection Agent Editor Sheet */}
      <Sheet open={isEditingCollectionAgent} onOpenChange={setIsEditingCollectionAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure Collection Agent</SheetTitle>
            <SheetDescription>
              Customize communication strategies, payment options, and recovery workflows for your collection agent.
            </SheetDescription>
          </SheetHeader>
          <CollectionAgentEditor onClose={() => setIsEditingCollectionAgent(false)} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AIAgents
