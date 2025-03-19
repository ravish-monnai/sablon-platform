
import React from "react";
import StepNode from "./StepNode";
import StepConnector from "./StepConnector";
import BranchPaths from "./BranchPaths";
import { JourneyStep } from "./types";

interface WorkflowVisualizationProps {
  steps: JourneyStep[];
  getStepStatusBorder: (status: string) => string;
  getStepColor: (step: JourneyStep, index: number) => string;
  getBranchColor: (index: number) => string;
  getDotColor: (stepIndex: number, dotIndex: number) => string;
}

const WorkflowVisualization: React.FC<WorkflowVisualizationProps> = ({ 
  steps,
  getStepStatusBorder,
  getStepColor,
  getBranchColor,
  getDotColor
}) => {
  return (
    <div className="relative pb-4">
      <div className="flex justify-between items-center relative max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step node */}
            <StepNode 
              step={step}
              index={index}
              getStepStatusBorder={getStepStatusBorder}
              getStepColor={getStepColor}
            />
            
            {/* Branch paths if available */}
            {step.branches && step.branches.length > 0 && (
              <BranchPaths 
                branches={step.branches}
                getBranchColor={getBranchColor}
              />
            )}
            
            {/* Connector dots between steps */}
            {index < steps.length - 1 && (
              <StepConnector 
                index={index}
                getDotColor={getDotColor}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkflowVisualization;
