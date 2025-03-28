
import React from "react";
import RiskDashboard from "../risk-analysis/RiskDashboard";
import IdentityVerificationResults from "../investigation/IdentityVerificationResults";
import ReachabilityResults from "../investigation/ReachabilityResults";
import { useInvestigation } from "./InvestigationProvider";

const InvestigationResults: React.FC = () => {
  const { showResults, isAnalyzing, investigationType } = useInvestigation();

  // Sample data for the different investigation types
  const sampleKycData = {
    data: {
      kyc: {
        government: {
          matchFirstName: "PARTIAL_MATCH",
          matchLastName: "MATCH",
          matchDateOfBirth: "MATCH",
          matchId1: "NO_MATCH",
          matchStreetName: "MATCH",
          matchStreetNumber: "MATCH",
          matchCity: "MATCH",
          matchState: "MATCH",
          matchPostalCode: "MATCH",
          matchAddressLine1: "NOT_SUPPORTED",
          matchPhone: "MATCH"
        },
        mobile: {
          matchPhone: "MATCH",
          matchName: "MATCH"
        },
        consumer: {
          matchAddress: "MATCH",
          matchCreditHistory: "PARTIAL_MATCH"
        }
      },
      userInput: {
        firstName: "Michael",
        lastName: "Chen",
        dateOfBirth: "05/18/1990",
        idNumber: "ID9876543210",
        address: "123 Main St, New York, NY 10001",
        phone: "+14155552671"
      }
    }
  };

  const sampleReachabilityData = {
    userInput: {
      phone: "+447700900123",
      email: "user@example.com",
      address: "123 Main Street, London"
    },
    phone: {
      inputAttribute: "Phone number provided",
      alternatePhoneNumber: "+447700900456",
      confidence: "High" as const,
      confidenceScore: 85,
      reachabilityScore: 92,
      name: "John Smith",
      type: "MOBILE",
      active: "YES" as const,
      ported: false,
      phoneTenure: "24+ months",
      currentCarrierCircle: "Vodafone UK - London",
      upiStatus: "Active",
      simType: "POSTPAID" as const
    },
    address: {
      fullAddress: "123 Main Street, Westminster, London, SW1A 1AA",
      addressType: "home",
      reachabilityScore: 78,
      confidence: "Medium" as const,
      parsedAddress: {
        doorNumber: "123",
        streetName: "Main Street",
        city: "London",
        state: "Westminster",
        postalCode: "SW1A 1AA"
      }
    },
    enrichment: {
      alternatePhones: [
        { phone: "+447700900456", identityConfidence: "High" as const, reachabilityScore: 92 },
        { phone: "+447700900789", identityConfidence: "High" as const, reachabilityScore: 85 },
        { phone: "+447700900012", identityConfidence: "Medium" as const, reachabilityScore: 78 },
        { phone: "+447700900345", identityConfidence: "Medium" as const, reachabilityScore: 65 },
        { phone: "+447700900678", identityConfidence: "Low" as const, reachabilityScore: 42 }
      ],
      alternateAddresses: [
        { address: "45 Park Lane, Westminster, London, SW1A 1AA", type: "Residential", confidence: "High" as const },
        { address: "67 Oxford Street, Suite 200, London, W1D 2EQ", type: "Business", confidence: "Medium" as const },
        { address: "789 Kensington High Street, London, W8 5NP", type: "Previous", confidence: "Medium" as const },
        { address: "321 Baker Street, London, NW1 6XE", type: "Relative", confidence: "Low" as const }
      ]
    }
  };

  if (!showResults || isAnalyzing) return null;

  if (investigationType === "risk-analysis") {
    return (
      <RiskDashboard 
        customerData={{
          name: "Ravish Patel",
          email: "ravishp@gmail.com",
          phone: "+919512657393",
          location: "Gujarat, India"
        }}
        riskScore={260}
        riskLevel="MEDIUM RISK"
        recommendation="ADDITIONAL VERIFICATION"
      />
    );
  }

  if (investigationType === "identity-verification") {
    return <IdentityVerificationResults data={sampleKycData.data} />;
  }

  if (investigationType === "reachability") {
    return <ReachabilityResults data={sampleReachabilityData} />;
  }

  return null;
};

export default InvestigationResults;
