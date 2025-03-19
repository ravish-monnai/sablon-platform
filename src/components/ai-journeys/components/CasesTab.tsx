
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  Download, 
  ArrowUpRight, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  User, 
  DollarSign, 
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CasesTab: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  
  // Sample cases data for bank statement analysis journey
  const cases = [
    {
      id: "BSA-2023-10-01",
      customer: "Rahul Sharma",
      bank: "HDFC Bank",
      date: "October 1, 2023",
      amount: "₹4,25,000.00",
      status: "success",
      details: "All verification checks passed",
      risk: "Low Risk"
    },
    {
      id: "BSA-2023-09-15",
      customer: "Priya Patel",
      bank: "SBI Bank",
      date: "September 15, 2023",
      amount: "₹7,85,000.00",
      status: "success",
      details: "Income verification passed",
      risk: "Low Risk"
    },
    {
      id: "BSA-2023-09-12",
      customer: "Vivek Singh",
      bank: "ICICI Bank",
      date: "September 12, 2023",
      amount: "₹6,50,000.00",
      status: "failure",
      details: "Suspicious transaction pattern detected",
      risk: "High Risk"
    },
    {
      id: "BSA-2023-09-08",
      customer: "Ananya Desai",
      bank: "Axis Bank",
      date: "September 8, 2023",
      amount: "₹3,20,000.00",
      status: "failure",
      details: "Income inconsistency detected",
      risk: "High Risk"
    },
    {
      id: "BSA-2023-09-05",
      customer: "Ravi Kumar",
      bank: "Yes Bank",
      date: "September 5, 2023",
      amount: "₹5,15,000.00",
      status: "success",
      details: "All verification checks passed",
      risk: "Low Risk"
    }
  ];
  
  // Find the selected case details
  const selectedCase = selectedCaseId ? cases.find(c => c.id === selectedCaseId) : null;
  
  // If a case is selected, display its detailed analysis
  if (selectedCase) {
    return (
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setSelectedCaseId(null)}>
            ← Back to Case List
          </Button>
          
          <Badge className={selectedCase.status === "success" ? 
            "bg-green-100 text-green-800" : 
            "bg-red-100 text-red-800"}>
            {selectedCase.risk}
          </Badge>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Case #{selectedCase.id}</CardTitle>
            <CardDescription>{selectedCase.details}</CardDescription>
          </CardHeader>
          <CardContent className="pb-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
              <div>
                <p className="text-sm text-muted-foreground">Customer</p>
                <p className="font-medium">{selectedCase.customer}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bank</p>
                <p className="font-medium">{selectedCase.bank}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{selectedCase.date}</p>
              </div>
            </div>
            
            <Tabs defaultValue="journey-steps">
              <TabsList>
                <TabsTrigger value="journey-steps">Journey Steps</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="journey-steps" className="pt-4">
                <div className="space-y-4">
                  <div className="relative pl-6 pb-6 border-l border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <h4 className="text-sm font-medium mb-1">Bank Statement Upload</h4>
                    <p className="text-xs text-gray-600">
                      Statement was successfully uploaded and validated. Contains 3 months of transaction data.
                    </p>
                    <Badge className="mt-2" variant="outline">Completed on {selectedCase.date}</Badge>
                  </div>
                  
                  <div className="relative pl-6 pb-6 border-l border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <h4 className="text-sm font-medium mb-1">Analysis & Feature Extraction</h4>
                    <p className="text-xs text-gray-600">
                      Extracted 42 features including income patterns, transaction frequency, and recurring payments.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-gray-50 p-2 rounded text-xs">
                        <span className="text-muted-foreground">Average Balance:</span> ₹2,45,000
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-xs">
                        <span className="text-muted-foreground">Monthly Income:</span> ₹85,000
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-6 pb-6 border-l border-gray-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <h4 className="text-sm font-medium mb-1">Risk Assessment</h4>
                    <p className="text-xs text-gray-600">
                      {selectedCase.status === "success" 
                        ? "All risk indicators within acceptable thresholds." 
                        : "Several risk indicators exceeded thresholds."}
                    </p>
                    <Badge className={`mt-2 ${selectedCase.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {selectedCase.risk}
                    </Badge>
                  </div>
                  
                  <div className="relative pl-6">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <h4 className="text-sm font-medium mb-1">Case Creation</h4>
                    <p className="text-xs text-gray-600">
                      {selectedCase.status === "success" 
                        ? "Case created and sent to underwriting with approval recommendation." 
                        : "Case created with rejection recommendation due to high risk indicators."}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-md mt-2 text-xs">
                      <p className="font-medium mb-1">Final Decision:</p>
                      {selectedCase.status === "success" ? (
                        <p className="text-green-600 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" /> Approved for underwriting
                        </p>
                      ) : (
                        <p className="text-red-600 flex items-center">
                          <AlertTriangle className="w-3 h-3 mr-1" /> Rejected due to high risk
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analysis" className="pt-4">
                <div className="space-y-4">
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-2">Income Analysis</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Declared Monthly Income</p>
                        <p className="text-sm">₹85,000</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Verified Monthly Income</p>
                        <p className="text-sm">{selectedCase.status === "success" ? "₹82,500" : "₹45,000"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Income Consistency</p>
                        <Badge className={selectedCase.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {selectedCase.status === "success" ? "Consistent" : "Inconsistent"}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Income Sources</p>
                        <p className="text-sm">{selectedCase.status === "success" ? "2 verified sources" : "Multiple unverified sources"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-2">Transaction Pattern</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Average Transaction Size</p>
                        <p className="text-sm">₹12,500</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Transaction Frequency</p>
                        <p className="text-sm">48 transactions/month</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Cash Withdrawals</p>
                        <p className="text-sm">₹15,000/month</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Recurring Payments</p>
                        <p className="text-sm">6 identified</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-2">Risk Indicators</h4>
                    <div className="space-y-2">
                      {selectedCase.status === "success" ? (
                        <>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Debt Service Ratio</p>
                            <Badge className="bg-green-100 text-green-800">Low</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Account Usage Pattern</p>
                            <Badge className="bg-green-100 text-green-800">Normal</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Transaction Velocity</p>
                            <Badge className="bg-green-100 text-green-800">Normal</Badge>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Debt Service Ratio</p>
                            <Badge className="bg-red-100 text-red-800">High</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Account Usage Pattern</p>
                            <Badge className="bg-amber-100 text-amber-800">Unusual</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs">Transaction Velocity</p>
                            <Badge className="bg-red-100 text-red-800">High</Badge>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="anomalies" className="pt-4">
                {selectedCase.status === "success" ? (
                  <div className="bg-green-50 border border-green-100 rounded-md p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h3 className="font-medium text-sm mb-1">No Anomalies Detected</h3>
                    <p className="text-xs text-muted-foreground">
                      All transaction patterns normal. No suspicious activities identified.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Large cash withdrawals</p>
                        <p className="text-xs text-muted-foreground">
                          Multiple large cash withdrawals detected in a short timeframe
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Income inconsistency</p>
                        <p className="text-xs text-muted-foreground">
                          Declared income doesn't match deposit patterns
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-100">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Suspicious transaction pattern</p>
                        <p className="text-xs text-muted-foreground">
                          Round-tripping transactions detected between multiple accounts
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="pt-2">
            <Button className={`w-full ${selectedCase.status === "success" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}>
              {selectedCase.status === "success" ? "Approve Case" : "Review Case"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  // Case list view (default view)
  return (
    <div className="space-y-6 pt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Journey Results</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      </div>
      
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
                <TableHead>Status</TableHead>
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
                    <Badge className={caseItem.status === "success" ? 
                      "bg-green-100 text-green-800 hover:bg-green-100" :
                      "bg-red-100 text-red-800 hover:bg-red-100"}>
                      {caseItem.risk}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {caseItem.status === "success" ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> 
                        Completed
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> 
                        Rejected
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1"
                      onClick={() => setSelectedCaseId(caseItem.id)}
                    >
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Card view for cases (more detailed view) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((caseItem) => (
          <Card key={caseItem.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                {caseItem.status === "success" ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> 
                    Completed
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" /> 
                    {caseItem.risk}
                  </Badge>
                )}
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
                  <div className={`absolute top-0 left-0 h-full rounded-full ${caseItem.status === "success" ? "bg-green-500" : "bg-red-500"}`} style={{width: "100%"}}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setSelectedCaseId(caseItem.id)}
              >
                View Journey Results
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CasesTab;
