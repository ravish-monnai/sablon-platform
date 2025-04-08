
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltipContent
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const DataSourcesTab: React.FC = () => {
  const chartConfig = {
    veryLow: { color: "#10b981" },
    low: { color: "#06b6d4" },
    medium: { color: "#f59e0b" },
    high: { color: "#f97316" },
    veryHigh: { color: "#ef4444" },
  };

  return (
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
  );
};

export default DataSourcesTab;
