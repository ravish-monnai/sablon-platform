
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Activity } from "lucide-react";
import { ActivityMetric } from "../../util/dashboardUtils";

interface ActivitySummaryTabProps {
  activityData: ActivityMetric[];
  totalStatements: number;
  totalCases: number;
  totalTransactions: number;
  totalUsers: number;
}

const ActivitySummaryTab: React.FC<ActivitySummaryTabProps> = ({
  activityData,
  totalStatements,
  totalCases,
  totalTransactions,
  totalUsers
}) => {
  return (
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
  );
};

export default React.memo(ActivitySummaryTab);
