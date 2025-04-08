
import React from "react";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

interface ActivityMetric {
  name: string;
  onboarding: number;
  statements: number;
  cases: number;
}

const RecentActivityTab: React.FC = () => {
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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#E5DEFF] p-4 rounded-lg">
          <p className="text-sm text-[#7E69AB]">Onboarding</p>
          <p className="text-2xl font-bold text-[#7E69AB]">{totalOnboarding.toLocaleString()}</p>
          <p className="text-xs text-[#7E69AB] opacity-75">transactions processed</p>
        </div>
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
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Activity Trend (Last 7 Days)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={activityData}
              margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="onboarding" fill="#9b87f5" name="Onboarding" />
              <Bar dataKey="statements" fill="#4DA3FF" name="Statements" />
              <Bar dataKey="cases" fill="#F97316" name="Cases" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Detailed Activity Log</h3>
        <div className="overflow-x-auto">
          <Table>
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
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityTab;
