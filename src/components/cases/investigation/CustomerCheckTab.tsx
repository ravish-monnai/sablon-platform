
import React from "react";
import { Search } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface CustomerCheckTabProps {
  onStartInvestigation: (type: string) => void;
}

const CustomerCheckTab: React.FC<CustomerCheckTabProps> = ({ onStartInvestigation }) => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Check customer details by inputting various identifiers such as phone number,
        email, IP address, or device ID.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestigationCard
          title="Basic Customer Check"
          description="Verify customer identity and gather basic customer information"
          icon={Search}
          onStart={() => onStartInvestigation("basic-customer-check")}
        />
        <InvestigationCard
          title="Advanced Customer Check"
          description="Perform a comprehensive check with deeper analysis of customer data"
          icon={Search}
          onStart={() => onStartInvestigation("advanced-customer-check")}
        />
      </div>
    </>
  );
};

export default CustomerCheckTab;
