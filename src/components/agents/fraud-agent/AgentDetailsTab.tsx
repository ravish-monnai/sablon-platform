
import React from "react";
import AgentDetailsCard from "./AgentDetailsCard";
import FraudReviewProcess from "./FraudReviewProcess";

const AgentDetailsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <AgentDetailsCard />
      <FraudReviewProcess />
    </div>
  );
};

export default AgentDetailsTab;
