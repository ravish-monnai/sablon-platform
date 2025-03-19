
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Calendar, FileBarChart, PieChart, AlertTriangle, Download, Filter } from "lucide-react";

const IndianBankStatementJourney = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Indian Bank Statement Analyzer</h2>
          <p className="text-muted-foreground">Specialized analysis for Indian bank statements with UPI transaction support</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button size="sm">
            Configure Agent
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cases">Cases</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Statements Analyzed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">167</div>
                <p className="text-xs text-muted-foreground mt-1">+28 in the last 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Flagged for Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-500">23</div>
                <p className="text-xs text-muted-foreground mt-1">13.7% flag rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Fraud Cases Created</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-500">8</div>
                <p className="text-xs text-muted-foreground mt-1">4.8% conversion rate</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent statement analysis activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                    <div className="absolute top-3 bottom-0 left-1 w-px bg-border"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">HDFC Bank statement analyzed</p>
                      <Badge variant="outline" className="text-xs">30 sec ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Account ending 5432 - No suspicious activities detected</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-amber-500 mt-2"></div>
                    <div className="absolute top-3 bottom-0 left-1 w-px bg-border"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">ICICI Bank statement flagged</p>
                      <Badge variant="outline" className="text-xs">2 min ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Account ending 8765 - Multiple high-value UPI transactions detected</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                    <div className="absolute top-3 bottom-0 left-1 w-px bg-border"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">SBI Bank statement fraud case created</p>
                      <Badge variant="outline" className="text-xs">5 min ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Account ending 1234 - Suspicious international transfer pattern</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Kotak Bank statement analyzed</p>
                      <Badge variant="outline" className="text-xs">10 min ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Account ending 9876 - No suspicious activities detected</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cases" className="space-y-6 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Recent Cases</h3>
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
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Risk</Badge>
                  <Badge variant="outline">SBI Bank</Badge>
                </div>
                <CardTitle className="text-lg mt-2">Case #IND-2023-06-15</CardTitle>
                <CardDescription>Account ending 1234 - Suspicious international transfer pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Flagged transactions</p>
                    <p className="font-medium">3 transfers</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total amount</p>
                    <p className="font-medium">₹7,85,000.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Detection date</p>
                    <p className="font-medium">June 15, 2023</p>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Risk</Badge>
                  <Badge variant="outline">ICICI Bank</Badge>
                </div>
                <CardTitle className="text-lg mt-2">Case #IND-2023-06-14</CardTitle>
                <CardDescription>Account ending 8765 - Multiple high-value UPI transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Flagged transactions</p>
                    <p className="font-medium">12 UPI payments</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total amount</p>
                    <p className="font-medium">₹3,25,000.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Detection date</p>
                    <p className="font-medium">June 14, 2023</p>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Risk</Badge>
                  <Badge variant="outline">Axis Bank</Badge>
                </div>
                <CardTitle className="text-lg mt-2">Case #IND-2023-06-10</CardTitle>
                <CardDescription>Account ending 4321 - Unusual spending pattern with dormant account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Flagged transactions</p>
                    <p className="font-medium">8 transactions</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total amount</p>
                    <p className="font-medium">₹4,50,000.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Detection date</p>
                    <p className="font-medium">June 10, 2023</p>
                  </div>
                </div>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Journey Configuration</CardTitle>
              <CardDescription>Configure how the Indian Bank Statement Analyzer works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Supported Indian Banks</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <Badge variant="outline" className="justify-start">HDFC Bank</Badge>
                  <Badge variant="outline" className="justify-start">State Bank of India</Badge>
                  <Badge variant="outline" className="justify-start">ICICI Bank</Badge>
                  <Badge variant="outline" className="justify-start">Axis Bank</Badge>
                  <Badge variant="outline" className="justify-start">Kotak Mahindra Bank</Badge>
                  <Badge variant="outline" className="justify-start">Punjab National Bank</Badge>
                  <Badge variant="outline" className="justify-start">Bank of Baroda</Badge>
                  <Badge variant="outline" className="justify-start">Yes Bank</Badge>
                  <Badge variant="outline" className="justify-start">IndusInd Bank</Badge>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h4 className="font-medium">UPI Transaction Detection</h4>
                <p className="text-sm text-muted-foreground">Specialized detection for UPI transactions from popular Indian payment apps</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <Badge variant="outline" className="justify-start">Google Pay</Badge>
                  <Badge variant="outline" className="justify-start">PhonePe</Badge>
                  <Badge variant="outline" className="justify-start">Paytm</Badge>
                  <Badge variant="outline" className="justify-start">Amazon Pay</Badge>
                  <Badge variant="outline" className="justify-start">BHIM</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Logs</CardTitle>
              <CardDescription>Recent system activity for this journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">HDFC Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.2 seconds</p>
                  </div>
                  <Badge variant="outline">30 sec ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">ICICI Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.5 seconds</p>
                  </div>
                  <Badge variant="outline">2 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">SBI Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.8 seconds</p>
                  </div>
                  <Badge variant="outline">5 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">Kotak Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.3 seconds</p>
                  </div>
                  <Badge variant="outline">10 min ago</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">System updated UPI transaction detection rules</p>
                    <p className="text-sm text-muted-foreground">Added support for new UPI payment providers</p>
                  </div>
                  <Badge variant="outline">1 hour ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndianBankStatementJourney;
