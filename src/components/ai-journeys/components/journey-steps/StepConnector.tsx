
import React from "react";
import { Cog } from "lucide-react";

interface StepConnectorProps {
  index: number;
  getDotColor: (stepIndex: number, dotIndex: number) => string;
}

const StepConnector: React.FC<StepConnectorProps> = ({ index, getDotColor }) => {
  return (
    <div className="flex items-center self-center h-20 mx-1 z-0">
      <div className="flex space-x-1 items-center">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full" 
            style={{ 
              backgroundColor: getDotColor(index, i)
            }}
          ></div>
        ))}
      </div>
      <Cog className="h-4 w-4 text-gray-400 mx-2 animate-spin-slow" />
      <div className="flex space-x-1 items-center">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i + 3} 
            className="w-2 h-2 rounded-full" 
            style={{ 
              backgroundColor: getDotColor(index, i + 3)
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepConnector;
