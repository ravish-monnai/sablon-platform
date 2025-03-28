
import React from "react";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      {/* Description text removed */}
    </div>
  );
};

export default IdentityVerificationTab;
