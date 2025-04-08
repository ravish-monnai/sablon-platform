
import React from "react";
import { Badge } from "@/components/ui/badge";
import { formatNumber } from "../../util/dashboardUtils";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

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
}) => {
  const isPositive = !change.startsWith('-');
  
  return (
    <div className={`p-4 bg-gray-50 rounded-md ${className} transition-all duration-200 hover:bg-gray-100`}>
      <div className="font-medium mb-2 flex items-center gap-2">
        {title}
        {isPositive ? (
          <TrendingUp className="h-4 w-4 text-green-500" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-500" />
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{formatNumber(current)}</span>
        <Badge variant="outline" className={`${isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {change}
        </Badge>
      </div>
      
      <div className="mt-2 flex items-center text-xs text-muted-foreground">
        <span>{Math.floor(previous).toLocaleString()}</span>
        <ArrowRight className="h-3 w-3 mx-1" />
        <span>{Math.floor(current).toLocaleString()}</span>
        <span className="ml-1 opacity-75">(prev. week to current)</span>
      </div>
    </div>
  );
};

export default React.memo(ComparisonPanel);
