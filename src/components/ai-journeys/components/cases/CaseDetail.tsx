
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle } from "lucide-react";
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
  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBackToList}>
          ← Back to Case List
        </Button>
        
        <Badge className={selectedCase.status === "success" ? 
          "bg-green-100 text-green-800" : 
          "bg-red-100 text-red-800"}>
          {selectedCase.risk}
        </Badge>
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
          <Button className={`w-full ${selectedCase.status === "success" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}>
            {selectedCase.status === "success" ? "Approve Case" : "Review Case"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CaseDetail;
