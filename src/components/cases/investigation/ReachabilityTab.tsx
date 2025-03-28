
import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <>
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through phone, email, and address validation,
        and enrich with alternative contact methods to ensure communication channels.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestigationCard
          title="Contact Information Validation"
          description="Verify phone numbers, email addresses, and find alternative contact methods"
          icon={PhoneCall}
          onStart={() => onStartInvestigation("contact-validation")}
        />
        <InvestigationCard
          title="Address Verification"
          description="Verify customer's residential address and enrich with additional contact information"
          icon={Mail}
          onStart={() => onStartInvestigation("address-verification")}
        />
      </div>
    </>
  );
};

export default ReachabilityTab;
