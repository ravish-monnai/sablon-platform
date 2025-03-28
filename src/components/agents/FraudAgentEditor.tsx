
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";
import SOPDialog from "./SOPDialog";
import DataSourcesTab from "./fraud-agent/DataSourcesTab";
import IdentityVerificationTab from "./fraud-agent/IdentityVerificationTab";
import LLMSettingsTab from "./fraud-agent/LLMSettingsTab";
import WorkflowTab from "./fraud-agent/WorkflowTab";
import DecisionsTab from "./fraud-agent/DecisionsTab";
import AgentEditorTabs from "./fraud-agent/AgentEditorTabs";

interface FraudAgentEditorProps {
  onClose: () => void;
}

const FraudAgentEditor: React.FC<FraudAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("data-sources");
  const [sopDialogOpen, setSopDialogOpen] = useState<boolean>(false);
  const [currentSopTitle, setCurrentSopTitle] = useState<string>("");

  const handleOpenSOPDialog = (title: string) => {
    setCurrentSopTitle(title);
    setSopDialogOpen(true);
  };

  return (
    <div className="space-y-6 pt-6">
      <AgentEditorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "data-sources" && (
        <DataSourcesTab onOpenSOPDialog={handleOpenSOPDialog} />
      )}

      {activeTab === "identity-verification" && (
        <IdentityVerificationTab />
      )}

      {activeTab === "llm-settings" && (
        <LLMSettingsTab />
      )}

      {activeTab === "workflow" && (
        <WorkflowTab />
      )}

      {activeTab === "decisions" && (
        <DecisionsTab />
      )}

      <div className="flex justify-end space-x-2 pt-6 border-t">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
          <Save className="mr-2 h-4 w-4" /> Save Configuration
        </Button>
      </div>

      {/* SOP Dialog */}
      <SOPDialog 
        isOpen={sopDialogOpen}
        onClose={() => setSopDialogOpen(false)}
        title={`${currentSopTitle} - Standard Operating Procedure`}
        description="Review the standard operating procedures and workflow for this component"
      />
    </div>
  );
};

export default FraudAgentEditor;
