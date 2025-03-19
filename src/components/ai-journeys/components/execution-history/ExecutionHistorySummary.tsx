
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExecutionNode {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "failed";
  executionTime: string;
  documents: number;
}

interface ExecutionSummaryProps {
  executionId: string;
}

const ExecutionHistorySummary: React.FC<ExecutionSummaryProps> = ({ executionId }) => {
  // This would typically come from an API call based on the executionId
  // For now we're using mock data
  const nodes: ExecutionNode[] = [
    {
      id: "1",
      name: "Document Extraction",
      status: "completed",
      executionTime: "0.8s",
      documents: 3
    },
    {
      id: "2",
      name: "Data Normalization",
      status: "completed",
      executionTime: "1.2s",
      documents: 3
    },
    {
      id: "3",
      name: "Account Validation",
      status: "completed",
      executionTime: "0.5s",
      documents: 3
    },
    {
      id: "4",
      name: "Transaction Analysis",
      status: "completed",
      executionTime: "2.3s",
      documents: 3
    },
    {
      id: "5",
      name: "Risk Scoring",
      status: "completed",
      executionTime: "0.9s",
      documents: 3
    },
    {
      id: "6",
      name: "Report Generation",
      status: "completed",
      executionTime: "1.1s",
      documents: 1
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "failed":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            In Progress
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
      {nodes.map((node) => (
        <Card key={node.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-md font-bold">{node.name}</h3>
              {getStatusBadge(node.status)}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{node.executionTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{node.documents} Documents</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExecutionHistorySummary;
