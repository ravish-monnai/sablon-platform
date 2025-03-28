
import React from "react";
import { 
  UserInputSection, 
  VerificationSummary, 
  SourceIndicators, 
  ResultsDetails 
} from "./identity-verification";

interface MatchResult {
  type: "MATCH" | "PARTIAL_MATCH" | "NO_MATCH" | "NOT_SUPPORTED";
  label: string;
  value?: string;
}

interface SourceData {
  government: Record<string, string>;
  mobile?: Record<string, string>;
  consumer?: Record<string, string>;
}

interface IdentityVerificationResultsProps {
  data: {
    kyc: SourceData;
    userInput?: {
      firstName?: string;
      lastName?: string;
      dateOfBirth?: string;
      idNumber?: string;
      address?: string;
      phone?: string;
    };
  };
}

const IdentityVerificationResults: React.FC<IdentityVerificationResultsProps> = ({ data }) => {
  const { government } = data.kyc;
  const userInput = data.userInput || {};
  
  // Data structure for verification results
  const personalInfo: MatchResult[] = [
    { type: government.matchFirstName as any, label: "First Name", value: userInput.firstName },
    { type: government.matchLastName as any, label: "Last Name", value: userInput.lastName },
    { type: government.matchDateOfBirth as any, label: "Date of Birth", value: userInput.dateOfBirth },
    { type: government.matchId1 as any, label: "ID Document", value: userInput.idNumber },
  ];
  
  const addressInfo: MatchResult[] = [
    { type: government.matchStreetName as any, label: "Street Name" },
    { type: government.matchStreetNumber as any, label: "Street Number" },
    { type: government.matchCity as any, label: "City" },
    { type: government.matchState as any, label: "State" },
    { type: government.matchPostalCode as any, label: "Postal Code" },
    { type: government.matchAddressLine1 as any, label: "Address Line 1", value: userInput.address },
  ];
  
  const contactInfo: MatchResult[] = [
    { type: government.matchPhone as any, label: "Phone", value: userInput.phone },
  ];

  // Calculate match statistics
  const totalChecks = personalInfo.length + addressInfo.length + contactInfo.length;
  const matches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "MATCH").length;
  const partialMatches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "PARTIAL_MATCH").length;
  const noMatches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "NO_MATCH").length;
  const matchPercentage = Math.round((matches / totalChecks) * 100);

  return (
    <div className="space-y-6">
      {/* User Input Section */}
      {Object.keys(userInput).length > 0 && (
        <UserInputSection userInput={userInput} />
      )}

      {/* Verification Summary */}
      <VerificationSummary 
        matchPercentage={matchPercentage}
        matches={matches}
        partialMatches={partialMatches}
        noMatches={noMatches}
      />
      
      {/* Source Indicators */}
      <SourceIndicators />
      
      {/* Details Cards */}
      <ResultsDetails 
        personalInfo={personalInfo}
        addressInfo={addressInfo}
        contactInfo={contactInfo}
      />
    </div>
  );
};

export default IdentityVerificationResults;
