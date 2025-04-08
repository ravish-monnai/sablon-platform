
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, FileText, Shield, UserCheck } from "lucide-react";

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
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />
              <span className="text-sm font-medium">Onboarding Journey</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <UserCheck className="h-4 w-4 mr-2 text-[#4DA3FF]" />
              <span className="text-sm font-medium">KYC Journey</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-[#F97316]" />
              <span className="text-sm font-medium">Bank Statement Analyzer Agent</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-[#9b87f5]" />
              <span className="text-sm font-medium">Fraud Review Agent</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
