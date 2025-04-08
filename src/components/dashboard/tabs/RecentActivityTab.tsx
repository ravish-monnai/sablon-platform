
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart, Activity, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TransactionsTrendChart from "../charts/TransactionsTrendChart";
import UserCohortTable from "../charts/UserCohortTable";

interface ActivityMetric {
  name: string;
  statements: number;
  cases: number;
  transactions: number;
  users: number;
}

const RecentActivityTab: React.FC = () => {
  const activityData: ActivityMetric[] = [
    { name: "Mon", statements: 87, cases: 32, transactions: 213, users: 64 },
    { name: "Tue", statements: 96, cases: 41, transactions: 245, users: 72 },
    { name: "Wed", statements: 105, cases: 37, transactions: 278, users: 83 },
    { name: "Thu", statements: 117, cases: 45, transactions: 312, users: 94 },
    { name: "Fri", statements: 99, cases: 49, transactions: 287, users: 76 },
    { name: "Sat", statements: 68, cases: 22, transactions: 164, users: 41 },
    { name: "Sun", statements: 54, cases: 19, transactions: 122, users: 35 },
  ];

  const totalStatements = activityData.reduce((sum, day) => sum + day.statements, 0);
  const totalCases = activityData.reduce((sum, day) => sum + day.cases, 0);
  const totalTransactions = activityData.reduce((sum, day) => sum + day.transactions, 0);
  const totalUsers = activityData.reduce((sum, day) => sum + day.users, 0);

  const weeklyComparison = {
    transactions: { current: totalTransactions, previous: totalTransactions * 0.85, change: '+17.6%' },
    users: { current: totalUsers, previous: totalUsers * 0.92, change: '+8.7%' }
  };

  const userCohorts = [
    { period: "Last 7 days", newUsers: 259, returningUsers: 146, conversionRate: "18.4%" },
    { period: "7-14 days ago", newUsers: 231, returningUsers: 137, conversionRate: "16.8%" },
    { period: "14-21 days ago", newUsers: 205, returningUsers: 119, conversionRate: "15.2%" },
    { period: "21-28 days ago", newUsers: 189, returningUsers: 108, conversionRate: "14.7%" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#E0F2FE] p-4 rounded-lg">
          <p className="text-sm text-[#4DA3FF]">Statements</p>
          <p className="text-2xl font-bold text-[#4DA3FF]">{totalStatements.toLocaleString()}</p>
          <p className="text-xs text-[#4DA3FF] opacity-75">analyzed</p>
        </div>
        <div className="bg-[#FFF1E0] p-4 rounded-lg">
          <p className="text-sm text-[#F97316]">Cases</p>
          <p className="text-2xl font-bold text-[#F97316]">{totalCases.toLocaleString()}</p>
          <p className="text-xs text-[#F97316] opacity-75">generated</p>
        </div>
        <div className="bg-[#E0F7EE] p-4 rounded-lg">
          <p className="text-sm text-[#10B981]">Transactions</p>
          <p className="text-2xl font-bold text-[#10B981]">{totalTransactions.toLocaleString()}</p>
          <p className="text-xs text-[#10B981] opacity-75">processed</p>
        </div>
        <div className="bg-[#EEE0FE] p-4 rounded-lg">
          <p className="text-sm text-[#8B5CF6]">Users</p>
          <p className="text-2xl font-bold text-[#8B5CF6]">{totalUsers.toLocaleString()}</p>
          <p className="text-xs text-[#8B5CF6] opacity-75">active</p>
        </div>
      </div>
      
      <Tabs defaultValue="activity-summary" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="activity-summary" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>Activity Summary</span>
          </TabsTrigger>
          <TabsTrigger value="transactions-trend" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Transactions Trend</span>
          </TabsTrigger>
          <TabsTrigger value="user-cohorts" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>User Cohorts</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity-summary" className="mt-0">
          <Card className="bg-white rounded-lg p-4 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Activity className="h-5 w-5 mr-2 text-muted-foreground" />
                Activity Summary (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead className="text-[#4DA3FF]">Statements</TableHead>
                      <TableHead className="text-[#F97316]">Cases</TableHead>
                      <TableHead className="text-[#10B981]">Transactions</TableHead>
                      <TableHead className="text-[#8B5CF6]">Users</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityData.map((day, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{day.name}</TableCell>
                        <TableCell>{day.statements}</TableCell>
                        <TableCell>{day.cases}</TableCell>
                        <TableCell>{day.transactions}</TableCell>
                        <TableCell>{day.users}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/50">
                      <TableCell className="font-bold">Total</TableCell>
                      <TableCell className="font-bold">{totalStatements}</TableCell>
                      <TableCell className="font-bold">{totalCases}</TableCell>
                      <TableCell className="font-bold">{totalTransactions}</TableCell>
                      <TableCell className="font-bold">{totalUsers}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transactions-trend" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-muted-foreground" />
                Transactions Processing Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-3 p-2 bg-gray-50 rounded-md">
                  <div className="font-medium mb-2">Weekly Comparison</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{totalTransactions.toLocaleString()}</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      {weeklyComparison.transactions.change}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">vs {Math.floor(weeklyComparison.transactions.previous).toLocaleString()} previous week</p>
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="font-medium mb-2">Avg. Processing Time</div>
                  <div className="text-2xl font-bold">1.7s</div>
                  <p className="text-xs text-muted-foreground">-0.2s from last week</p>
                </div>
              </div>
              <TransactionsTrendChart data={activityData} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="user-cohorts" className="mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                User Activity Cohorts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-3 p-2 bg-gray-50 rounded-md">
                  <div className="font-medium mb-2">Weekly User Count</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{totalUsers.toLocaleString()}</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      {weeklyComparison.users.change}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">vs {Math.floor(weeklyComparison.users.previous).toLocaleString()} previous week</p>
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <div className="font-medium mb-2">Retention Rate</div>
                  <div className="text-2xl font-bold">73.4%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </div>
              </div>
              <UserCohortTable data={userCohorts} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecentActivityTab;
