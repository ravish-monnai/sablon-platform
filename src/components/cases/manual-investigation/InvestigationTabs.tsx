
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart2, UserCheck, Phone } from "lucide-react";
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
        <TabsTrigger value="risk-analysis" className="flex items-center gap-1">
          <BarChart2 className="h-4 w-4" />
          <span className="hidden sm:inline">Risk Analysis</span>
          <span className="sm:hidden">Risk</span>
        </TabsTrigger>
        <TabsTrigger value="identity-verification" className="flex items-center gap-1">
          <UserCheck className="h-4 w-4" />
          <span className="hidden sm:inline">Identity Verification</span>
          <span className="sm:hidden">Identity</span>
        </TabsTrigger>
        <TabsTrigger value="reachability" className="flex items-center gap-1">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Reachability Check</span>
          <span className="sm:hidden">Reachability</span>
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
