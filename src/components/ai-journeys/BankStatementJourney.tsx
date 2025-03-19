
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyHeader from "./components/JourneyHeader";
import OverviewTab from "./components/OverviewTab";
import CasesTab from "./components/CasesTab";
import SettingsTab from "./components/SettingsTab";
import LogsTab from "./components/LogsTab";
import FeaturesTab from "./FeaturesTab";
import { useMarket } from "@/contexts/MarketContext";
import { Bot, EyeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BankStatementJourneyProps {
  isViewOnly?: boolean;
}

const BankStatementJourney: React.FC<BankStatementJourneyProps> = ({ isViewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const { selectedMarket } = useMarket();
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <JourneyHeader 
          title={
            <div className="flex items-center gap-2">
              <Bot className="text-monnai-blue h-6 w-6" />
              <span>Bank Statement Analyzer Agent</span>
            </div>
          }
          description={`AI-powered analysis for bank statements${selectedMarket !== 'Global' ? ` in ${selectedMarket}` : ''}`}
        />
        
        {isViewOnly && (
          <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
            <EyeIcon className="h-4 w-4" />
            View Only
          </Badge>
        )}
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cases">Cases</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="settings" disabled={isViewOnly}>Settings</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="cases">
          <CasesTab />
        </TabsContent>
        
        <TabsContent value="features" className="pt-4">
          <FeaturesTab />
        </TabsContent>
        
        <TabsContent value="settings">
          <SettingsTab isViewOnly={isViewOnly} />
        </TabsContent>
        
        <TabsContent value="logs">
          <LogsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BankStatementJourney;
