
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ArrowDownUp, FileText, Clock, AlertTriangle, CheckCircle, PlayCircle, PauseCircle, List, Activity, Calendar, User, DollarSign, Building, FileBarChart } from "lucide-react";

// Define a type for the statement data
interface StatementData {
  id: string;
  customer: string;
  date: string;
  bank: string;
  status: string;
  riskScore: {
    level: "Low" | "Medium" | "High";
    score: number;
  };
}

const BankStatementJourney = () => {
  // State for case detail dialog
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedStatement, setSelectedStatement] = useState<StatementData | null>(null);

  // Sample data for recent statements
  const recentStatements: StatementData[] = [
    {
      id: "BS-00125",
      customer: "John Smith",
      date: "May 15, 2023",
      bank: "HDFC Bank",
      status: "Fraud Detected",
      riskScore: { level: "High", score: 87 }
    },
    {
      id: "BS-00124",
      customer: "Maria Rodriguez",
      date: "May 15, 2023",
      bank: "Bank of Mexico",
      status: "Approved",
      riskScore: { level: "Low", score: 12 }
    },
    {
      id: "BS-00123",
      customer: "Lee Wong",
      date: "May 15, 2023",
      bank: "BPI",
      status: "Under Review",
      riskScore: { level: "Medium", score: 54 }
    },
    {
      id: "BS-00122",
      customer: "Ravi Patel",
      date: "May 14, 2023",
      bank: "SBI",
      status: "Fraud Detected",
      riskScore: { level: "High", score: 92 }
    },
    {
      id: "BS-00121",
      customer: "Aisha Khan",
      date: "May 14, 2023",
      bank: "Maybank",
      status: "Approved",
      riskScore: { level: "Low", score: 8 }
    }
  ];

  const handleViewStatement = (statement: StatementData) => {
    setSelectedStatement(statement);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Bank Statement Analyzer Journey</h2>
          <p className="text-muted-foreground">Real-time bank statement fraud detection</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <PauseCircle className="w-4 h-4 mr-2" />
            Pause Journey
          </Button>
          <Button size="sm">
            <FileText className="w-4 h-4 mr-2" />
            View Documentation
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Processing Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Today's Statements</span>
                      <span className="font-semibold">58</span>
                    </div>
                    <Progress value={58} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Fraud Detection Rate</span>
                      <span className="font-semibold">8.6%</span>
                    </div>
                    <Progress value={8.6} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">API Success Rate</span>
                      <span className="font-semibold">99.2%</span>
                    </div>
                    <Progress value={99.2} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Latest Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm">Irregular Cash Deposits</span>
                  </div>
                  <Badge>5 cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="text-sm">Unusual Account Activity</span>
                  </div>
                  <Badge>3 cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="text-sm">Suspicious Transfers</span>
                  </div>
                  <Badge>2 cases</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm">Income Discrepancy</span>
                  </div>
                  <Badge>2 cases</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Alerts
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Journey Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status</span>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Run</span>
                    <span className="text-sm">2 minutes ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next Scheduled Run</span>
                    <span className="text-sm">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">API Endpoint</span>
                    <Badge variant="outline">Connected</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Processed Statements</CardTitle>
              <CardDescription>
                Last 5 bank statements processed by the analyzer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 text-xs font-medium text-muted-foreground">
                  <div>Statement ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Bank</div>
                  <div>Status</div>
                  <div>Risk Score</div>
                  <div>Action</div>
                </div>
                
                {recentStatements.map((statement) => (
                  <div key={statement.id} className="grid grid-cols-7 items-center py-3 border-b">
                    <div className="font-medium">{statement.id}</div>
                    <div>{statement.customer}</div>
                    <div>{statement.date}</div>
                    <div>{statement.bank}</div>
                    <div>
                      <Badge 
                        variant={
                          statement.status === "Fraud Detected" 
                            ? "destructive" 
                            : statement.status === "Under Review" 
                              ? "secondary" 
                              : "outline"
                        }
                      >
                        {statement.status}
                      </Badge>
                    </div>
                    <div className={`font-semibold ${
                      statement.riskScore.level === "High" 
                        ? "text-red-500" 
                        : statement.riskScore.level === "Medium" 
                          ? "text-amber-500" 
                          : "text-green-500"
                    }`}>
                      {statement.riskScore.level} ({statement.riskScore.score}/100)
                    </div>
                    <div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewStatement(statement)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto">
                View All Statements
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="configuration">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Journey Configuration</CardTitle>
              <CardDescription>
                Current settings for the Bank Statement Analyzer journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">AI Agent Configuration</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Model:</span>
                        <span className="font-medium">GPT-4o</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Confidence Threshold:</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Market:</span>
                        <span className="font-medium">India, Philippines, Malaysia</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Income Verification:</span>
                        <Badge variant="outline" className="bg-green-50">Enabled</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Expense Categories:</span>
                        <Badge variant="outline" className="bg-green-50">Enabled</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Fraud Detection:</span>
                        <Badge variant="outline" className="bg-green-50">Enabled</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">API Integration</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Endpoint:</span>
                        <span className="font-medium">REST API</span>
                      </div>
                      <div className="flex justify-between">
                        <span>URL:</span>
                        <span className="font-medium">api.monnai.com/bank-statements</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Authentication:</span>
                        <span className="font-medium">API Key</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Auto Case Creation:</span>
                        <Badge variant="outline" className="bg-green-50">Enabled</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Threshold for Cases:</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Output Format:</span>
                        <span className="font-medium">JSON, CSV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="ml-auto">Edit Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Processing History</CardTitle>
              <CardDescription>
                Historical data for the Bank Statement Analyzer journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">Today</h3>
                    <p className="text-sm text-muted-foreground">May 15, 2023</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">58</div>
                      <div className="text-xs text-muted-foreground">Statements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-500">12</div>
                      <div className="text-xs text-muted-foreground">Alerts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">5</div>
                      <div className="text-xs text-muted-foreground">Fraud Cases</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">Yesterday</h3>
                    <p className="text-sm text-muted-foreground">May 14, 2023</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">126</div>
                      <div className="text-xs text-muted-foreground">Statements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-500">28</div>
                      <div className="text-xs text-muted-foreground">Alerts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">9</div>
                      <div className="text-xs text-muted-foreground">Fraud Cases</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">This Week</h3>
                    <p className="text-sm text-muted-foreground">May 8 - May 15, 2023</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">523</div>
                      <div className="text-xs text-muted-foreground">Statements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-500">112</div>
                      <div className="text-xs text-muted-foreground">Alerts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">42</div>
                      <div className="text-xs text-muted-foreground">Fraud Cases</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>
                Recent activity logs for the Bank Statement Analyzer journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-md flex items-start">
                  <div className="min-w-20 text-xs text-muted-foreground">10:23:45 AM</div>
                  <div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="font-medium">Successful API call</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Received bank statement for customer ID: C10045</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md flex items-start">
                  <div className="min-w-20 text-xs text-muted-foreground">10:23:32 AM</div>
                  <div>
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span className="font-medium">High risk detected</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Statement BS-00125 flagged with 87% fraud risk score</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md flex items-start">
                  <div className="min-w-20 text-xs text-muted-foreground">10:22:18 AM</div>
                  <div>
                    <div className="flex items-center">
                      <Activity className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="font-medium">Processing</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Analyzing statement BS-00125 with agent version 1.2.4</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md flex items-start">
                  <div className="min-w-20 text-xs text-muted-foreground">10:21:05 AM</div>
                  <div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="font-medium">Case created</span>
                    </div>
                    <p className="text-sm text-muted-foreground">New case CASE-245 created for suspicious statement BS-00122</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md flex items-start">
                  <div className="min-w-20 text-xs text-muted-foreground">10:20:32 AM</div>
                  <div>
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                      <span className="font-medium">Warning</span>
                    </div>
                    <p className="text-sm text-muted-foreground">API response latency over threshold (1250ms)</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto">
                View All Logs
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Case Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5 text-primary" />
              Statement Details: {selectedStatement?.id}
            </DialogTitle>
            <DialogDescription>
              Detailed information about the bank statement
            </DialogDescription>
          </DialogHeader>
          
          {selectedStatement && (
            <div className="space-y-6">
              {/* Header Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Customer:</span>
                    <span>{selectedStatement.customer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Date:</span>
                    <span>{selectedStatement.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Bank:</span>
                    <span>{selectedStatement.bank}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Status:</span>
                    <Badge 
                      variant={
                        selectedStatement.status === "Fraud Detected" 
                          ? "destructive" 
                          : selectedStatement.status === "Under Review" 
                            ? "secondary" 
                            : "outline"
                      }
                    >
                      {selectedStatement.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`h-4 w-4 ${
                      selectedStatement.riskScore.level === "High" 
                        ? "text-red-500" 
                        : selectedStatement.riskScore.level === "Medium" 
                          ? "text-amber-500" 
                          : "text-green-500"
                    }`} />
                    <span className="text-sm font-medium">Risk Score:</span>
                    <span className={`font-medium ${
                      selectedStatement.riskScore.level === "High" 
                        ? "text-red-500" 
                        : selectedStatement.riskScore.level === "Medium" 
                          ? "text-amber-500" 
                          : "text-green-500"
                    }`}>
                      {selectedStatement.riskScore.level} ({selectedStatement.riskScore.score}/100)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Processing Time:</span>
                    <span>3.2 seconds</span>
                  </div>
                </div>
              </div>
              
              {/* Analysis Summary */}
              <div>
                <h3 className="text-lg font-medium mb-2">Analysis Summary</h3>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Account Overview</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="text-xs text-muted-foreground">Average Balance</div>
                            <div className="text-lg font-bold flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {selectedStatement.riskScore.level === "High" ? "5,234" : 
                                selectedStatement.riskScore.level === "Medium" ? "12,456" : "32,785"}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="text-xs text-muted-foreground">Monthly Income</div>
                            <div className="text-lg font-bold flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {selectedStatement.riskScore.level === "High" ? "3,100" : 
                                selectedStatement.riskScore.level === "Medium" ? "6,200" : "10,500"}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-md">
                            <div className="text-xs text-muted-foreground">Monthly Expenses</div>
                            <div className="text-lg font-bold flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {selectedStatement.riskScore.level === "High" ? "4,950" : 
                                selectedStatement.riskScore.level === "Medium" ? "5,300" : "7,200"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Detected Anomalies */}
                      {selectedStatement.riskScore.level !== "Low" && (
                        <div>
                          <h4 className="text-sm font-medium mb-2">Detected Anomalies</h4>
                          <div className="space-y-2">
                            {selectedStatement.riskScore.level === "High" && (
                              <>
                                <div className="flex items-start gap-2 p-2 bg-red-50 rounded-md">
                                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Large cash deposits followed by immediate withdrawals</p>
                                    <p className="text-xs text-muted-foreground">Pattern consistent with money laundering</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 p-2 bg-red-50 rounded-md">
                                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium">Income inconsistency detected</p>
                                    <p className="text-xs text-muted-foreground">Declared income does not match transaction patterns</p>
                                  </div>
                                </div>
                              </>
                            )}
                            {(selectedStatement.riskScore.level === "Medium" || selectedStatement.riskScore.level === "High") && (
                              <div className="flex items-start gap-2 p-2 bg-amber-50 rounded-md">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium">Unusual transaction pattern</p>
                                  <p className="text-xs text-muted-foreground">Multiple small transactions to the same recipient</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Verification Status */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Verification Status</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex justify-between items-center p-2 border rounded-md">
                            <span className="text-sm">Identity Match</span>
                            <Badge variant={selectedStatement.riskScore.level === "High" ? "destructive" : "outline"} className="bg-green-50">
                              {selectedStatement.riskScore.level === "High" ? "Failed" : "Passed"}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded-md">
                            <span className="text-sm">Income Verification</span>
                            <Badge variant={selectedStatement.riskScore.level !== "Low" ? "destructive" : "outline"} className="bg-green-50">
                              {selectedStatement.riskScore.level !== "Low" ? "Failed" : "Passed"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Close</Button>
            {selectedStatement && selectedStatement.status !== "Approved" && (
              <Button variant="default">Take Action</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BankStatementJourney;
