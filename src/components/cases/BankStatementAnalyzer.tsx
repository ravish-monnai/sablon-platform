
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, DollarSign, AlertTriangle, Download, ArrowUpRight } from "lucide-react";
import { useMarket } from "@/contexts/MarketContext";

const BankStatementAnalyzer = () => {
  const { selectedMarket } = useMarket();
  const isCurrencyIndian = selectedMarket === 'India';
  const CurrencyIcon = isCurrencyIndian ? 
    () => <span className="font-bold mr-1">₹</span> : 
    DollarSign;

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-amber-500" />
          <CardTitle>Bank Statement Analyzer Agent</CardTitle>
        </div>
        <CardDescription>
          Specialized analysis for bank statements {selectedMarket !== 'Global' ? `in ${selectedMarket}` : ''}
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
                  <span className="text-sm">Bank statement analyzed</span>
                  <Badge variant="outline">5m ago</Badge>
                </div>
                <div className="flex justify-between items-center py-1 border-b">
                  <span className="text-sm">Bank statement flagged</span>
                  <Badge variant="outline">1h ago</Badge>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm">Bank statement fraud case created</span>
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
                  <p className="font-medium">Multiple transactions to the same recipient</p>
                  <p className="text-sm text-muted-foreground">
                    Detected in 7 accounts across different banks
                  </p>
                </div>
                <Badge className="ml-auto">12 cases</Badge>
              </div>
              
              <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Large cash deposits followed by immediate withdrawals</p>
                  <p className="text-sm text-muted-foreground">
                    Potential structuring activity in multiple accounts
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
              {/* Dynamically show banks based on selected market */}
              {getBanksList(selectedMarket).map((bank, index) => (
                <div key={index} className="border rounded p-3 text-center">
                  <p className="font-medium">{bank.name}</p>
                  <p className="text-sm text-muted-foreground">{bank.count} statements</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <CurrencyIcon className="h-4 w-4" />
          View All Cases
        </Button>
        <Button size="sm" className="flex items-center gap-2">
          <ArrowUpRight className="h-4 w-4" />
          Go to Journey
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to get banks based on selected market
function getBanksList(market: string) {
  switch (market) {
    case 'India':
      return [
        { name: "HDFC Bank", count: 48 },
        { name: "State Bank of India", count: 36 },
        { name: "ICICI Bank", count: 29 },
        { name: "Axis Bank", count: 22 },
        { name: "Kotak Mahindra", count: 17 },
        { name: "Yes Bank", count: 9 },
        { name: "Punjab National", count: 6 }
      ];
    case 'US':
      return [
        { name: "Bank of America", count: 43 },
        { name: "JPMorgan Chase", count: 38 },
        { name: "Wells Fargo", count: 27 },
        { name: "Citibank", count: 22 },
        { name: "Capital One", count: 15 },
        { name: "US Bank", count: 11 },
        { name: "TD Bank", count: 8 }
      ];
    case 'Mexico':
      return [
        { name: "BBVA", count: 32 },
        { name: "Santander", count: 28 },
        { name: "Banorte", count: 25 },
        { name: "Citibanamex", count: 19 },
        { name: "HSBC Mexico", count: 12 }
      ];
    // Add more cases for other markets
    default:
      return [
        { name: "Global Bank 1", count: 35 },
        { name: "Global Bank 2", count: 29 },
        { name: "Global Bank 3", count: 24 },
        { name: "Global Bank 4", count: 18 },
        { name: "Global Bank 5", count: 14 },
        { name: "Global Bank 6", count: 10 },
        { name: "Global Bank 7", count: 7 }
      ];
  }
}

export default BankStatementAnalyzer;
