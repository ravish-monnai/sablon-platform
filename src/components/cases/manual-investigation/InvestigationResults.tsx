
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
      confidence: "High" as "High" | "Medium" | "Low",
      confidenceScore: 85,
      reachabilityScore: 92,
      name: "John Smith",
      type: "MOBILE",
      active: "YES" as "YES" | "NO" | "UNKNOWN",
      ported: false,
      phoneTenure: "24+ months",
      currentCarrierCircle: "Vodafone UK - London",
      upiStatus: "Active",
      simType: "POSTPAID" as "POSTPAID" | "PREPAID"
    },
    address: {
      fullAddress: "123 Main Street, Westminster, London, SW1A 1AA",
      addressType: "home",
      reachabilityScore: 78,
      confidence: "Medium" as "High" | "Medium" | "Low",
      parsedAddress: {
        doorNumber: "123",
        streetName: "Main Street",
        city: "London",
        state: "Westminster",
        postalCode: "SW1A 1AA"
      }
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
