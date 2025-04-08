
import React from "react";
import { Badge } from "@/components/ui/badge";
import { formatNumber } from "../../util/dashboardUtils";

interface ComparisonPanelProps {
  title: string;
  current: number;
  previous: number;
  change: string;
  className?: string;
}

const ComparisonPanel: React.FC<ComparisonPanelProps> = ({
  title,
  current,
  previous,
  change,
  className = ""
}) => (
  <div className={`p-2 bg-gray-50 rounded-md ${className}`}>
    <div className="font-medium mb-2">{title}</div>
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold">{formatNumber(current)}</span>
      <Badge variant="outline" className="bg-green-100 text-green-800">
        {change}
      </Badge>
    </div>
    <p className="text-xs text-muted-foreground">
      vs {Math.floor(previous).toLocaleString()} previous week
    </p>
  </div>
);

export default React.memo(ComparisonPanel);
