
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { ArrowUp, ArrowDown } from "lucide-react";

interface UserCohort {
  period: string;
  newUsers: number;
  returningUsers: number;
  conversionRate: string;
}

interface UserCohortTableProps {
  data: UserCohort[];
}

const UserCohortTable: React.FC<UserCohortTableProps> = ({ data }) => {
  // Calculate trend indicators
  const getTrendIndicator = (index: number, field: 'newUsers' | 'returningUsers') => {
    if (index === 0) return null;
    
    const current = data[index][field];
    const previous = data[index - 1][field];
    
    if (current > previous) {
      return <ArrowUp className="h-4 w-4 text-green-500 ml-1" />;
    } else if (current < previous) {
      return <ArrowDown className="h-4 w-4 text-red-500 ml-1" />;
    }
    
    return null;
  };
  
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time Period</TableHead>
            <TableHead>New Users</TableHead>
            <TableHead>Returning Users</TableHead>
            <TableHead>Conversion Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((cohort, index) => (
            <TableRow key={index} className={index === 0 ? "bg-muted/30" : ""}>
              <TableCell className="font-medium">{cohort.period}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {cohort.newUsers.toLocaleString()}
                  {getTrendIndicator(index, 'newUsers')}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {cohort.returningUsers.toLocaleString()}
                  {getTrendIndicator(index, 'returningUsers')}
                </div>
              </TableCell>
              <TableCell>{cohort.conversionRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserCohortTable;
