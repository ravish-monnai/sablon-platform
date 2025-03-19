
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    </div>
  );
};

export default OverviewTab;
