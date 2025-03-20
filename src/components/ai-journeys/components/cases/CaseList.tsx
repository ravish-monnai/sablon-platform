
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
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
    <div className="space-y-6">
      {/* Table view for cases */}
      <Card>
        <CardContent className="p-0">
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
        </CardContent>
      </Card>
      
      {/* Card view for cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((caseItem) => {
          const { variant, icon } = getDecisionBadgeProps(caseItem.decision);
          
          return (
            <Card key={caseItem.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge variant={variant} className="flex items-center gap-1">
                    {icon}
                    {caseItem.decision || "Not Processed"}
                  </Badge>
                  <Badge variant="outline">{caseItem.bank}</Badge>
                </div>
                <CardTitle className="text-lg mt-2">Case #{caseItem.id}</CardTitle>
                <CardDescription>{caseItem.details}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-medium">{caseItem.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="font-medium">{caseItem.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{caseItem.date}</p>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <h4 className="text-sm font-medium mb-2">Journey Status</h4>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Upload</span>
                    <span>Analysis</span>
                    <span>Risk</span>
                    <span>Decision</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-100 rounded-full">
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full ${
                        caseItem.decision === "Approved" ? "bg-green-500" : 
                        caseItem.decision === "Rejected" ? "bg-red-500" : 
                        "bg-amber-500"
                      }`} 
                      style={{width: caseItem.decision ? "100%" : "75%"}}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {caseItem.decision ? (
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    ) : (
                      <Clock className="h-3 w-3 text-amber-500" />
                    )}
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => onSelectCase(caseItem.id)}
                >
                  View Journey Results
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CaseList;
