
import React from "react";
import { AlertCircle } from "lucide-react";

interface IdentityVerificationTabProps {
  onStartInvestigation: (type: string) => void;
}

const IdentityVerificationTab: React.FC<IdentityVerificationTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer identity through comprehensive checks.
      </p>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Verification Guidance</h4>
            <p className="text-sm text-green-700 mt-1">
              Identity verification will be performed to ensure customer authenticity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerificationTab;
