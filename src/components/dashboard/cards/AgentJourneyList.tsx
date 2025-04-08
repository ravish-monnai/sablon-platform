
import React from "react";
import AgentJourneyCard, { AgentJourneyMetrics } from "./AgentJourneyCard";

interface AgentJourneyListProps {
  agentsAndJourneys: AgentJourneyMetrics[];
}

const AgentJourneyList: React.FC<AgentJourneyListProps> = ({ agentsAndJourneys }) => {
  return (
    <div className="space-y-4">
      {agentsAndJourneys.map((item, index) => (
        <AgentJourneyCard
          key={index}
          item={item}
          index={index}
          totalItems={agentsAndJourneys.length}
        />
      ))}
    </div>
  );
};

export default AgentJourneyList;
