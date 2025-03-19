
import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Calendar, User, Clock, FileText } from "lucide-react";

export interface Execution {
  id: string;
  customer: string;
  bank: string;
  date: string;
  status: "success" | "failure";
}

interface ExecutionTableRowProps {
  execution: Execution;
  onViewLogs: (executionId: string) => void;
}

const ExecutionTableRow: React.FC<ExecutionTableRowProps> = ({ execution, onViewLogs }) => {
  return (
    <TableRow key={execution.id} className="hover:bg-muted/50">
      <TableCell className="font-medium">{execution.id}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          {execution.customer}
        </div>
      </TableCell>
      <TableCell>{execution.bank}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          {execution.date}
        </div>
      </TableCell>
      <TableCell>
        {execution.status === "success" ? (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> 
            Completed
          </Badge>
        ) : (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> 
            Failed
          </Badge>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewLogs(execution.id)}
          className="flex items-center gap-1"
        >
          <FileText className="h-4 w-4" />
          View Logs
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ExecutionTableRow;
