
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CaseItem } from "./types";
import JourneyStepsContent from "./JourneyStepsContent";
import AnalysisContent from "./AnalysisContent";
import AnomaliesContent from "./AnomaliesContent";

interface CaseDetailProps {
  selectedCase: CaseItem;
  onBackToList: () => void;
}

const CaseDetail: React.FC<CaseDetailProps> = ({ selectedCase, onBackToList }) => {
  // Helper function to get decision badge variant
  const getDecisionBadge = () => {
    if (!selectedCase.decision) {
      return (
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> 
          In Progress
        </Badge>
      );
    }
    
    switch (selectedCase.decision) {
      case "Approved":
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> 
            Approved
          </Badge>
        );
      case "Rejected":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> 
            Rejected
          </Badge>
        );
      case "Pending Review":
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> 
            Pending Review
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {selectedCase.decision}
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBackToList}>
          ← Back to Case List
        </Button>
        
        {getDecisionBadge()}
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Case #{selectedCase.id}</CardTitle>
          <CardDescription>{selectedCase.details}</CardDescription>
        </CardHeader>
        <CardContent className="pb-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
            <div>
              <p className="text-sm text-muted-foreground">Customer</p>
              <p className="font-medium">{selectedCase.customer}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bank</p>
              <p className="font-medium">{selectedCase.bank}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">{selectedCase.date}</p>
            </div>
          </div>
          
          {/* Decision information section */}
          {selectedCase.decision && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Decision Information</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground w-24">Status:</span>
                  {getDecisionBadge()}
                </div>
                {selectedCase.decisionReason && (
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">Reason:</span>
                    <p className="text-sm bg-white p-2 rounded border">{selectedCase.decisionReason}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <Tabs defaultValue="journey-steps">
            <TabsList>
              <TabsTrigger value="journey-steps">Journey Steps</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="journey-steps" className="pt-4">
              <JourneyStepsContent selectedCase={selectedCase} />
            </TabsContent>
            
            <TabsContent value="analysis" className="pt-4">
              <AnalysisContent selectedCase={selectedCase} />
            </TabsContent>
            
            <TabsContent value="anomalies" className="pt-4">
              <AnomaliesContent selectedCase={selectedCase} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="pt-2">
          <Button 
            className={`w-full ${
              selectedCase.decision === "Approved" ? "bg-green-600 hover:bg-green-700" : 
              selectedCase.decision === "Rejected" ? "bg-red-600 hover:bg-red-700" :
              "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {selectedCase.decision === "Approved" ? "View Approval Details" : 
             selectedCase.decision === "Rejected" ? "View Rejection Details" : 
             "Review Case"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CaseDetail;
