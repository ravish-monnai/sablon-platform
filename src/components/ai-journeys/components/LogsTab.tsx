
import React, { memo } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Clock, AlertTriangle } from "lucide-react";

const StatsCard = memo(({ className, title, value, subtitle }: { 
  className: string; 
  title: string; 
  value: string; 
  subtitle: string 
}) => (
  <Card className={className}>
    <CardContent className="pt-6">
      <div className="flex flex-col">
        <span className="text-sm">{title}</span>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs mt-1">{subtitle}</span>
      </div>
    </CardContent>
  </Card>
));

const ActivityItem = memo(({ title, description, time }: {
  title: string;
  description: string;
  time: string;
}) => (
  <div className="flex justify-between items-start border-b pb-2">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <Badge variant="outline">{time}</Badge>
  </div>
));

const LogsTab: React.FC = () => {
  return (
    <div className="pt-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          className="bg-green-50"
          title="Processing Success Rate" 
          value="98.4%" 
          subtitle="+0.6% from last week" 
        />
        <StatsCard
          className="bg-blue-50"
          title="Avg Processing Time" 
          value="1.3s" 
          subtitle="-0.2s from last week" 
        />
        <StatsCard
          className="bg-amber-50"
          title="Transactions Processed" 
          value="1,245" 
          subtitle="Last 24 hours" 
        />
      </div>
      
      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="errors">Errors & Warnings</TabsTrigger>
          <TabsTrigger value="users">User Processing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Logs</CardTitle>
              <CardDescription>Recent system activity for this journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  title="HDFC Bank statement analyzed"
                  description="Completed analysis in 1.2 seconds"
                  time="30 sec ago"
                />
                <ActivityItem
                  title="ICICI Bank statement analyzed"
                  description="Completed analysis in 1.5 seconds"
                  time="2 min ago"
                />
                <ActivityItem
                  title="SBI Bank statement analyzed"
                  description="Completed analysis in 1.8 seconds"
                  time="5 min ago"
                />
                <ActivityItem
                  title="Kotak Bank statement analyzed"
                  description="Completed analysis in 1.3 seconds"
                  time="10 min ago"
                />
                <ActivityItem
                  title="System updated UPI transaction detection rules"
                  description="Added support for new UPI payment providers"
                  time="1 hour ago"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Errors & Warnings</CardTitle>
              <CardDescription>System issues requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Validation warning on transaction #45678</p>
                      <p className="text-sm text-muted-foreground">Unusual transaction pattern detected</p>
                    </div>
                  </div>
                  <Badge variant="outline">15 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Processing timeout for ABC Bank statement</p>
                      <p className="text-sm text-muted-foreground">System retried and succeeded after second attempt</p>
                    </div>
                  </div>
                  <Badge variant="outline">45 min ago</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">All validation errors resolved</p>
                      <p className="text-sm text-muted-foreground">System health check completed</p>
                    </div>
                  </div>
                  <Badge variant="outline">2 hours ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Processing</CardTitle>
              <CardDescription>Recent user activity and cohorts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">User cohort #A234 processed</p>
                      <p className="text-sm text-muted-foreground">32 users with 97% success rate</p>
                    </div>
                  </div>
                  <Badge variant="outline">5 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">User cohort #A233 processed</p>
                      <p className="text-sm text-muted-foreground">28 users with 100% success rate</p>
                    </div>
                  </div>
                  <Badge variant="outline">35 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">User cohort #A232 processed</p>
                      <p className="text-sm text-muted-foreground">41 users with 95% success rate</p>
                    </div>
                  </div>
                  <Badge variant="outline">1 hour ago</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Daily user processing summary</p>
                      <p className="text-sm text-muted-foreground">248 users processed with 96.7% success rate</p>
                    </div>
                  </div>
                  <Badge variant="outline">6 hours ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default memo(LogsTab);
