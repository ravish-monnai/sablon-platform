
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import TransactionsTrendChart from "../../charts/TransactionsTrendChart";
import ComparisonPanel from "./ComparisonPanel";
import { ActivityMetric } from "../../util/dashboardUtils";

interface TransactionsTrendTabProps {
  activityData: ActivityMetric[];
  weeklyComparison: {
    transactions: {
      current: number;
      previous: number;
      change: string;
    };
  };
}

const TransactionsTrendTab: React.FC<TransactionsTrendTabProps> = ({
  activityData,
  weeklyComparison
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <BarChart className="h-5 w-5 mr-2 text-muted-foreground" />
          Transactions Processing Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <ComparisonPanel
            className="md:col-span-3"
            title="Weekly Comparison"
            current={weeklyComparison.transactions.current}
            previous={weeklyComparison.transactions.previous}
            change={weeklyComparison.transactions.change}
          />
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="font-medium mb-2">Avg. Processing Time</div>
            <div className="text-2xl font-bold">1.7s</div>
            <p className="text-xs text-muted-foreground">-0.2s from last week</p>
          </div>
        </div>
        <TransactionsTrendChart data={activityData} />
      </CardContent>
    </Card>
  );
};

export default React.memo(TransactionsTrendTab);
