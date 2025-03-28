
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, AlertTriangle, UserCheck, PhoneCall } from "lucide-react";

import CustomerCheckTab from "./CustomerCheckTab";
import IdentityVerificationTab from "./IdentityVerificationTab";
import ReachabilityTab from "./ReachabilityTab";
import CustomerInvestigationForm from "./CustomerInvestigationForm";

interface InvestigationTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  onStartInvestigation: (type: string) => void;
}

const InvestigationTabs: React.FC<InvestigationTabsProps> = ({
  activeTab,
  onTabChange,
  onStartInvestigation
}) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
        <CustomerCheckTab onStartInvestigation={onStartInvestigation} />
      </TabsContent>
      
      <TabsContent value="fraud-risk" className="space-y-4">
        <CustomerInvestigationForm />
      </TabsContent>
      
      <TabsContent value="identity-verification" className="space-y-4">
        <IdentityVerificationTab onStartInvestigation={onStartInvestigation} />
      </TabsContent>
      
      <TabsContent value="reachability" className="space-y-4">
        <ReachabilityTab onStartInvestigation={onStartInvestigation} />
      </TabsContent>
    </Tabs>
  );
};

export default InvestigationTabs;
