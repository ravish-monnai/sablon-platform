
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  User,
  FileText,
  Clock
} from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { CaseItem } from "./types";

interface CaseListProps {
  cases: CaseItem[];
  onSelectCase: (caseId: string) => void;
}

const CaseList: React.FC<CaseListProps> = ({ cases, onSelectCase }) => {
  // Helper function to determine decision badge props based on the decision status
  const getDecisionBadge = (decision?: string) => {
    if (!decision) return <Badge variant="outline">Not Processed</Badge>;
    
    switch(decision) {
      case "Approved":
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> 
            Approved
          </Badge>
        );
      case "Rejected":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> 
            Rejected
          </Badge>
        );
      case "Pending Review":
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> 
            Pending Review
          </Badge>
        );
      default:
        return <Badge variant="outline">{decision}</Badge>;
    }
  };

  // Helper function to display risk level with appropriate styling
  const getRiskBadge = (risk: string) => {
    const isLowRisk = risk.toLowerCase().includes("low");
    return (
      <Badge className={isLowRisk ? 
        "bg-green-100 text-green-800 hover:bg-green-100" :
        "bg-red-100 text-red-800 hover:bg-red-100"}>
        {risk}
      </Badge>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Bank</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Decision</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((caseItem) => (
            <TableRow key={caseItem.id}>
              <TableCell className="font-medium">{caseItem.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  {caseItem.customer}
                </div>
              </TableCell>
              <TableCell>{caseItem.bank}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {caseItem.date}
                </div>
              </TableCell>
              <TableCell>
                {getRiskBadge(caseItem.risk)}
              </TableCell>
              <TableCell>
                {getDecisionBadge(caseItem.decision)}
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1"
                  onClick={() => onSelectCase(caseItem.id)}
                >
                  <FileText className="h-4 w-4" />
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CaseList;
