
import React from "react";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = () => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through phone, email, and address validation,
        and enrich with alternative contact methods to ensure communication channels.
      </p>
    </>
  );
};

export default ReachabilityTab;
