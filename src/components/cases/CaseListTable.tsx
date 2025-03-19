
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaseItem } from "@/types/caseTypes";

interface CaseListTableProps {
  cases: CaseItem[];
  onViewCase: (caseId: string) => void;
  onActionCase: (caseData: CaseItem) => void;
}

const CaseListTable: React.FC<CaseListTableProps> = ({
  cases,
  onViewCase,
  onActionCase,
}) => {
  if (cases.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No cases found matching your criteria.</p>
      </div>
    );
  }

  // Function to determine risk level badge variant
  const getRiskLevelVariant = (riskLevel: string | undefined) => {
    if (!riskLevel) return "outline";
    
    switch (riskLevel?.toLowerCase()) {
      case "critical":
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "outline";
    }
  };

  // Function to determine status badge color classes
  const getStatusColorClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending review":
        return "bg-amber-100 text-amber-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  // Function to normalize journey name display
  const getJourneyDisplay = (journey: string | undefined): string => {
    if (!journey) return "N/A";
    
    // Standardize bank statement journeys display
    if (journey.toLowerCase().includes("bank") && 
        journey.toLowerCase().includes("statement")) {
      return "Bank Statement Analysis";
    }
    
    return journey;
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Journey</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((caseItem) => (
            <TableRow key={caseItem.id}>
              <TableCell className="font-medium">{caseItem.id}</TableCell>
              <TableCell>{caseItem.customer}</TableCell>
              <TableCell>
                {caseItem.journey ? (
                  <Badge variant="outline" className="font-normal">
                    {getJourneyDisplay(caseItem.journey)}
                  </Badge>
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell>
                <Badge
                  variant={getRiskLevelVariant(caseItem.riskLevel)}
                  className="flex w-fit items-center gap-1"
                >
                  {caseItem.riskLevel === "Low" && <CheckCircle className="h-3 w-3" />}
                  {(caseItem.riskLevel === "Critical" || caseItem.riskLevel === "High") && (
                    <AlertTriangle className="h-3 w-3" />
                  )}
                  {caseItem.riskLevel === "Medium" && <Clock className="h-3 w-3" />}
                  {caseItem.riskLevel || 'Unknown'}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className={`${getStatusColorClass(caseItem.status)} flex w-fit items-center gap-1`}
                >
                  {caseItem.status.toLowerCase() === "pending review" && <Clock className="h-3 w-3" />}
                  {caseItem.status.toLowerCase() === "approved" && <CheckCircle className="h-3 w-3" />}
                  {caseItem.status.toLowerCase() === "rejected" && <AlertTriangle className="h-3 w-3" />}
                  {caseItem.status}
                </Badge>
              </TableCell>
              <TableCell>{caseItem.date || caseItem.created}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewCase(caseItem.id)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onActionCase(caseItem)}>
                        Take Action
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/case-review/${caseItem.id}`}>View Details</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CaseListTable;
