
import React from "react";
import StatsSummary from "./stats/StatsSummary";
import ActivityTimeline from "./timeline/ActivityTimeline";
import FeatureUsage from "./features/FeatureUsage";

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6 pt-4">
      <StatsSummary />
      <ActivityTimeline />
      <FeatureUsage />
    </div>
  );
};

export default OverviewTab;
