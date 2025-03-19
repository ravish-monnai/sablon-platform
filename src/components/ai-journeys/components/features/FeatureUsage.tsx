
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FeatureUsageStat from "./FeatureUsageStat";
import {
  IndianRupee,
  RefreshCw,
  BarChart4,
  ShieldAlert,
  CreditCard,
  Smartphone
} from "lucide-react";

const FeatureUsage: React.FC = () => {
  const features = [
    {
      name: "UPI Analysis",
      icon: <IndianRupee className="h-4 w-4 text-primary" />,
      percentage: 82
    },
    {
      name: "Recurring Payments",
      icon: <RefreshCw className="h-4 w-4 text-primary" />,
      percentage: 75
    },
    {
      name: "Income Verification",
      icon: <BarChart4 className="h-4 w-4 text-primary" />,
      percentage: 68
    },
    {
      name: "Fraud Detection",
      icon: <ShieldAlert className="h-4 w-4 text-primary" />,
      percentage: 54
    },
    {
      name: "Cash Flow Analysis",
      icon: <CreditCard className="h-4 w-4 text-primary" />,
      percentage: 47
    },
    {
      name: "Mobile Banking",
      icon: <Smartphone className="h-4 w-4 text-primary" />,
      percentage: 39
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Features Usage</CardTitle>
        <CardDescription>Most frequently utilized features across all analyzed statements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <FeatureUsageStat
                key={index}
                name={feature.name}
                icon={feature.icon}
                percentage={feature.percentage}
              />
            ))}
          </div>
          
          <div className="flex justify-center">
            <Badge variant="outline" className="cursor-pointer">View all features</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureUsage;
