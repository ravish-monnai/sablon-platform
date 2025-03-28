
import React from "react";
import AddressDetailsCard from "../../reachability/AddressDetailsCard";

interface AddressDetailsSectionProps {
  addressData: {
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
}

const AddressDetailsSection: React.FC<AddressDetailsSectionProps> = ({ addressData }) => {
  if (Object.keys(addressData).length === 0) {
    return null;
  }

  return <AddressDetailsCard addressData={addressData} />;
};

export default AddressDetailsSection;
