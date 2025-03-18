
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layers, BrainCircuit, BarChart2, Cog, Box, Upload, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ModelConfigDialog from "@/components/models/ModelConfigDialog";
import { useState } from "react";

interface ModelManagementAgentEditorProps {
  onClose: () => void;
}

const ModelManagementAgentEditor: React.FC<ModelManagementAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [modelConfigOpen, setModelConfigOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<{name: string, type: string} | null>(null);
  
  const handleModelConfigOpen = (name: string, type: string) => {
    setSelectedModel({ name, type });
    setModelConfigOpen(true);
  };

  return (
    <div className="py-6">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General Settings</TabsTrigger>
          <TabsTrigger value="models">Model Registry</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* General Settings Tab */}
        <TabsContent value="general" className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agent-name">Agent Name</Label>
                <Input id="agent-name" defaultValue="Model Management Agent" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model-type">Agent AI Model</Label>
                <Select defaultValue="claude">
                  <SelectTrigger id="model-type">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="claude">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="gpt4">GPT-4o</SelectItem>
                    <SelectItem value="llama">Llama 3.1 70B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="agent-description">Description</Label>
              <Textarea 
                id="agent-description" 
                defaultValue="Oversees model deployment, versioning, and maintenance throughout the model lifecycle"
                className="h-24"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base font-medium">Agent Permissions</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="create-models">Create Models</Label>
                  </div>
                  <Switch id="create-models" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="deploy-models">Deploy Models</Label>
                  </div>
                  <Switch id="deploy-models" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="monitor-models">Monitor Models</Label>
                  </div>
                  <Switch id="monitor-models" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="retrain-models">Retrain Models</Label>
                  </div>
                  <Switch id="retrain-models" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="archive-models">Archive Models</Label>
                  </div>
                  <Switch id="archive-models" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Model Registry Tab */}
        <TabsContent value="models" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Model Registry</h3>
            <Button>
              <Box className="mr-2 h-4 w-4" /> Register New Model
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Fraud Detection Models</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleModelConfigOpen("Fraud Transaction Classifier", "binary")}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BrainCircuit className="h-5 w-5 mr-2 text-monnai-pink" />
                        <div>
                          <div className="font-medium">Fraud Transaction Classifier</div>
                          <div className="text-xs text-muted-foreground">Binary Classification • v2.4.0</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">Production</div>
                        <Cog className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleModelConfigOpen("Account Takeover Risk", "binary")}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BrainCircuit className="h-5 w-5 mr-2 text-monnai-blue" />
                        <div>
                          <div className="font-medium">Account Takeover Risk</div>
                          <div className="text-xs text-muted-foreground">Binary Classification • v1.8.3</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">Production</div>
                        <Cog className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Credit Risk Models</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleModelConfigOpen("Default Risk Predictor", "regression")}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BrainCircuit className="h-5 w-5 mr-2 text-monnai-pink" />
                        <div>
                          <div className="font-medium">Default Risk Predictor</div>
                          <div className="text-xs text-muted-foreground">Regression • v3.1.0</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">Production</div>
                        <Cog className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleModelConfigOpen("Credit Limit Optimizer", "regression")}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BrainCircuit className="h-5 w-5 mr-2 text-monnai-blue" />
                        <div>
                          <div className="font-medium">Credit Limit Optimizer</div>
                          <div className="text-xs text-muted-foreground">Regression • v1.4.2</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800 mr-2">Staging</div>
                        <Cog className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Collections Models</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleModelConfigOpen("Collections Strategy Classifier", "multiclass")}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <BrainCircuit className="h-5 w-5 mr-2 text-monnai-pink" />
                        <div>
                          <div className="font-medium">Collections Strategy Classifier</div>
                          <div className="text-xs text-muted-foreground">Multiclass Classification • v2.0.1</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">Production</div>
                        <Cog className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {selectedModel && (
            <ModelConfigDialog
              open={modelConfigOpen}
              onOpenChange={setModelConfigOpen}
              modelName={selectedModel.name}
              modelType={selectedModel.type}
            />
          )}
        </TabsContent>

        {/* Deployments Tab */}
        <TabsContent value="deployments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Active Deployments</h3>
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Deploy Model
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Fraud Transaction Classifier</div>
                      <div className="text-xs text-muted-foreground">Version: v2.4.0 • Deployed 4 days ago</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Production</div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-sm">
                      <div className="text-muted-foreground">Requests/hour</div>
                      <div className="font-medium">3,428</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Avg. latency</div>
                      <div className="font-medium">42ms</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Error rate</div>
                      <div className="font-medium">0.02%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Account Takeover Risk</div>
                      <div className="text-xs text-muted-foreground">Version: v1.8.3 • Deployed 2 weeks ago</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Production</div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-sm">
                      <div className="text-muted-foreground">Requests/hour</div>
                      <div className="font-medium">1,256</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Avg. latency</div>
                      <div className="font-medium">56ms</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Error rate</div>
                      <div className="font-medium">0.05%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Default Risk Predictor</div>
                      <div className="text-xs text-muted-foreground">Version: v3.1.0 • Deployed 1 month ago</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Production</div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-sm">
                      <div className="text-muted-foreground">Requests/hour</div>
                      <div className="font-medium">785</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Avg. latency</div>
                      <div className="font-medium">87ms</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Error rate</div>
                      <div className="font-medium">0.01%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Credit Limit Optimizer</div>
                      <div className="text-xs text-muted-foreground">Version: v1.4.2 • Deployed 5 days ago</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Staging</div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-sm">
                      <div className="text-muted-foreground">Requests/hour</div>
                      <div className="font-medium">324</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Avg. latency</div>
                      <div className="font-medium">62ms</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-muted-foreground">Error rate</div>
                      <div className="font-medium">0.03%</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Monitoring Tab */}
        <TabsContent value="monitoring" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Model Monitoring</h3>
            <div className="flex space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Models</SelectItem>
                  <SelectItem value="fraud">Fraud Models</SelectItem>
                  <SelectItem value="credit">Credit Models</SelectItem>
                  <SelectItem value="collections">Collections Models</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <BarChart2 className="mr-2 h-4 w-4" /> View Reports
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fraud Transaction Classifier</span>
                      <span className="font-medium">AUC: 0.92</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded">
                      <div className="h-2 bg-green-500 rounded" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Account Takeover Risk</span>
                      <span className="font-medium">AUC: 0.89</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded">
                      <div className="h-2 bg-green-500 rounded" style={{ width: "89%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Default Risk Predictor</span>
                      <span className="font-medium">RMSE: 0.18</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded">
                      <div className="h-2 bg-green-500 rounded" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Credit Limit Optimizer</span>
                      <span className="font-medium">RMSE: 0.24</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded">
                      <div className="h-2 bg-amber-500 rounded" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Model Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex p-3 rounded-md bg-red-50 border border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-red-800">Performance Degradation</div>
                      <div className="text-sm text-red-700">Credit Limit Optimizer showing 8% performance drop in last 24h</div>
                      <div className="text-xs text-red-600 mt-1">2 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex p-3 rounded-md bg-amber-50 border border-amber-200">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-amber-800">Data Drift Detected</div>
                      <div className="text-sm text-amber-700">Account Takeover Risk model detecting input distribution drift</div>
                      <div className="text-xs text-amber-600 mt-1">8 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex p-3 rounded-md bg-green-50 border border-green-200">
                    <AlertCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Retraining Complete</div>
                      <div className="text-sm text-green-700">Fraud Transaction Classifier retrained with 5% improvement</div>
                      <div className="text-xs text-green-600 mt-1">1 day ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Model Health Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Model</th>
                      <th className="text-left py-2 font-medium">Version</th>
                      <th className="text-left py-2 font-medium">Environment</th>
                      <th className="text-left py-2 font-medium">Health</th>
                      <th className="text-left py-2 font-medium">Data Drift</th>
                      <th className="text-left py-2 font-medium">Latency</th>
                      <th className="text-left py-2 font-medium">Last Check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">Fraud Transaction Classifier</td>
                      <td className="py-2">v2.4.0</td>
                      <td className="py-2">Production</td>
                      <td className="py-2"><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Healthy</span></td>
                      <td className="py-2">Low</td>
                      <td className="py-2">42ms</td>
                      <td className="py-2">10 mins ago</td>
                    </tr>
                    <tr>
                      <td className="py-2">Account Takeover Risk</td>
                      <td className="py-2">v1.8.3</td>
                      <td className="py-2">Production</td>
                      <td className="py-2"><span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Warning</span></td>
                      <td className="py-2">Medium</td>
                      <td className="py-2">56ms</td>
                      <td className="py-2">15 mins ago</td>
                    </tr>
                    <tr>
                      <td className="py-2">Default Risk Predictor</td>
                      <td className="py-2">v3.1.0</td>
                      <td className="py-2">Production</td>
                      <td className="py-2"><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Healthy</span></td>
                      <td className="py-2">Low</td>
                      <td className="py-2">87ms</td>
                      <td className="py-2">12 mins ago</td>
                    </tr>
                    <tr>
                      <td className="py-2">Credit Limit Optimizer</td>
                      <td className="py-2">v1.4.2</td>
                      <td className="py-2">Staging</td>
                      <td className="py-2"><span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Alert</span></td>
                      <td className="py-2">High</td>
                      <td className="py-2">62ms</td>
                      <td className="py-2">8 mins ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Alert Channels</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="email-alerts">Email Alerts</Label>
                    </div>
                    <Switch id="email-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="slack-alerts">Slack Alerts</Label>
                    </div>
                    <Switch id="slack-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="pagerduty">PagerDuty Integration</Label>
                    </div>
                    <Switch id="pagerduty" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="in-app">In-App Notifications</Label>
                    </div>
                    <Switch id="in-app" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <h4 className="text-sm font-medium">Alert Types</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Performance Degradation</div>
                      <div className="text-xs text-muted-foreground">Alerts when model performance drops</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Data Drift</div>
                      <div className="text-xs text-muted-foreground">Alerts when input data statistics change</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Error Rate</div>
                      <div className="text-xs text-muted-foreground">Alerts when error rate exceeds threshold</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Latency Spikes</div>
                      <div className="text-xs text-muted-foreground">Alerts when response time increases</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Deployment Status</div>
                      <div className="text-xs text-muted-foreground">Alerts on deployment success/failure</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Training Complete</div>
                      <div className="text-xs text-muted-foreground">Alerts when model training finishes</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <h4 className="text-sm font-medium">Notification Recipients</h4>
                
                <div className="space-y-2">
                  <Label htmlFor="email-recipients">Email Recipients</Label>
                  <Input id="email-recipients" defaultValue="risk-team@example.com, data-science@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="slack-channel">Slack Channel</Label>
                  <Input id="slack-channel" defaultValue="#model-alerts" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose}>
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default ModelManagementAgentEditor;
