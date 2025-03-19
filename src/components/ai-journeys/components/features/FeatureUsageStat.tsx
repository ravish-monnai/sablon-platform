
import React from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureUsageStatProps {
  name: string;
  icon: React.ReactNode;
  percentage: number;
}

const FeatureUsageStat: React.FC<FeatureUsageStatProps> = ({ name, icon, percentage }) => {
  return (
    <div className="border rounded-lg p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="bg-primary/10 p-1.5 rounded mr-2">
            {icon}
          </div>
          <span className="font-medium text-sm">{name}</span>
        </div>
        <Badge>{percentage}%</Badge>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div 
          className="bg-primary h-1.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FeatureUsageStat;
