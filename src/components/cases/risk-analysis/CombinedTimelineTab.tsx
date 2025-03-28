
import React from "react";
import BreachHistoryTab from "./BreachHistoryTab";
import ActivityTimeline from "./ActivityTimeline";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { History, AlertTriangle } from "lucide-react";

interface CombinedTimelineTabProps {
  email: string;
}

const CombinedTimelineTab: React.FC<CombinedTimelineTabProps> = ({ email }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Historical Activity</h3>
      
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span>Activity Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="breaches" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Data Breaches</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <ActivityTimeline email={email} />
        </TabsContent>
        
        <TabsContent value="breaches">
          <BreachHistoryTab email={email} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CombinedTimelineTab;
