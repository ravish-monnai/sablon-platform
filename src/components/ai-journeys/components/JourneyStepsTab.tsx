
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
    <div className="space-y-4 pt-4">
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>Journey Workflow</CardTitle>
          <CardDescription>
            The bank statement analysis process follows these steps
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="relative">
            {/* More compact workflow visualization */}
            <div className="flex flex-wrap justify-center relative">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step node - made more compact */}
                  <div className="flex flex-col items-center mx-3 mb-12 relative z-10">
                    {/* Smaller circular node */}
                    <div 
                      className={`rounded-full w-16 h-16 flex items-center justify-center mb-3 shadow-md relative border-2 ${getStepStatusBorder(step.status)}`}
                      style={{ backgroundColor: getStepColor(step, index) }}
                    >
                      <div className="text-white">
                        {React.cloneElement(step.icon as React.ReactElement, { className: "h-6 w-6" })}
                      </div>
                      
                      {/* Step number badge - smaller */}
                      <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 shadow-sm">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Step info - more compact */}
                    <div className="w-36 text-center">
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground h-8 overflow-hidden">{step.description}</p>
                      
                      {/* Stats badge - more compact */}
                      {step.statsData && (
                        <div className="mt-1 flex flex-col items-center">
                          <Badge 
                            variant={step.status === "completed" ? "success" : 
                                  step.status === "active" ? "secondary" : "outline"}
                            className="mb-1 text-xs py-0"
                          >
                            {step.statsData.passed}/{step.statsData.processed} Passed
                          </Badge>
                          
                          {step.statsData.exceptions > 0 && (
                            <Badge variant="warning" className="flex items-center gap-1 text-xs py-0">
                              <AlertTriangle className="h-2 w-2" />
                              {step.statsData.exceptions} Exceptions
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Branch paths - more compact */}
                    {step.branches && step.branches.length > 0 && (
                      <div className="absolute top-16 pt-6 w-full">
                        <div className="relative flex justify-center">
                          {/* Vertical connector */}
                          <div className="absolute w-0.5 h-8 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
                          
                          {/* Branch connector */}
                          <div className="absolute top-8 w-full h-0.5 bg-gray-300"></div>
                          
                          {/* Branch nodes - more compact */}
                          <div className="absolute top-8 flex justify-between w-full mt-6">
                            {step.branches.map((branch, branchIndex) => (
                              <div key={branch.id} className="flex flex-col items-center">
                                {/* Vertical connector to branch */}
                                <div className="w-0.5 h-4 bg-gray-300 mb-2"></div>
                                
                                {/* Branch circle - smaller */}
                                <div 
                                  className="rounded-full w-10 h-10 flex items-center justify-center mb-2 shadow-sm border border-gray-200"
                                  style={{ backgroundColor: getBranchColor(branchIndex) }}
                                >
                                  <div className="text-white">
                                    {React.cloneElement(branch.icon as React.ReactElement, { className: "h-4 w-4" })}
                                  </div>
                                </div>
                                
                                {/* Branch info - more compact */}
                                <div className="w-28 text-center">
                                  <h4 className="text-xs font-medium">{branch.title}</h4>
                                  <p className="text-xs text-muted-foreground h-8 overflow-hidden">{branch.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Connector dots between steps - more compact */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center self-center h-16 mx-1 z-0">
                      <div className="flex space-x-1 items-center">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ 
                              backgroundColor: getDotColor(index, i)
                            }}
                          ></div>
                        ))}
                      </div>
                      <Cog className="h-3 w-3 text-gray-400 mx-2" />
                      <div className="flex space-x-1 items-center">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i + 3} 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ 
                              backgroundColor: getDotColor(index, i + 3)
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
