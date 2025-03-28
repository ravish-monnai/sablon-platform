
import React from "react";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Risk analysis for detecting potential fraud signals.
      </p>
    </div>
  );
};

export default CustomerCheckTab;
