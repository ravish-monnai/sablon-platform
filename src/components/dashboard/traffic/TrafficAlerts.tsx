
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Clock, MapPin } from "lucide-react";

const trafficAlerts = [
  {
    id: 1,
    severity: "critical",
    title: "API Rate Limiting Triggered",
    description: "Multiple clients experiencing rate limiting in North America region",
    time: "10 minutes ago",
    icon: AlertTriangle,
    color: "#ea384c"
  },
  {
    id: 2,
    severity: "warning",
    title: "Increased Latency Detected",
    description: "Identity verification services showing 35% increased response time",
    time: "25 minutes ago",
    icon: Clock,
    color: "#F97316"
  },
  {
    id: 3,
    severity: "info",
    title: "Traffic Spike in EU Region",
    description: "Unusual traffic pattern detected from European IPs (43% above normal)",
    time: "1 hour ago",
    icon: MapPin,
    color: "#8B5CF6"
  }
];

const TrafficAlerts: React.FC = () => {
  return (
    <div className="space-y-3">
      {trafficAlerts.map(alert => (
        <Alert key={alert.id} className="border-l-4" style={{ borderLeftColor: alert.color }}>
          <div className="flex items-start">
            <alert.icon className="h-5 w-5 mr-2" style={{ color: alert.color }} />
            <div>
              <AlertTitle className="text-sm font-semibold flex items-center justify-between">
                {alert.title}
                <span className="text-xs font-normal text-muted-foreground">{alert.time}</span>
              </AlertTitle>
              <AlertDescription className="text-xs">{alert.description}</AlertDescription>
            </div>
          </div>
        </Alert>
      ))}
    </div>
  );
};

export default TrafficAlerts;
