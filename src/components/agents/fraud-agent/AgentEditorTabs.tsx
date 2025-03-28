
import React from "react";

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
        className={`pb-2 text-sm font-medium ${
          activeTab === "data-sources" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("data-sources")}
      >
        Data Sources
      </button>
      <button
        className={`pb-2 text-sm font-medium ${
          activeTab === "identity-verification" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("identity-verification")}
      >
        Identity Verification
      </button>
      <button
        className={`pb-2 text-sm font-medium ${
          activeTab === "llm-settings" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("llm-settings")}
      >
        LLM Settings
      </button>
      <button
        className={`pb-2 text-sm font-medium ${
          activeTab === "workflow" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("workflow")}
      >
        Workflow
      </button>
      <button
        className={`pb-2 text-sm font-medium ${
          activeTab === "decisions" 
            ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
            : "text-muted-foreground"
        }`}
        onClick={() => setActiveTab("decisions")}
      >
        Decisions
      </button>
    </div>
  );
};

export default AgentEditorTabs;
