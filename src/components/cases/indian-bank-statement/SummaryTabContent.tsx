
import React from "react";
import { Badge } from "@/components/ui/badge";

const SummaryTabContent = () => {
  return (
    <div className="space-y-4 mt-4">
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
    </div>
  );
};

export default SummaryTabContent;
