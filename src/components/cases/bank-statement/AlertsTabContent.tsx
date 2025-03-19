
import React from "react";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const AlertsTabContent = () => {
  return (
    <div className="space-y-4 mt-4">
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
    </div>
  );
};

export default AlertsTabContent;
