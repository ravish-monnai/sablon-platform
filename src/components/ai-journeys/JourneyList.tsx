
import React from "react";
import JourneyCard from "./JourneyCard";
import { Journey } from "./JourneyCard";
import { Badge } from "@/components/ui/badge";
import { EyeIcon } from "lucide-react";

interface JourneyListProps {
  journeys: Journey[];
  onViewDetails: (journeyId: string) => void;
}

const JourneyList: React.FC<JourneyListProps> = ({ 
  journeys,
  onViewDetails
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Live Journeys</h2>
          <p className="text-muted-foreground">
            Active AI journeys processing data in real-time
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
          <EyeIcon className="h-4 w-4" />
          View Only
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {journeys.map((journey) => (
          <JourneyCard 
            key={journey.id}
            journey={journey} 
            onViewDetails={onViewDetails} 
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyList;
