
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CircleDashed, CircleDot, ArrowRight } from "lucide-react";

interface JourneyStep {
  id: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "active" | "upcoming";
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
          <div className="relative">
            {/* The vertical line connecting the steps */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
            
            <div className="space-y-8 relative z-10">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex items-start">
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center z-10 mr-4 ${getStepStatusColors(step.status)}`}>
                      {step.status === "completed" ? (
                        <Check className="h-4 w-4 text-white" />
                      ) : step.status === "active" ? (
                        <CircleDot className="h-4 w-4" />
                      ) : (
                        <CircleDashed className="h-4 w-4" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">{step.title}</h3>
                        <Badge 
                          variant={step.status === "completed" ? "default" : 
                                  step.status === "active" ? "secondary" : "outline"}
                          className="ml-3"
                        >
                          {step.status === "completed" ? "Completed" : 
                           step.status === "active" ? "In Progress" : "Pending"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      
                      {step.icon && <div className="mb-2">{step.icon}</div>}
                      
                      {/* Branches if any */}
                      {step.branches && step.branches.length > 0 && (
                        <div className="pl-8 mt-4 space-y-4">
                          {step.branches.map(branch => (
                            <div key={branch.id} className="relative border-l-2 border-dashed border-gray-300 pl-6 py-2">
                              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                              </div>
                              <div className="flex items-center">
                                {branch.icon}
                                <div className="ml-3">
                                  <h4 className="font-medium">{branch.title}</h4>
                                  <p className="text-sm text-muted-foreground">{branch.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
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
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
              <h3 className="flex items-center font-medium text-red-700 dark:text-red-400">
                <ShieldAlert className="h-5 w-5 mr-2" />
                High Risk Path
              </h3>
              <p className="mt-2 text-sm">
                If the risk score is above the configured threshold, the statement will be auto-rejected.
                A case will be created with all features and transactions marked as "Auto-Rejected".
                The journey ends at this point.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
              <h3 className="flex items-center font-medium text-green-700 dark:text-green-400">
                <UserCheck className="h-5 w-5 mr-2" />
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
      return "bg-green-500 text-white";
    case "active":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400";
  }
}

// Missing lucide icon import
import { ShieldAlert, UserCheck } from "lucide-react";

export default JourneyStepsTab;
