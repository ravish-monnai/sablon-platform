
import React from "react";
import { PhoneCall } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through phone, email, and address validation
        to ensure accurate contact information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestigationCard
          title="Contact Information Validation"
          description="Verify phone numbers, email addresses, and physical addresses for accuracy"
          icon={PhoneCall}
          onStart={() => onStartInvestigation("contact-validation")}
        />
        <InvestigationCard
          title="Address Verification"
          description="Verify customer's residential address through various data sources"
          icon={PhoneCall}
          onStart={() => onStartInvestigation("address-verification")}
        />
      </div>
    </>
  );
};

export default ReachabilityTab;
