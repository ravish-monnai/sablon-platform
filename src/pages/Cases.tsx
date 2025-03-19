import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Search, 
  FileText,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
  UserRound,
  Calendar,
  CreditCard,
  ArrowDownUp,
  Link2
} from "lucide-react";
import CasesLinkAnalysis from "@/components/cases/CasesLinkAnalysis";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import IndianBankStatementAnalyzer from "@/components/cases/IndianBankStatementAnalyzer";
import { useNavigate } from "react-router-dom";
import { useMarket } from "@/contexts/MarketContext";

const bankStatementCases = [
  {
    id: "CASE-245",
    customer: "John Smith",
    customerId: "C10045",
    type: "Bank Statement",
    status: "High Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "Suspicious cash deposits",
    market: "India",
    bank: "HDFC Bank",
    riskScore: 87,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-243",
    customer: "Ravi Patel",
    customerId: "C10032",
    type: "Bank Statement",
    status: "High Risk",
    created: "May 14, 2023",
    source: "Bank Statement Analyzer",
    alert: "Income inconsistency",
    market: "India",
    bank: "SBI",
    riskScore: 92,
    agentAssigned: "Priya K."
  },
  {
    id: "CASE-241",
    customer: "Maria Rodriguez",
    customerId: "C10028",
    type: "Bank Statement",
    status: "Low Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "None",
    market: "Mexico",
    bank: "Bank of Mexico",
    riskScore: 12,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-240",
    customer: "Lee Wong",
    customerId: "C10022",
    type: "Bank Statement",
    status: "Medium Risk",
    created: "May 15, 2023",
    source: "Bank Statement Analyzer",
    alert: "Unusual account activity",
    market: "Philippines",
    bank: "BPI",
    riskScore: 54,
    agentAssigned: "Mark T."
  },
  {
    id: "CASE-238",
    customer: "Aisha Khan",
    customerId: "C10018",
    type: "Bank Statement",
    status: "Low Risk",
    created: "May 14, 2023",
    source: "Bank Statement Analyzer",
    alert: "None",
    market: "Malaysia",
    bank: "Maybank",
    riskScore: 8,
    agentAssigned: "Unassigned"
  },
];

const indianBankStatementCases = [
  {
    id: "CASE-IN-123",
    customer: "Raj Patel",
    customerId: "C20045",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 10, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Multiple UPI transactions",
    market: "India",
    bank: "HDFC Bank",
    riskScore: 89,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-IN-122",
    customer: "Priya Sharma",
    customerId: "C20044",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 9, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Large cash deposits",
    market: "India",
    bank: "SBI",
    riskScore: 91,
    agentAssigned: "Amit K."
  },
  {
    id: "CASE-IN-121",
    customer: "Kiran Mehta",
    customerId: "C20043",
    type: "Bank Statement",
    status: "Medium Risk",
    created: "Aug 8, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Income inconsistency",
    market: "India",
    bank: "ICICI Bank",
    riskScore: 65,
    agentAssigned: "Unassigned"
  },
  {
    id: "CASE-IN-120",
    customer: "Rahul Verma",
    customerId: "C20042",
    type: "Bank Statement",
    status: "Low Risk",
    created: "Aug 7, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "Minor discrepancy",
    market: "India",
    bank: "Axis Bank",
    riskScore: 30,
    agentAssigned: "Neha S."
  },
  {
    id: "CASE-IN-119",
    customer: "Anita Desai",
    customerId: "C20041",
    type: "Bank Statement",
    status: "High Risk",
    created: "Aug 6, 2023",
    source: "Indian Bank Statement Analyzer",
    alert: "UPI fraud pattern",
    market: "India",
    bank: "Yes Bank",
    riskScore: 88,
    agentAssigned: "Unassigned"
  },
];

const allCases = [
  ...bankStatementCases,
  ...indianBankStatementCases,
  {
    id: "CASE-237",
    customer: "Sarah Johnson",
    customerId: "C10012",
    type: "Transaction",
    status: "High Risk",
    created: "May 10, 2023",
    source: "Transaction Monitoring",
    alert: "Multiple rapid transfers",
    agentAssigned: "Michael B."
  },
  {
    id: "CASE-236",
    customer: "David Lee",
    customerId: "C10009",
    type: "KYC",
    status: "Medium Risk",
    created: "May 9, 2023",
    source: "KYC Verification",
    alert: "Document inconsistency",
    agentAssigned: "Unassigned"
  }
];

const Cases = () => {
  const navigate = useNavigate();
  const { selectedMarket } = useMarket();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [filterType, setFilterType] = useState("all");
  const [isActionDialogOpen, setIsActionDialogOpen] = useState(false);
  
  const filteredCases = () => {
    let cases = filterType === "all" 
      ? allCases 
      : filterType === "bank-statement" 
        ? [...bankStatementCases, ...indianBankStatementCases]
        : allCases.filter(c => c.type.toLowerCase() === filterType);
    
    if (selectedMarket !== 'Global') {
      cases = cases.filter(c => c.market === selectedMarket);
    }
    
    return cases;
  };

  const handleCaseAction = (caseData: any) => {
    setSelectedCase(caseData);
    setShowDialog(true);
  };

  const handleCaseView = (caseId: string) => {
    navigate(`/case-review/${caseId}`);
  };

  const showIndianAnalyzer = selectedMarket === 'India' || selectedMarket === 'Global';

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" /> Create Manual Case
        </Button>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Case List</TabsTrigger>
          <TabsTrigger value="network">Network Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <CardTitle>All Cases</CardTitle>
                  <CardDescription>
                    {selectedMarket === 'Global' 
                      ? 'Review and manage cases that require attention'
                      : `Review and manage ${selectedMarket} cases that require attention`}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-60">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search cases..." className="pl-8" />
                  </div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-40">
                      <div className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Filter cases" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cases</SelectItem>
                      <SelectItem value="bank-statement">Bank Statement</SelectItem>
                      <SelectItem value="transaction">Transaction</SelectItem>
                      <SelectItem value="kyc">KYC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
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
                    {filteredCases().map((caseItem) => (
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
                              onClick={() => handleCaseView(caseItem.id)}
                            >
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCaseAction(caseItem)}
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
            </CardContent>
          </Card>
          
          {showIndianAnalyzer && selectedMarket === 'India' && <IndianBankStatementAnalyzer />}
          
          {filterType === "bank-statement" || filterType === "all" ? (
            <Card>
              <CardHeader>
                <CardTitle>Bank Statement Fraud Insights</CardTitle>
                <CardDescription>
                  Key findings from bank statement analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <h3 className="text-lg font-medium">Market Distribution</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">India</span>
                        <Badge variant="outline">2 high risk cases</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Philippines</span>
                        <Badge variant="outline">1 medium risk case</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mexico</span>
                        <Badge variant="outline">1 low risk case</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Malaysia</span>
                        <Badge variant="outline">1 low risk case</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Agent Assignment</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Assigned</span>
                        <Badge variant="outline">2 cases</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Unassigned</span>
                        <Badge variant="destructive">3 cases</Badge>
                      </div>
                      <Button size="sm" className="w-full mt-2">Assign All Cases</Button>
                    </div>
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
          ) : null}
        </TabsContent>
        <TabsContent value="network">
          <Card className="h-[80vh]">
            <CardContent className="p-0">
              <CasesLinkAnalysis />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CaseActionDialog 
        isOpen={isActionDialogOpen} 
        onOpenChange={setIsActionDialogOpen} 
        caseData={selectedCase} 
      />
    </div>
  );
};

export default Cases;
