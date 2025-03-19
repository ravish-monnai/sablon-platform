
import React, { useState } from "react";
import JourneyList from "./JourneyList";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./data";

const LiveJourneys = () => {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get journeys to display
  const getJourneys = () => {
    // Get global journeys
    const globalJourneys = journeysByMarket['Global'];
    
    // Return all global journeys - both onboarding fraud and bank statement
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
        isViewOnly={true}
      />
    );
  }

  // Otherwise show the list of journeys
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Live Journeys</h1>
        <p className="text-muted-foreground">
          Journeys currently in production with detailed steps and execution history
        </p>
      </div>
      <JourneyList
        journeys={liveJourneys}
        onViewDetails={handleViewDetails}
        showAgentTitle={false} // Don't show the "Live Agents" title
      />
    </div>
  );
};

export default LiveJourneys;
