
import React from "react";
import { UserCheck, FileCheck, Globe, Database, AlertCircle } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer identity through document review, government database checks, 
        mobile operator verification, and consumer data sources cross-reference.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InvestigationCard 
          title="Document Verification" 
          description="Verify official identity documents against trusted sources" 
          icon={FileCheck}
          onStart={() => onStartInvestigation('identity-verification')}
        />
        
        <InvestigationCard 
          title="Government Database Check" 
          description="Cross-reference identity with official government databases" 
          icon={Globe}
          onStart={() => onStartInvestigation('identity-verification')}
        />
        
        <InvestigationCard 
          title="Consumer Data Check" 
          description="Verify identity against consumer credit and demographic data" 
          icon={Database}
          onStart={() => onStartInvestigation('identity-verification')}
        />
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Verification Guidance</h4>
            <p className="text-sm text-green-700 mt-1">
              For complete verification, provide the customer's full name, date of birth, 
              government ID number, and current address. Each verification source will be 
              checked and results will show match confidence levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerificationTab;
