
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Database } from "lucide-react";

interface QuickAnalyticsCardProps {
  className?: string;
}

const QuickAnalyticsCard: React.FC<QuickAnalyticsCardProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Live Engines</CardTitle>
        <CardDescription>Active AI systems overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center text-muted-foreground">
            No active live engines at the moment
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
