
import React from "react";
import StatsCard from "./StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const StatsSummary: React.FC = () => {
  const weeklyTrend = [
    { name: "Mon", statements: 27, transactions: 72, users: 18 },
    { name: "Tue", statements: 32, transactions: 88, users: 22 },
    { name: "Wed", statements: 38, transactions: 96, users: 27 },
    { name: "Thu", statements: 34, transactions: 104, users: 25 },
    { name: "Fri", statements: 29, transactions: 91, users: 21 },
    { name: "Sat", statements: 19, transactions: 62, users: 14 },
    { name: "Sun", statements: 16, transactions: 54, users: 11 }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="Total Statements Analyzed" 
          value={167} 
          subtitle="+28 in the last 24 hours" 
        />
        <StatsCard 
          title="Transactions Processed" 
          value={567} 
          valueClassName="text-blue-500" 
          subtitle="+89 in the last 24 hours" 
        />
        <StatsCard 
          title="Unique Users Served" 
          value={138} 
          valueClassName="text-green-500" 
          subtitle="+22 new users in last 24 hours" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <StatsCard 
          title="Flagged for Review" 
          value={23} 
          valueClassName="text-amber-500" 
          subtitle="13.7% flag rate" 
        />
        <StatsCard 
          title="Fraud Cases Created" 
          value={8} 
          valueClassName="text-red-500" 
          subtitle="4.8% conversion rate" 
        />
        <StatsCard 
          title="Processing Speed" 
          value="1.4s" 
          valueClassName="text-purple-500" 
          subtitle="Avg. time per transaction" 
        />
      </div>

      <Card className="mt-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground">Weekly Activity Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="statements" fill="#9b87f5" name="Statements" />
                <Bar dataKey="transactions" fill="#4DA3FF" name="Transactions" />
                <Bar dataKey="users" fill="#10B981" name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsSummary;
