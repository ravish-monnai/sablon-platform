
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, FileText, Shield, UserCheck, ChevronRight } from "lucide-react";

interface QuickAnalyticsCardProps {
  className?: string;
}

interface AgentJourneyMetrics {
  name: string;
  icon: React.ReactNode;
  status: "active" | "maintenance" | "offline";
  executions: number;
  successRate: number;
  avgResponseTime: string;
  color: string;
}

const QuickAnalyticsCard: React.FC<QuickAnalyticsCardProps> = ({ className }) => {
  const agentsAndJourneys: AgentJourneyMetrics[] = [
    {
      name: "Onboarding Journey",
      icon: <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />,
      status: "active",
      executions: 1872,
      successRate: 98.5,
      avgResponseTime: "1.3s",
      color: "text-[#9b87f5]"
    },
    {
      name: "KYC Journey",
      icon: <UserCheck className="h-4 w-4 mr-2 text-[#4DA3FF]" />,
      status: "active",
      executions: 1254,
      successRate: 97.2,
      avgResponseTime: "2.1s",
      color: "text-[#4DA3FF]"
    },
    {
      name: "Bank Statement Analyzer Agent",
      icon: <FileText className="h-4 w-4 mr-2 text-[#F97316]" />,
      status: "active",
      executions: 943,
      successRate: 99.1,
      avgResponseTime: "3.4s",
      color: "text-[#F97316]"
    },
    {
      name: "Fraud Review Agent",
      icon: <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />,
      status: "active",
      executions: 724,
      successRate: 96.8,
      avgResponseTime: "2.7s",
      color: "text-[#9b87f5]"
    }
  ];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Live Agents and Journeys</CardTitle>
        <CardDescription>Active AI systems overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agentsAndJourneys.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-md p-3 hover:bg-muted/50 transition-colors ${index < agentsAndJourneys.length - 1 ? "border-b pb-4" : ""}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className={`text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full`}>
                  {item.status === "active" ? "Active" : item.status === "maintenance" ? "Maintenance" : "Offline"}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">Executions</p>
                  <p className={`font-medium ${item.color}`}>{item.executions.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Success Rate</p>
                  <p className={`font-medium ${item.successRate >= 98 ? "text-green-600" : item.successRate >= 95 ? "text-amber-600" : "text-red-600"}`}>
                    {item.successRate}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Avg. Response</p>
                  <p className="font-medium">{item.avgResponseTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
