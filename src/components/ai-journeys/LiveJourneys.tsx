import React, { useState } from "react";
import { useMarket } from "@/contexts/MarketContext";
import JourneyList from "./JourneyList";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./journeyData";

const LiveJourneys = () => {
  const { selectedMarket } = useMarket();
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get journeys for the selected market
  const getJourneysForMarket = () => {
    // If Global is selected, show all journeys from Global
    if (selectedMarket === 'Global') {
      return journeysByMarket['Global'];
    }
    
    // If selected market has journeys, return them
    if (journeysByMarket[selectedMarket]?.length > 0) {
      return journeysByMarket[selectedMarket];
    }
    
    // Fallback to Global journeys if market has no specific journeys
    return journeysByMarket['Global'];
  };

  const liveJourneys = getJourneysForMarket();

  const handleViewDetails = (journeyId: string) => {
    setSelectedJourney(journeyId);
  };

  const handleBackToList = () => {
    setSelectedJourney(null);
  };

  // If a journey is selected, show its details
  if (selectedJourney) {
    return (
      <JourneyDetail 
        selectedJourney={selectedJourney} 
        onBackToList={handleBackToList} 
      />
    );
  }

  // Otherwise show the list of journeys
  return (
    <JourneyList
      journeys={liveJourneys}
      selectedMarket={selectedMarket}
      onViewDetails={handleViewDetails}
    />
  );
};

export default LiveJourneys;
