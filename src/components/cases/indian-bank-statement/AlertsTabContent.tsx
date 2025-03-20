
import React from "react";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AlertsTabContent = () => {
  const alerts = [
    {
      title: "Multiple UPI transactions to the same recipient",
      description: "Detected in 7 accounts across HDFC and SBI banks",
      cases: 12,
      tooltip: "Multiple transactions to the same recipient over a short period may indicate potential structuring or suspicious activity patterns. Our system identified this pattern in 7 different customer accounts."
    },
    {
      title: "Large cash deposits followed by immediate withdrawals",
      description: "Potential structuring activity in Axis and ICICI accounts",
      cases: 8,
      tooltip: "This pattern often indicates potential money laundering through structuring. The system detected large deposits quickly followed by withdrawals in multiple accounts, suggesting possible attempts to avoid reporting thresholds."
    },
    {
      title: "Income inconsistency in statements",
      description: "Reported income doesn't match deposit patterns",
      cases: 3,
      tooltip: "The declared income in application documents doesn't align with actual deposit patterns observed in bank statements. This discrepancy requires additional verification and may indicate income misrepresentation."
    }
  ];

  return (
    <div className="space-y-4 mt-4">
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <div className="flex items-center gap-1">
                <p className="font-medium">{alert.title}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-xs">
                      <p className="text-sm">{alert.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-muted-foreground">
                {alert.description}
              </p>
            </div>
            <Badge className="ml-auto">{alert.cases} cases</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsTabContent;
