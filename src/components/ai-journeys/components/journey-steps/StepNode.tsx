
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
    <div className="flex flex-col items-center mx-3 mb-16 relative z-10">
      {/* Circular node */}
      <div 
        className={`rounded-full w-20 h-20 flex items-center justify-center mb-3 shadow-lg relative border-[3px] ${getStepStatusBorder(step.status)}`}
        style={{ backgroundColor: getStepColor(step, index) }}
      >
        <div className="text-white">
          {React.cloneElement(step.icon as React.ReactElement, { className: "h-8 w-8" })}
        </div>
        
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center border border-gray-200 shadow-md">
          <span className="text-sm font-bold">{index + 1}</span>
        </div>
      </div>
      
      {/* Step info */}
      <div className="w-40 text-center">
        <h3 className="font-semibold text-base mb-1">{step.title}</h3>
        <p className="text-xs text-muted-foreground min-h-[32px] max-h-[40px] line-clamp-2">{step.description}</p>
        
        {/* Stats badge */}
        {step.statsData && (
          <div className="mt-2 flex flex-col items-center">
            <Badge 
              variant={step.status === "completed" ? "success" : 
                    step.status === "active" ? "secondary" : "outline"}
              className="mb-1 text-xs py-0.5 px-2.5"
            >
              {step.statsData.passed}/{step.statsData.processed} Passed
            </Badge>
            
            {step.statsData.exceptions > 0 && (
              <Badge variant="warning" className="flex items-center gap-1 text-xs py-0.5 px-2.5">
                <AlertTriangle className="h-3 w-3" />
                {step.statsData.exceptions} Exceptions
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepNode;
