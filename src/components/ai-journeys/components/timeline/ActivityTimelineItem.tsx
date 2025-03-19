
import React from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureBadgeProps {
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "warning" | "danger";
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, label, variant = "default" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "warning":
        return "bg-amber-100 text-amber-800";
      case "danger":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <Badge variant="secondary" className={`text-xs flex items-center gap-1 ${getVariantClasses()}`}>
      {icon} {label}
    </Badge>
  );
};

interface ActivityTimelineItemProps {
  color: "green" | "amber" | "red";
  title: string;
  time: string;
  description: string;
  features: {
    icon: React.ReactNode;
    label: string;
    variant?: "default" | "warning" | "danger";
  }[];
  isLast?: boolean;
}

const ActivityTimelineItem: React.FC<ActivityTimelineItemProps> = ({
  color,
  title,
  time,
  description,
  features,
  isLast = false
}) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div className={`h-2 w-2 rounded-full bg-${color}-500 mt-2`}></div>
        {!isLast && (
          <div className="absolute top-3 bottom-0 left-1 w-px bg-border"></div>
        )}
      </div>
      <div className="space-y-1 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{title}</p>
          <Badge variant="outline" className="text-xs">{time}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-2">
          <p className="text-xs font-medium text-muted-foreground mb-1">Features detected:</p>
          <div className="flex flex-wrap gap-1.5">
            {features.map((feature, index) => (
              <FeatureBadge 
                key={index}
                icon={feature.icon}
                label={feature.label}
                variant={feature.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimelineItem;
