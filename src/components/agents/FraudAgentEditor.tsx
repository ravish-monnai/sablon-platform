
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import ProcessDialog from "./ProcessDialog";
import DataSourcesTab from "./fraud-agent/DataSourcesTab";
import LLMSettingsTab from "./fraud-agent/LLMSettingsTab";
import AgentEditorTabs from "./fraud-agent/AgentEditorTabs";
import AgentDetailsTab from "./fraud-agent/AgentDetailsTab";

interface FraudAgentEditorProps {
  onClose: () => void;
}

const FraudAgentEditor: React.FC<FraudAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("agent-details");
  const [processDialogOpen, setProcessDialogOpen] = useState<boolean>(false);
  const [currentProcessTitle, setCurrentProcessTitle] = useState<string>("");

  const handleOpenProcessDialog = (title: string) => {
    setCurrentProcessTitle(title);
    setProcessDialogOpen(true);
  };

  return (
    <div className="space-y-6 pt-6">
      <AgentEditorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "agent-details" && <AgentDetailsTab />}
      {activeTab === "data-sources" && (
        <DataSourcesTab onOpenSOPDialog={handleOpenProcessDialog} />
      )}
      {activeTab === "llm-settings" && <LLMSettingsTab />}

      <div className="flex justify-end space-x-2 pt-6 border-t">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
          <Save className="mr-2 h-4 w-4" /> Save Configuration
        </Button>
      </div>

      {/* Process Dialog */}
      <ProcessDialog 
        isOpen={processDialogOpen}
        onClose={() => setProcessDialogOpen(false)}
        title={`${currentProcessTitle} Diagram`}
        description="Review the process flow and workflow for this component"
      />
    </div>
  );
};

export default FraudAgentEditor;
