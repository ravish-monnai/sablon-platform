
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Calendar, User, Clock, FileText } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

const ExecutionHistoryTab: React.FC = () => {
  // Sample execution data for bank statement analysis journey
  const executions = [
    {
      id: "BSA-2023-10-01",
      customer: "Rahul Sharma",
      bank: "HDFC Bank",
      date: "October 1, 2023",
      status: "success"
    },
    {
      id: "BSA-2023-09-15",
      customer: "Priya Patel",
      bank: "SBI Bank",
      date: "September 15, 2023",
      status: "success"
    },
    {
      id: "BSA-2023-09-12",
      customer: "Vivek Singh",
      bank: "ICICI Bank",
      date: "September 12, 2023",
      status: "failure"
    },
    {
      id: "BSA-2023-09-08",
      customer: "Ananya Desai",
      bank: "Axis Bank",
      date: "September 8, 2023",
      status: "failure"
    },
    {
      id: "BSA-2023-09-05",
      customer: "Ravi Kumar",
      bank: "Yes Bank",
      date: "September 5, 2023",
      status: "success"
    }
  ];
  
  const [selectedExecution, setSelectedExecution] = useState<string | null>(null);
  const [showLogDetails, setShowLogDetails] = useState(false);
  
  // Sample detailed logs for the selected execution
  const detailedLogs = [
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
  
  const handleViewLogs = (executionId: string) => {
    setSelectedExecution(executionId);
    setShowLogDetails(true);
  };
  
  return (
    <div className="space-y-6 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Execution History</CardTitle>
          <CardDescription>Recent bank statement analysis executions</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
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
                      onClick={() => handleViewLogs(execution.id)}
                      className="flex items-center gap-1"
                    >
                      <FileText className="h-4 w-4" />
                      View Logs
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alternative list view for small screens */}
      <div className="md:hidden space-y-4">
        {executions.map((execution) => (
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
                onClick={() => handleViewLogs(execution.id)}
                className="flex items-center gap-1 mt-2"
              >
                <FileText className="h-4 w-4" />
                View Logs
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Logs Dialog */}
      <Dialog open={showLogDetails} onOpenChange={setShowLogDetails}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Execution Logs: {selectedExecution}</DialogTitle>
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
    </div>
  );
};

export default ExecutionHistoryTab;
