
import React from "react";
import QueryHistoryPanel from "../manual-investigation/QueryHistoryPanel";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through contact validation and address verification,
        and enrich with alternative contact methods to ensure communication channels.
      </p>
      
      <QueryHistoryPanel type="reachability" />
    </div>
  );
};

export default ReachabilityTab;
