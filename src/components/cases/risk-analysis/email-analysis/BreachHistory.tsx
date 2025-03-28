
import React from "react";
import { AlertTriangle, Clock } from "lucide-react";

interface BreachHistoryProps {
  breach: {
    isBreached: boolean;
    breachCount: number;
    firstBreachDate: string;
    lastBreachDate: string;
    breaches: Array<{
      platformName: string;
      domainName: string;
      breachDate: string;
    }>;
  };
}

const BreachHistory: React.FC<BreachHistoryProps> = ({ breach }) => {
  if (!breach.isBreached) return null;

  return (
    <div className="mt-3 pt-3 border-t border-gray-100">
      <h3 className="text-sm font-medium mb-2 flex items-center text-amber-600">
        <AlertTriangle className="h-4 w-4 mr-1 text-amber-500" /> 
        Data Breach History
      </h3>
      <div className="p-2 bg-amber-50 rounded-md border border-amber-100 text-sm">
        <p className="mb-1 font-medium">Found in {breach.breachCount} breaches</p>
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1 text-amber-500" />
            <span>First breach: {breach.firstBreachDate}</span>
          </div>
          <div className="flex items-center mt-0.5">
            <Clock className="h-3 w-3 mr-1 text-amber-500" />
            <span>Latest breach: {breach.lastBreachDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreachHistory;
