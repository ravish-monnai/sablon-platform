
import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useMarket } from "@/contexts/MarketContext";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import JourneyCard, { Journey } from "./JourneyCard";
import JourneyDetail from "./JourneyDetail";
import { journeysByMarket } from "./data/journeys";
import JourneyTemplateChat from "./JourneyTemplateChat";
import { useNavigate } from "react-router-dom";

const LiveJourneys = () => {
  const [activeJourney, setActiveJourney] = useState<Journey | null>(null);
  const { selectedMarket } = useMarket();
  const navigate = useNavigate();
  
  const journeys = useMemo(() => {
    // If global is selected, show all global journeys
    if (selectedMarket === 'Global') {
      return journeysByMarket['Global'] || [];
    }
    
    // For specific markets, show both market-specific journeys and global journeys
    return [
      ...(journeysByMarket[selectedMarket] || []),
      ...(journeysByMarket['Global'] || [])
    ];
  }, [selectedMarket]);
  
  const handleJourneyClick = (journey: Journey) => {
    setActiveJourney(journey);
  };
  
  const handleBack = () => {
    setActiveJourney(null);
  };
  
  const handleCreateTemplate = (templateType: string, description: string) => {
    console.log(`Creating template: ${templateType} - ${description}`);
    // Navigate to workflow builder
    navigate('/ai-journeys?tab=workflow');
  };
  
  if (activeJourney) {
    return <JourneyDetail journey={activeJourney} onBack={handleBack} />;
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Live Journeys</h2>
          <p className="text-muted-foreground mt-1">
            {selectedMarket === 'Global' 
              ? 'Actively running AI journey workflows in production' 
              : `AI journey workflows for ${selectedMarket} market`}
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
      
      {/* Add the Journey Template Chat component */}
      <JourneyTemplateChat onCreateTemplate={handleCreateTemplate} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {journeys.map((journey) => (
          <JourneyCard 
            key={journey.id} 
            journey={journey} 
            onClick={() => handleJourneyClick(journey)} 
          />
        ))}
        
        {journeys.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No active journeys found for this market.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveJourneys;
