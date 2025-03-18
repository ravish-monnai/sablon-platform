
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import FraudAgentEditor from "@/components/agents/FraudAgentEditor"
import KYCAgentEditor from "@/components/agents/KYCAgentEditor"
import UnderwriterAgentEditor from "@/components/agents/UnderwriterAgentEditor"
import CollectionAgentEditor from "@/components/agents/CollectionAgentEditor"
import DataAnalysisAgentEditor from "@/components/agents/DataAnalysisAgentEditor"
import ModelManagementAgentEditor from "@/components/agents/ModelManagementAgentEditor"

interface AgentEditorsProps {
  // Customer agents
  isEditingFraudAgent: boolean;
  isEditingKYCAgent: boolean;
  isEditingUnderwriterAgent: boolean;
  isEditingCollectionAgent: boolean;
  setIsEditingFraudAgent: (value: boolean) => void;
  setIsEditingKYCAgent: (value: boolean) => void;
  setIsEditingUnderwriterAgent: (value: boolean) => void;
  setIsEditingCollectionAgent: (value: boolean) => void;
  
  // Monnai agents
  isEditingDataAnalysisAgent?: boolean;
  isEditingPOCAgent?: boolean;
  isEditingBillingAgent?: boolean;
  isEditingFeatureEngineeringAgent?: boolean;
  isEditingModelManagementAgent?: boolean;
  isEditingObservabilityAgent?: boolean;
  setIsEditingDataAnalysisAgent?: (value: boolean) => void;
  setIsEditingPOCAgent?: (value: boolean) => void;
  setIsEditingBillingAgent?: (value: boolean) => void;
  setIsEditingFeatureEngineeringAgent?: (value: boolean) => void;
  setIsEditingModelManagementAgent?: (value: boolean) => void;
  setIsEditingObservabilityAgent?: (value: boolean) => void;
}

const AgentEditors = ({
  // Customer agents
  isEditingFraudAgent,
  isEditingKYCAgent,
  isEditingUnderwriterAgent,
  isEditingCollectionAgent,
  setIsEditingFraudAgent,
  setIsEditingKYCAgent,
  setIsEditingUnderwriterAgent,
  setIsEditingCollectionAgent,
  
  // Monnai agents
  isEditingDataAnalysisAgent = false,
  isEditingPOCAgent = false,
  isEditingBillingAgent = false,
  isEditingFeatureEngineeringAgent = false,
  isEditingModelManagementAgent = false,
  isEditingObservabilityAgent = false,
  setIsEditingDataAnalysisAgent = () => {},
  setIsEditingPOCAgent = () => {},
  setIsEditingBillingAgent = () => {},
  setIsEditingFeatureEngineeringAgent = () => {},
  setIsEditingModelManagementAgent = () => {},
  setIsEditingObservabilityAgent = () => {}
}: AgentEditorsProps) => {
  return (
    <>
      {/* Customer Agent Editors */}
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

      {/* Monnai Agent Editors */}
      <Sheet open={isEditingDataAnalysisAgent} onOpenChange={setIsEditingDataAnalysisAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure Data Analysis Agent</SheetTitle>
            <SheetDescription>
              Customize data sources, analysis methods, and output formats for your data analysis agent.
            </SheetDescription>
          </SheetHeader>
          <DataAnalysisAgentEditor onClose={() => setIsEditingDataAnalysisAgent(false)} />
        </SheetContent>
      </Sheet>

      {/* Model Management Agent Editor */}
      <Sheet open={isEditingModelManagementAgent} onOpenChange={setIsEditingModelManagementAgent}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Configure Model Management Agent</SheetTitle>
            <SheetDescription>
              Customize model lifecycle, deployment strategies, and monitoring settings for your model management agent.
            </SheetDescription>
          </SheetHeader>
          <ModelManagementAgentEditor onClose={() => setIsEditingModelManagementAgent(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AgentEditors
