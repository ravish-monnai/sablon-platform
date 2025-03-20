
import React from "react";
import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface FeatureInfoTooltipProps {
  title: string;
  description: string;
}

const FeatureInfoTooltip: React.FC<FeatureInfoTooltipProps> = ({ title, description }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <div className="inline-flex items-center cursor-help">
        <Info className="h-4 w-4 text-muted-foreground ml-1" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default FeatureInfoTooltip;
