
import React from "react";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";

const WorkflowTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Agent Workflow</h3>
      <p className="text-sm text-muted-foreground">
        Configure the decision-making workflow for the Fraud Review Agent.
      </p>
      
      <div className="h-[450px] mt-4">
        <WorkflowEditor />
      </div>
    </div>
  );
};

export default WorkflowTab;
