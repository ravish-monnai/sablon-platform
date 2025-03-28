
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, AlertTriangle, UserCheck, PhoneCall } from "lucide-react";

import CustomerInvestigationForm from "./investigation/CustomerInvestigationForm";
import CustomerCheckTab from "./investigation/CustomerCheckTab";
import IdentityVerificationTab from "./investigation/IdentityVerificationTab";
import ReachabilityTab from "./investigation/ReachabilityTab";

const ManualInvestigationView = () => {
  const [activeTab, setActiveTab] = useState<string>("customer-check");
  
  const handleStartInvestigation = (type: string) => {
    console.log(`Starting ${type} investigation`);
    // In a real application, this would navigate to a details page or open a form
  };
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="customer-check" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <Search className="h-4 w-4 mr-2" />
              Customer Check
            </TabsTrigger>
            <TabsTrigger value="fraud-risk" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Fraud Risk
            </TabsTrigger>
            <TabsTrigger value="identity-verification" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <UserCheck className="h-4 w-4 mr-2" />
              Identity Check
            </TabsTrigger>
            <TabsTrigger value="reachability" className="text-gray-600 data-[state=active]:text-monnai-blue">
              <PhoneCall className="h-4 w-4 mr-2" />
              Reachability
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="customer-check" className="space-y-4">
            <CustomerCheckTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="fraud-risk" className="space-y-4">
            <CustomerInvestigationForm />
          </TabsContent>
          
          <TabsContent value="identity-verification" className="space-y-4">
            <IdentityVerificationTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="reachability" className="space-y-4">
            <ReachabilityTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
