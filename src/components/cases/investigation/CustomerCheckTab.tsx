
import React from "react";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      {/* Description text removed */}
    </div>
  );
};

export default CustomerCheckTab;
