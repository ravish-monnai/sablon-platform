
import React from "react";
import { FileText, Database, UserCheck, BrainCircuit, Workflow, AlertTriangle } from "lucide-react";

interface AgentEditorTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AgentEditorTabs: React.FC<AgentEditorTabsProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="flex space-x-4 border-b">
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "agent-details" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("agent-details")}
      >
        <FileText className="h-4 w-4 mr-1.5" />
        Agent Details
      </button>
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "data-sources" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("data-sources")}
      >
        <Database className="h-4 w-4 mr-1.5" />
        Data Sources
      </button>
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "identity-verification" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("identity-verification")}
      >
        <UserCheck className="h-4 w-4 mr-1.5" />
        Identity Verification
      </button>
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "llm-settings" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("llm-settings")}
      >
        <BrainCircuit className="h-4 w-4 mr-1.5" />
        LLM Settings
      </button>
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "workflow" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("workflow")}
      >
        <Workflow className="h-4 w-4 mr-1.5" />
        Workflow
      </button>
      <button
        className={`pb-2 text-sm font-medium flex items-center ${
          activeTab === "decisions" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("decisions")}
      >
        <AlertTriangle className="h-4 w-4 mr-1.5" />
        Decisions
      </button>
    </div>
  );
};

export default AgentEditorTabs;
