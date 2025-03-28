
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseItem } from "@/types/cases";
import { 
  Eye, 
  MoreHorizontal 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CaseListTableProps {
  cases: CaseItem[];
  onViewCase: (caseId: string) => void;
  onActionCase: (caseData: CaseItem) => void;
}

const CaseListTable: React.FC<CaseListTableProps> = ({ 
  cases, 
  onViewCase,
  onActionCase 
}) => {
  // Helper function to get risk badge color - now using valid variant types
  const getRiskBadgeVariant = (riskLevel?: string) => {
    if (!riskLevel) return "outline";
    
    switch (riskLevel.toLowerCase()) {
      case 'low risk':
        return "success";
      case 'medium risk':
        return "warning";
      case 'high risk':
        return "destructive";
      default:
        return "outline";
    }
  };

  // Helper function to get status badge color
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'success';
      case 'failure':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50 hover:bg-gray-100">
          <TableHead className="w-[100px] text-gray-600">Case ID</TableHead>
          <TableHead className="text-gray-600">Customer</TableHead>
          <TableHead className="text-gray-600">Bank</TableHead>
          <TableHead className="text-gray-600">Date</TableHead>
          <TableHead className="text-gray-600">Risk Level</TableHead>
          <TableHead className="text-gray-600">Status</TableHead>
          <TableHead className="text-right text-gray-600">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cases.map((caseItem) => (
          <TableRow 
            key={caseItem.id} 
            className="hover:bg-gray-50 transition-colors"
          >
            <TableCell className="font-medium text-gray-700">{caseItem.id}</TableCell>
            <TableCell className="text-gray-700">{caseItem.customer}</TableCell>
            <TableCell className="text-gray-700">{caseItem.bank}</TableCell>
            <TableCell className="text-gray-700">{caseItem.date}</TableCell>
            <TableCell>
              <Badge 
                variant={getRiskBadgeVariant(caseItem.riskLevel)} 
                className="text-xs"
              >
                {caseItem.riskLevel || "Unknown"}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge 
                variant={getStatusBadgeVariant(caseItem.status)} 
                className="text-xs"
              >
                {caseItem.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onSelect={() => onViewCase(caseItem.id)}
                  >
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onSelect={() => onActionCase(caseItem)}
                  >
                    <MoreHorizontal className="mr-2 h-4 w-4" /> Case Actions
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CaseListTable;
