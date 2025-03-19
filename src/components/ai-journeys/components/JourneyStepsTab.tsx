
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CircleDashed, CircleDot, ArrowRight, AlertTriangle } from "lucide-react";
import { ShieldAlert, UserCheck } from "lucide-react";

interface JourneyStep {
  id: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "active" | "upcoming";
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
          <div className="relative p-4">
            {/* The vertical line connecting the steps */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-green-500 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="flex items-start">
                    <div className={`rounded-full w-10 h-10 flex items-center justify-center z-10 mr-4 ${getStepStatusColors(step.status)} shadow-md transition-all duration-300 hover:scale-110 animate-pulse`}>
                      {step.status === "completed" ? (
                        <Check className="h-5 w-5 text-white animate-fade-in" />
                      ) : step.status === "active" ? (
                        <CircleDot className="h-5 w-5" />
                      ) : (
                        <CircleDashed className="h-5 w-5" />
                      )}
                    </div>
                    
                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-lg shadow-md p-5 transform transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-medium">{step.title}</h3>
                        <Badge 
                          variant={step.status === "completed" ? "default" : 
                                  step.status === "active" ? "secondary" : "outline"}
                          className="ml-3 animate-fade-in"
                        >
                          {step.status === "completed" ? "Completed" : 
                           step.status === "active" ? "In Progress" : "Pending"}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      {/* Stats for the step */}
                      {step.statsData && (
                        <div className="grid grid-cols-3 gap-3 mb-4 transition-all duration-500 animate-fade-in">
                          <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-3 shadow-sm">
                            <p className="text-sm text-muted-foreground">Processed</p>
                            <p className="text-xl font-semibold">{step.statsData.processed}</p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-3 shadow-sm">
                            <p className="text-sm text-muted-foreground">Passed</p>
                            <p className="text-xl font-semibold text-green-600 dark:text-green-400">{step.statsData.passed}</p>
                          </div>
                          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-md p-3 shadow-sm">
                            <p className="text-sm text-muted-foreground">Exceptions</p>
                            <div className="flex items-center">
                              <p className="text-xl font-semibold text-amber-600 dark:text-amber-400">{step.statsData.exceptions}</p>
                              {step.statsData.exceptions > 0 && (
                                <AlertTriangle className="h-4 w-4 text-amber-500 ml-1 animate-pulse" />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Step icon with animation */}
                      {step.icon && (
                        <div className="mb-2 transition-all duration-300 transform hover:scale-110">
                          {step.icon}
                        </div>
                      )}
                      
                      {/* Branches if any */}
                      {step.branches && step.branches.length > 0 && (
                        <div className="pl-8 mt-6 space-y-4 animate-fade-in">
                          {step.branches.map(branch => (
                            <div key={branch.id} className="relative border-l-2 border-dashed border-gray-300 pl-6 py-2 transition-all duration-300 hover:translate-x-2 hover:border-blue-400">
                              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <ArrowRight className="h-4 w-4 text-blue-500 animate-pulse" />
                              </div>
                              <div className="flex items-center bg-white dark:bg-slate-900 p-3 rounded-lg shadow-sm">
                                <div className="mr-3 transition-all duration-300 transform hover:rotate-12">
                                  {branch.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium">{branch.title}</h4>
                                  <p className="text-sm text-muted-foreground">{branch.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Add connector lines for non-last items */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-4 bottom-0 top-10 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 z-0">
                          <div className="absolute top-0 left-0 w-full h-full animate-pulse">
                            <div className="h-2 w-2 bg-blue-400 rounded-full absolute -left-[3px] animate-bounce" style={{ top: '30%' }}></div>
                            <div className="h-2 w-2 bg-blue-500 rounded-full absolute -left-[3px] animate-bounce" style={{ top: '60%', animationDelay: '0.5s' }}></div>
                            <div className="h-2 w-2 bg-green-500 rounded-full absolute -left-[3px] animate-bounce" style={{ top: '90%', animationDelay: '1s' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Journey Decision Logic</CardTitle>
          <CardDescription>
            How risk scoring affects the journey flow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 shadow-md transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="flex items-center font-medium text-red-700 dark:text-red-400">
                <ShieldAlert className="h-5 w-5 mr-2 animate-pulse" />
                High Risk Path
              </h3>
              <p className="mt-2 text-sm">
                If the risk score is above the configured threshold, the statement will be auto-rejected.
                A case will be created with all features and transactions marked as "Auto-Rejected".
                The journey ends at this point.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 shadow-md transform transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="flex items-center font-medium text-green-700 dark:text-green-400">
                <UserCheck className="h-5 w-5 mr-2 animate-pulse" />
                Acceptable Risk Path
              </h3>
              <p className="mt-2 text-sm">
                If the risk score is within acceptable limits, the journey continues.
                A case is created for the underwriting agent with all features and transactions.
                The underwriting agent will perform further analysis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to get the right colors based on status
function getStepStatusColors(status: string): string {
  switch (status) {
    case "completed":
      return "bg-gradient-to-r from-green-400 to-green-500 text-white";
    case "active":
      return "bg-gradient-to-r from-blue-400 to-blue-500 text-white";
    default:
      return "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-500 dark:text-gray-400";
  }
}

export default JourneyStepsTab;
