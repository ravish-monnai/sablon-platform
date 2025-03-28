
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSettings } from "@/components/settings/UserSettings";
import { GeneralSettings } from "@/components/settings/GeneralSettings";
import { NotificationsSettings } from "@/components/settings/NotificationsSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences
          </p>
        </div>
        
        <Tabs
          defaultValue="general"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <GeneralSettings />
          </TabsContent>
          
          <TabsContent value="users">
            <UserSettings />
          </TabsContent>
          
          <TabsContent value="notifications">
            <NotificationsSettings />
          </TabsContent>
          
          <TabsContent value="security">
            <SecuritySettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
