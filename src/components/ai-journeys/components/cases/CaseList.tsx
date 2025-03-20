
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
  // Helper function to determine decision badge variant
  const getDecisionBadgeProps = (decision?: string) => {
    if (!decision) return { variant: "outline" as const, icon: null };
    
    switch(decision) {
      case "Approved":
        return { 
          variant: "success" as const, 
          icon: <CheckCircle className="h-3 w-3 mr-1" /> 
        };
      case "Rejected":
        return { 
          variant: "destructive" as const, 
          icon: <AlertTriangle className="h-3 w-3 mr-1" /> 
        };
      case "Pending Review":
        return { 
          variant: "warning" as const, 
          icon: <Clock className="h-3 w-3 mr-1" /> 
        };
      default:
        return { 
          variant: "outline" as const, 
          icon: null 
        };
    }
  };

  return (
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
        {cases.map((caseItem) => {
          const { variant, icon } = getDecisionBadgeProps(caseItem.decision);
          
          return (
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
                <Badge className={caseItem.status === "success" ? 
                  "bg-green-100 text-green-800 hover:bg-green-100" :
                  "bg-red-100 text-red-800 hover:bg-red-100"}>
                  {caseItem.risk}
                </Badge>
              </TableCell>
              <TableCell>
                {caseItem.decision ? (
                  <Badge variant={variant} className="flex items-center gap-1">
                    {icon}
                    {caseItem.decision}
                  </Badge>
                ) : (
                  <Badge variant="outline">Not Processed</Badge>
                )}
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
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CaseList;
