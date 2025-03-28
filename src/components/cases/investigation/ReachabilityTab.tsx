
import React from "react";
import QueryHistoryPanel from "../manual-investigation/QueryHistoryPanel";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  // Sample data for alternate phone numbers
  const phoneData = [
    { phone: "+1 (555) 123-4567", identityConfidence: "High", reachabilityScore: 92 },
    { phone: "+1 (555) 987-6543", identityConfidence: "High", reachabilityScore: 85 },
    { phone: "+1 (555) 456-7890", identityConfidence: "Medium", reachabilityScore: 78 },
    { phone: "+1 (555) 234-5678", identityConfidence: "Medium", reachabilityScore: 65 },
    { phone: "+1 (555) 876-5432", identityConfidence: "Low", reachabilityScore: 42 },
  ];

  // Sample data for addresses
  const addressData = [
    { address: "123 Main St, Apt 4B, New York, NY 10001", type: "Residential", confidence: "High" },
    { address: "456 Oak Ave, Suite 200, New York, NY 10002", type: "Business", confidence: "Medium" },
    { address: "789 Pine Blvd, New York, NY 10003", type: "Previous", confidence: "Medium" },
    { address: "321 Elm St, Brooklyn, NY 11201", type: "Relative", confidence: "Low" },
  ];

  // Helper function for confidence badges
  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case "High":
        return <Badge className="bg-green-100 text-green-800">High</Badge>;
      case "Medium":
        return <Badge className="bg-amber-100 text-amber-800">Medium</Badge>;
      case "Low":
        return <Badge className="bg-red-100 text-red-800">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Helper function for reachability score
  const getReachabilityScore = (score: number) => {
    if (score >= 80) {
      return <Badge className="bg-green-100 text-green-800">{score}%</Badge>;
    } else if (score >= 60) {
      return <Badge className="bg-amber-100 text-amber-800">{score}%</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-800">{score}%</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through contact validation and address verification,
        and enrich with alternative contact methods to ensure communication channels.
      </p>
      
      <div className="grid gap-6">
        {/* Phone Enrichment Table */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-md flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              Alternate Phone Numbers Enrichment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Identity Confidence</TableHead>
                  <TableHead>Reachability Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phoneData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.phone}</TableCell>
                    <TableCell>{getConfidenceBadge(item.identityConfidence)}</TableCell>
                    <TableCell>{getReachabilityScore(item.reachabilityScore)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              Phone numbers are sorted by reachability score from highest to lowest
            </p>
          </CardContent>
        </Card>

        {/* Address Enrichment Table */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-md flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-600" />
              Alternate Addresses Enrichment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-3/5">Address</TableHead>
                  <TableHead className="w-1/5">Type</TableHead>
                  <TableHead className="w-1/5">Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {addressData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium break-words">{item.address}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{getConfidenceBadge(item.confidence)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              Addresses are sorted by confidence level from highest to lowest for skip tracing
            </p>
          </CardContent>
        </Card>
      </div>
      
      <QueryHistoryPanel type="reachability" />
    </div>
  );
};

export default ReachabilityTab;
