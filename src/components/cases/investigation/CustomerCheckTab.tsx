
import React from "react";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = () => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Check customer details by inputting various identifiers such as phone number,
        email, IP address, or device ID to assess risk levels and detect potential fraud.
      </p>
    </>
  );
};

export default CustomerCheckTab;
