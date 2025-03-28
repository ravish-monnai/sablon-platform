
import React from "react";
import { AlertCircle } from "lucide-react";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Risk analysis for detecting potential fraud signals.
      </p>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Usage Tips</h4>
            <p className="text-sm text-blue-700 mt-1">
              Risk analysis will be performed using available data points to assess potential risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCheckTab;
