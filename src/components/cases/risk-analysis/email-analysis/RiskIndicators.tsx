
import React from "react";
import { AlertCircle } from "lucide-react";

interface RiskFlag {
  id: string;
  description: string;
  status: string;
  icon: React.ElementType;
}

export interface RiskIndicatorsProps {
  riskFlags: RiskFlag[];
  getStatusIcon: (Icon: React.ElementType, status: string) => React.ReactNode;
}

const RiskIndicators: React.FC<RiskIndicatorsProps> = ({ riskFlags, getStatusIcon }) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2 flex items-center">
        <AlertCircle className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
        Risk Indicators
      </h3>
      <div className="space-y-2">
        {riskFlags.map((flag) => (
          <div key={flag.id} className="flex items-start">
            {getStatusIcon(flag.icon, flag.status)}
            <div className="ml-2">
              <p className="text-sm flex items-center">
                <span className="font-mono text-xs bg-gray-100 px-1 rounded mr-2">{flag.id}</span>
                <span>{flag.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskIndicators;
