
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, PlayCircle, PauseCircle } from "lucide-react";
import FeatureTag from "@/components/ui/feature-tag";

export interface Journey {
  id: string;
  name: string;
  description: string;
  status: string;
  lastRun: string;
  apiIntegration: string;
  totalAnalyzed: number;
  alerts: number;
  fraudCases: number;
  featureTag?: 'new' | 'beta' | 'updated' | 'ai' | 'premium';
}

interface JourneyCardProps {
  journey: Journey;
  onViewDetails: (journeyId: string) => void;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ journey, onViewDetails }) => {
  return (
    <Card key={journey.id} className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Badge variant={journey.status === "active" ? "default" : "outline"}>
              {journey.status === "active" ? (
                <PlayCircle className="w-3 h-3 mr-1 text-green-500" />
              ) : (
                <PauseCircle className="w-3 h-3 mr-1 text-amber-500" />
              )}
              {journey.status === "active" ? "Active" : "Paused"}
            </Badge>
            {journey.featureTag && (
              <FeatureTag variant={journey.featureTag} />
            )}
          </div>
          <Badge variant="outline" className="ml-2">
            {journey.apiIntegration}
          </Badge>
        </div>
        <CardTitle>{journey.name}</CardTitle>
        <CardDescription>{journey.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Analyzed</span>
            <span className="text-xl font-semibold">{journey.totalAnalyzed}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Alerts</span>
            <span className="text-xl font-semibold text-amber-500">{journey.alerts}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Fraud Cases</span>
            <span className="text-xl font-semibold text-red-500">{journey.fraudCases}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <span className="text-xs text-muted-foreground flex items-center">
          <Clock className="w-3 h-3 mr-1" /> Last run: {journey.lastRun}
        </span>
        <div className="space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails(journey.id)}
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JourneyCard;
