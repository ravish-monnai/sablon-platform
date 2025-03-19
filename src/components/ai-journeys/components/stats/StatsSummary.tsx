
import React from "react";
import StatsCard from "./StatsCard";

const StatsSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatsCard 
        title="Total Statements Analyzed" 
        value={167} 
        subtitle="+28 in the last 24 hours" 
      />
      <StatsCard 
        title="Flagged for Review" 
        value={23} 
        valueClassName="text-amber-500" 
        subtitle="13.7% flag rate" 
      />
      <StatsCard 
        title="Fraud Cases Created" 
        value={8} 
        valueClassName="text-red-500" 
        subtitle="4.8% conversion rate" 
      />
    </div>
  );
};

export default StatsSummary;
