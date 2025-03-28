
import React from "react";

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
    </div>
  );
};

export default IdentityVerificationTab;
