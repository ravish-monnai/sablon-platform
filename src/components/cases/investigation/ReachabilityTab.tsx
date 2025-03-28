
import React from "react";
import { AlertCircle } from "lucide-react";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability and contact information.
      </p>
      
      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-purple-800">Best Practices</h4>
            <p className="text-sm text-purple-700 mt-1">
              Reachability verification will help confirm contact methods and availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachabilityTab;
