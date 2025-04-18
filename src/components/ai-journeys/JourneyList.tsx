
import React from "react";
import JourneyCard from "./JourneyCard";
import { Journey } from "./JourneyCard";

interface JourneyListProps {
  journeys: Journey[];
  onViewDetails: (journeyId: string) => void;
  showAgentTitle?: boolean;
}

const JourneyList: React.FC<JourneyListProps> = ({ 
  journeys,
  onViewDetails,
  showAgentTitle = true
}) => {
  return (
    <div className="space-y-6">
      {showAgentTitle && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Live Journeys</h2>
            <p className="text-muted-foreground">
              Active AI journey workflows in production
            </p>
          </div>
        </div>
      )}

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
