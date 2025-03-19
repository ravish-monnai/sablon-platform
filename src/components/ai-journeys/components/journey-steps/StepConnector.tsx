
import React from "react";
import { Cog } from "lucide-react";

interface StepConnectorProps {
  index: number;
  getDotColor: (stepIndex: number, dotIndex: number) => string;
}

const StepConnector: React.FC<StepConnectorProps> = ({ index, getDotColor }) => {
  return (
    <div className="flex items-center self-center h-20 mx-2 z-0 relative group">
      <div className="flex space-x-1.5 items-center">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125" 
            style={{ 
              backgroundColor: getDotColor(index, i)
            }}
          ></div>
        ))}
      </div>
      <Cog className="h-5 w-5 text-gray-400 mx-3 animate-spin-slow group-hover:text-gray-600" />
      <div className="flex space-x-1.5 items-center">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i + 3} 
            className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125" 
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
