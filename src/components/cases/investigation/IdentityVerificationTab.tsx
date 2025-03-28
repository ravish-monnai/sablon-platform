
import React from "react";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer identity through comprehensive checks.
      </p>
    </div>
  );
};

export default IdentityVerificationTab;
