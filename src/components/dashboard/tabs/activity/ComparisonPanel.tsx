
import React from "react";
import { Badge } from "@/components/ui/badge";
import { formatNumber } from "../../util/dashboardUtils";
import { TrendingUp, TrendingDown, ArrowRight, BarChart } from "lucide-react";

interface ComparisonPanelProps {
  title: string;
  current: number;
  previous: number;
  change: string;
  className?: string;
  icon?: React.ReactNode;
}

const ComparisonPanel: React.FC<ComparisonPanelProps> = ({
  title,
  current,
  previous,
  change,
  className = "",
  icon = <BarChart className="h-4 w-4 text-muted-foreground" />
}) => {
  const isPositive = !change.startsWith('-');
  
  return (
    <div className={`p-4 bg-gray-50 rounded-md ${className} transition-all duration-200 hover:bg-gray-100 animate-fade-in`}>
      <div className="font-medium mb-2 flex items-center gap-2">
        {icon}
        <span>{title}</span>
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
      
      <div className="mt-2 flex flex-col">
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{Math.floor(previous).toLocaleString()}</span>
          <ArrowRight className="h-3 w-3 mx-1" />
          <span>{Math.floor(current).toLocaleString()}</span>
        </div>
        <span className="text-xs mt-1 opacity-75">(prev. week to current)</span>
        
        {/* Progress bar showing change */}
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className={`${isPositive ? 'bg-green-500' : 'bg-red-500'} h-1.5 rounded-full transition-all duration-500`} 
            style={{ width: `${Math.min(100, Math.abs(parseFloat(change)) * 4)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ComparisonPanel);
