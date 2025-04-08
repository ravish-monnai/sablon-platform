import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, FileText, Shield, UserCheck, ChevronRight, BarChart4, Activity, Table } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Table as UITable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

interface QuickAnalyticsCardProps {
  className?: string;
}

interface AgentJourneyMetrics {
  name: string;
  icon: React.ReactNode;
  status: "active" | "maintenance" | "offline";
  executions: number;
  successRate: number;
  avgResponseTime: string;
  color: string;
}

interface ActivityMetric {
  name: string;
  onboarding: number;
  statements: number;
  cases: number;
}

const QuickAnalyticsCard: React.FC<QuickAnalyticsCardProps> = ({ className }) => {
  const agentsAndJourneys: AgentJourneyMetrics[] = [
    {
      name: "Onboarding Journey",
      icon: <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />,
      status: "active",
      executions: 1872,
      successRate: 98.5,
      avgResponseTime: "1.3s",
      color: "text-[#9b87f5]"
    },
    {
      name: "KYC Journey",
      icon: <UserCheck className="h-4 w-4 mr-2 text-[#4DA3FF]" />,
      status: "active",
      executions: 1254,
      successRate: 97.2,
      avgResponseTime: "2.1s",
      color: "text-[#4DA3FF]"
    },
    {
      name: "Bank Statement Analyzer Agent",
      icon: <FileText className="h-4 w-4 mr-2 text-[#F97316]" />,
      status: "active",
      executions: 943,
      successRate: 99.1,
      avgResponseTime: "3.4s",
      color: "text-[#F97316]"
    },
    {
      name: "Fraud Review Agent",
      icon: <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />,
      status: "active",
      executions: 724,
      successRate: 96.8,
      avgResponseTime: "2.7s",
      color: "text-[#9b87f5]"
    }
  ];

  const activityData: ActivityMetric[] = [
    { name: "Mon", onboarding: 124, statements: 87, cases: 32 },
    { name: "Tue", onboarding: 145, statements: 96, cases: 41 },
    { name: "Wed", onboarding: 132, statements: 105, cases: 37 },
    { name: "Thu", onboarding: 167, statements: 117, cases: 45 },
    { name: "Fri", onboarding: 158, statements: 99, cases: 49 },
    { name: "Sat", onboarding: 95, statements: 68, cases: 22 },
    { name: "Sun", onboarding: 87, statements: 54, cases: 19 },
  ];

  const totalOnboarding = activityData.reduce((sum, day) => sum + day.onboarding, 0);
  const totalStatements = activityData.reduce((sum, day) => sum + day.statements, 0);
  const totalCases = activityData.reduce((sum, day) => sum + day.cases, 0);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Live Agents and Journeys</CardTitle>
        <CardDescription>Active AI systems overview</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="agents">
          <TabsList className="mb-4">
            <TabsTrigger value="agents" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Active Systems</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              <span>Recent Activity</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents">
            <div className="space-y-4">
              {agentsAndJourneys.map((item, index) => (
                <div 
                  key={index} 
                  className={`rounded-md p-3 hover:bg-muted/50 transition-colors ${index < agentsAndJourneys.length - 1 ? "border-b pb-4" : ""}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className={`text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full`}>
                      {item.status === "active" ? "Active" : item.status === "maintenance" ? "Maintenance" : "Offline"}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">Executions</p>
                      <p className={`font-medium ${item.color}`}>{item.executions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Success Rate</p>
                      <p className={`font-medium ${item.successRate >= 98 ? "text-green-600" : item.successRate >= 95 ? "text-amber-600" : "text-red-600"}`}>
                        {item.successRate}%
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg. Response</p>
                      <p className="font-medium">{item.avgResponseTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#E5DEFF] p-3 rounded-md">
                  <p className="text-xs text-[#7E69AB]">Onboarding</p>
                  <p className="text-xl font-bold text-[#7E69AB]">{totalOnboarding.toLocaleString()}</p>
                  <p className="text-xs text-[#7E69AB] opacity-75">transactions</p>
                </div>
                <div className="bg-[#E0F2FE] p-3 rounded-md">
                  <p className="text-xs text-[#4DA3FF]">Statements</p>
                  <p className="text-xl font-bold text-[#4DA3FF]">{totalStatements.toLocaleString()}</p>
                  <p className="text-xs text-[#4DA3FF] opacity-75">analyzed</p>
                </div>
                <div className="bg-[#FFF1E0] p-3 rounded-md">
                  <p className="text-xs text-[#F97316]">Cases</p>
                  <p className="text-xl font-bold text-[#F97316]">{totalCases.toLocaleString()}</p>
                  <p className="text-xs text-[#F97316] opacity-75">generated</p>
                </div>
              </div>
              
              <div className="h-40 w-full my-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={activityData}
                    margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="onboarding" fill="#9b87f5" name="Onboarding" />
                    <Bar dataKey="statements" fill="#4DA3FF" name="Statements" />
                    <Bar dataKey="cases" fill="#F97316" name="Cases" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="overflow-x-auto">
                <UITable>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead className="text-[#9b87f5]">Onboarding</TableHead>
                      <TableHead className="text-[#4DA3FF]">Statements</TableHead>
                      <TableHead className="text-[#F97316]">Cases</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityData.map((day, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{day.name}</TableCell>
                        <TableCell>{day.onboarding}</TableCell>
                        <TableCell>{day.statements}</TableCell>
                        <TableCell>{day.cases}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/50">
                      <TableCell className="font-bold">Total</TableCell>
                      <TableCell className="font-bold">{totalOnboarding}</TableCell>
                      <TableCell className="font-bold">{totalStatements}</TableCell>
                      <TableCell className="font-bold">{totalCases}</TableCell>
                    </TableRow>
                  </TableBody>
                </UITable>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
