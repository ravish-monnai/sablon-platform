import React, { useState } from "react";
import { useMarket } from "@/contexts/MarketContext";
import JourneyList from "./JourneyList";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./journeyData";

const LiveJourneys = () => {
  const { selectedMarket } = useMarket();
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get all journeys - now includes Indian Bank Statement Analyzer by default
  const getJourneys = () => {
    // Get the global journeys
    const globalJourneys = journeysByMarket['Global'];
    
    // Get the Indian Bank Statement Analyzer journey
    const indianBankStatementJourney = journeysByMarket['India'].find(
      journey => journey.id === 'india-bank-statement-analyzer'
    );
    
    // Combine global journeys with the Indian Bank Statement Analyzer journey
    const combinedJourneys = indianBankStatementJourney 
      ? [...globalJourneys, indianBankStatementJourney] 
      : globalJourneys;
    
    return combinedJourneys;
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
