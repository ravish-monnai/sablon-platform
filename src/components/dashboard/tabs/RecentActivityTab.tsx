
import React, { useMemo, useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Activity, TrendingUp, Users, FileText, BarChart, Clock, CreditCard, RefreshCw } from "lucide-react";
import { 
  ActivityMetric, 
  calculateTotals,
  generateWeeklyComparison,
} from "../util/dashboardUtils";
import { Button } from "@/components/ui/button";

// Import our components
import MetricCard from "./activity/MetricCard";
import ActivitySummaryTab from "./activity/ActivitySummaryTab";
import TransactionsTrendTab from "./activity/TransactionsTrendTab";
import UserCohortsTab from "./activity/UserCohortsTab";

const RecentActivityTab: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Base activity data
  const baseActivityData: ActivityMetric[] = useMemo(() => [
    { name: "Mon", statements: 87, cases: 32, transactions: 213, users: 64 },
    { name: "Tue", statements: 96, cases: 41, transactions: 245, users: 72 },
    { name: "Wed", statements: 105, cases: 37, transactions: 278, users: 83 },
    { name: "Thu", statements: 117, cases: 45, transactions: 312, users: 94 },
    { name: "Fri", statements: 99, cases: 49, transactions: 287, users: 76 },
    { name: "Sat", statements: 68, cases: 22, transactions: 164, users: 41 },
    { name: "Sun", statements: 54, cases: 19, transactions: 122, users: 35 },
  ], []);
  
  // State for activity data that can be refreshed
  const [activityData, setActivityData] = useState<ActivityMetric[]>(baseActivityData);

  // Calculate totals based on the current activity data
  const { totalStatements, totalCases, totalTransactions, totalUsers } = useMemo(
    () => calculateTotals(activityData), 
    [activityData]
  );

  const weeklyComparison = useMemo(
    () => generateWeeklyComparison(totalTransactions, totalUsers),
    [totalTransactions, totalUsers]
  );

  const userCohorts = useMemo(() => [
    { period: "Last 7 days", newUsers: 259, returningUsers: 146, conversionRate: "18.4%" },
    { period: "7-14 days ago", newUsers: 231, returningUsers: 137, conversionRate: "16.8%" },
    { period: "14-21 days ago", newUsers: 205, returningUsers: 119, conversionRate: "15.2%" },
    { period: "21-28 days ago", newUsers: 189, returningUsers: 108, conversionRate: "14.7%" },
  ], []);

  // Function to refresh data with random variations
  const refreshData = () => {
    setIsRefreshing(true);
    // Simulate API call delay
    setTimeout(() => {
      const updatedData = baseActivityData.map(day => ({
        ...day,
        statements: Math.round(day.statements * (0.95 + Math.random() * 0.2)),
        cases: Math.round(day.cases * (0.9 + Math.random() * 0.3)),
        transactions: Math.round(day.transactions * (0.92 + Math.random() * 0.25)),
        users: Math.round(day.users * (0.93 + Math.random() * 0.22)),
      }));
      
      setActivityData(updatedData);
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 800);
  };

  // Auto-refresh every 30 seconds (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1" 
            onClick={refreshData}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          bgColor="bg-[#E0F2FE]"
          textColor="text-[#4DA3FF]"
          title="Statements"
          value={totalStatements}
          subtitle="analyzed"
          trend={12}
          icon={<FileText className="h-4 w-4" />}
        />
        <MetricCard
          bgColor="bg-[#FFF1E0]"
          textColor="text-[#F97316]"
          title="Cases"
          value={totalCases}
          subtitle="generated"
          trend={8}
          icon={<BarChart className="h-4 w-4" />}
        />
        <MetricCard
          bgColor="bg-[#E0F7EE]"
          textColor="text-[#10B981]"
          title="Transactions"
          value={totalTransactions}
          subtitle="processed"
          trend={17}
          icon={<CreditCard className="h-4 w-4" />}
        />
        <MetricCard
          bgColor="bg-[#EEE0FE]"
          textColor="text-[#8B5CF6]"
          title="Users"
          value={totalUsers}
          subtitle="active"
          trend={9}
          icon={<Users className="h-4 w-4" />}
        />
      </div>
      
      <Tabs defaultValue="activity-summary" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="activity-summary" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>Activity Summary</span>
          </TabsTrigger>
          <TabsTrigger value="transactions-trend" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Transactions Trend</span>
          </TabsTrigger>
          <TabsTrigger value="user-cohorts" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>User Cohorts</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity-summary" className="mt-0">
          <ActivitySummaryTab 
            activityData={activityData}
            totalStatements={totalStatements}
            totalCases={totalCases}
            totalTransactions={totalTransactions}
            totalUsers={totalUsers}
          />
        </TabsContent>
        
        <TabsContent value="transactions-trend" className="mt-0">
          <TransactionsTrendTab 
            activityData={activityData} 
            weeklyComparison={weeklyComparison} 
          />
        </TabsContent>
        
        <TabsContent value="user-cohorts" className="mt-0">
          <UserCohortsTab 
            userCohorts={userCohorts} 
            weeklyComparison={weeklyComparison} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default React.memo(RecentActivityTab);
