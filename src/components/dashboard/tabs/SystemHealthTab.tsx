
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Globe, Shield, AlertTriangle, Database, MapPin, Activity } from "lucide-react";

const SystemHealthTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>Health overview of all components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>API Gateway</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Authentication Services</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>ML Processing Pipeline</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Database Cluster</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Minor Issues
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics Engine</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>External API Status</CardTitle>
          <CardDescription>Health of customer-facing APIs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-blue-500" />
                <span>Credit Bureau API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Degraded
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                <span>Identity Verification API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                <span>Fraud Detection API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Database className="h-4 w-4 mr-2 text-purple-500" />
                <span>Document Processing API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                <span>Geolocation API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Outage
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-2 text-blue-500" />
                <span>Transaction Monitoring API</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
          </div>
          <div className="mt-3 p-2 bg-amber-50 rounded-md text-xs text-amber-700 border border-amber-100">
            <strong>Warning:</strong> Geolocation API experiencing complete outage. Credit Bureau API reporting increased latency.
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>API Response Times</CardTitle>
          <CardDescription>Average response time over last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Identity Verification API</span>
                <span>127ms</span>
              </div>
              <Progress value={25} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Credit Bureau API</span>
                <span>342ms</span>
              </div>
              <Progress value={68} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Fraud Detection API</span>
                <span>98ms</span>
              </div>
              <Progress value={20} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Document Processing API</span>
                <span>215ms</span>
              </div>
              <Progress value={43} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Geolocation API</span>
                <span>N/A</span>
              </div>
              <Progress value={0} className="h-1.5 bg-red-200" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Transaction Monitoring API</span>
                <span>156ms</span>
              </div>
              <Progress value={31} className="h-1.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemHealthTab;
