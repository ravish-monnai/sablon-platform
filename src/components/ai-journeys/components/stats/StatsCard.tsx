
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  valueClassName?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, valueClassName }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${valueClassName || ""}`}>{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
