
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ArrowDown, ArrowUp, Activity, Clock } from "lucide-react";
import UserCohortTable from "../../charts/UserCohortTable";
import ComparisonPanel from "./ComparisonPanel";
import { UserCohort } from "../../util/dashboardUtils";

interface UserCohortsTabProps {
  userCohorts: UserCohort[];
  weeklyComparison: {
    users: {
      current: number;
      previous: number;
      change: string;
    };
  };
}

const UserCohortsTab: React.FC<UserCohortsTabProps> = ({
  userCohorts,
  weeklyComparison
}) => {
  const calculateRetentionTrend = (): { value: string; isPositive: boolean } => {
    // Mock calculation - in a real app, this would be calculated from actual data
    return { value: "+2.1%", isPositive: true };
  };
  
  const retentionTrend = calculateRetentionTrend();
  
  return (
    <Card className="border-none shadow-sm hover:shadow transition-all duration-300">
      <CardHeader className="pb-2 bg-gray-50 rounded-t-lg">
        <CardTitle className="text-lg flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          User Activity Cohorts
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <ComparisonPanel
            className="md:col-span-2"
            title="Weekly Active Users"
            current={weeklyComparison.users.current}
            previous={weeklyComparison.users.previous}
            change={weeklyComparison.users.change}
          />
          
          <div className="p-4 bg-gray-50 rounded-md md:col-span-1 flex flex-col justify-between">
            <div className="font-medium mb-1 flex items-center gap-1">
              <Clock className="h-4 w-4 text-indigo-500" />
              <span>Session Duration</span>
            </div>
            <div className="text-xl font-bold">8.7 min</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              +1.3 min from last week
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md md:col-span-1 flex flex-col justify-between">
            <div className="font-medium mb-1 flex items-center gap-1">
              <Activity className="h-4 w-4 text-purple-500" />
              <span>Retention Rate</span>
            </div>
            <div className="text-xl font-bold">73.4%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              {retentionTrend.isPositive ? (
                <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              {retentionTrend.value} from last month
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden">
          <UserCohortTable data={userCohorts} />
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(UserCohortsTab);
