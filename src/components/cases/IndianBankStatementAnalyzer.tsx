
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, IndianRupee, AlertTriangle, Download, ArrowUpRight } from "lucide-react";

const IndianBankStatementAnalyzer = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-amber-500" />
          <CardTitle>Indian Bank Statement Analyzer</CardTitle>
        </div>
        <CardDescription>
          Specialized analysis for Indian bank statements with UPI transaction support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="banks">Banks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Analyzed</p>
                <p className="text-2xl font-bold">167</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Alert Cases</p>
                <p className="text-2xl font-bold text-amber-600">23</p>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Fraud Cases</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Recent Activity</h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center py-1 border-b">
                  <span className="text-sm">HDFC Bank statement analyzed</span>
                  <Badge variant="outline">5m ago</Badge>
                </div>
                <div className="flex justify-between items-center py-1 border-b">
                  <span className="text-sm">ICICI Bank statement flagged</span>
                  <Badge variant="outline">1h ago</Badge>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">SBI Bank statement fraud case created</span>
                  <Badge variant="outline">3h ago</Badge>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-4 mt-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Multiple UPI transactions to the same recipient</p>
                  <p className="text-sm text-muted-foreground">
                    Detected in 7 accounts across HDFC and SBI banks
                  </p>
                </div>
                <Badge className="ml-auto">12 cases</Badge>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Large cash deposits followed by immediate withdrawals</p>
                  <p className="text-sm text-muted-foreground">
                    Potential structuring activity in Axis and ICICI accounts
                  </p>
                </div>
                <Badge className="ml-auto">8 cases</Badge>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Income inconsistency in statements</p>
                  <p className="text-sm text-muted-foreground">
                    Reported income doesn't match deposit patterns
                  </p>
                </div>
                <Badge className="ml-auto">3 cases</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banks" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="border rounded p-3 text-center">
                <p className="font-medium">HDFC Bank</p>
                <p className="text-sm text-muted-foreground">48 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">State Bank of India</p>
                <p className="text-sm text-muted-foreground">36 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">ICICI Bank</p>
                <p className="text-sm text-muted-foreground">29 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">Axis Bank</p>
                <p className="text-sm text-muted-foreground">22 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">Kotak Mahindra</p>
                <p className="text-sm text-muted-foreground">17 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">Yes Bank</p>
                <p className="text-sm text-muted-foreground">9 statements</p>
              </div>
              <div className="border rounded p-3 text-center">
                <p className="font-medium">Punjab National</p>
                <p className="text-sm text-muted-foreground">6 statements</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <IndianRupee className="h-4 w-4" />
          View All Indian Cases
        </Button>
        <Button size="sm" className="flex items-center gap-2">
          <ArrowUpRight className="h-4 w-4" />
          Go to Journey
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IndianBankStatementAnalyzer;
