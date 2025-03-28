
import React from "react";
import { UserCheck } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Verify customer identity through manual document review, biometric analysis, 
        and cross-reference with external databases.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestigationCard
          title="Document Verification"
          description="Manually review identity documents for authenticity and consistency"
          icon={UserCheck}
          onStart={() => onStartInvestigation("document-verification")}
        />
        <InvestigationCard
          title="Identity Cross-Check"
          description="Cross-reference customer information with external databases"
          icon={UserCheck}
          onStart={() => onStartInvestigation("identity-cross-check")}
        />
      </div>
    </>
  );
};

export default IdentityVerificationTab;
