
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickAnalyticsCardProps {
  className?: string;
}

const QuickAnalyticsCard: React.FC<QuickAnalyticsCardProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Quick Analytics</CardTitle>
        <CardDescription>Key metrics overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Active Models</span>
              <span className="font-bold">8</span>
            </div>
            <div className="flex justify-between">
              <span>AI Journeys</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between">
              <span>Agents</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between">
              <span>Transactions</span>
              <span className="font-bold">7,409</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Live AI Journeys</h4>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span>Onboarding Journey</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Live AI Agents</h4>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span>Bank Statement Analyser Agent</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span>Fraud Review Agent</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
