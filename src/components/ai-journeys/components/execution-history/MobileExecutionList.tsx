
import React from "react";
import ExecutionCard from "./ExecutionCard";
import type { Execution } from "./ExecutionTableRow";

interface MobileExecutionListProps {
  executions: Execution[];
  onViewLogs: (executionId: string) => void;
}

const MobileExecutionList: React.FC<MobileExecutionListProps> = ({ executions, onViewLogs }) => {
  return (
    <div className="md:hidden space-y-4">
      {executions.map((execution) => (
        <ExecutionCard 
          key={execution.id} 
          execution={execution} 
          onViewLogs={onViewLogs} 
        />
      ))}
    </div>
  );
};

export default MobileExecutionList;
