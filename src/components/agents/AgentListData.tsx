
import { CustomerAgentType, MonnaiAgentType } from "./AgentCard"
import { 
  Shield, Users, CreditCard, UserCheck,
  Search, Flag, Wallet, Sliders, Layers, Activity 
} from "lucide-react"

export const getCustomerAgents = (
  setIsEditingFraudAgent: (value: boolean) => void,
  setIsEditingKYCAgent: (value: boolean) => void,
  setIsEditingUnderwriterAgent: (value: boolean) => void,
  setIsEditingCollectionAgent: (value: boolean) => void
): CustomerAgentType[] => {
  return [
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
  ]
}

export const getMonnaiAgents = (): MonnaiAgentType[] => {
  return [
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
  ]
}
