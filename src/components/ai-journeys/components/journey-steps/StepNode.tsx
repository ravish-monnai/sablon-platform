
import React from "react";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { JourneyStep } from "../journey-steps/types";

interface StepNodeProps {
  step: JourneyStep;
  index: number;
  getStepStatusBorder: (status: string) => string;
  getStepColor: (step: JourneyStep, index: number) => string;
}

const StepNode: React.FC<StepNodeProps> = ({ 
  step, 
  index, 
  getStepStatusBorder, 
  getStepColor 
}) => {
  return (
    <div className="flex flex-col items-center mx-2 mb-8 relative z-10">
      {/* Circular node */}
      <div 
        className={`rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-md relative border-2 ${getStepStatusBorder(step.status)}`}
        style={{ backgroundColor: getStepColor(step, index) }}
      >
        <div className="text-white">
          {React.cloneElement(step.icon as React.ReactElement, { className: "h-5 w-5" })}
        </div>
        
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 bg-white rounded-full w-5 h-5 flex items-center justify-center border border-gray-200 shadow-sm">
          <span className="text-xs font-bold">{index + 1}</span>
        </div>
      </div>
      
      {/* Step info */}
      <div className="w-28 text-center">
        <h3 className="font-semibold text-xs mb-0.5">{step.title}</h3>
        <p className="text-[10px] text-muted-foreground h-6 overflow-hidden line-clamp-2">{step.description}</p>
        
        {/* Stats badge */}
        {step.statsData && (
          <div className="mt-1 flex flex-col items-center">
            <Badge 
              variant={step.status === "completed" ? "success" : 
                    step.status === "active" ? "secondary" : "outline"}
              className="mb-0.5 text-[9px] py-0 px-1.5"
            >
              {step.statsData.passed}/{step.statsData.processed}
            </Badge>
            
            {step.statsData.exceptions > 0 && (
              <Badge variant="warning" className="flex items-center gap-0.5 text-[9px] py-0 px-1.5">
                <AlertTriangle className="h-2 w-2" />
                {step.statsData.exceptions}
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepNode;
