
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutDashboard, Bot, FileText, Database, Activity } from "lucide-react";

import GlobalTrafficTab from "./tabs/GlobalTrafficTab";
import OperationalAgentsTab from "./tabs/OperationalAgentsTab";
import ModelsTab from "./tabs/ModelsTab";
import DataSourcesTab from "./tabs/DataSourcesTab";
import SystemHealthTab from "./tabs/SystemHealthTab";
import RecentActivityTab from "./tabs/RecentActivityTab";

const OperationsView: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Operations Dashboard</h1>
      <Separator className="my-6" />
      
      <Tabs defaultValue="global-traffic" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="global-traffic" className="flex items-center">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Global Traffic
          </TabsTrigger>
          <TabsTrigger value="recent-activity" className="flex items-center">
            <Activity className="mr-2 h-4 w-4" />
            Recent Activity
          </TabsTrigger>
          <TabsTrigger value="operational-agents" className="flex items-center">
            <Bot className="mr-2 h-4 w-4" />
            Operational Agents
          </TabsTrigger>
          <TabsTrigger value="models" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Models
          </TabsTrigger>
          <TabsTrigger value="data-sources" className="flex items-center">
            <Database className="mr-2 h-4 w-4" />
            Data Sources
          </TabsTrigger>
          <TabsTrigger value="system-health" className="flex items-center">
            <Activity className="mr-2 h-4 w-4" />
            System Health
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global-traffic" className="w-full">
          <GlobalTrafficTab />
        </TabsContent>

        <TabsContent value="recent-activity" className="w-full">
          <RecentActivityTab />
        </TabsContent>

        <TabsContent value="operational-agents" className="w-full">
          <OperationalAgentsTab />
        </TabsContent>

        <TabsContent value="models" className="w-full">
          <ModelsTab />
        </TabsContent>

        <TabsContent value="data-sources" className="w-full">
          <DataSourcesTab />
        </TabsContent>

        <TabsContent value="system-health" className="w-full">
          <SystemHealthTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OperationsView;
