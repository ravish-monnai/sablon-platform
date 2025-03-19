
import React, { useState } from "react";
import JourneyList from "./JourneyList";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./data";

const LiveJourneys = () => {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get only the onboarding fraud detection and bank statement analysis journeys
  const getJourneys = () => {
    // Get global journeys
    const globalJourneys = journeysByMarket['Global'];
    
    // Filter to only include the two specified journeys
    return globalJourneys.filter(journey => 
      journey.id === "onboarding-fraud-detection" || 
      journey.id === "bank-statement-analyzer"
    );
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
        isViewOnly={true}
      />
    );
  }

  // Otherwise show the list of journeys
  return (
    <JourneyList
      journeys={liveJourneys}
      onViewDetails={handleViewDetails}
      showAgentTitle={false} // Pass flag to hide the "Live Agents" title
    />
  );
};

export default LiveJourneys;
