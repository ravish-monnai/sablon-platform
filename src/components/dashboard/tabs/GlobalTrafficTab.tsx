
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  AlertCircle, 
  MessageSquare 
} from "lucide-react";
import { 
  ChartContainer,
  ChartTooltipContent 
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import TrafficAlerts from "../traffic/TrafficAlerts";
import TrafficCharts from "../traffic/TrafficCharts";

const GlobalTrafficTab = () => {
  const [trafficChatMessage, setTrafficChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'assistant', content: string}[]>([]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trafficChatMessage.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, {type: 'user', content: trafficChatMessage}]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I've analyzed the traffic data. There's a 12% increase in API calls from the North America region compared to last week. The system health is stable with only minor issues reported in the Credit Bureau API.";
      setChatMessages(prev => [...prev, {type: 'assistant', content: response}]);
    }, 1000);
    
    setTrafficChatMessage("");
  };

  const chartConfig = {
    veryLow: { color: "#10b981" },
    low: { color: "#06b6d4" },
    medium: { color: "#f59e0b" },
    high: { color: "#f97316" },
    veryHigh: { color: "#ef4444" },
  };

  return (
    <>
      {/* Traffic Alerts Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
          Traffic Alerts
        </h2>
        <TrafficAlerts />
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

      <div className="mt-8">
        <Tabs defaultValue="charts" className="w-full">
          <TabsList>
            <TabsTrigger value="charts">Traffic Charts</TabsTrigger>
            <TabsTrigger value="ai-chat" className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              AI Traffic Assistant
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="pt-4">
            <TrafficCharts />
          </TabsContent>
          
          <TabsContent value="ai-chat" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask about traffic data
                </CardTitle>
                <CardDescription>
                  Get insights about current traffic patterns, performance issues, and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col h-[320px]">
                  <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                    {chatMessages.length === 0 ? (
                      <div className="text-center text-muted-foreground py-12">
                        No messages yet. Ask a question about traffic data.
                      </div>
                    ) : (
                      chatMessages.map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.type === 'user' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted'
                            }`}
                          >
                            {msg.content}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input 
                      placeholder="Ask about traffic data..." 
                      value={trafficChatMessage}
                      onChange={(e) => setTrafficChatMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit">Send</Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default GlobalTrafficTab;
