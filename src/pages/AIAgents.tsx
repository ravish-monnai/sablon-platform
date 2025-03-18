
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Edit2, Shield, Users, CreditCard, BrainCircuit, UserCheck } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import FraudAgentEditor from "@/components/agents/FraudAgentEditor"
import KYCAgentEditor from "@/components/agents/KYCAgentEditor"
import UnderwriterAgentEditor from "@/components/agents/UnderwriterAgentEditor"
import CollectionAgentEditor from "@/components/agents/CollectionAgentEditor"

const AIAgents = () => {
  const [isEditingFraudAgent, setIsEditingFraudAgent] = useState(false)
  const [isEditingKYCAgent, setIsEditingKYCAgent] = useState(false)
  const [isEditingUnderwriterAgent, setIsEditingUnderwriterAgent] = useState(false)
  const [isEditingCollectionAgent, setIsEditingCollectionAgent] = useState(false)
  
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
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-[#9b87f5]" />
              <CardTitle>Fraud Review Agent</CardTitle>
            </div>
            <CardDescription>Reviews suspicious transactions and identifies potential fraud</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Running</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Cases/day:</span>
              <span className="font-medium">78</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Avg. resolution time:</span>
              <span className="font-medium">3.2 mins</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Model:</span>
              <span className="font-medium flex items-center">
                <BrainCircuit className="h-3 w-3 mr-1 text-[#9b87f5]" />
                GPT-4o
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsEditingFraudAgent(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          </CardFooter>
        </Card>
        
        {/* KYC Compliance Agent Card - moved from AIJourneys */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <UserCheck className="mr-2 h-5 w-5 text-[#D946EF]" />
              <CardTitle>KYC Compliance Agent</CardTitle>
            </div>
            <CardDescription>Automated identity verification and compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Running</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Cases/day:</span>
              <span className="font-medium">124</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Avg. resolution time:</span>
              <span className="font-medium">2.5 mins</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Model:</span>
              <span className="font-medium flex items-center">
                <BrainCircuit className="h-3 w-3 mr-1 text-[#D946EF]" />
                Claude 3 Opus
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsEditingKYCAgent(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-[#F97316]" />
              <CardTitle>Underwriter</CardTitle>
            </div>
            <CardDescription>Evaluates and assesses credit risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-amber-600">Idle</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Cases/day:</span>
              <span className="font-medium">45</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Avg. resolution time:</span>
              <span className="font-medium">5.7 mins</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Model:</span>
              <span className="font-medium flex items-center">
                <BrainCircuit className="h-3 w-3 mr-1 text-[#F97316]" />
                Llama 3.1 70B
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsEditingUnderwriterAgent(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#D946EF]" />
              <CardTitle>Collection Agent</CardTitle>
            </div>
            <CardDescription>Manages past-due accounts and recovery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>Status:</span>
              <span className="font-medium text-green-600">Running</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Cases/day:</span>
              <span className="font-medium">63</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Avg. resolution time:</span>
              <span className="font-medium">8.4 mins</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Model:</span>
              <span className="font-medium flex items-center">
                <BrainCircuit className="h-3 w-3 mr-1 text-[#D946EF]" />
                GPT-4o Mini
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="sm" onClick={() => setIsEditingCollectionAgent(true)}>
              <Edit2 className="mr-2 h-4 w-4" /> Configure
            </Button>
          </CardFooter>
        </Card>
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
