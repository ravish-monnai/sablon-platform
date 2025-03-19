
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SettingsTabProps {
  isViewOnly?: boolean;
}

const SettingsTab: React.FC<SettingsTabProps> = ({ isViewOnly = false }) => {
  return (
    <div className="space-y-6 pt-4">
      <Card>
        <CardHeader>
          <CardTitle>Journey Configuration</CardTitle>
          <CardDescription>Manage the journey's settings and configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="mb-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="journey-name">Journey Name</Label>
                  <Input 
                    id="journey-name" 
                    disabled={isViewOnly}
                    defaultValue="Bank Statement Analyzer"
                  />
                </div>
                
                <div>
                  <Label htmlFor="journey-description">Description</Label>
                  <Input 
                    id="journey-description" 
                    disabled={isViewOnly}
                    defaultValue="AI-powered analysis for bank statements"
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="active-toggle">Active</Label>
                    <div className="text-sm text-muted-foreground">
                      Enable or disable this journey
                    </div>
                  </div>
                  <Switch 
                    id="active-toggle" 
                    defaultChecked 
                    disabled={isViewOnly}
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="logging-toggle">Detailed Logging</Label>
                    <div className="text-sm text-muted-foreground">
                      Log all activities for debugging
                    </div>
                  </div>
                  <Switch 
                    id="logging-toggle" 
                    defaultChecked={false} 
                    disabled={isViewOnly}
                  />
                </div>
              </div>
              
              {!isViewOnly && (
                <div className="flex justify-end pt-4">
                  <Button>Save Changes</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>Connect to CRM</Label>
                    <div className="text-sm text-muted-foreground">
                      Integrate with your CRM system
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked 
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>API Webhooks</Label>
                    <div className="text-sm text-muted-foreground">
                      Send events to external systems
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked={false} 
                  />
                </div>
              </div>
              
              {!isViewOnly && (
                <div className="flex justify-end pt-4">
                  <Button>Save Integrations</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="permissions" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>Admin Access</Label>
                    <div className="text-sm text-muted-foreground">
                      Full access to journey config
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked 
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>Analyst Access</Label>
                    <div className="text-sm text-muted-foreground">
                      View and manage cases
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked 
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>User Access</Label>
                    <div className="text-sm text-muted-foreground">
                      Basic usage rights
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked 
                  />
                </div>
              </div>
              
              {!isViewOnly && (
                <div className="flex justify-end pt-4">
                  <Button>Save Permissions</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
