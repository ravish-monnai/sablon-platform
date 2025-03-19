
import React from "react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody
} from "@/components/ui/table";
import ExecutionTableRow, { Execution } from "./ExecutionTableRow";

interface ExecutionTableProps {
  executions: Execution[];
  onViewLogs: (executionId: string) => void;
}

const ExecutionTable: React.FC<ExecutionTableProps> = ({ executions, onViewLogs }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Case ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Bank</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {executions.map((execution) => (
          <ExecutionTableRow 
            key={execution.id} 
            execution={execution} 
            onViewLogs={onViewLogs} 
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default ExecutionTable;
