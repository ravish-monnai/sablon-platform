import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart2, UserCheck, Phone } from "lucide-react";
import RiskDashboard from "./risk-analysis/RiskDashboard";
import CustomerCheckTab from "./investigation/CustomerCheckTab";
import IdentityVerificationTab from "./investigation/IdentityVerificationTab";
import ReachabilityTab from "./investigation/ReachabilityTab";
import SearchForm from "./investigation/SearchForm";
import AnalysisAnimation from "./investigation/AnalysisAnimation";
import IdentityVerificationResults from "./investigation/IdentityVerificationResults";
import ReachabilityResults from "./investigation/ReachabilityResults";
import { runAnalysisAnimation } from "./investigation/utils/analysisSteps";

const ManualInvestigationView = () => {
  const [query, setQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState<string>("");
  const [investigationType, setInvestigationType] = useState<string>("risk-analysis");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    runAnalysisAnimation(setCurrentAnalysisStep).then(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    });
  };

  const handleStartInvestigation = (type: string) => {
    switch (type) {
      case "basic-customer-check":
        setQuery("Check risk score of phone number +919512657393 and email ravishp@gmail.com");
        break;
      case "advanced-customer-check":
        setQuery("Assess risk level of customer John Smith with phone +14155552671 and email johnsmith@example.com");
        break;
      case "document-verification":
        setQuery("Verify identity of Sarah Johnson with National ID 876543210 and DOB 04/15/1985");
        break;
      case "identity-cross-check":
        setQuery("Cross-check identity information for Michael Chen with government, telecom, and credit bureau sources");
        break;
      case "contact-validation":
        setQuery("Verify reachability of user with phone +447700900123 and email user@example.com");
        break;
      case "address-verification":
        setQuery("Verify address at 123 Main Street, London and find alternative contact methods");
        break;
      default:
        setQuery("");
    }
  };

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
      confidence: "High",
      confidenceScore: 85,
      reachabilityScore: 92,
      name: "John Smith",
      type: "MOBILE",
      active: "YES",
      ported: false,
      phoneTenure: "24+ months",
      currentCarrierCircle: "Vodafone UK - London",
      upiStatus: "Active",
      simType: "POSTPAID"
    },
    address: {
      fullAddress: "123 Main Street, Westminster, London, SW1A 1AA",
      addressType: "home",
      reachabilityScore: 78,
      confidence: "Medium",
      parsedAddress: {
        doorNumber: "123",
        streetName: "Main Street",
        city: "London",
        state: "Westminster",
        postalCode: "SW1A 1AA"
      }
    }
  };

  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="risk-analysis" onValueChange={setInvestigationType}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="risk-analysis" className="flex items-center gap-1">
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Risk Analysis</span>
              <span className="sm:hidden">Risk</span>
            </TabsTrigger>
            <TabsTrigger value="identity-verification" className="flex items-center gap-1">
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Identity Verification</span>
              <span className="sm:hidden">Identity</span>
            </TabsTrigger>
            <TabsTrigger value="reachability" className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Reachability Check</span>
              <span className="sm:hidden">Reachability</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="risk-analysis">
            <CustomerCheckTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="identity-verification">
            <IdentityVerificationTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="reachability">
            <ReachabilityTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
        </Tabs>

        <SearchForm 
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          isAnalyzing={isAnalyzing}
          investigationType={investigationType}
        />
        
        <AnalysisAnimation 
          isAnalyzing={isAnalyzing} 
          currentAnalysisStep={currentAnalysisStep} 
        />
        
        {showResults && !isAnalyzing && investigationType === "risk-analysis" && (
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
        )}

        {showResults && !isAnalyzing && investigationType === "identity-verification" && (
          <IdentityVerificationResults data={sampleKycData.data} />
        )}

        {showResults && !isAnalyzing && investigationType === "reachability" && (
          <ReachabilityResults data={sampleReachabilityData} />
        )}
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
