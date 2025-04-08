
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
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
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Users className="h-5 w-5 mr-2 text-muted-foreground" />
          User Activity Cohorts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <ComparisonPanel
            className="md:col-span-3"
            title="Weekly User Count"
            current={weeklyComparison.users.current}
            previous={weeklyComparison.users.previous}
            change={weeklyComparison.users.change}
          />
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="font-medium mb-2">Retention Rate</div>
            <div className="text-2xl font-bold">73.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </div>
        </div>
        <UserCohortTable data={userCohorts} />
      </CardContent>
    </Card>
  );
};

export default React.memo(UserCohortsTab);
