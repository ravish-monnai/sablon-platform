
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Download, ArrowUpRight } from "lucide-react";

const CasesTab: React.FC = () => {
  return (
    <div className="space-y-6 pt-4">
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
    </div>
  );
};

export default CasesTab;
