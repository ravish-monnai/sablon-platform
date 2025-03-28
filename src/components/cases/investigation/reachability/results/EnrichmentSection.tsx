
import React from "react";
import AlternateContactsSection from "../../reachability/AlternateContactsSection";

interface EnrichmentSectionProps {
  enrichmentData: {
    alternatePhones?: Array<{
      phone: string;
      identityConfidence: "High" | "Medium" | "Low";
      reachabilityScore: number;
      name?: string;
      phoneStatus?: string;
      whatsappStatus?: string;
      upiStatus?: string;
      simType?: string;
      tenure?: string;
    }>;
    alternateAddresses?: Array<{
      address: string;
      type: string;
      confidence: "High" | "Medium" | "Low";
      parsedAddress?: {
        doorNumber?: string;
        streetName?: string;
        city?: string;
        state?: string;
        postalCode?: string;
      };
    }>;
  };
  phoneData: {
    name?: string;
    active?: "YES" | "NO" | "UNKNOWN";
    simType?: "POSTPAID" | "PREPAID";
    phoneTenure?: string;
    upiStatus?: string;
    whatsappStatus?: string;
  };
}

const EnrichmentSection: React.FC<EnrichmentSectionProps> = ({ enrichmentData, phoneData }) => {
  if (!enrichmentData || ((!enrichmentData.alternatePhones || enrichmentData.alternatePhones.length === 0) && 
      (!enrichmentData.alternateAddresses || enrichmentData.alternateAddresses.length === 0))) {
    return null;
  }

  return (
    <AlternateContactsSection
      alternatePhones={enrichmentData.alternatePhones}
      alternateAddresses={enrichmentData.alternateAddresses}
      phoneData={phoneData}
    />
  );
};

export default EnrichmentSection;
