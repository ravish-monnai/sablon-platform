import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Activity, 
  Bot, 
  FileCode, 
  Database, 
  AlertTriangle,
  MapPin,
  Clock,
  AlertCircle
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const viewMode = searchParams.get("viewMode") === "internal" ? "internal" : "customer";

  const riskData = [
    { name: "Very Low", value: 10.79, color: "#10b981" },
    { name: "Low", value: 83.55, color: "#06b6d4" },
    { name: "Medium", value: 2.30, color: "#f59e0b" },
    { name: "High", value: 1.89, color: "#f97316" },
    { name: "Very High", value: 0.92, color: "#ef4444" },
  ];

  const trafficAlerts = [
    {
      id: 1,
      severity: "critical",
      title: "API Rate Limiting Triggered",
      description: "Multiple clients experiencing rate limiting in North America region",
      time: "10 minutes ago",
      icon: AlertTriangle,
      color: "#ea384c"
    },
    {
      id: 2,
      severity: "warning",
      title: "Increased Latency Detected",
      description: "Identity verification services showing 35% increased response time",
      time: "25 minutes ago",
      icon: Clock,
      color: "#F97316"
    },
    {
      id: 3,
      severity: "info",
      title: "Traffic Spike in EU Region",
      description: "Unusual traffic pattern detected from European IPs (43% above normal)",
      time: "1 hour ago",
      icon: MapPin,
      color: "#8B5CF6"
    }
  ];

  const chartConfig = {
    veryLow: { color: "#10b981" },
    low: { color: "#06b6d4" },
    medium: { color: "#f59e0b" },
    high: { color: "#f97316" },
    veryHigh: { color: "#ef4444" },
  };

  if (viewMode === "customer") {
    
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">AI Risk Decisioning Platform</h1>
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Overview of your recent activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3 text-sm">
                  <p>Daily avg: 7,409 transactions (peak: 9,933)</p>
                  <p>Avg risk score: <span className="font-medium">33.09/100</span></p>
                  
                  <h4 className="font-medium mt-2">Risk Distribution</h4>
                  
                  <div className="h-40">
                    <ChartContainer config={chartConfig} className="h-full">
                      <PieChart>
                        <Pie
                          data={riskData}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={60}
                          paddingAngle={2}
                          dataKey="value"
                          nameKey="name"
                        >
                          {riskData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                  
                  <div className="space-y-2 mt-2">
                    {riskData.map((item) => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="flex items-center">
                            <span 
                              className="inline-block w-2 h-2 rounded-full mr-1.5" 
                              style={{ backgroundColor: item.color }}
                            />
                            {item.name}
                          </span>
                          <span>{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-1" style={{ backgroundColor: `${item.color}20`, "--primary": item.color } as React.CSSProperties} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
                    <strong>Recommendation:</strong> Implement tiered verification based on risk level.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Analytics</CardTitle>
              <CardDescription>Key metrics overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Active Models</span>
                  <span className="font-bold">8</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Journeys</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Agents</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Transactions</span>
                  <span className="font-bold">7,409</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Resources to help you get started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create your first AI Journey</li>
                <li>Deploy an AI Agent</li>
                <li>Connect your data sources</li>
                <li>Review risk models</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
          <TabsTrigger value="operational-agents" className="flex items-center">
            <Bot className="mr-2 h-4 w-4" />
            Operational Agents
          </TabsTrigger>
          <TabsTrigger value="models" className="flex items-center">
            <FileCode className="mr-2 h-4 w-4" />
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
          {/* Traffic Alerts Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              Traffic Alerts
            </h2>
            <div className="space-y-3">
              {trafficAlerts.map(alert => (
                <Alert key={alert.id} className="border-l-4" style={{ borderLeftColor: alert.color }}>
                  <div className="flex items-start">
                    <alert.icon className="h-5 w-5 mr-2" style={{ color: alert.color }} />
                    <div>
                      <AlertTitle className="text-sm font-semibold flex items-center justify-between">
                        {alert.title}
                        <span className="text-xs font-normal text-muted-foreground">{alert.time}</span>
                      </AlertTitle>
                      <AlertDescription className="text-xs">{alert.description}</AlertDescription>
                    </div>
                  </div>
                </Alert>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Global API traffic metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>Total Requests Today: <span className="font-bold">1,452,761</span></p>
                    <p>Avg Response Time: <span className="font-bold">237ms</span></p>
                    <p>Error Rate: <span className="font-bold text-green-600">0.21%</span></p>
                  </div>
                  
                  <div className="h-40">
                    <ChartContainer config={chartConfig} className="h-full">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Fraud Detection", value: 42.5, color: "#10b981" },
                            { name: "Identity Verification", value: 27.3, color: "#06b6d4" },
                            { name: "Credit Scoring", value: 18.1, color: "#f59e0b" },
                            { name: "Other", value: 12.1, color: "#9333ea" }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={60}
                          paddingAngle={2}
                          dataKey="value"
                          nameKey="name"
                        >
                          {[
                            { color: "#10b981" },
                            { color: "#06b6d4" },
                            { color: "#f59e0b" },
                            { color: "#9333ea" }
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Regional Distribution</CardTitle>
                <CardDescription>Traffic by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>North America</span>
                    <span className="font-bold">41%</span>
                  </div>
                  <Progress value={41} className="h-1.5" />
                  
                  <div className="flex justify-between">
                    <span>Europe</span>
                    <span className="font-bold">28%</span>
                  </div>
                  <Progress value={28} className="h-1.5" />
                  
                  <div className="flex justify-between">
                    <span>Asia Pacific</span>
                    <span className="font-bold">22%</span>
                  </div>
                  <Progress value={22} className="h-1.5" />
                  
                  <div className="flex justify-between">
                    <span>Latin America</span>
                    <span className="font-bold">7%</span>
                  </div>
                  <Progress value={7} className="h-1.5" />
                  
                  <div className="flex justify-between">
                    <span>Middle East & Africa</span>
                    <span className="font-bold">2%</span>
                  </div>
                  <Progress value={2} className="h-1.5" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Peak Traffic Times</CardTitle>
                <CardDescription>Busiest hours (UTC)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Morning Peak: <span className="font-bold">09:00 - 11:00</span></p>
                  <p>Afternoon Peak: <span className="font-bold">14:00 - 16:00</span></p>
                  <p>Evening Peak: <span className="font-bold">19:00 - 21:00</span></p>
                  <p>Current Load: <span className="font-bold text-amber-500">Medium (63%)</span></p>
                  <div className="mt-2 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
                    <strong>Note:</strong> Consider scaling resources during peak hours to maintain optimal performance
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        
        <TabsContent value="operational-agents" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance</CardTitle>
                <CardDescription>Efficiency metrics for active agents</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Agent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Throughput</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Data Analysis</TableCell>
                      <TableCell><span className="text-green-600">Active</span></TableCell>
                      <TableCell>12,432/hr</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Model Management</TableCell>
                      <TableCell><span className="text-green-600">Active</span></TableCell>
                      <TableCell>2,871/hr</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Feature Engineering</TableCell>
                      <TableCell><span className="text-amber-600">Maintenance</span></TableCell>
                      <TableCell>0/hr</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Billing</TableCell>
                      <TableCell><span className="text-green-600">Active</span></TableCell>
                      <TableCell>1,837/hr</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Agent Health</CardTitle>
                <CardDescription>System status and resource usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Data Analysis Agent</span>
                      <span>78% Memory</span>
                    </div>
                    <Progress value={78} className="h-1.5" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Model Management Agent</span>
                      <span>65% Memory</span>
                    </div>
                    <Progress value={65} className="h-1.5" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Feature Engineering Agent</span>
                      <span>23% Memory</span>
                    </div>
                    <Progress value={23} className="h-1.5" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Billing Agent</span>
                      <span>42% Memory</span>
                    </div>
                    <Progress value={42} className="h-1.5" />
                  </div>

                  <div className="mt-2 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
                    <strong>Alert:</strong> Data Analysis Agent approaching memory threshold (78%)
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Agent Activity</CardTitle>
                <CardDescription>Latest operations performed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-green-500 pl-3 py-1">
                    <p className="font-medium">Model Management Agent</p>
                    <p className="text-muted-foreground">Deployed new fraud model v2.4.1</p>
                    <p className="text-xs text-muted-foreground">10 minutes ago</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-3 py-1">
                    <p className="font-medium">Data Analysis Agent</p>
                    <p className="text-muted-foreground">Processed 1.2M transactions for Client #4391</p>
                    <p className="text-xs text-muted-foreground">43 minutes ago</p>
                  </div>
                  
                  <div className="border-l-2 border-amber-500 pl-3 py-1">
                    <p className="font-medium">Feature Engineering Agent</p>
                    <p className="text-muted-foreground">Maintenance mode activated for updates</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-500 pl-3 py-1">
                    <p className="font-medium">Billing Agent</p>
                    <p className="text-muted-foreground">Generated monthly invoices for 127 clients</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="models" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Model Performance</CardTitle>
                <CardDescription>Accuracy metrics for deployed models</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>Accuracy</TableHead>
                      <TableHead>Drift</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Fraud Detection v2.4</TableCell>
                      <TableCell>96.8%</TableCell>
                      <TableCell className="text-green-600">0.2%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">KYC Verification v1.7</TableCell>
                      <TableCell>94.3%</TableCell>
                      <TableCell className="text-green-600">0.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Credit Scoring v3.1</TableCell>
                      <TableCell>91.7%</TableCell>
                      <TableCell className="text-amber-600">1.2%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Collections Opt. v1.2</TableCell>
                      <TableCell>89.5%</TableCell>
                      <TableCell className="text-red-600">2.4%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-3 p-2 bg-amber-50 rounded-md text-xs text-amber-700 border border-amber-100">
                  <strong>Alert:</strong> Collections Optimization model showing significant drift (2.4%)
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Model Registry</CardTitle>
                <CardDescription>Recently deployed models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Fraud Detection v2.4.1</p>
                      <p className="text-xs text-muted-foreground">Deployed: 2 hours ago</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Production</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">KYC Verification v1.8</p>
                      <p className="text-xs text-muted-foreground">Deployed: 1 day ago</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Staging</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Credit Scoring v3.2</p>
                      <p className="text-xs text-muted-foreground">Deployed: 3 days ago</p>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Testing</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Collections Opt. v1.3</p>
                      <p className="text-xs text-muted-foreground">Deployed: 5 days ago</p>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Training Jobs</CardTitle>
                <CardDescription>Current training progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Fraud Detection v2.5</span>
                      <span className="text-xs">87% complete</span>
                    </div>
                    <Progress value={87} className="h-1.5" />
                    <p className="text-xs text-muted-foreground mt-1">ETA: 1 hour 12 minutes</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Credit Scoring v3.3</span>
                      <span className="text-xs">43% complete</span>
                    </div>
                    <Progress value={43} className="h-1.5" />
                    <p className="text-xs text-muted-foreground mt-1">ETA: 5 hours 30 minutes</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Collections Opt. v1.4</span>
                      <span className="text-xs">12% complete</span>
                    </div>
                    <Progress value={12} className="h-1.5" />
                    <p className="text-xs text-muted-foreground mt-1">ETA: 9 hours 45 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data-sources" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Source Status</CardTitle>
                <CardDescription>Connection health for integrated data sources</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Source</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Latency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Transaction Database</TableCell>
                      <TableCell><span className="text-green-600">Online</span></TableCell>
                      <TableCell>21ms</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Identity API</TableCell>
                      <TableCell><span className="text-green-600">Online</span></TableCell>
                      <TableCell>127ms</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Credit Bureau</TableCell>
                      <TableCell><span className="text-amber-600">Degraded</span></TableCell>
                      <TableCell>342ms</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fraud Database</TableCell>
                      <TableCell><span className="text-green-600">Online</span></TableCell>
                      <TableCell>45ms</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-3 p-2 bg-amber-50 rounded-md text-xs text-amber-700 border border-amber-100">
                  <strong>Warning:</strong> Credit Bureau API performance degraded (342ms latency)
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Volume</CardTitle>
                <CardDescription>Daily processing statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Transactions Processed</span>
                    <span className="font-bold">1.72M</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Identity Verifications</span>
                    <span className="font-bold">437K</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Credit Checks</span>
                    <span className="font-bold">286K</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Fraud Screenings</span>
                    <span className="font-bold">692K</span>
                  </div>

                  <div className="mt-2 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
                    <strong>Note:</strong> Transaction volume up 12% from previous week
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Source Utilization</CardTitle>
                <CardDescription>API calls by data source today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ChartContainer config={chartConfig} className="h-full">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Transaction DB", value: 42.5, color: "#10b981" },
                          { name: "Identity API", value: 22.3, color: "#06b6d4" },
                          { name: "Credit Bureau", value: 16.7, color: "#f59e0b" },
                          { name: "Fraud DB", value: 18.5, color: "#9333ea" }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={70}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                      >
                        {[
                          { color: "#10b981" },
                          { color: "#06b6d4" },
                          { color: "#f59e0b" },
                          { color: "#9333ea" }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#10b981" }} />
                      Transaction DB
                    </span>
                    <span>42.5%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#06b6d4" }} />
                      Identity API
                    </span>
                    <span>22.3%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#f59e0b" }} />
                      Credit Bureau
                    </span>
                    <span>16.7%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#9333ea" }} />
                      Fraud DB
                    </span>
                    <span>18.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system-health" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Health overview of all components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>API Gateway</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Authentication Services</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ML Processing Pipeline</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database Cluster</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Minor Issues
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Analytics Engine</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Healthy
                    </span>
                  </div>
