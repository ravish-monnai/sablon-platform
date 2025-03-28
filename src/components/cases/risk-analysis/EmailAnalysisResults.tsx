
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, FileText, Activity } from "lucide-react";
import CombinedTimelineTab from "./CombinedTimelineTab";
import DigitalFootprintTab from "./DigitalFootprintTab";
import BreachHistory from "./email-analysis/BreachHistory";
import EmailBasicInfo from "./email-analysis/EmailBasicInfo";
import RiskIndicators from "./email-analysis/RiskIndicators";
import DigitalCategories from "./email-analysis/DigitalCategories";

interface EmailAnalysisResultsProps {
  email: string;
}

const EmailAnalysisResults: React.FC<EmailAnalysisResultsProps> = ({ email }) => {
  // Mock data for the breach history
  const mockBreachData = {
    isBreached: true,
    breachCount: 3,
    firstBreachDate: "January 15, 2021",
    lastBreachDate: "March 24, 2023",
    breaches: [
      {
        platformName: "Example Service",
        domainName: "example.com",
        breachDate: "March 24, 2023"
      },
      {
        platformName: "Test Platform",
        domainName: "testplatform.com",
        breachDate: "August 12, 2022"
      },
      {
        platformName: "Demo App",
        domainName: "demoapp.io",
        breachDate: "January 15, 2021"
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Basic Email Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <EmailBasicInfo email={email} />
        </div>
        <div>
          <RiskIndicators />
        </div>
      </div>
      
      {/* Show breach history directly if present */}
      <BreachHistory breach={mockBreachData} />
      
      {/* Main Tabs */}
      <Tabs defaultValue="digital-footprint" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="digital-footprint" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Digital Footprint</span>
          </TabsTrigger>
          <TabsTrigger value="historical-activity" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>Historical Activity</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="digital-footprint">
          <DigitalFootprintTab email={email} />
        </TabsContent>
        
        <TabsContent value="historical-activity">
          <CombinedTimelineTab email={email} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmailAnalysisResults;
