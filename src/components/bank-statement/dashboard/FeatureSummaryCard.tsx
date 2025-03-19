
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { hasExceptions } from "./utils";

interface FeatureSummaryCardProps {
  icon: React.ReactNode;
  title: string;
  mainValue: string;
  badgeLabel: string;
  badgeVariant?: "outline" | "secondary" | "destructive";
  additionalInfo?: React.ReactNode;
  exceptions?: string[];
}

const FeatureSummaryCard: React.FC<FeatureSummaryCardProps> = ({
  icon,
  title,
  mainValue,
  badgeLabel,
  badgeVariant = "outline",
  additionalInfo,
  exceptions = []
}) => {
  const hasException = exceptions && exceptions.length > 0;
  
  return (
    <Card className={`bg-white border ${hasException ? 'border-red-300' : 'border-gray-200'}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              {icon}
              <h3 className="font-medium text-sm">{title}</h3>
            </div>
            <p className="text-xl font-bold mt-1">{mainValue}</p>
          </div>
          <Badge variant={badgeVariant}>
            {badgeLabel}
          </Badge>
        </div>
        <div className="mt-2">
          {additionalInfo}
        </div>
        {hasException && (
          <div className="mt-2 py-1 px-2 bg-red-50 rounded text-xs text-red-600 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {exceptions[0]}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureSummaryCard;
