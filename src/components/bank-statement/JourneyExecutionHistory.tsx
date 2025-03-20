
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ArrowRight,
  Bot,
  UserCheck,
  Timer,
  FileText,
  Download,
  Eye
} from "lucide-react";

interface ExecutionStep {
  id: string;
  name: string;
  status: "completed" | "failed" | "skipped" | "automated" | "manual";
  timestamp: string;
  duration: string;
  notes?: string;
  document?: {
    name: string;
    type: string;
    size: string;
  };
}

interface JourneyExecutionHistoryProps {
  caseId: string;
}

const JourneyExecutionHistory: React.FC<JourneyExecutionHistoryProps> = ({ caseId }) => {
  // Determine if this is an Indian case by checking the ID prefix
  const isIndianCase = caseId.includes("IN-") || caseId.includes("301") || caseId.includes("302") || caseId.includes("303");
  
  // This would come from API in real app
  const executionSteps: ExecutionStep[] = [
    {
      id: "step-1",
      name: "Document Verification",
      status: "completed",
      timestamp: "2023-09-15 09:32:15",
      duration: "2.3s",
      notes: "Bank statement document validated successfully",
      document: {
        name: isIndianCase ? "HDFC_Statement_Sep2023.pdf" : "Bank_Statement_Sep2023.pdf",
        type: "application/pdf",
        size: "1.4 MB"
      }
    },
    {
      id: "step-2",
      name: "Data Extraction",
      status: "completed",
      timestamp: "2023-09-15 09:32:18",
      duration: "4.7s",
      notes: "Extracted 234 transactions and account information"
    },
    {
      id: "step-3",
      name: "Feature Generation",
      status: "completed",
      timestamp: "2023-09-15 09:32:23",
      duration: "3.1s",
      notes: isIndianCase ? "Generated 52 features including UPI transaction analysis" : "Generated 45 features across 8 categories"
    },
    {
      id: "step-4",
      name: "Feature Analysis",
      status: "completed",
      timestamp: "2023-09-15 09:32:26",
      duration: "5.2s",
      notes: "Analyzed features using AI models"
    },
    {
      id: "step-5",
      name: "Decision Making",
      status: caseId.includes("246") || caseId.includes("249") || caseId.includes("IN-302") ? "manual" : "automated",
      timestamp: "2023-09-15 09:32:31",
      duration: caseId.includes("246") || caseId.includes("249") || caseId.includes("IN-302") ? "N/A" : "1.8s",
      notes: caseId.includes("246") || caseId.includes("249") || caseId.includes("IN-302") 
        ? "Case forwarded to manual review team due to detected anomalies" 
        : "Automated decision made based on analysis results"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "skipped":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case "automated":
        return <Bot className="h-5 w-5 text-blue-500" />;
      case "manual":
        return <UserCheck className="h-5 w-5 text-purple-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      case "failed":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Failed</Badge>;
      case "skipped":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Skipped</Badge>;
      case "automated":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Automated</Badge>;
      case "manual":
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Manual Review</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <FileText className="h-5 w-5 mr-2 text-[#9b87f5]" />
          Journey Execution History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mt-2">
          {executionSteps.map((step, index) => (
            <div key={step.id} className="relative flex">
              {/* Timeline connector */}
              {index < executionSteps.length - 1 && (
                <div className="absolute left-[12px] top-[28px] bottom-0 w-[2px] bg-gray-200"></div>
              )}
              
              {/* Step icon */}
              <div className="flex-shrink-0 z-10">
                {getStatusIcon(step.status)}
              </div>
              
              {/* Step content */}
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{step.name}</h4>
                  {getStatusBadge(step.status)}
                </div>
                
                <div className="text-xs text-muted-foreground flex items-center mt-1">
                  <Timer className="h-3 w-3 mr-1" />
                  <span>{step.timestamp} (Duration: {step.duration})</span>
                </div>
                
                {step.notes && (
                  <p className="text-sm mt-2 text-muted-foreground">{step.notes}</p>
                )}
                
                {/* Document attachment */}
                {step.document && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">{step.document.name}</p>
                          <p className="text-xs text-muted-foreground">{step.document.size}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          <span className="text-xs">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Download className="h-3.5 w-3.5" />
                          <span className="text-xs">Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-gray-50 rounded-md text-sm">
          <div className="flex items-center mb-2">
            <Bot className="h-4 w-4 mr-2 text-[#9b87f5]" />
            <span className="font-medium">Journey Execution Summary</span>
          </div>
          <p className="text-muted-foreground text-xs">
            {caseId.includes("246") || caseId.includes("249") || caseId.includes("IN-302") 
              ? "This case required manual review after automated analysis detected anomalies or inconsistencies in the bank statement data. The AI agent successfully extracted and analyzed features but determined human judgment was needed for final decision."
              : "This case was fully processed by the AI agent. All steps were completed successfully, and the final decision was made automatically based on the analysis results without requiring human intervention."}
            {isIndianCase && " UPI transaction analysis was conducted as part of the enhanced feature set for Indian market."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyExecutionHistory;
