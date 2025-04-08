
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ModelsTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Model Performance</CardTitle>
          <CardDescription>Accuracy metrics for deployed models</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Accuracy</TableHead>
                <TableHead>Drift</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Fraud Detection v2.4</TableCell>
                <TableCell>96.8%</TableCell>
                <TableCell className="text-green-600">0.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">KYC Verification v1.7</TableCell>
                <TableCell>94.3%</TableCell>
                <TableCell className="text-green-600">0.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Credit Scoring v3.1</TableCell>
                <TableCell>91.7%</TableCell>
                <TableCell className="text-amber-600">1.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collections Opt. v1.2</TableCell>
                <TableCell>89.5%</TableCell>
                <TableCell className="text-red-600">2.4%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-3 p-2 bg-amber-50 rounded-md text-xs text-amber-700 border border-amber-100">
            <strong>Alert:</strong> Collections Optimization model showing significant drift (2.4%)
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Model Registry</CardTitle>
          <CardDescription>Recently deployed models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Fraud Detection v2.4.1</p>
                <p className="text-xs text-muted-foreground">Deployed: 2 hours ago</p>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 px-2 py-1 rounded">Production</Badge>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">KYC Verification v1.8</p>
                <p className="text-xs text-muted-foreground">Deployed: 1 day ago</p>
              </div>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Staging</Badge>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Credit Scoring v3.2</p>
                <p className="text-xs text-muted-foreground">Deployed: 3 days ago</p>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-800 px-2 py-1 rounded">Testing</Badge>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Collections Opt. v1.3</p>
                <p className="text-xs text-muted-foreground">Deployed: 5 days ago</p>
              </div>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Development</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Training Jobs</CardTitle>
          <CardDescription>Current training progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Fraud Detection v2.5</span>
                <span className="text-xs">87% complete</span>
              </div>
              <Progress value={87} className="h-1.5" />
              <p className="text-xs text-muted-foreground mt-1">ETA: 1 hour 12 minutes</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Credit Scoring v3.3</span>
                <span className="text-xs">43% complete</span>
              </div>
              <Progress value={43} className="h-1.5" />
              <p className="text-xs text-muted-foreground mt-1">ETA: 5 hours 30 minutes</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Collections Opt. v1.4</span>
                <span className="text-xs">12% complete</span>
              </div>
              <Progress value={12} className="h-1.5" />
              <p className="text-xs text-muted-foreground mt-1">ETA: 9 hours 45 minutes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelsTab;
