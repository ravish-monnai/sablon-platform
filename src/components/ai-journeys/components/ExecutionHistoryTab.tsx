
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ExecutionTable from "./execution-history/ExecutionTable";
import MobileExecutionList from "./execution-history/MobileExecutionList";
import { getSampleExecutions } from "./execution-history/mockExecutionData";

interface ExecutionHistoryTabProps {
  onViewLogs?: (executionId: string) => void;
}

const ExecutionHistoryTab: React.FC<ExecutionHistoryTabProps> = ({ onViewLogs }) => {
  // Get sample execution data
  const executions = getSampleExecutions();
  
  const handleViewLogs = (executionId: string) => {
    if (onViewLogs) {
      onViewLogs(executionId);
    }
  };
  
  return (
    <div className="space-y-6 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Execution History</CardTitle>
          <CardDescription>Recent bank statement analysis executions</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ExecutionTable 
            executions={executions}
            onViewLogs={handleViewLogs}
          />
        </CardContent>
      </Card>

      {/* Mobile list view for small screens */}
      <MobileExecutionList 
        executions={executions}
        onViewLogs={handleViewLogs}
      />
    </div>
  );
};

export default ExecutionHistoryTab;
