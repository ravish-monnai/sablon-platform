
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CaseItem } from "./types";

interface AnalysisContentProps {
  selectedCase: CaseItem;
}

const AnalysisContent: React.FC<AnalysisContentProps> = ({ selectedCase }) => {
  return (
    <div className="space-y-4">
      <div className="border rounded-md p-3">
        <h4 className="text-sm font-medium mb-2">Income Analysis</h4>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Declared Monthly Income</p>
            <p className="text-sm">₹85,000</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Verified Monthly Income</p>
            <p className="text-sm">{selectedCase.status === "success" ? "₹82,500" : "₹45,000"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Income Consistency</p>
            <Badge className={selectedCase.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
              {selectedCase.status === "success" ? "Consistent" : "Inconsistent"}
            </Badge>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Income Sources</p>
            <p className="text-sm">{selectedCase.status === "success" ? "2 verified sources" : "Multiple unverified sources"}</p>
          </div>
        </div>
      </div>
      
      <div className="border rounded-md p-3">
        <h4 className="text-sm font-medium mb-2">Transaction Pattern</h4>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Average Transaction Size</p>
            <p className="text-sm">₹12,500</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Transaction Frequency</p>
            <p className="text-sm">48 transactions/month</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cash Withdrawals</p>
            <p className="text-sm">₹15,000/month</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Recurring Payments</p>
            <p className="text-sm">6 identified</p>
          </div>
        </div>
      </div>
      
      <div className="border rounded-md p-3">
        <h4 className="text-sm font-medium mb-2">Risk Indicators</h4>
        <div className="space-y-2">
          {selectedCase.status === "success" ? (
            <>
              <div className="flex items-center justify-between">
                <p className="text-xs">Debt Service Ratio</p>
                <Badge className="bg-green-100 text-green-800">Low</Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Account Usage Pattern</p>
                <Badge className="bg-green-100 text-green-800">Normal</Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Transaction Velocity</p>
                <Badge className="bg-green-100 text-green-800">Normal</Badge>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <p className="text-xs">Debt Service Ratio</p>
                <Badge className="bg-red-100 text-red-800">High</Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Account Usage Pattern</p>
                <Badge className="bg-amber-100 text-amber-800">Unusual</Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs">Transaction Velocity</p>
                <Badge className="bg-red-100 text-red-800">High</Badge>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisContent;
