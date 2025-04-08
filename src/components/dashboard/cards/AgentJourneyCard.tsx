
import React from "react";
import { Bot, FileText, Shield, UserCheck } from "lucide-react";

export interface AgentJourneyMetrics {
  name: string;
  icon: React.ReactNode;
  status: "active" | "maintenance" | "offline";
  executions: number;
  successRate: number;
  avgResponseTime: string;
  color: string;
}

interface AgentJourneyCardProps {
  item: AgentJourneyMetrics;
  index: number;
  totalItems: number;
}

const AgentJourneyCard: React.FC<AgentJourneyCardProps> = ({ item, index, totalItems }) => {
  return (
    <div 
      className={`rounded-md p-3 hover:bg-muted/50 transition-colors ${index < totalItems - 1 ? "border-b pb-4" : ""}`}
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
  );
};

export default AgentJourneyCard;
