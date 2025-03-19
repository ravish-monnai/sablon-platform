
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, BrainCircuit, BarChart } from "lucide-react"
import { ReactNode, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  const [showDetails, setShowDetails] = useState(false);

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
          {isViewOnly && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowDetails(true)}
            >
              <BarChart className="mr-2 h-4 w-4" /> View Details
            </Button>
          )}
          {agent.onEdit && !isViewOnly && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={agent.onEdit}
              className="ml-auto"
            >
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Agent Details Sheet */}
      <Sheet open={showDetails} onOpenChange={setShowDetails}>
        <SheetContent className="w-full sm:max-w-lg md:max-w-xl overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center">
              {agent.icon}
              <span className="ml-2">{agent.title}</span>
            </SheetTitle>
            <SheetDescription>
              {agent.description}
            </SheetDescription>
          </SheetHeader>

          <Tabs defaultValue="summary">
            <TabsList className="mb-4">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="logs">Execution Logs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Agent Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className={`text-lg font-medium ${agent.status === 'Running' ? 'text-green-600' : 'text-amber-600'}`}>
                        {agent.status}
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Model</div>
                      <div className="text-lg font-medium">{agent.model}</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Cases Processed</div>
                      <div className="text-lg font-medium">{agent.casesPerDay} / day</div>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                      <div className="text-sm text-muted-foreground">Resolution Time</div>
                      <div className="text-lg font-medium">{agent.resolutionTime}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">Recent Metrics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Accuracy</span>
                        <span className="text-sm font-medium">98.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">API Calls</span>
                        <span className="text-sm font-medium">1,245</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Last Deployment</span>
                        <span className="text-sm font-medium">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Execution Logs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b pb-2 last:border-0">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Case #{Math.floor(Math.random() * 10000)}</span>
                        <span className="text-muted-foreground">{new Date(Date.now() - i * 3600000).toLocaleString()}</span>
                      </div>
                      <p className="text-sm mt-1">
                        {agent.status === 'Running' ? 
                          `Successfully processed and analyzed customer data. Decision: ${Math.random() > 0.7 ? 'Flagged' : 'Approved'}` : 
                          'Agent is currently idle. Awaiting new cases.'}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex justify-end">
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AgentCard;
