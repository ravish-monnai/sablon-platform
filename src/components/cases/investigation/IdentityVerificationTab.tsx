
import React from "react";
import QueryHistoryPanel from "../manual-investigation/QueryHistoryPanel";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer identity through document review, government database checks, 
        mobile operator verification, and consumer data sources cross-reference.
      </p>
      
      <QueryHistoryPanel type="identity-verification" />
    </div>
  );
};

export default IdentityVerificationTab;
