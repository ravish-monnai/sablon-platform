
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMarket } from '@/contexts/MarketContext';

interface JourneyConfig {
  id: string;
  name: string;
  description: string;
  status: string;
  nodeCount: number;
  edgeCount: number;
  lastModified: string;
}

interface JourneyListProps {
  journeys: JourneyConfig[];
  onCreateNewJourney: () => void;
  onEditJourney: (journeyId: string) => void;
}

const JourneyList: React.FC<JourneyListProps> = ({ 
  journeys, 
  onCreateNewJourney, 
  onEditJourney 
}) => {
  const { selectedMarket } = useMarket();
  
  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Journey Builder</h2>
          <p className="text-muted-foreground">
            {selectedMarket === 'Global' 
              ? 'View and manage AI journey configurations'
              : `View and manage AI journey configurations for ${selectedMarket}`}
          </p>
        </div>
        <Button onClick={onCreateNewJourney}>
          <Plus className="mr-2 h-4 w-4" /> Create New Journey
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {journeys.map((journey) => (
          <Card key={journey.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <Badge variant={journey.status === "active" ? "default" : "outline"}>
                  {journey.status === "active" ? "Active" : "Draft"}
                </Badge>
              </div>
              <CardTitle>{journey.name}</CardTitle>
              <CardDescription>{journey.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Nodes</span>
                  <span className="text-xl font-semibold">{journey.nodeCount}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Connections</span>
                  <span className="text-xl font-semibold">{journey.edgeCount}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <span className="text-xs text-muted-foreground">
                Last modified: {journey.lastModified}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onEditJourney(journey.id)}
              >
                View Journey
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JourneyList;
