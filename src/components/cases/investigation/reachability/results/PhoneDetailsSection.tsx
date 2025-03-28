
import React from "react";
import PhoneDetailsCard from "../../reachability/PhoneDetailsCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, User, Clock, Signal, CreditCard, MessageCircle } from "lucide-react";
import { getConfidenceBadge, getScoreColor, getActiveStatusIcon } from "../../reachability/utils/reachabilityHelpers";

interface PhoneDetailsSectionProps {
  phoneData: {
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
}

const PhoneDetailsSection: React.FC<PhoneDetailsSectionProps> = ({ phoneData }) => {
  if (Object.keys(phoneData).length === 0) {
    return null;
  }

  return <PhoneDetailsCard phoneData={phoneData} />;
};

export default PhoneDetailsSection;
