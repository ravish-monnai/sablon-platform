
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Clock, AlertTriangle } from "lucide-react";

const LogsTab: React.FC = () => {
  return (
    <div className="pt-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50">
          <CardContent className="pt-6">
            <div className="flex flex-col">
              <span className="text-sm text-green-700">Processing Success Rate</span>
              <span className="text-2xl font-bold text-green-700">98.4%</span>
              <span className="text-xs text-green-600 mt-1">+0.6% from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex flex-col">
              <span className="text-sm text-blue-700">Avg Processing Time</span>
              <span className="text-2xl font-bold text-blue-700">1.3s</span>
              <span className="text-xs text-blue-600 mt-1">-0.2s from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex flex-col">
              <span className="text-sm text-amber-700">Transactions Processed</span>
              <span className="text-2xl font-bold text-amber-700">1,245</span>
              <span className="text-xs text-amber-600 mt-1">Last 24 hours</span>
            </div>
          </CardContent>
        </Card>
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
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">HDFC Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.2 seconds</p>
                  </div>
                  <Badge variant="outline">30 sec ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">ICICI Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.5 seconds</p>
                  </div>
                  <Badge variant="outline">2 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">SBI Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.8 seconds</p>
                  </div>
                  <Badge variant="outline">5 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div>
                    <p className="font-medium">Kotak Bank statement analyzed</p>
                    <p className="text-sm text-muted-foreground">Completed analysis in 1.3 seconds</p>
                  </div>
                  <Badge variant="outline">10 min ago</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">System updated UPI transaction detection rules</p>
                    <p className="text-sm text-muted-foreground">Added support for new UPI payment providers</p>
                  </div>
                  <Badge variant="outline">1 hour ago</Badge>
                </div>
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
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Validation warning on transaction #45678</p>
                      <p className="text-sm text-muted-foreground">Unusual transaction pattern detected</p>
                    </div>
                  </div>
                  <Badge variant="outline">15 min ago</Badge>
                </div>
                <div className="flex justify-between items-start border-b pb-2">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Processing timeout for ABC Bank statement</p>
                      <p className="text-sm text-muted-foreground">System retried and succeeded after second attempt</p>
                    </div>
                  </div>
                  <Badge variant="outline">45 min ago</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
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

export default LogsTab;
