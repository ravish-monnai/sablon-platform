
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowDownToLine, UserCheck, ShieldAlert, BarChart4, RefreshCw } from "lucide-react";
import StatsSummary from "./stats/StatsSummary";

const OverviewTab: React.FC = () => {
  // Sample metrics data for the agent overview
  const processingMetrics = [
    {
      title: "Average Processing Time",
      value: "2.3 seconds",
      description: "per bank statement analyzed"
    },
    {
      title: "Statement Types Supported",
      value: "14",
      description: "including all major Indian banks"
    },
    {
      title: "Document Formats",
      value: "PDF, CSV, XLS",
      description: "supported file formats"
    }
  ];

  // Analysis capabilities and features
  const capabilities = [
    {
      title: "Transaction Classification",
      description: "Categorizes transactions into 32 distinct types including UPI, NEFT, IMPS, etc.",
      icon: <RefreshCw className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Income Verification",
      description: "Identifies salary credits, recurring deposits, and other income sources with 96% accuracy",
      icon: <BarChart4 className="h-5 w-5 text-green-500" />
    },
    {
      title: "Risk Scoring",
      description: "Evaluates 28 risk factors to determine overall risk profile",
      icon: <ShieldAlert className="h-5 w-5 text-amber-500" />
    },
    {
      title: "Fraud Detection",
      description: "Identifies 18 types of suspicious patterns and anomalies",
      icon: <ShieldAlert className="h-5 w-5 text-red-500" />
    },
    {
      title: "Account Consistency",
      description: "Verifies statements against known patterns for authenticity",
      icon: <CheckCircle2 className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Decision Automation",
      description: "Generates automated approvals or forwards to underwriting based on risk assessment",
      icon: <UserCheck className="h-5 w-5 text-purple-500" />
    }
  ];

  return (
    <div className="space-y-6 pt-4">
      <StatsSummary />
      
      <Card>
        <CardHeader>
          <CardTitle>Agent Processing Metrics</CardTitle>
          <CardDescription>Performance metrics for the Bank Statement Analyzer Agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processingMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
                <p className="text-2xl font-bold mt-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Analysis Capabilities</CardTitle>
          <CardDescription>Key features and analysis performed by the agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex gap-3 p-4 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="font-medium">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Integration Points</CardTitle>
          <CardDescription>How the Bank Statement Analyzer integrates with other systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDownToLine className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Input Sources</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Accepts bank statements via API upload, secure S3 bucket, or manual upload through web interface. 
                Integrates with document preprocessing pipeline for initial OCR and data extraction.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">Output Destinations</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Creates cases for review in the case management system. Forwards approved cases to underwriting workflow. 
                Exports analysis results via API for integration with loan origination systems and third-party tools.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
