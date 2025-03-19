
import React from "react";
import { Button } from "@/components/ui/button";
import JourneyCard from "./JourneyCard";
import { Journey } from "./JourneyCard";
import { Market } from "@/contexts/MarketContext";

interface JourneyListProps {
  journeys: Journey[];
  selectedMarket: Market;
  onViewDetails: (journeyId: string) => void;
}

const JourneyList: React.FC<JourneyListProps> = ({ 
  journeys,
  selectedMarket,
  onViewDetails
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Live Journeys</h2>
          <p className="text-muted-foreground">
            {selectedMarket === 'Global' 
              ? 'Active AI journeys processing data in real-time'
              : `Active AI journeys for ${selectedMarket} market`}
          </p>
        </div>
        <Button>Create New Journey</Button>
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
