
import React from "react";
import { Bot, FileText, Shield, UserCheck } from "lucide-react";
import { AgentJourneyMetrics } from "./AgentJourneyCard";

export const getAgentJourneyData = (): AgentJourneyMetrics[] => {
  return [
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
};
