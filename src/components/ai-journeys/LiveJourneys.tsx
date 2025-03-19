
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, CheckCircle, Clock, PlayCircle, PauseCircle, ChevronLeft } from "lucide-react";
import BankStatementJourney from "./BankStatementJourney";
import { useMarket } from "@/contexts/MarketContext";
import MarketSpecificBanks from "./MarketSpecificBanks";

// Sample data for live journeys by market
const journeysByMarket = {
  'Global': [
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analyzer",
      description: "Analyzes bank statements for fraud risk and creates cases for high-risk transactions.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 58,
      alerts: 12,
      fraudCases: 5,
    },
    {
      id: "transaction-monitoring",
      name: "Transaction Monitoring",
      description: "Monitors transactions in real-time for suspicious patterns.",
      status: "active",
      lastRun: "5 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 432,
      alerts: 18,
      fraudCases: 3,
    },
    {
      id: "kyc-verification",
      name: "KYC Verification",
      description: "Automates KYC verification processes.",
      status: "paused",
      lastRun: "2 hours ago",
      apiIntegration: "GraphQL API",
      totalAnalyzed: 126,
      alerts: 8,
      fraudCases: 2,
    }
  ],
  'US': [
    {
      id: "us-fraud-detection",
      name: "US Fraud Detection",
      description: "Analyzes transactions in the US market for fraud patterns.",
      status: "active",
      lastRun: "30 seconds ago",
      apiIntegration: "REST API",
      totalAnalyzed: 284,
      alerts: 7,
      fraudCases: 2,
    },
    {
      id: "us-transaction-monitoring",
      name: "US Transaction Monitoring",
      description: "Real-time monitoring of US transactions.",
      status: "active",
      lastRun: "2 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 856,
      alerts: 14,
      fraudCases: 3,
    }
  ],
  'India': [
    {
      id: "india-kyc",
      name: "India KYC Verification",
      description: "KYC verification using Aadhaar for Indian customers.",
      status: "active",
      lastRun: "1 minute ago",
      apiIntegration: "REST API",
      totalAnalyzed: 203,
      alerts: 9,
      fraudCases: 2,
    },
    {
      id: "bank-statement-analyzer",
      name: "Bank Statement Analyzer",
      description: "Analyzes Indian bank statements for fraud detection.",
      status: "active",
      lastRun: "5 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 42,
      alerts: 8,
      fraudCases: 3,
    }
  ],
  'Indonesia': [
    {
      id: "indonesia-loan-assessment",
      name: "Indonesia Loan Assessment",
      description: "Analyzes loan applications for Indonesian market.",
      status: "active",
      lastRun: "10 minutes ago",
      apiIntegration: "GraphQL API",
      totalAnalyzed: 68,
      alerts: 12,
      fraudCases: 4,
    }
  ],
  'Philippines': [
    {
      id: "philippines-remittance",
      name: "Philippines Remittance Verification",
      description: "Verifies remittance transactions in Philippines.",
      status: "active",
      lastRun: "15 minutes ago",
      apiIntegration: "REST API",
      totalAnalyzed: 134,
      alerts: 5,
      fraudCases: 1,
    }
  ],
  'Mexico': [
    {
      id: "mexico-transaction-monitoring",
      name: "Mexico Transaction Monitoring",
      description: "Monitors Mexican payment transactions for fraud.",
      status: "paused",
      lastRun: "1 hour ago",
      apiIntegration: "REST API",
      totalAnalyzed: 89,
      alerts: 7,
      fraudCases: 2,
    }
  ],
  'Brazil': [
    {
      id: "brazil-pix-monitoring",
      name: "Brazil PIX Monitoring",
      description: "Real-time monitoring of PIX transactions in Brazil.",
      status: "active",
      lastRun: "3 minutes ago",
      apiIntegration: "Webhook",
      totalAnalyzed: 156,
      alerts: 3,
      fraudCases: 0,
    }
  ]
};

const LiveJourneys = () => {
  const { selectedMarket } = useMarket();
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Get journeys for the selected market
  const getJourneysForMarket = () => {
    // If Global is selected, show all journeys from Global
    if (selectedMarket === 'Global') {
      return journeysByMarket['Global'];
    }
    
    // If selected market has journeys, return them
    if (journeysByMarket[selectedMarket]?.length > 0) {
      return journeysByMarket[selectedMarket];
    }
    
    // Fallback to Global journeys if market has no specific journeys
    return journeysByMarket['Global'];
  };

  const liveJourneys = getJourneysForMarket();

  const handleViewDetails = (journeyId: string) => {
    setSelectedJourney(journeyId);
  };

  const handleBackToList = () => {
    setSelectedJourney(null);
  };

  // If a journey is selected, show its details
  if (selectedJourney) {
    return (
      <div>
        <Button 
          variant="ghost" 
          className="mb-4 pl-0" 
          onClick={handleBackToList}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Journeys
        </Button>
        
        {selectedJourney === "bank-statement-analyzer" && <BankStatementJourney />}
        {selectedJourney !== "bank-statement-analyzer" && (
          <div className="text-center p-6">
            <p>Journey details for {selectedJourney} are not available yet</p>
          </div>
        )}
      </div>
    );
  }

  // Otherwise show the list of journeys
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Live Journeys</h2>
          <p className="text-muted-foreground">
            {selectedMarket === 'Global' 
              ? 'Active AI journeys processing data in real-time'
              : `Active AI journeys for ${selectedMarket} market`}
          </p>
        </div>
        <Button>Create New Journey</Button>
      </div>
      
      {/* Add the market-specific banks section */}
      <MarketSpecificBanks market={selectedMarket} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {liveJourneys.map((journey) => (
          <Card key={journey.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <Badge variant={journey.status === "active" ? "default" : "outline"}>
                  {journey.status === "active" ? (
                    <PlayCircle className="w-3 h-3 mr-1 text-green-500" />
                  ) : (
                    <PauseCircle className="w-3 h-3 mr-1 text-amber-500" />
                  )}
                  {journey.status === "active" ? "Active" : "Paused"}
                </Badge>
                <Badge variant="outline" className="ml-2">
                  {journey.apiIntegration}
                </Badge>
              </div>
              <CardTitle>{journey.name}</CardTitle>
              <CardDescription>{journey.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 py-2">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Analyzed</span>
                  <span className="text-xl font-semibold">{journey.totalAnalyzed}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Alerts</span>
                  <span className="text-xl font-semibold text-amber-500">{journey.alerts}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Fraud Cases</span>
                  <span className="text-xl font-semibold text-red-500">{journey.fraudCases}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock className="w-3 h-3 mr-1" /> Last run: {journey.lastRun}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleViewDetails(journey.id)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LiveJourneys;
