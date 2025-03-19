
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface JourneyHeaderProps {
  title: ReactNode;
  description?: string;
  isViewOnly?: boolean;
}

const JourneyHeader: React.FC<JourneyHeaderProps> = ({ title, description, isViewOnly = false }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {!isViewOnly && (
        <div>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configure Agent
          </Button>
        </div>
      )}
    </div>
  );
};

export default JourneyHeader;
