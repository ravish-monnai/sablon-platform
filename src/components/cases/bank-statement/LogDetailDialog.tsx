
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface LogDetailProps {
  executionId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface LogEntry {
  time: string;
  message: string;
  level: "info" | "success" | "warning";
}

const LogDetailDialog: React.FC<LogDetailProps> = ({ executionId, open, onOpenChange }) => {
  // Sample detailed logs data
  const detailedLogs: LogEntry[] = [
    { time: "10:15:22", message: "Starting bank statement analysis for selected account", level: "info" },
    { time: "10:15:23", message: "Connecting to bank API", level: "info" },
    { time: "10:15:24", message: "Successfully retrieved statement data", level: "success" },
    { time: "10:15:25", message: "Beginning transaction categorization", level: "info" },
    { time: "10:15:26", message: "Income verification process started", level: "info" },
    { time: "10:15:28", message: "Detected 3 recurring payments", level: "info" },
    { time: "10:15:30", message: "Identified potential anomaly in transaction pattern", level: "warning" },
    { time: "10:15:32", message: "Cash flow analysis completed", level: "success" },
    { time: "10:15:34", message: "Final report generation", level: "info" },
    { time: "10:15:36", message: "Analysis completed successfully", level: "success" }
  ];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Execution Logs: {executionId}</DialogTitle>
          <DialogDescription>
            Detailed logs for this execution
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-2 mt-4">
          {detailedLogs.map((log, index) => (
            <div 
              key={index} 
              className={`p-2 rounded-md flex items-start gap-2 text-sm ${
                log.level === 'info' ? 'bg-gray-100 dark:bg-gray-800' : 
                log.level === 'success' ? 'bg-green-50 dark:bg-green-900' : 
                'bg-amber-50 dark:bg-amber-900'
              }`}
            >
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-mono text-xs text-muted-foreground">{log.time}</span>
                <p className="mt-0.5">{log.message}</p>
              </div>
              <Badge 
                variant="outline" 
                className={`ml-auto flex-shrink-0 ${
                  log.level === 'success' ? 'text-green-600 border-green-300' : 
                  log.level === 'warning' ? 'text-amber-600 border-amber-300' : 
                  'text-gray-600 border-gray-300'
                }`}
              >
                {log.level}
              </Badge>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogDetailDialog;
