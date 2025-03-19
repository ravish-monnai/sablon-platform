
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Calendar, User, FileText } from "lucide-react";
import type { Execution } from "./ExecutionTableRow";

interface ExecutionCardProps {
  execution: Execution;
  onViewLogs: (executionId: string) => void;
}

const ExecutionCard: React.FC<ExecutionCardProps> = ({ execution, onViewLogs }) => {
  return (
    <Card key={execution.id} className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-md font-bold">Case #{execution.id}</h3>
          {execution.status === "success" ? (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Completed</span>
              </div>
            </Badge>
          ) : (
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
              <AlertTriangle className="h-3.5 w-3.5 mr-1" />
              <span>Failed</span>
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Customer</p>
            <p className="font-medium flex items-center gap-1">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              {execution.customer}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Bank</p>
            <p className="font-medium">{execution.bank}</p>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-1">Date</p>
          <p className="font-medium flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            {execution.date.split(' ')[0]} {execution.date.split(' ')[1].replace(',', '')}
          </p>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewLogs(execution.id)}
          className="flex items-center gap-1 mt-2"
        >
          <FileText className="h-4 w-4" />
          View Logs
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExecutionCard;
