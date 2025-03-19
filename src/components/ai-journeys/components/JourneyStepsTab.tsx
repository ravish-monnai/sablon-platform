
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { JourneyStep } from "./journey-steps/types";
import WorkflowVisualization from "./journey-steps/WorkflowVisualization";
import { 
  getStepStatusBorder, 
  getStepColor, 
  getBranchColor,
  getDotColor
} from "./journey-steps/utils";

interface JourneyStepsTabProps {
  steps: JourneyStep[];
}

const JourneyStepsTab: React.FC<JourneyStepsTabProps> = ({ steps }) => {
  return (
    <div className="space-y-4 pt-4">
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>Journey Workflow</CardTitle>
          <CardDescription>
            The bank statement analysis process follows these steps
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <WorkflowVisualization 
            steps={steps}
            getStepStatusBorder={getStepStatusBorder}
            getStepColor={getStepColor}
            getBranchColor={getBranchColor}
            getDotColor={getDotColor}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default JourneyStepsTab;
