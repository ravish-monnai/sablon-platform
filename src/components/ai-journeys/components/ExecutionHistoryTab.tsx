
import React from "react";
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

interface ExecutionHistoryTabProps {
  onViewLogs?: (executionId: string) => void;
}

const ExecutionHistoryTab: React.FC<ExecutionHistoryTabProps> = ({ onViewLogs }) => {
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
    </div>
  );
};

export default ExecutionHistoryTab;
