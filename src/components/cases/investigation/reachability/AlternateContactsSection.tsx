
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, User, MessageCircle, CreditCard, Smartphone, Clock } from "lucide-react";
import { getConfidenceBadge, getScoreColor, getActiveStatusIcon } from "./utils/reachabilityHelpers";

interface AlternateContactsSectionProps {
  alternatePhones?: Array<{
    phone: string;
    identityConfidence: "High" | "Medium" | "Low";
    reachabilityScore: number;
    name?: string;
    phoneStatus?: string;
    whatsappStatus?: string;
    upiStatus?: string;
    simType?: string;
    tenure?: string;
  }>;
  alternateAddresses?: Array<{
    address: string;
    type: string;
    confidence: "High" | "Medium" | "Low";
    parsedAddress?: {
      doorNumber?: string;
      streetName?: string;
      city?: string;
      state?: string;
      postalCode?: string;
    };
  }>;
  phoneData?: {
    name?: string;
    active?: "YES" | "NO" | "UNKNOWN";
    simType?: "POSTPAID" | "PREPAID";
    phoneTenure?: string;
    upiStatus?: string;
    whatsappStatus?: string;
  };
}

const AlternateContactsSection: React.FC<AlternateContactsSectionProps> = ({
  alternatePhones = [],
  alternateAddresses = [],
  phoneData = {}
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

  // Helper for status badges
  const getStatusBadge = (status?: string) => {
    if (!status) return <Badge variant="outline">Unknown</Badge>;
    
    if (status.toLowerCase() === 'active' || status.toLowerCase() === 'yes') {
      return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
    } else if (status.toLowerCase() === 'inactive' || status.toLowerCase() === 'no') {
      return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
    } else {
      return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Format parsed address components for display
  const formatParsedAddress = (parsedAddress?: Record<string, string | undefined>) => {
    if (!parsedAddress) return "-";
    
    return Object.entries(parsedAddress)
      .filter(([_, value]) => value)
      .map(([key, value]) => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return `${formattedKey}: ${value}`;
      })
      .join(", ");
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
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Identity Confidence</TableHead>
                    <TableHead>Reachability Score</TableHead>
                    <TableHead>Phone Status</TableHead>
                    <TableHead>WhatsApp Status</TableHead>
                    <TableHead>UPI Status</TableHead>
                    <TableHead>SIM Type</TableHead>
                    <TableHead>Tenure</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alternatePhones.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.phone}</TableCell>
                      <TableCell>{item.name || "-"}</TableCell>
                      <TableCell>{getConfidenceBadge(item.identityConfidence)}</TableCell>
                      <TableCell>{getReachabilityScoreBadge(item.reachabilityScore)}</TableCell>
                      <TableCell>{getStatusBadge(item.phoneStatus)}</TableCell>
                      <TableCell>{getStatusBadge(item.whatsappStatus)}</TableCell>
                      <TableCell>{getStatusBadge(item.upiStatus)}</TableCell>
                      <TableCell>{item.simType || "-"}</TableCell>
                      <TableCell>{item.tenure || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-2/5">Address</TableHead>
                    <TableHead className="w-1/5">Type</TableHead>
                    <TableHead className="w-1/5">Confidence</TableHead>
                    <TableHead className="w-1/5">Parsed Address Components</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alternateAddresses.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium break-words">{item.address}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{getConfidenceBadge(item.confidence)}</TableCell>
                      <TableCell className="text-xs">
                        {formatParsedAddress(item.parsedAddress)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
