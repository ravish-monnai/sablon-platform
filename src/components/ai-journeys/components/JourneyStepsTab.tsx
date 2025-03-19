
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  ShieldAlert, 
  UserCheck,
  Cog
} from "lucide-react";

interface JourneyStep {
  id: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "active" | "upcoming";
  color?: string;
  statsData?: {
    processed: number;
    passed: number;
    exceptions: number;
  };
  branches?: Omit<JourneyStep, "status" | "branches">[];
}

interface JourneyStepsTabProps {
  steps: JourneyStep[];
}

const JourneyStepsTab: React.FC<JourneyStepsTabProps> = ({ steps }) => {
  return (
    <div className="space-y-6 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Journey Workflow</CardTitle>
          <CardDescription>
            The bank statement analysis process follows these steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative p-6">
            {/* Modern workflow visualization with reduced animations */}
            <div className="flex flex-wrap justify-center relative">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step node */}
                  <div className="flex flex-col items-center mx-4 mb-16 relative z-10">
                    {/* Circular node */}
                    <div 
                      className={`rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg relative border-4 ${getStepStatusBorder(step.status)}`}
                      style={{ backgroundColor: getStepColor(step, index) }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-gray-200 shadow-md">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Step info */}
                    <div className="w-48 text-center">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground h-12 overflow-hidden">{step.description}</p>
                      
                      {/* Stats badge */}
                      {step.statsData && (
                        <div className="mt-2 flex flex-col items-center">
                          <Badge 
                            variant={step.status === "completed" ? "success" : 
                                  step.status === "active" ? "secondary" : "outline"}
                            className="mb-1"
                          >
                            {step.statsData.passed}/{step.statsData.processed} Passed
                          </Badge>
                          
                          {step.statsData.exceptions > 0 && (
                            <Badge variant="warning" className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {step.statsData.exceptions} Exceptions
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Branch paths visualization for steps with branches */}
                    {step.branches && step.branches.length > 0 && (
                      <div className="absolute top-20 pt-8 w-full">
                        <div className="relative flex justify-center">
                          {/* Vertical connector */}
                          <div className="absolute w-0.5 h-12 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
                          
                          {/* Branch connector */}
                          <div className="absolute top-12 w-full h-0.5 bg-gray-300"></div>
                          
                          {/* Branch nodes */}
                          <div className="absolute top-12 flex justify-between w-full mt-8">
                            {step.branches.map((branch, branchIndex) => (
                              <div key={branch.id} className="flex flex-col items-center">
                                {/* Vertical connector to branch */}
                                <div className="w-0.5 h-6 bg-gray-300 mb-4"></div>
                                
                                {/* Branch circle */}
                                <div 
                                  className="rounded-full w-14 h-14 flex items-center justify-center mb-3 shadow-md border-2 border-gray-200"
                                  style={{ backgroundColor: getBranchColor(branchIndex) }}
                                >
                                  <div className="text-white">
                                    {branch.icon}
                                  </div>
                                </div>
                                
                                {/* Branch info */}
                                <div className="w-36 text-center">
                                  <h4 className="text-sm font-medium">{branch.title}</h4>
                                  <p className="text-xs text-muted-foreground h-10 overflow-hidden">{branch.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Connector dots between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center self-center h-20 mx-1 z-0">
                      <div className="flex space-x-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-2 h-2 rounded-full" 
                            style={{ 
                              backgroundColor: getDotColor(index, i)
                            }}
                          ></div>
                        ))}
                      </div>
                      <Cog className="h-4 w-4 text-gray-400 mx-3" />
                      <div className="flex space-x-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i + 5} 
                            className="w-2 h-2 rounded-full" 
                            style={{ 
                              backgroundColor: getDotColor(index, i + 5)
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to get the right colors based on status
function getStepStatusBorder(status: string): string {
  switch (status) {
    case "completed":
      return "border-green-400";
    case "active":
      return "border-blue-400";
    default:
      return "border-gray-300";
  }
}

// Helper function to get step background color
function getStepColor(step: JourneyStep, index: number): string {
  if (step.color) return step.color;
  
  const colors = [
    "#2bbfe0", // Blue
    "#ffcc1d", // Yellow
    "#66cc66", // Green
    "#e85abd"  // Pink
  ];
  
  return colors[index % colors.length];
}

// Helper function to get branch color
function getBranchColor(index: number): string {
  const colors = [
    "#ff7066", // Red-ish for high risk
    "#47c98e", // Green-ish for low risk
    "#7f66ff"  // Purple for neutral
  ];
  
  return colors[index % colors.length];
}

// Helper function to get dot colors for connector
function getDotColor(stepIndex: number, dotIndex: number): string {
  const fromColor = getStepColor({ id: stepIndex, title: "", description: "", icon: null, status: "completed" }, stepIndex);
  const toColor = getStepColor({ id: stepIndex + 1, title: "", description: "", icon: null, status: "completed" }, stepIndex + 1);
  
  // For simplicity, just alternate colors
  return dotIndex % 2 === 0 ? fromColor : toColor;
}

export default JourneyStepsTab;
