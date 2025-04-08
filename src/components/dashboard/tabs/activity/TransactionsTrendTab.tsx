
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Clock, Zap } from "lucide-react";
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
    <Card className="border-none shadow-sm hover:shadow transition-all duration-300">
      <CardHeader className="pb-2 bg-gray-50 rounded-t-lg">
        <CardTitle className="text-lg flex items-center">
          <BarChart className="h-5 w-5 mr-2 text-primary" />
          Transactions Processing Trend
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <ComparisonPanel
            className="md:col-span-2"
            title="Weekly Transactions"
            current={weeklyComparison.transactions.current}
            previous={weeklyComparison.transactions.previous}
            change={weeklyComparison.transactions.change}
          />
          
          <div className="p-4 bg-gray-50 rounded-md flex flex-col justify-between">
            <div className="font-medium mb-1 flex items-center gap-1">
              <Clock className="h-4 w-4 text-amber-500" />
              <span>Avg. Processing Time</span>
            </div>
            <div className="text-xl font-bold">1.7s</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <Zap className="h-3 w-3 text-green-500 mr-1" />
              0.2s faster than last week
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md flex flex-col justify-between">
            <div className="font-medium mb-1 flex items-center gap-1">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>Peak Throughput</span>
            </div>
            <div className="text-xl font-bold">312/hr</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <Zap className="h-3 w-3 text-green-500 mr-1" />
              +24 from previous peak
            </p>
          </div>
        </div>
        
        <div className="bg-white p-2 rounded-lg border">
          <TransactionsTrendChart data={activityData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(TransactionsTrendTab);
