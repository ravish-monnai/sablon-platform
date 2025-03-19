
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  IndianRupee, 
  FileText, 
  Smartphone, 
  CreditCard, 
  RefreshCw, 
  BarChart4,
  ShieldAlert,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

interface FeatureUsage {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6 pt-4">
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
          <CardDescription>Recent statement analysis activity with detected features</CardDescription>
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
                
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Features detected:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <IndianRupee className="h-3 w-3" /> UPI Transactions
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <RefreshCw className="h-3 w-3" /> Recurring Payments
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <BarChart4 className="h-3 w-3" /> Income Verification
                    </Badge>
                  </div>
                </div>
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
                
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Features detected:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-amber-100 text-amber-800">
                      <ShieldAlert className="h-3 w-3" /> Fraud Detection
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <IndianRupee className="h-3 w-3" /> UPI Transactions
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <CreditCard className="h-3 w-3" /> Cash Flow Analysis
                    </Badge>
                  </div>
                </div>
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
                
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Features detected:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-red-100 text-red-800">
                      <AlertTriangle className="h-3 w-3" /> High Risk Transfers
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-amber-100 text-amber-800">
                      <ShieldAlert className="h-3 w-3" /> Regulatory Compliance
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <FileText className="h-3 w-3" /> Document Verification
                    </Badge>
                  </div>
                </div>
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
                
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Features detected:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Income Consistency
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <Smartphone className="h-3 w-3" /> Mobile Banking
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <BarChart4 className="h-3 w-3" /> Cash Flow Patterns
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Features Usage</CardTitle>
          <CardDescription>Most frequently utilized features across all analyzed statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <IndianRupee className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">UPI Analysis</span>
                  </div>
                  <Badge>82%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <RefreshCw className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">Recurring Payments</span>
                  </div>
                  <Badge>75%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <BarChart4 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">Income Verification</span>
                  </div>
                  <Badge>68%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <ShieldAlert className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">Fraud Detection</span>
                  </div>
                  <Badge>54%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '54%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">Cash Flow Analysis</span>
                  </div>
                  <Badge>47%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '47%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-1.5 rounded mr-2">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">Mobile Banking</span>
                  </div>
                  <Badge>39%</Badge>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '39%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Badge variant="outline" className="cursor-pointer">View all features</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
