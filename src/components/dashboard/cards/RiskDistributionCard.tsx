
import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface RiskDistributionCardProps {
  className?: string;
}

const RiskDistributionCard: React.FC<RiskDistributionCardProps> = ({ className }) => {
  const riskData = [
    { name: "Very Low", value: 10.79, color: "#10b981" },
    { name: "Low", value: 83.55, color: "#06b6d4" },
    { name: "Medium", value: 2.30, color: "#f59e0b" },
    { name: "High", value: 1.89, color: "#f97316" },
    { name: "Very High", value: 0.92, color: "#ef4444" },
  ];

  const chartConfig = {
    veryLow: { color: "#10b981" },
    low: { color: "#06b6d4" },
    medium: { color: "#f59e0b" },
    high: { color: "#f97316" },
    veryHigh: { color: "#ef4444" },
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Overview of your recent activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-3 text-sm">
            <p>Daily avg: 7,409 transactions (peak: 9,933)</p>
            <p>Avg risk score: <span className="font-medium">33.09/100</span></p>
            
            <h4 className="font-medium mt-2">Risk Distribution</h4>
            
            <div className="h-40">
              <ChartContainer config={chartConfig} className="h-full">
                <PieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>
            
            <div className="space-y-2 mt-2">
              {riskData.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="flex items-center">
                      <span 
                        className="inline-block w-2 h-2 rounded-full mr-1.5" 
                        style={{ backgroundColor: item.color }}
                      />
                      {item.name}
                    </span>
                    <span>{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-1" style={{ backgroundColor: `${item.color}20`, "--primary": item.color } as React.CSSProperties} />
                </div>
              ))}
            </div>
            
            <div className="mt-3 p-2 bg-blue-50 rounded-md text-xs text-blue-700 border border-blue-100">
              <strong>Recommendation:</strong> Implement tiered verification based on risk level.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskDistributionCard;
