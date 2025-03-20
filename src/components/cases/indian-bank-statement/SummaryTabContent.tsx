
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

const SummaryTabContent = () => {
  const stats = [
    { 
      title: "Total Analyzed", 
      value: "167", 
      className: "bg-gray-50 dark:bg-gray-800", 
      tooltip: "Total number of bank statements processed and analyzed by the AI system" 
    },
    { 
      title: "Alert Cases", 
      value: "23", 
      className: "bg-amber-50 dark:bg-amber-950 text-amber-600", 
      tooltip: "Cases requiring additional review due to anomalies or suspicious patterns detected by the AI" 
    },
    { 
      title: "Fraud Cases", 
      value: "8", 
      className: "bg-red-50 dark:bg-red-950 text-red-600", 
      tooltip: "High-risk cases with strong indicators of potential fraud that require immediate attention" 
    }
  ];

  const activities = [
    { 
      text: "HDFC Bank statement analyzed", 
      time: "5m ago", 
      tooltip: "Successfully processed and extracted data from HDFC Bank statement with 98% confidence" 
    },
    { 
      text: "ICICI Bank statement flagged", 
      time: "1h ago", 
      tooltip: "Flagged for review due to unusual transaction patterns and potential income inconsistencies" 
    },
    { 
      text: "SBI Bank statement fraud case created", 
      time: "3h ago", 
      tooltip: "Significant evidence of fraudulent activity detected, case escalated to fraud investigation team" 
    }
  ];

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`${stat.className} p-4 rounded-lg relative cursor-help`}>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.className.includes('text-') ? '' : 'text-foreground'}`}>{stat.value}</p>
                  <HelpCircle className="h-4 w-4 text-muted-foreground absolute top-2 right-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-sm">{stat.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Recent Activity</h3>
        <div className="space-y-1">
          {activities.map((activity, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`flex justify-between items-center py-1 ${index < activities.length - 1 ? 'border-b' : ''} cursor-help`}>
                    <span className="text-sm flex items-center gap-1">
                      {activity.text}
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                    <Badge variant="outline">{activity.time}</Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p className="text-sm">{activity.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryTabContent;
