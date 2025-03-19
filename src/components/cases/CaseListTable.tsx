
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, CheckCircle, UserRound, Calendar } from "lucide-react";
import { CaseItem } from "@/types/cases";

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
  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2 font-medium">ID</th>
            <th className="p-2 font-medium">Customer</th>
            <th className="p-2 font-medium">Type</th>
            <th className="p-2 font-medium">Status</th>
            <th className="p-2 font-medium">Created</th>
            <th className="p-2 font-medium">Source</th>
            <th className="p-2 font-medium">Bank</th>
            <th className="p-2 font-medium">Assigned</th>
            <th className="p-2 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id} className="border-b">
              <td className="p-2 font-medium">{caseItem.id}</td>
              <td className="p-2">
                <div className="flex items-center gap-1">
                  <UserRound className="h-4 w-4 text-muted-foreground" />
                  {caseItem.customer}
                </div>
              </td>
              <td className="p-2">{caseItem.type}</td>
              <td className="p-2">
                <Badge
                  variant={
                    caseItem.status === "High Risk"
                      ? "destructive"
                      : caseItem.status === "Medium Risk"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {caseItem.status === "High Risk" && (
                    <AlertTriangle className="mr-1 h-3 w-3" />
                  )}
                  {caseItem.status === "Medium Risk" && (
                    <Clock className="mr-1 h-3 w-3" />
                  )}
                  {caseItem.status === "Low Risk" && (
                    <CheckCircle className="mr-1 h-3 w-3" />
                  )}
                  {caseItem.status}
                </Badge>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {caseItem.created}
                </div>
              </td>
              <td className="p-2">{caseItem.source}</td>
              <td className="p-2">{caseItem.bank || "-"}</td>
              <td className="p-2">
                {caseItem.agentAssigned === "Unassigned" ? (
                  <Badge variant="outline">Unassigned</Badge>
                ) : (
                  caseItem.agentAssigned
                )}
              </td>
              <td className="p-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewCase(caseItem.id)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onActionCase(caseItem)}
                  >
                    Action
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseListTable;
