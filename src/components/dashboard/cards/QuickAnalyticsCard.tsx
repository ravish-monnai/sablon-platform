
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AgentJourneyList from "./AgentJourneyList";
import { getAgentJourneyData } from "./AgentJourneyData";

interface QuickAnalyticsCardProps {
  className?: string;
}

const QuickAnalyticsCard: React.FC<QuickAnalyticsCardProps> = ({ className }) => {
  const agentsAndJourneys = getAgentJourneyData();

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Live Agents and Journeys</CardTitle>
        <CardDescription>Active AI systems overview</CardDescription>
      </CardHeader>
      <CardContent>
        <AgentJourneyList agentsAndJourneys={agentsAndJourneys} />
      </CardContent>
    </Card>
  );
};

export default QuickAnalyticsCard;
