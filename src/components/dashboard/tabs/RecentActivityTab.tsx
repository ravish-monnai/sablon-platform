
import React from "react";
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
  statements: number;
  cases: number;
}

const RecentActivityTab: React.FC = () => {
  const activityData: ActivityMetric[] = [
    { name: "Mon", statements: 87, cases: 32 },
    { name: "Tue", statements: 96, cases: 41 },
    { name: "Wed", statements: 105, cases: 37 },
    { name: "Thu", statements: 117, cases: 45 },
    { name: "Fri", statements: 99, cases: 49 },
    { name: "Sat", statements: 68, cases: 22 },
    { name: "Sun", statements: 54, cases: 19 },
  ];

  const totalStatements = activityData.reduce((sum, day) => sum + day.statements, 0);
  const totalCases = activityData.reduce((sum, day) => sum + day.cases, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <h3 className="text-lg font-medium mb-4">Activity Summary (Last 7 Days)</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead className="text-[#4DA3FF]">Statements</TableHead>
                <TableHead className="text-[#F97316]">Cases</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityData.map((day, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{day.name}</TableCell>
                  <TableCell>{day.statements}</TableCell>
                  <TableCell>{day.cases}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50">
                <TableCell className="font-bold">Total</TableCell>
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
