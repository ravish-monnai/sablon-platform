
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Activity, Calendar, FileText, Info } from "lucide-react";
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
  // Find day with highest activity for highlight
  const highestActivityDay = React.useMemo(() => {
    let highest = { day: '', value: 0 };
    activityData.forEach(day => {
      const total = day.statements + day.cases + day.transactions + day.users;
      if (total > highest.value) {
        highest = { day: day.name, value: total };
      }
    });
    return highest.day;
  }, [activityData]);

  return (
    <Card className="border-none shadow-sm hover:shadow transition-all duration-300">
      <CardHeader className="pb-2 bg-gray-50 rounded-t-lg">
        <CardTitle className="text-lg flex items-center">
          <Activity className="h-5 w-5 mr-2 text-primary" />
          Activity Summary
          <span className="ml-2 flex items-center text-sm font-normal text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            Last 7 Days
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="font-medium">Day</TableHead>
                  <TableHead className="text-[#4DA3FF] font-medium">Statements</TableHead>
                  <TableHead className="text-[#F97316] font-medium">Cases</TableHead>
                  <TableHead className="text-[#10B981] font-medium">Transactions</TableHead>
                  <TableHead className="text-[#8B5CF6] font-medium">Users</TableHead>
                  <TableHead className="hidden md:table-cell font-medium">
                    <div className="flex items-center">
                      <span>Activity Score</span>
                      <Info className="h-3 w-3 ml-1 text-muted-foreground" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activityData.map((day, index) => {
                  // Calculate activity score - just for visualization
                  const activityScore = Math.round((day.statements + day.cases * 2 + 
                                     day.transactions + day.users * 3) / 10);
                  const isHighlighted = day.name === highestActivityDay;
                  
                  return (
                    <TableRow 
                      key={index} 
                      className={isHighlighted ? "bg-primary/5" : undefined}
                    >
                      <TableCell className="font-medium">
                        {day.name}
                        {isHighlighted && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
                            Peak
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{day.statements}</TableCell>
                      <TableCell>{day.cases}</TableCell>
                      <TableCell>{day.transactions}</TableCell>
                      <TableCell>{day.users}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${Math.min(100, activityScore)}%` }}
                          ></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow className="bg-muted/50 font-bold">
                  <TableCell>Total</TableCell>
                  <TableCell>{totalStatements}</TableCell>
                  <TableCell>{totalCases}</TableCell>
                  <TableCell>{totalTransactions}</TableCell>
                  <TableCell>{totalUsers}</TableCell>
                  <TableCell className="hidden md:table-cell">-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="mt-3 text-xs text-muted-foreground flex items-center">
          <FileText className="h-3 w-3 mr-1" />
          Activity data is updated hourly. Last updated: Today, 10:45 AM
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(ActivitySummaryTab);
