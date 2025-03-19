
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Link2, ArrowDownUp, CheckCircle, AlertCircle, FileText, Eye } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CaseItem } from "@/types/caseTypes";
import { bankStatementCases } from "@/types/mockData/bankStatementCases";
import { indianBankStatementCases } from "@/types/mockData/indianBankStatementCases";
import BankStatementCaseDetail from "./BankStatementCaseDetail";

const BankStatementInsights: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isCaseDetailOpen, setIsCaseDetailOpen] = useState(false);

  const allBankStatementCases = [...bankStatementCases, ...indianBankStatementCases];
  
  // Calculate statistics
  const highRiskCount = allBankStatementCases.filter(c => c.status === "High Risk").length;
  const mediumRiskCount = allBankStatementCases.filter(c => c.status === "Medium Risk").length;
  const lowRiskCount = allBankStatementCases.filter(c => c.status === "Low Risk").length;
  
  const unassignedCount = allBankStatementCases.filter(c => c.agentAssigned === "Unassigned").length;
  
  // Get most recent cases for the table
  const recentCases = allBankStatementCases.slice(0, 5);

  const handleViewCase = (caseItem: CaseItem) => {
    setSelectedCase(caseItem);
    setIsCaseDetailOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Bank Statement Fraud Insights</CardTitle>
          <CardDescription>
            Key findings from bank statement analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Risk Distribution</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                    High Risk
                  </span>
                  <Badge variant="destructive">{highRiskCount} cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Medium Risk
                  </span>
                  <Badge variant="secondary">{mediumRiskCount} cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Low Risk
                  </span>
                  <Badge variant="outline">{lowRiskCount} cases</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Common Patterns</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                    Irregular Cash Deposits
                  </span>
                  <Badge>5 cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                    Income Inconsistency
                  </span>
                  <Badge>3 cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                    Multiple Account Transactions
                  </span>
                  <Badge>2 cases</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Agent Assignment</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Assigned</span>
                  <Badge variant="outline">{allBankStatementCases.length - unassignedCount} cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Unassigned</span>
                  <Badge variant="destructive">{unassignedCount} cases</Badge>
                </div>
                <Button size="sm" className="w-full mt-2">Assign All Cases</Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Recent Bank Statement Cases</h3>
            <div className="overflow-auto border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-2 text-left text-sm font-medium">ID</th>
                    <th className="p-2 text-left text-sm font-medium">Customer</th>
                    <th className="p-2 text-left text-sm font-medium">Bank</th>
                    <th className="p-2 text-left text-sm font-medium">Market</th>
                    <th className="p-2 text-left text-sm font-medium">Status</th>
                    <th className="p-2 text-left text-sm font-medium">Risk Score</th>
                    <th className="p-2 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCases.map((caseItem) => (
                    <tr key={caseItem.id} className="border-b">
                      <td className="p-2 text-sm">{caseItem.id}</td>
                      <td className="p-2 text-sm">{caseItem.customer}</td>
                      <td className="p-2 text-sm">{caseItem.bank || "-"}</td>
                      <td className="p-2 text-sm">{caseItem.market || "Global"}</td>
                      <td className="p-2 text-sm">
                        <Badge
                          variant={
                            caseItem.status === "High Risk"
                              ? "destructive"
                              : caseItem.status === "Medium Risk"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {caseItem.status}
                        </Badge>
                      </td>
                      <td className="p-2 text-sm">{caseItem.riskScore || "-"}</td>
                      <td className="p-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs"
                          onClick={() => handleViewCase(caseItem)}
                        >
                          <Eye className="h-3 w-3 mr-1" /> View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" className="gap-2">
            <Link2 className="h-4 w-4" />
            View in AI Journey
          </Button>
          <Button className="gap-2">
            <ArrowDownUp className="h-4 w-4" />
            Generate Fraud Report
          </Button>
        </CardFooter>
      </Card>
      
      <Dialog open={isCaseDetailOpen} onOpenChange={setIsCaseDetailOpen}>
        <DialogContent className="max-w-4xl">
          {selectedCase && (
            <BankStatementCaseDetail 
              caseData={selectedCase}
              onClose={() => setIsCaseDetailOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BankStatementInsights;
