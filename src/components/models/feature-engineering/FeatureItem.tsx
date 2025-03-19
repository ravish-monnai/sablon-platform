
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface FeatureItemProps {
  feature: string;
  description: string;
  enabled?: boolean;
  showSeparator?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ 
  feature, 
  description, 
  enabled = true,
  showSeparator = true
}) => {
  return (
    <>
      <div className="flex justify-between items-center py-2">
        <div className="flex-1">
          <div className="text-sm font-medium">{feature}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
        <Switch checked={enabled} />
      </div>
      {showSeparator && <Separator />}
    </>
  );
};

export default FeatureItem;
