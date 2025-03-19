
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyHeader from "./components/JourneyHeader";
import OverviewTab from "./components/OverviewTab";
import CasesTab from "./components/CasesTab";
import SettingsTab from "./components/SettingsTab";
import LogsTab from "./components/LogsTab";
import FeaturesTab from "./FeaturesTab";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  EyeIcon, 
  ShieldAlert, 
  UserCheck, 
  ArrowDownToLine, 
  Database, 
  Wrench, 
  ScanSearch 
} from "lucide-react";
import JourneyStepsTab from "./components/JourneyStepsTab";

interface IndianBankStatementJourneyProps {
  isViewOnly?: boolean;
}

const IndianBankStatementJourney: React.FC<IndianBankStatementJourneyProps> = ({ isViewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Steps in the journey process with stats data
  const journeySteps = [
    {
      id: 1,
      title: "Bank Statement Upload",
      description: "Customer uploads bank statements through API or secure S3 path",
      icon: <ArrowDownToLine className="h-8 w-8" />,
      status: "completed" as const,
      color: "#2bbfe0", // Blue
      statsData: {
        processed: 389,
        passed: 385,
        exceptions: 4
      }
    },
    {
      id: 2,
      title: "Analysis & Extraction",
      description: "Bank statement analyzer parses statements and extracts features",
      icon: <ScanSearch className="h-8 w-8" />,
      status: "completed" as const,
      color: "#ffcc1d", // Yellow
      statsData: {
        processed: 385,
        passed: 372,
        exceptions: 13
      }
    },
    {
      id: 3,
      title: "Risk Assessment",
      description: "Agent evaluates risk score and makes initial determination",
      icon: <Database className="h-8 w-8" />,
      status: "completed" as const,
      color: "#66cc66", // Green
      statsData: {
        processed: 372,
        passed: 341,
        exceptions: 31
      }
    },
    {
      id: 4,
      title: "Case Creation",
      description: "Case created with appropriate status based on risk assessment",
      icon: <Wrench className="h-8 w-8" />,
      status: "completed" as const,
      color: "#e85abd", // Pink
      statsData: {
        processed: 341,
        passed: 341,
        exceptions: 0
      },
      branches: [
        {
          id: "4a",
          title: "High Risk Path",
          description: "Journey ends with auto-rejected case",
          icon: <ShieldAlert className="h-6 w-6" />,
        },
        {
          id: "4b",
          title: "Acceptable Risk Path",
          description: "Case forwarded to underwriting agent",
          icon: <UserCheck className="h-6 w-6" />,
        }
      ]
    }
  ];
  
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
