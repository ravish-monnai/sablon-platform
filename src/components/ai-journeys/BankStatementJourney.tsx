
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import JourneyHeader from "./components/JourneyHeader";
import OverviewTab from "./components/OverviewTab";
import ExecutionHistoryTab from "./components/ExecutionHistoryTab";
import { useMarket } from "@/contexts/MarketContext";
import { 
  Bot, 
  EyeIcon, 
  ArrowDownToLine, 
  ShieldAlert, 
  UserCheck, 
  Database,
  Wrench,
  ScanSearch
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import JourneyStepsTab from "./components/JourneyStepsTab";

interface BankStatementJourneyProps {
  isViewOnly?: boolean;
}

const BankStatementJourney: React.FC<BankStatementJourneyProps> = ({ isViewOnly = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const { selectedMarket } = useMarket();
  
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
        processed: 432,
        passed: 428,
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
        processed: 428,
        passed: 415,
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
        processed: 415,
        passed: 378,
        exceptions: 37
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
        processed: 378,
        passed: 378,
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
        <TabsList className="grid grid-cols-3 w-full max-w-2xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="steps">Journey Steps</TabsTrigger>
          <TabsTrigger value="execution-history">Execution History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="steps">
          <JourneyStepsTab steps={journeySteps} />
        </TabsContent>
        
        <TabsContent value="execution-history">
          <ExecutionHistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BankStatementJourney;
