
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, BrainCircuit, FileText } from "lucide-react"
import { ReactNode, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import ExecutionHistoryTab from "@/components/ai-journeys/components/ExecutionHistoryTab"

export type AgentType = {
  title: string;
  description: string;
  icon: ReactNode;
  status: string;
  casesPerDay: number;
  resolutionTime: string;
  model: string;
  onEdit?: () => void;
}

export type CustomerAgentType = AgentType & {
  onEdit: () => void;
}

export type MonnaiAgentType = AgentType;

interface AgentCardProps {
  agent: AgentType;
  viewMode: "customer" | "internal";
  isViewOnly?: boolean;
}

const AgentCard = ({ agent, viewMode, isViewOnly = false }: AgentCardProps) => {
  const [showLogs, setShowLogs] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center">
            {agent.icon}
            <CardTitle>{agent.title}</CardTitle>
          </div>
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
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowLogs(true)}
          >
            <FileText className="mr-2 h-4 w-4" /> View Logs
          </Button>
          
          {agent.onEdit && !isViewOnly && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={agent.onEdit}
            >
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          )}
        </CardFooter>
      </Card>

      <Sheet open={showLogs} onOpenChange={setShowLogs}>
        <SheetContent className="sm:max-w-md md:max-w-lg lg:max-w-xl">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              {agent.icon}
              {agent.title} Logs
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <ExecutionHistoryTab 
              onViewLogs={(id) => console.log(`Viewing detailed logs for execution ${id}`)} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AgentCard
