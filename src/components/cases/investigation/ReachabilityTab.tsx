
import React from "react";

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
      
      <button 
        onClick={() => onStartInvestigation('reachability')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Start Reachability Investigation
      </button>
    </div>
  );
};

export default ReachabilityTab;
