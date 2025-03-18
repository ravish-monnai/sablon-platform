
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, BrainCircuit } from "lucide-react"
import { ReactNode } from "react"

export type AgentType = {
  title: string;
  description: string;
  icon: ReactNode;
  status: string;
  casesPerDay: number;
  resolutionTime: string;
  model: string;
}

export type CustomerAgentType = AgentType & {
  onEdit: () => void;
}

export type MonnaiAgentType = AgentType;

interface AgentCardProps {
  agent: AgentType;
  viewMode: "customer" | "internal";
}

const AgentCard = ({ agent, viewMode }: AgentCardProps) => {
  return (
    <Card>
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
        {viewMode === "customer" && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => (agent as CustomerAgentType).onEdit()}
          >
            <Edit2 className="mr-2 h-4 w-4" /> Configure
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default AgentCard
