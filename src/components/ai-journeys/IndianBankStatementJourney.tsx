
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyHeader from "./components/JourneyHeader";
import OverviewTab from "./components/OverviewTab";
import CasesTab from "./components/CasesTab";
import SettingsTab from "./components/SettingsTab";
import LogsTab from "./components/LogsTab";
import FeaturesTab from "./FeaturesTab";
import { Badge } from "@/components/ui/badge";
import { ArrowDownToLine, ArrowRightLeft, FileText, EyeIcon, ShieldAlert, UserCheck } from "lucide-react";
import JourneyStepsTab from "./components/JourneyStepsTab";

interface IndianBankStatementJourneyProps {
  isViewOnly?: boolean;
}

const IndianBankStatementJourney: React.FC<IndianBankStatementJourneyProps> = ({ isViewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Steps in the journey process
  const journeySteps = [
    {
      id: 1,
      title: "Bank Statement Upload",
      description: "Customer uploads bank statements through API or secure S3 path",
      icon: <ArrowDownToLine className="h-5 w-5 text-blue-500" />,
      status: "completed"
    },
    {
      id: 2,
      title: "Analysis & Feature Extraction",
      description: "Bank statement analyzer agent parses the statements and extracts all configured features",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      status: "active"
    },
    {
      id: 3,
      title: "Risk Assessment",
      description: "Agent evaluates risk score and makes initial determination",
      icon: <ShieldAlert className="h-5 w-5 text-amber-500" />,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Case Creation",
      description: "Case created with appropriate status based on risk assessment",
      icon: <ArrowRightLeft className="h-5 w-5 text-gray-500" />,
      status: "upcoming",
      branches: [
        {
          id: "4a",
          title: "High Risk - Auto Reject",
          description: "Journey ends with auto-rejected case",
          icon: <ShieldAlert className="h-5 w-5 text-red-500" />,
        },
        {
          id: "4b",
          title: "Acceptable Risk - Underwriting",
          description: "Case forwarded to underwriting agent",
          icon: <UserCheck className="h-5 w-5 text-green-500" />,
        }
      ]
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <JourneyHeader 
          title="Bank Statement Analyzer Agent"
          description="Specialized analysis for bank statements with UPI transaction support"
          isViewOnly={isViewOnly}
        />
        
        {isViewOnly && (
          <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
            <EyeIcon className="h-4 w-4" />
            View Only
          </Badge>
        )}
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-6 w-full max-w-4xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="steps">Journey Steps</TabsTrigger>
          <TabsTrigger value="cases">Cases</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="settings" disabled={isViewOnly}>Settings</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="steps">
          <JourneyStepsTab steps={journeySteps} />
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

export default IndianBankStatementJourney;
