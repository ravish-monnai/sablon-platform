
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
import { CaseItem } from "@/types/cases";

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
              <TableCell>{caseItem.journey || 'N/A'}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    caseItem.riskLevel === "Critical" || caseItem.riskLevel === "High"
                      ? "destructive"
                      : caseItem.riskLevel === "Medium"
                      ? "secondary"
                      : "outline"
                  }
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
                  className={`${caseItem.statusColor || ''} flex w-fit items-center gap-1`}
                >
                  {caseItem.status === "Pending Review" && <Clock className="h-3 w-3" />}
                  {caseItem.status === "Approved" && <CheckCircle className="h-3 w-3" />}
                  {caseItem.status === "Rejected" && <AlertTriangle className="h-3 w-3" />}
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
