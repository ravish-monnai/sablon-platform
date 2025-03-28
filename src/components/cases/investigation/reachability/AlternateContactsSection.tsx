
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";
import { getConfidenceBadge, getScoreColor } from "./utils/reachabilityHelpers";

interface AlternateContactsSectionProps {
  alternatePhones?: Array<{
    phone: string;
    identityConfidence: "High" | "Medium" | "Low";
    reachabilityScore: number;
  }>;
  alternateAddresses?: Array<{
    address: string;
    type: string;
    confidence: "High" | "Medium" | "Low";
  }>;
}

const AlternateContactsSection: React.FC<AlternateContactsSectionProps> = ({
  alternatePhones = [],
  alternateAddresses = []
}) => {
  if (alternatePhones.length === 0 && alternateAddresses.length === 0) {
    return null;
  }

  // Helper function for reachability score badge
  const getReachabilityScoreBadge = (score: number) => {
    if (score >= 80) {
      return <Badge className="bg-green-100 text-green-800">{score}%</Badge>;
    } else if (score >= 50) {
      return <Badge className="bg-amber-100 text-amber-800">{score}%</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-800">{score}%</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Enriched Contact Points</h3>
      
      {alternatePhones.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-md flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              Alternate Phone Numbers
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
                {alternatePhones.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.phone}</TableCell>
                    <TableCell>{getConfidenceBadge(item.identityConfidence)}</TableCell>
                    <TableCell>{getReachabilityScoreBadge(item.reachabilityScore)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              Phone numbers are sorted by reachability score from highest to lowest
            </p>
          </CardContent>
        </Card>
      )}

      {alternateAddresses.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-md flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-600" />
              Alternate Addresses
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
                {alternateAddresses.map((item, index) => (
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
      )}
    </div>
  );
};

export default AlternateContactsSection;
