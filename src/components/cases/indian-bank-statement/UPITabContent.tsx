
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CreditCard, AlertTriangle } from "lucide-react";

const UPITabContent = () => {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-3">
            <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium">UPI Transaction Volume</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Transactions</p>
              <p className="text-xl font-bold">2,538</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-xl font-bold">₹15.2L</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="font-medium">UPI Fraud Indicators</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Suspicious Merchant QR Payments</span>
              <Badge variant="outline" className="bg-amber-50">9 cases</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Multiple Rapid UPI Transfers</span>
              <Badge variant="outline" className="bg-amber-50">5 cases</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Unknown VPA Transfers</span>
              <Badge variant="outline" className="bg-amber-50">14 cases</Badge>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-3">Top UPI Apps Used</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="border rounded p-3 text-center">
            <p className="font-medium">Google Pay</p>
            <p className="text-sm text-muted-foreground">38% of transactions</p>
          </div>
          <div className="border rounded p-3 text-center">
            <p className="font-medium">PhonePe</p>
            <p className="text-sm text-muted-foreground">32% of transactions</p>
          </div>
          <div className="border rounded p-3 text-center">
            <p className="font-medium">Paytm</p>
            <p className="text-sm text-muted-foreground">18% of transactions</p>
          </div>
          <div className="border rounded p-3 text-center">
            <p className="font-medium">Bank UPI Apps</p>
            <p className="text-sm text-muted-foreground">12% of transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPITabContent;
