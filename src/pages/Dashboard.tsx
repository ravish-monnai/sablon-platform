
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

const Dashboard = () => {
  const riskData = [
    { name: "Very Low", value: 10.79, color: "#10b981" },
    { name: "Low", value: 83.55, color: "#06b6d4" },
    { name: "Medium", value: 2.30, color: "#f59e0b" },
    { name: "High", value: 1.89, color: "#f97316" },
    { name: "Very High", value: 0.92, color: "#ef4444" },
  ];

  const chartConfig = {
    veryLow: { color: "#10b981" },
    low: { color: "#06b6d4" },
    medium: { color: "#f59e0b" },
    high: { color: "#f97316" },
    veryHigh: { color: "#ef4444" },
  };

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
              <h3 className="font-semibold text-base">Payjoy Fraud Risk Assessment - March 2025</h3>
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
                <span className="font-bold">743</span>
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
};

export default Dashboard;
