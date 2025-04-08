
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ActivityTimelineItem from "./ActivityTimelineItem";
import {
  IndianRupee,
  FileText,
  Smartphone,
  CreditCard,
  RefreshCw,
  BarChart4,
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  Users
} from "lucide-react";

const ActivityTimeline: React.FC = () => {
  const timelineItems = [
    {
      color: "green",
      title: "HDFC Bank statement analyzed",
      time: "30 sec ago",
      description: "Account ending 5432 - No suspicious activities detected",
      features: [
        { icon: <IndianRupee className="h-3 w-3" />, label: "UPI Transactions" },
        { icon: <RefreshCw className="h-3 w-3" />, label: "Recurring Payments" },
        { icon: <BarChart4 className="h-3 w-3" />, label: "Income Verification" },
        { icon: <Users className="h-3 w-3" />, label: "12 Users Processed" }
      ]
    },
    {
      color: "amber",
      title: "ICICI Bank statement flagged",
      time: "2 min ago",
      description: "Account ending 8765 - Multiple high-value UPI transactions detected",
      features: [
        { 
          icon: <ShieldAlert className="h-3 w-3" />, 
          label: "Fraud Detection", 
          variant: "warning" as const
        },
        { icon: <IndianRupee className="h-3 w-3" />, label: "UPI Transactions" },
        { icon: <CreditCard className="h-3 w-3" />, label: "Cash Flow Analysis" },
        { icon: <Users className="h-3 w-3" />, label: "8 Users Processed" }
      ]
    },
    {
      color: "red",
      title: "SBI Bank statement fraud case created",
      time: "5 min ago",
      description: "Account ending 1234 - Suspicious international transfer pattern",
      features: [
        { 
          icon: <AlertTriangle className="h-3 w-3" />, 
          label: "High Risk Transfers", 
          variant: "danger" as const
        },
        { 
          icon: <ShieldAlert className="h-3 w-3" />, 
          label: "Regulatory Compliance", 
          variant: "warning" as const
        },
        { icon: <FileText className="h-3 w-3" />, label: "Document Verification" },
        { icon: <Users className="h-3 w-3" />, label: "15 Users Processed" }
      ]
    },
    {
      color: "green",
      title: "Kotak Bank statement analyzed",
      time: "10 min ago",
      description: "Account ending 9876 - No suspicious activities detected",
      features: [
        { icon: <CheckCircle className="h-3 w-3" />, label: "Income Consistency" },
        { icon: <Smartphone className="h-3 w-3" />, label: "Mobile Banking" },
        { icon: <BarChart4 className="h-3 w-3" />, label: "Cash Flow Patterns" },
        { icon: <Users className="h-3 w-3" />, label: "9 Users Processed" }
      ],
      isLast: true
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
        <CardDescription>Recent statement analysis activity with detected features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <ActivityTimelineItem 
              key={index}
              color={item.color as "green" | "amber" | "red"}
              title={item.title}
              time={item.time}
              description={item.description}
              features={item.features}
              isLast={item.isLast}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
