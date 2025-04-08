
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OperationalAgentsTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Agent Performance</CardTitle>
          <CardDescription>Efficiency metrics for active agents</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Throughput</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Data Analysis</TableCell>
                <TableCell><span className="text-green-600">Active</span></TableCell>
                <TableCell>12,432/hr</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Model Management</TableCell>
                <TableCell><span className="text-green-600">Active</span></TableCell>
                <TableCell>2,871/hr</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Feature Engineering</TableCell>
                <TableCell><span className="text-amber-600">Maintenance</span></TableCell>
                <TableCell>0/hr</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Billing</TableCell>
                <TableCell><span className="text-green-600">Active</span></TableCell>
                <TableCell>1,837/hr</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Agent Health</CardTitle>
          <CardDescription>System status and resource usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Data Analysis Agent</span>
                <span>78% Memory</span>
              </div>
              <Progress value={78} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Model Management Agent</span>
                <span>65% Memory</span>
              </div>
              <Progress value={65} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Feature Engineering Agent</span>
                <span>23% Memory</span>
              </div>
              <Progress value={23} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Billing Agent</span>
                <span>42% Memory</span>
              </div>
              <Progress value={42} className="h-1.5" />
            </div>

            <div className="mt-2 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
              <strong>Alert:</strong> Data Analysis Agent approaching memory threshold (78%)
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Agent Activity</CardTitle>
          <CardDescription>Latest operations performed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="border-l-2 border-green-500 pl-3 py-1">
              <p className="font-medium">Model Management Agent</p>
              <p className="text-muted-foreground">Deployed new fraud model v2.4.1</p>
              <p className="text-xs text-muted-foreground">10 minutes ago</p>
            </div>
            
            <div className="border-l-2 border-blue-500 pl-3 py-1">
              <p className="font-medium">Data Analysis Agent</p>
              <p className="text-muted-foreground">Processed 1.2M transactions for Client #4391</p>
              <p className="text-xs text-muted-foreground">43 minutes ago</p>
            </div>
            
            <div className="border-l-2 border-amber-500 pl-3 py-1">
              <p className="font-medium">Feature Engineering Agent</p>
              <p className="text-muted-foreground">Maintenance mode activated for updates</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-3 py-1">
              <p className="font-medium">Billing Agent</p>
              <p className="text-muted-foreground">Generated monthly invoices for 127 clients</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OperationalAgentsTab;
