
import React from "react";
import UserInputSection from "./reachability/UserInputSection";
import ReachabilitySummary from "./reachability/ReachabilitySummary";
import SourceIndicators from "./reachability/SourceIndicators";
import AlternateContactsSection from "./reachability/AlternateContactsSection";

interface ReachabilityResultsProps {
  data: {
    userInput?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    phone?: {
      inputAttribute?: string;
      alternatePhoneNumber?: string;
      confidence?: "High" | "Medium" | "Low";
      confidenceScore?: number;
      reachabilityScore?: number;
      name?: string;
      type?: string;
      active?: "YES" | "NO" | "UNKNOWN";
      ported?: boolean;
      phoneTenure?: string;
      currentCarrierCircle?: string;
      upiStatus?: string;
      simType?: "POSTPAID" | "PREPAID";
      whatsappStatus?: string;
    };
    address?: {
      fullAddress?: string;
      addressType?: string;
      reachabilityScore?: number;
      confidence?: string;
      parsedAddress?: {
        doorNumber?: string;
        addressLine?: string;
        streetName?: string;
        landmark?: string;
        city?: string;
        state?: string;
        postalCode?: string;
      };
    };
    enrichment?: {
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
  };
}

const ReachabilityResults: React.FC<ReachabilityResultsProps> = ({ data }) => {
  // Extract data for ease of use
  const userInput = data.userInput || {};
  const phoneData = data.phone || {};
  const addressData = data.address || {};
  const enrichmentData = data.enrichment || {};

  return (
    <div className="space-y-6">
      {/* User Input Section */}
      {Object.keys(userInput).length > 0 && (
        <UserInputSection userInput={userInput} />
      )}

      {/* Reachability Summary */}
      <ReachabilitySummary phoneData={phoneData} addressData={addressData} />
      
      {/* Source Indicators */}
      <SourceIndicators />
      
      {/* Alternate Contacts Section */}
      <AlternateContactsSection
        alternatePhones={enrichmentData.alternatePhones}
        alternateAddresses={enrichmentData.alternateAddresses}
        phoneData={phoneData}
      />
    </div>
  );
};

export default ReachabilityResults;
