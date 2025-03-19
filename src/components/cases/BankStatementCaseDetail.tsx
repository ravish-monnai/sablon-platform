
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, ArrowUp, AlertCircle, User, Calendar, Building, FileText } from "lucide-react";
import { CaseItem } from "@/types/cases";
import CaseActionDialog from "@/components/cases/CaseActionDialog";

interface BankStatementCaseDetailProps {
  caseData: CaseItem;
  onClose: () => void;
}

const BankStatementCaseDetail: React.FC<BankStatementCaseDetailProps> = ({ caseData, onClose }) => {
  const [actionDialogOpen, setActionDialogOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<"approve" | "reject" | "escalate" | undefined>(undefined);

  const handleActionClick = (type: "approve" | "reject" | "escalate") => {
    setActionType(type);
    setActionDialogOpen(true);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              Case #{caseData.id}
            </CardTitle>
            <CardDescription>Bank Statement Analysis</CardDescription>
          </div>
          <Badge
            variant={
              caseData.status === "High Risk"
                ? "destructive"
                : caseData.status === "Medium Risk"
                ? "secondary"
                : "outline"
            }
          >
            {caseData.status === "High Risk" && (
              <AlertTriangle className="mr-1 h-3 w-3" />
            )}
            {caseData.status === "Medium Risk" && (
              <AlertCircle className="mr-1 h-3 w-3" />
            )}
            {caseData.status === "Low Risk" && (
              <CheckCircle className="mr-1 h-3 w-3" />
            )}
            {caseData.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details">
          <TabsList className="mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
            <TabsTrigger value="ai-decision">AI Decision Path</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Customer Information</h3>
                  <div className="grid grid-cols-2 gap-2 p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Name:</span>
                    </div>
                    <div className="text-sm">{caseData.customer}</div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Created:</span>
                    </div>
                    <div className="text-sm">{caseData.created}</div>
                    
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Bank:</span>
                    </div>
                    <div className="text-sm">{caseData.bank || "N/A"}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Market Information</h3>
                  <div className="p-3 border rounded-md">
                    <p className="text-sm">{caseData.market || "Global"}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Risk Assessment</h3>
                  <div className="p-3 border rounded-md">
                    <div className="mb-2">
                      <span className="text-sm font-medium">Risk Score:</span>
                      <span className="text-sm ml-2">{caseData.riskScore || "N/A"}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          (caseData.riskScore || 0) > 70 
                            ? "bg-red-600" 
                            : (caseData.riskScore || 0) > 40 
                              ? "bg-amber-500" 
                              : "bg-green-500"
                        }`}
                        style={{ width: `${caseData.riskScore || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Alert Information</h3>
                  <div className="p-3 border rounded-md">
                    <p className="text-sm">{caseData.alert}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Assigned Agent</h3>
                  <div className="p-3 border rounded-md">
                    <p className="text-sm">{caseData.agentAssigned}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="anomalies">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Detected Anomalies</h3>
              <div className="space-y-3 p-3 border rounded-md">
                {/* Display mock anomalies based on case status */}
                {caseData.status === "High Risk" && (
                  <>
                    <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Irregular Cash Deposits</p>
                        <p className="text-xs text-muted-foreground">Multiple large cash deposits detected that don't match declared income.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Structured Transactions</p>
                        <p className="text-xs text-muted-foreground">Series of transactions just below reporting thresholds detected.</p>
                      </div>
                    </div>
                  </>
                )}
                {caseData.status === "Medium Risk" && (
                  <div className="flex items-start gap-2 p-2 bg-amber-50 border border-amber-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Income Inconsistency</p>
                      <p className="text-xs text-muted-foreground">Declared income doesn't match transaction patterns in statement.</p>
                    </div>
                  </div>
                )}
                {caseData.status === "Low Risk" && (
                  <div className="flex items-center justify-center p-4">
                    <p className="text-sm text-muted-foreground">No significant anomalies detected</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-decision">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">AI-Guided Decision Path</h3>
              <div className="p-4 space-y-6 border rounded-md">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    <div className="relative ml-12">
                      <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                        <span className="text-blue-600 font-medium">1</span>
                      </div>
                      <h4 className="text-sm font-medium mb-2">Review Case Details</h4>
                      <p className="text-xs text-muted-foreground">
                        Carefully review all customer information, transaction patterns, and flagged anomalies.
                      </p>
                    </div>
                    
                    <div className="relative ml-12">
                      <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                        <span className="text-blue-600 font-medium">2</span>
                      </div>
                      <h4 className="text-sm font-medium mb-2">Analyze Risk Indicators</h4>
                      <p className="text-xs text-muted-foreground">
                        Consider the risk score, specific alerts, and any anomalies detected in the bank statement.
                      </p>
                    </div>
                    
                    <div className="relative ml-12">
                      <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300">
                        <span className="text-blue-600 font-medium">3</span>
                      </div>
                      <h4 className="text-sm font-medium mb-2">Determine Next Steps</h4>
                      <p className="text-xs text-muted-foreground">
                        Based on your analysis, choose one of the following actions:
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div className="p-3 border rounded-md bg-green-50 border-green-200">
                          <p className="text-sm font-medium text-green-700 flex items-center mb-1">
                            <CheckCircle className="h-4 w-4 mr-1" /> Approve (No Fraud)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Low risk patterns, no anomalies, or explainable discrepancies.
                          </p>
                        </div>
                        <div className="p-3 border rounded-md bg-red-50 border-red-200">
                          <p className="text-sm font-medium text-red-700 flex items-center mb-1">
                            <AlertTriangle className="h-4 w-4 mr-1" /> Reject (Fraud)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Clear evidence of fraudulent activity or severe unexplained discrepancies.
                          </p>
                        </div>
                        <div className="p-3 border rounded-md bg-amber-50 border-amber-200">
                          <p className="text-sm font-medium text-amber-700 flex items-center mb-1">
                            <ArrowUp className="h-4 w-4 mr-1" /> Escalate
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Unclear risk profile, needs additional investigation or expert review.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
        <Button 
          variant="outline" 
          className="border-green-500 text-green-600 hover:bg-green-50"
          onClick={() => handleActionClick("approve")}
        >
          <CheckCircle className="h-4 w-4 mr-1" /> Approve
        </Button>
        <Button 
          variant="outline" 
          className="border-red-500 text-red-600 hover:bg-red-50"
          onClick={() => handleActionClick("reject")}
        >
          <AlertTriangle className="h-4 w-4 mr-1" /> Reject
        </Button>
        <Button 
          variant="outline" 
          className="border-amber-500 text-amber-600 hover:bg-amber-50"
          onClick={() => handleActionClick("escalate")}
        >
          <ArrowUp className="h-4 w-4 mr-1" /> Escalate
        </Button>
      </CardFooter>
      
      <CaseActionDialog 
        isOpen={actionDialogOpen} 
        onOpenChange={setActionDialogOpen}
        caseId={caseData.id}
        actionType={actionType}
      />
    </Card>
  );
};

export default BankStatementCaseDetail;
