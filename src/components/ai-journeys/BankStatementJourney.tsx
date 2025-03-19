
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowDownUp, FileText, Clock, AlertTriangle, CheckCircle, PlayCircle, PauseCircle, List, Activity } from "lucide-react";

const BankStatementJourney = () => {
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
                
                <div className="grid grid-cols-7 items-center py-3 border-b">
                  <div className="font-medium">BS-00125</div>
                  <div>John Smith</div>
                  <div>May 15, 2023</div>
                  <div>HDFC Bank</div>
                  <div>
                    <Badge variant="destructive">Fraud Detected</Badge>
                  </div>
                  <div className="font-semibold text-red-500">High (87/100)</div>
                  <div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 items-center py-3 border-b">
                  <div className="font-medium">BS-00124</div>
                  <div>Maria Rodriguez</div>
                  <div>May 15, 2023</div>
                  <div>Bank of Mexico</div>
                  <div>
                    <Badge variant="outline">Approved</Badge>
                  </div>
                  <div className="font-semibold text-green-500">Low (12/100)</div>
                  <div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 items-center py-3 border-b">
                  <div className="font-medium">BS-00123</div>
                  <div>Lee Wong</div>
                  <div>May 15, 2023</div>
                  <div>BPI</div>
                  <div>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                  <div className="font-semibold text-amber-500">Medium (54/100)</div>
                  <div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 items-center py-3 border-b">
                  <div className="font-medium">BS-00122</div>
                  <div>Ravi Patel</div>
                  <div>May 14, 2023</div>
                  <div>SBI</div>
                  <div>
                    <Badge variant="destructive">Fraud Detected</Badge>
                  </div>
                  <div className="font-semibold text-red-500">High (92/100)</div>
                  <div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 items-center py-3">
                  <div className="font-medium">BS-00121</div>
                  <div>Aisha Khan</div>
                  <div>May 14, 2023</div>
                  <div>Maybank</div>
                  <div>
                    <Badge variant="outline">Approved</Badge>
                  </div>
                  <div className="font-semibold text-green-500">Low (8/100)</div>
                  <div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
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
    </div>
  );
};

export default BankStatementJourney;
