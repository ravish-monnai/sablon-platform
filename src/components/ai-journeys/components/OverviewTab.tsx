
import React from "react";
import StatsSummary from "./stats/StatsSummary";

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6 pt-4">
      <StatsSummary />
    </div>
  );
};

export default OverviewTab;
