
import React from "react";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      {/* Description text removed */}
    </div>
  );
};

export default ReachabilityTab;
