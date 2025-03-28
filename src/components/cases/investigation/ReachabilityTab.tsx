
import React from "react";
import QueryHistoryPanel from "../manual-investigation/QueryHistoryPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through contact validation and address verification
        to ensure communication channels.
      </p>
      
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-md">Reachability Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Run a reachability check to verify contact points and validate address information.
          </p>
          <button 
            onClick={() => onStartInvestigation('reachability')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Start Reachability Investigation
          </button>
        </CardContent>
      </Card>
      
      <QueryHistoryPanel type="reachability" />
    </div>
  );
};

export default ReachabilityTab;
