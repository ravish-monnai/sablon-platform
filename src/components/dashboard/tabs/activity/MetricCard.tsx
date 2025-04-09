
import React from "react";
import { formatNumber } from "../../util/dashboardUtils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricCardProps {
  bgColor: string;
  textColor: string;
  title: string;
  value: number;
  subtitle: string;
  trend?: number; // Optional trend percentage
  icon?: React.ReactNode; // Optional icon
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  bgColor, 
  textColor, 
  title, 
  value, 
  subtitle,
  trend,
  icon
}) => (
  <div className={`${bgColor} p-4 rounded-lg transition-all duration-300 hover:shadow-md relative overflow-hidden group animate-fade-in`}>
    {/* Background pattern for visual interest */}
    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full bg-white transform -translate-y-6 translate-x-6"></div>
    
    {/* Content */}
    <div className="flex justify-between items-start mb-1">
      <p className={`text-sm ${textColor} font-medium`}>{title}</p>
      {icon && <div className={`${textColor} opacity-80`}>{icon}</div>}
    </div>
    
    <p className={`text-2xl font-bold ${textColor} flex items-center gap-2 mt-1`}>
      {formatNumber(value)}
      {trend !== undefined && (
        <span 
          className={`text-xs flex items-center ml-2 ${trend >= 0 ? "text-green-600" : "text-red-500"} animate-fade-in`}
        >
          {trend >= 0 ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {trend > 0 ? "+" : ""}{trend}%
        </span>
      )}
    </p>
    <p className={`text-xs ${textColor} opacity-75 mt-1`}>{subtitle}</p>
    
    {/* Hover effect */}
    <div className={`absolute bottom-0 left-0 w-0 h-1 ${textColor} opacity-75 transition-all duration-300 group-hover:w-full`}></div>
  </div>
);

export default React.memo(MetricCard);
