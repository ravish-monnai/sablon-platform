
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

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
              <TabsTrigger value="risk-rules">Risk Rules</TabsTrigger>
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
            
            <TabsContent value="risk-rules" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Risk Assessment Rules</CardTitle>
                  <CardDescription>
                    Configure risk scoring thresholds and auto-rejection criteria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="risk-threshold">Auto Rejection Risk Threshold</Label>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <Slider
                      id="risk-threshold"
                      defaultValue={[75]}
                      max={100}
                      step={1}
                      disabled={isViewOnly}
                      className="mb-4"
                    />
                    <p className="text-sm text-muted-foreground">
                      Bank statements with risk scores higher than this threshold will be auto-rejected
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-Reject on Fraud Indicators</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically reject if fraud indicators are detected
                        </p>
                      </div>
                      <Switch defaultChecked disabled={isViewOnly} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-Reject on Insufficient Income</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically reject if income verification fails
                        </p>
                      </div>
                      <Switch defaultChecked disabled={isViewOnly} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-Reject on Excessive NSF</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically reject if too many NSF incidents
                        </p>
                      </div>
                      <Switch defaultChecked disabled={isViewOnly} />
                    </div>
                  </div>
                  
                  {!isViewOnly && (
                    <div className="flex justify-end pt-4">
                      <Button>Save Risk Rules</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>S3 File Upload Integration</Label>
                    <div className="text-sm text-muted-foreground">
                      Enable secure S3 path for bank statement uploads
                    </div>
                  </div>
                  <Switch 
                    disabled={isViewOnly}
                    defaultChecked 
                  />
                </div>
                
                <div>
                  <Label htmlFor="s3-path">S3 Bucket Path</Label>
                  <Input 
                    id="s3-path" 
                    disabled={isViewOnly}
                    defaultValue="s3://bank-statements/uploads/"
                    className="mt-1"
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
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label>Connect to Underwriting System</Label>
                    <div className="text-sm text-muted-foreground">
                      Forward cases to underwriting agent
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
