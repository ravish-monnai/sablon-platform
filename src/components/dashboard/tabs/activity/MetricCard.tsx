
import React from "react";
import { formatNumber } from "../../util/dashboardUtils";

interface MetricCardProps {
  bgColor: string;
  textColor: string;
  title: string;
  value: number;
  subtitle: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  bgColor, 
  textColor, 
  title, 
  value, 
  subtitle 
}) => (
  <div className={`${bgColor} p-4 rounded-lg`}>
    <p className={`text-sm ${textColor}`}>{title}</p>
    <p className={`text-2xl font-bold ${textColor}`}>{formatNumber(value)}</p>
    <p className={`text-xs ${textColor} opacity-75`}>{subtitle}</p>
  </div>
);

export default React.memo(MetricCard);
