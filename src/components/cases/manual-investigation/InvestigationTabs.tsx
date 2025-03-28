
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart2, UserCheck, Phone, ShieldAlert, FileCheck, MapPin } from "lucide-react";
import CustomerCheckTab from "../investigation/CustomerCheckTab";
import IdentityVerificationTab from "../investigation/IdentityVerificationTab";
import ReachabilityTab from "../investigation/ReachabilityTab";
import { useInvestigation } from "./InvestigationProvider";

const InvestigationTabs: React.FC = () => {
  const { 
    setInvestigationType, 
    investigationType,
    handleStartInvestigation 
  } = useInvestigation();

  return (
    <Tabs defaultValue="risk-analysis" onValueChange={setInvestigationType}>
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger 
          value="risk-analysis" 
          className="flex items-center gap-2 py-3"
          data-state={investigationType === "risk-analysis" ? "active" : "inactive"}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
            <BarChart2 className="h-4 w-4 text-red-600" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-medium">Risk Analysis</span>
            <span className="text-xs text-muted-foreground hidden md:inline">Fraud & Risk Assessment</span>
          </div>
        </TabsTrigger>
        
        <TabsTrigger 
          value="identity-verification" 
          className="flex items-center gap-2 py-3"
          data-state={investigationType === "identity-verification" ? "active" : "inactive"}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
            <UserCheck className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-medium">Identity</span>
            <span className="text-xs text-muted-foreground hidden md:inline">Verify Identity</span>
          </div>
        </TabsTrigger>
        
        <TabsTrigger 
          value="reachability" 
          className="flex items-center gap-2 py-3"
          data-state={investigationType === "reachability" ? "active" : "inactive"}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
            <Phone className="h-4 w-4 text-purple-600" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-medium">Reachability</span>
            <span className="text-xs text-muted-foreground hidden md:inline">Contact Verification</span>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="risk-analysis">
        <CustomerCheckTab onStartInvestigation={handleStartInvestigation} />
      </TabsContent>
      
      <TabsContent value="identity-verification">
        <IdentityVerificationTab onStartInvestigation={handleStartInvestigation} />
      </TabsContent>
      
      <TabsContent value="reachability">
        <ReachabilityTab onStartInvestigation={handleStartInvestigation} />
      </TabsContent>
    </Tabs>
  );
};

export default InvestigationTabs;
