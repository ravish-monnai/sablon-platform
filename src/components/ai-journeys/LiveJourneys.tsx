
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, CheckCircle, Clock, PlayCircle, PauseCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Sample data for live journeys
const liveJourneys = [
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
];

const LiveJourneys = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetails = (journeyId: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("tab", "journey-details");
    searchParams.set("journeyId", journeyId);
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Live Journeys</h2>
          <p className="text-muted-foreground">Active AI journeys processing data in real-time</p>
        </div>
        <Button>Create New Journey</Button>
      </div>

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
