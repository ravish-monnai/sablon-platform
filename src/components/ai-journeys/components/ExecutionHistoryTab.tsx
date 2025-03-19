
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, User, DollarSign, Clock } from "lucide-react";

const ExecutionHistoryTab: React.FC = () => {
  const [selectedExecution, setSelectedExecution] = useState<string | null>(null);
  
  // Sample execution data for bank statement analysis journey
  const executions = [
    {
      id: "BSA-2023-10-01",
      customer: "Rahul Sharma",
      bank: "HDFC Bank",
      date: "October 1, 2023",
      amount: "₹4,25,000.00",
      status: "success",
      details: "All verification checks passed",
    },
    {
      id: "BSA-2023-09-15",
      customer: "Priya Patel",
      bank: "SBI Bank",
      date: "September 15, 2023",
      amount: "₹7,85,000.00",
      status: "success",
      details: "Income verification passed",
    },
    {
      id: "BSA-2023-09-12",
      customer: "Vivek Singh",
      bank: "ICICI Bank",
      date: "September 12, 2023",
      amount: "₹6,50,000.00",
      status: "failure",
      details: "Suspicious transaction pattern detected",
    },
    {
      id: "BSA-2023-09-08",
      customer: "Ananya Desai",
      bank: "Axis Bank",
      date: "September 8, 2023",
      amount: "₹3,20,000.00",
      status: "failure",
      details: "Income inconsistency detected",
    },
    {
      id: "BSA-2023-09-05",
      customer: "Ravi Kumar",
      bank: "Yes Bank",
      date: "September 5, 2023",
      amount: "₹5,15,000.00",
      status: "success",
      details: "All verification checks passed",
    }
  ];
  
  return (
    <div className="space-y-6 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {executions.map((execution) => (
          <div key={execution.id} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="p-4">
              {/* Status and Bank Header */}
              <div className="flex justify-between items-start mb-4">
                <Badge className={execution.status === "success" ? 
                  "bg-green-100 text-green-800 hover:bg-green-100" :
                  "bg-red-100 text-red-800 hover:bg-red-100"}>
                  {execution.status === "success" ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <span>Failed</span>
                  )}
                </Badge>
                <div className="text-sm font-medium">{execution.bank}</div>
              </div>
              
              {/* Case ID and Details */}
              <h3 className="text-lg font-bold mb-1">Case #{execution.id}</h3>
              <p className="text-sm text-muted-foreground mb-4">{execution.details}</p>
              
              {/* Customer, Amount, Date */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Customer</p>
                  <p className="font-medium">{execution.customer}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Amount</p>
                  <p className="font-medium">{execution.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Date</p>
                  <p className="font-medium">
                    {execution.date.split(' ')[0]} {execution.date.split(' ')[1].replace(',', '')}
                  </p>
                </div>
              </div>
              
              {/* Journey Status */}
              <div>
                <h4 className="text-xs text-muted-foreground mb-2">Journey Status</h4>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Upload</span>
                  <span>Analysis</span>
                  <span>Risk</span>
                  <span>Decision</span>
                </div>
                <div className="relative h-1.5 bg-gray-100 rounded-full mb-1">
                  <div 
                    className={`absolute top-0 left-0 h-full rounded-full ${execution.status === "success" ? "bg-green-500" : "bg-red-500"}`} 
                    style={{width: "100%"}}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
              </div>
            </div>
            
            {/* View Button */}
            <div className="border-t p-3">
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full flex items-center justify-center"
                onClick={() => setSelectedExecution(execution.id)}
              >
                <span>View Journey Results</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutionHistoryTab;
