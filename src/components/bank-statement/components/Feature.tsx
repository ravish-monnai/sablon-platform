
import React from "react";
import { Switch } from "@/components/ui/switch";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  enabled?: boolean;
  onToggle?: () => void;
}

const Feature: React.FC<FeatureProps> = ({ 
  title, 
  description, 
  icon, 
  enabled = false,
  onToggle 
}) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border bg-card">
      <div className="mt-0.5 bg-primary/10 p-2 rounded-md">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          {onToggle && (
            <Switch checked={enabled} onCheckedChange={onToggle} />
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
