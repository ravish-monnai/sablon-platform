import React, { useState } from "react";
import JourneyList from "./JourneyList";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./journeyData";

const LiveJourneys = () => {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get all journeys - only onboarding fraud detection and bank statement analysis
  const getJourneys = () => {
    // Get global journeys
    const globalJourneys = journeysByMarket['Global'];
    
    return globalJourneys;
  };

  const liveJourneys = getJourneys();

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
      onViewDetails={handleViewDetails}
    />
  );
};

export default LiveJourneys;
