
import React from "react";
import { UserCheck, Shield } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Verify customer identity through document review, government database checks, 
        mobile operator verification, and consumer data sources cross-reference.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestigationCard
          title="Document Verification"
          description="Manually review identity documents and verify against government databases"
          icon={UserCheck}
          onStart={() => onStartInvestigation("document-verification")}
        />
        <InvestigationCard
          title="Identity Cross-Check"
          description="Cross-reference customer information with government, telecom, and consumer databases"
          icon={Shield}
          onStart={() => onStartInvestigation("identity-cross-check")}
        />
      </div>
    </>
  );
};

export default IdentityVerificationTab;
